/**
 * Build script that generates React components from SVG files
 * Outputs to packages/pixel-icon-library-react/src/icons/
 */

const fs = require('fs');
const path = require('path');

// Get all SVG files from the icons/SVG directory
const svgDir = path.join(__dirname, '../icons/SVG');
const outputDir = path.join(__dirname, '../packages/pixel-icon-library-react/src/icons');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const variants = ['regular', 'solid', 'brands', 'purcats'];
const generatedIcons = {};

/**
 * Parse SVG content and extract path/element data
 */
function parseSVGContent(svgContent) {
  // Extract all child elements (paths, circles, rects, etc.) from the SVG
  const elementRegex = /<(path|circle|rect|line|polyline|polygon|g|use)([^>]*)>/g;
  const elements = [];
  let match;

  while ((match = elementRegex.exec(svgContent)) !== null) {
    const [fullMatch, tagName, attrs] = match;
    // Clean up attributes
    const attrObj = {};
    const attrRegex = /(\w+)="([^"]*)"/g;
    let attrMatch;

    while ((attrMatch = attrRegex.exec(attrs)) !== null) {
      attrObj[attrMatch[1]] = attrMatch[2];
    }

    elements.push([tagName, attrObj]);
  }

  return elements;
}

/**
 * Convert kebab-case to PascalCase
 */
function toPascalCase(str) {
  return str
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Generate TypeScript component file
 */
function generateComponentFile(iconName, variant, iconNode) {
  const variantSuffix = variant !== 'regular' ? toPascalCase(variant) : '';
  const componentName = `${toPascalCase(iconName)}${variantSuffix}`;

  const iconNodeStr = JSON.stringify(iconNode);

  return `import { createPixelIcon } from '../createIcon';
import { PixelIcon } from '../types';

const iconNode = ${iconNodeStr} as any[][];

const ${componentName}: PixelIcon = createPixelIcon('${iconName}', iconNode${variant !== 'regular' ? `, '${variant}'` : ''});

export default ${componentName};
`;
}

/**
 * Process all SVG files and generate React components
 */
function buildIcons() {
  console.log('🎨 Building Pixel Icon Library React components...\n');

  let totalIcons = 0;
  const iconsByVariant = {};

  for (const variant of variants) {
    const variantDir = path.join(svgDir, variant);

    if (!fs.existsSync(variantDir)) {
      console.log(`⚠️  Variant directory not found: ${variantDir}`);
      continue;
    }

    const files = fs.readdirSync(variantDir).filter((f) => f.endsWith('.svg'));
    iconsByVariant[variant] = [];

    console.log(`📦 Processing ${variant} icons (${files.length} icons)...`);

    for (const file of files) {
      const iconName = path.basename(file, '.svg');
      
      // Remove variant suffix from icon name (e.g., "ad-solid" -> "ad")
      let cleanIconName = iconName;
      for (const variant of variants) {
        const suffixRegex = new RegExp(`-${variant}$`);
        if (suffixRegex.test(cleanIconName)) {
          cleanIconName = cleanIconName.replace(suffixRegex, '');
          break;
        }
      }
      
      const svgPath = path.join(variantDir, file);
      const svgContent = fs.readFileSync(svgPath, 'utf8');

      // Parse SVG to extract icon node data
      const iconNode = parseSVGContent(svgContent);

      if (iconNode.length === 0) {
        console.log(`  ⚠️  No drawable elements found in ${file}`);
        continue;
      }

      // Generate component file
      const componentCode = generateComponentFile(cleanIconName, variant, iconNode);
      const variantSuffix = variant !== 'regular' ? toPascalCase(variant) : '';
      const componentFileName = `${toPascalCase(cleanIconName)}${variantSuffix}.tsx`;
      const componentPath = path.join(outputDir, componentFileName);

      fs.writeFileSync(componentPath, componentCode);

      // Track generated icons
      const componentName = `${toPascalCase(cleanIconName)}${variantSuffix}`;
      iconsByVariant[variant].push(componentName);

      if (!generatedIcons[cleanIconName]) {
        generatedIcons[cleanIconName] = [];
      }
      generatedIcons[cleanIconName].push(variant);

      totalIcons++;
    }

    console.log(`   ✅ Generated ${files.length} ${variant} components\n`);
  }

  // Generate index.ts with all exports
  generateIndexFile(outputDir, generatedIcons, iconsByVariant);

  console.log(`\n✨ Successfully built ${totalIcons} React icon components!`);
  console.log(`📂 Components output to: ${path.relative(process.cwd(), outputDir)}\n`);
}

/**
 * Generate index.ts file with all exports
 */
function generateIndexFile(outputDir, generatedIcons, iconsByVariant) {
  const exports = [];

  // Generate exports for each variant
  for (const variant of variants) {
    const variantIcons = iconsByVariant[variant] || [];
    for (const iconName of variantIcons) {
      exports.push(`export { default as ${iconName} } from './${iconName}';`);
    }
  }

  const indexContent = `// Auto-generated index file - do not edit manually
${exports.join('\n')}
`;

  fs.writeFileSync(path.join(outputDir, 'index.ts'), indexContent);
}

// Run the build
buildIcons();
