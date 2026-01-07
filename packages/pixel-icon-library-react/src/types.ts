import React from 'react';

export type IconNode = any[][];

export interface PixelIconProps extends React.SVGAttributes<SVGSVGElement> {
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

export type PixelIcon = React.ForwardRefExoticComponent<
  Omit<PixelIconProps, 'ref'> & React.RefAttributes<SVGSVGElement>
>;
