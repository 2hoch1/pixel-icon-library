import React, { createElement, forwardRef, ReactNode } from 'react';
import { PixelIconProps, IconNode } from './types';
import { mergeClasses } from './utils';

const defaultAttributes = {
  xmlns: 'http://www.w3.org/2000/svg',
  width: 24,
  height: 24,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

interface IconComponentProps extends PixelIconProps {
  iconNode: IconNode;
  children?: ReactNode;
  filled?: boolean;
}

const hasA11yProp = (props: Record<string, any>) => {
  return props['aria-label'] || props['aria-labelledby'] || props['aria-hidden'];
};

const Icon = forwardRef<SVGSVGElement, IconComponentProps>(
  (
    {
      color = 'currentColor',
      size = 24,
      strokeWidth = 2,
      absoluteStrokeWidth = false,
      className = '',
      children,
      filled = false,
      iconNode,
      ...rest
    },
    ref
  ) =>
    createElement(
      'svg',
      {
        ref,
        ...defaultAttributes,
        width: size,
        height: size,
        // Für gefüllte Varianten nutzen wir die Textfarbe als Füllung
        // und deaktivieren den Stroke.
        fill: filled ? color : defaultAttributes.fill,
        stroke: filled ? 'none' : color,
        strokeWidth: absoluteStrokeWidth ? (Number(strokeWidth) * 24) / Number(size) : strokeWidth,
        className: mergeClasses('pixel-icon', className),
        ...(!children && !hasA11yProp(rest) && { 'aria-hidden': 'true' }),
        ...rest,
      },
      ...(iconNode
        ? [
            iconNode.map(([tag, attrs], idx) =>
              createElement(tag, { key: `pi-${idx}`, ...attrs })
            ),
          ]
        : []),
      ...(Array.isArray(children) ? children : [children])
    )
);

Icon.displayName = 'PixelIcon';

export default Icon;
