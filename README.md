![Github Cover](https://github.com/hackernoon/pixel-icon-library/assets/53912722/e7527cc9-424d-43ec-a481-78730d1a7d95)

# HackerNoon's Pixel Icon Library

Introducing [HackerNoon's Pixel Icon Library (now available as a standalone site @ PixelIconLibrary.com)](https://pixeliconlibrary.com), an open-source collection of 1440+ Pixelated Icons. Meticulously designed on a 24px grid, ensuring perfect alignment and consistency to enrich your web/app/product/page/life experience. Inspired by HackerNoon's retro design vibe, these icons capture the essence of the internet's good old days.

## What's in the Pixel Icon Library?

- 400+ Unique Pixelated Vector Icons.
- 4 variations per icon to better match your project aesthetic.
- Light SVG Files.
- PNG files in 12px, 16 px, 24px, and 48px for both Light/Dark Mode.
- Multiple Ways to Use - [Install via NPM Package](https://www.npmjs.com/package/@hackernoon/pixel-icon-library), Directly via HTML & CSS, and [via a Figma component library](https://www.figma.com/community/file/1278952394341234192/pixel-icon-library-1440-pixelated-icons-by-hackernoon).

## 🎉 NEW: React Components

Use Pixel Icons as React components, just like [lucide-react](https://lucide.dev)!

```bash
npm install @hackernoon/pixel-icon-library-react react
```

```tsx
import { Home, AlertTriangle, AlertTriangleSolid } from '@hackernoon/pixel-icon-library-react';

export function MyApp() {
  return (
    <div>
      <Home size={24} color="currentColor" />
      <AlertTriangle size={32} color="red" />
      <AlertTriangleSolid size={24} />
    </div>
  );
}
```

**Features:**
- ✅ 450+ React icon components (regular, solid, brands, purcats variants)
- ✅ Full TypeScript support with type safety
- ✅ Fully customizable size, color, stroke width
- ✅ Tree-shakeable - import only what you need
- ✅ Zero dependencies (except React)

**Icon Variants:**
```tsx
import { Home, HomeSolid, HomeBrands, HomePurcats } from '@hackernoon/pixel-icon-library-react';

// Regular variant (default)
<Home size={24} />

// Solid variant  
<HomeSolid size={24} />

// Brands variant
<HomeBrands size={24} />

// Purcats variant (HackerNoon categories)
<HomePurcats size={24} />
```

**Customization Props:**
- `size` - Icon size in pixels (default: 24)
- `color` - Icon color (default: 'currentColor')
- `strokeWidth` - Stroke width (default: 2)
- `className` - Add custom CSS classes
- All standard SVG attributes supported

👉 [See full React package documentation →](./packages/pixel-icon-library-react/README.md)

## Development

### Building React Components

Generate React components from SVG files:

```bash
npm install
npm run build:icons  # Generate components from SVGs
npm run build       # Build the React package
```

The build script automatically converts all SVG icons to React components in `packages/pixel-icon-library-react/src/icons/`.

### Project Structure

```
pixel-icon-library/
├── icons/                  # Original SVG and PNG icons
│   ├── SVG/               # Source SVG files (regular, solid, brands, purcats)
│   └── PNG/               # Exported PNG files
├── fonts/                 # Icon font files
├── packages/
│   └── pixel-icon-library-react/  # React components package
│       ├── src/
│       │   ├── Icon.tsx           # Base icon component
│       │   ├── types.ts           # TypeScript definitions
│       │   └── icons/             # Auto-generated components
│       └── dist/                  # Built package
└── scripts/
    └── build-react-icons.js      # SVG to React generator
```

## Usage

### HTML Image

Using the `<img />` element directly in your HTML file.

```
<img src="path/to/icon.svg" alt="icon title" />
```

### Inline HTML

You can paste the content of the icon file directly into your HTML code to display it on the page using the `<svg> </svg>` tag.

```
<body>
 // Add your SVG code here
</body>
```

### CSS

Instead of using an HTML `<img />` element, you can use CSS instead and apply it as a background to any other element.

```
body {
  background-image: url(path/to/icon.svg);
}
```

### SVG as an object

You can also use the `<object>` tag to add the SVG to your page

```
<object data="path/to/icon.svg" width="24" height="24"> </object>
```

### Using <iframe>

Keep in mind that using iframe is not recommended, because its hard to maintain

```
<iframe src="path/to/icon.svg"> </iframe>
```

### SVG as embed

Most of the modern browsers have deprecated plugins, so this is not recommended.

```
<embed src="path/to/icon.svg" />
```

### Font Classes (Original Package)

Install the base icon library with font support:

```bash
npm install @hackernoon/pixel-icon-library
```

```html
<link rel="stylesheet" href="path/to/@hackernoon/pixel-icon-library/fonts/iconfont.css">
<i class="hn hn-icon-name"></i>
```

### Figma

HackerNoon's Pixel Icon Library is available as a [Figma Community File](https://www.figma.com/community/file/1278952394341234192/Pixel-Icon-Library-%7C-120%2B-Pixelated-Icons-By-HackerNoon). To use the components, log in to your Figma account and duplicate the file to your drafts.

# License (Free | Starter | Pro)

- The icons (.svg/.png) files are free to download and are licensed under CC 4.0
- By downloading, it is assumed that you agree with the terms mentioned in CC 4.0.
- You must give appropriate credit, provide a link to the license, and indicate if changes were made. 
- Other files in the repository which are not icons, are licensed under the MIT License.

### Don't want to attribute? [Consider buying a license plan](https://pixeliconlibrary.com/license/).

# Contribution

For more info on how to contribute please check our [Contribution Guidelines](https://github.com/hackernoon/pixelated-site-icons/blob/main/CONTRIBUTING.md)

# Learn More @ [PixelIconLibrary.com](https://pixeliconlibrary.com)

**Designed with 💚 by Designers at [HackerNoon](https://hackernoon.com)**
