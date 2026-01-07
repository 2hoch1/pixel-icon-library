# @hackernoon/pixel-icon-library-react

React components for [Pixel Icon Library](https://pixeliconlibrary.com) - pixelated icons that you can easily import as React components, just like [lucide-react](https://lucide.dev).

## Installation

```bash
npm install @hackernoon/pixel-icon-library-react react
# or
yarn add @hackernoon/pixel-icon-library-react react
# or
pnpm add @hackernoon/pixel-icon-library-react react
```

## Usage

```tsx
import React from 'react';
import { AlertTriangle, RotateCw, Home, AlertTriangleSolid, HomeBrands } from '@hackernoon/pixel-icon-library-react';

export function MyComponent() {
  return (
    <div>
      {/* Regular variant (default) */}
      <AlertTriangle size={24} color="currentColor" />
      
      {/* Solid variant */}
      <AlertTriangleSolid size={24} />
      
      {/* Brands variant */}
      <HomeBrands size={24} />
      
      {/* Custom size and color */}
      <RotateCw size={32} color="blue" strokeWidth={2} />
    </div>
  );
}
```

## Icon Variants

The library provides 4 variants for most icons:

- **Regular** (default): `<AlertTriangle />`
- **Solid**: `<AlertTriangleSolid />`
- **Brands**: `<AlertTriangleBrands />`
- **Purcats**: `<AlertTrianglePurcats />`

## Component Props

All icon components support the following props:

```typescript
interface PixelIconProps extends SVGAttributes<SVGSVGElement> {
  /**
   * Icon size in pixels
   * @default 24
   */
  size?: string | number;

  /**
   * Icon color
   * @default 'currentColor'
   */
  color?: string;

  /**
   * Stroke width
   * @default 2
   */
  strokeWidth?: string | number;

  /**
   * Whether stroke width should be absolute regardless of size
   * @default false
   */
  absoluteStrokeWidth?: boolean;
}
```

## Available Icons

The library includes **450+ pixelated icons** organized by category:

- **Regular**: 190 icons
- **Solid**: 190 icons
- **Brands**: 47 icons
- **Purcats**: 23 icons

Browse all available icons at [pixeliconlibrary.com](https://pixeliconlibrary.com)

## Examples

### With Tailwind CSS

```tsx
import { Home, Settings, Users } from '@hackernoon/pixel-icon-library-react';

export function Navigation() {
  return (
    <nav className="flex gap-4">
      <Home className="w-6 h-6" />
      <Settings className="w-6 h-6" />
      <Users className="w-6 h-6" />
    </nav>
  );
}
```

### With Custom Styling

```tsx
import styled from 'styled-components';
import { AlertTriangle } from '@hackernoon/pixel-icon-library-react';

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #ff6b6b;
`;

export function ErrorMessage() {
  return (
    <IconWrapper>
      <AlertTriangle size={24} />
      <span>An error occurred!</span>
    </IconWrapper>
  );
}
```

### TypeScript Support

Full TypeScript support is included out of the box:

```tsx
import type { PixelIcon } from '@hackernoon/pixel-icon-library-react';

const iconMap: Record<string, PixelIcon> = {
  home: Home,
  settings: Settings,
  users: Users,
};
```

## License

MIT © [HackerNoon](https://hackernoon.com)
