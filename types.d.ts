type RGBA = { r: number; g: number; b: number; a: number };

type RGBArray = Array<{ x: number; y: number; rgb: RGBA }>;

type RGBAMatrix = Array<Array<RGBA>>;

interface Options {
  canvas?: HTMLCanvasElement;
  size?: number;
  maxSize?: number;
}

/**
 * Generates a CanvasRenderingContext2D from a image
 *
 * @param {string} imageSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBArray} The CanvasRenderingContext2D
 */

export declare function imgSrcToCtx(
  imgSrc: string,
  options: Options
): Promise<{
  img: HTMLImageElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}>;

/**
 * Generates an array of pixel position and RGBA color from a CanvasRenderingContext2D
 *
 * @param {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D
 * @returns {RGBArray} The Array of pixels
 */
export declare function ctxToRGBArray(ctx: CanvasRenderingContext2D): RGBArray;

/**
 * Generates a matrix of RGBA colors from a CanvasRenderingContext2D
 *
 * @param {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D
 * @returns {RGBAMatrix} The matrix of colors
 */
export declare function ctxToRGBMatrix(
  ctx: CanvasRenderingContext2D
): RGBAMatrix;

/**
 * Get raw data of an image
 *
 * @param {string} imageSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {ImageData} Raw data of the image
 */

export declare function imageToRawData(
  imgSrc: string,
  options: Options & { crop?: boolean }
): Promise<ImageData>;

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imageSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBArray} The array of pixels
 */

export declare function imageToRGBArray(
  imgSrc: string,
  options: Options
): Promise<RGBArray>;

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imageSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBAMatrix} The matrix of colors
 */

export declare function imageToRGBMatrix(
  imgSrc: string,
  options: Options
): Promise<RGBAMatrix>;
