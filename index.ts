type RGBA = { r: number; g: number; b: number; a: number };
export type RGBArray = Array<{ x: number; y: number; rgb: RGBA }>;
export type RGBAMatrix = Array<Array<RGBA>>;

export interface Options {
  canvas: HTMLCanvasElement;
  size?: number;
  maxSize?: number;
  crop: true | false;
}

export * from './lib/imageToRGBMatrix';
export * from './lib/imageToRGBArray';
export * from './lib/imageToRawData';
export * from './lib/utils';
