import React, { forwardRef } from 'react';
import Icon from './Icon';
import { IconNode, PixelIcon, PixelIconProps } from './types';
import { mergeClasses, toPascalCase, toKebabCase } from './utils';

export const createPixelIcon = (
  iconName: string,
  iconNode: IconNode,
  variant?: string
): PixelIcon => {
  const variantSuffix = variant ? `${toPascalCase(variant)}` : '';
  const displayName = `${toPascalCase(iconName)}${variantSuffix}`;
  
  const Component = forwardRef<SVGSVGElement, PixelIconProps>(({ className, ...props }, ref) =>
    React.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `pixel-icon-${toKebabCase(displayName)}`,
        `pixel-icon-${iconName}${variant ? `-${variant}` : ''}`,
        className
      ),
      ...props,
    })
  );

  Component.displayName = displayName;
  return Component as PixelIcon;
};
