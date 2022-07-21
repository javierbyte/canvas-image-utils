import type { Options, RGBArray } from '../index';

import { imgSrcToCtx, ctxToRGBArray } from './utils.js';

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imgSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {ImageData} Image data after resizing and crop.
 */
export async function imageToRawData(
  imgSrc: string,
  options: Options
): Promise<ImageData> {
  const { ctx, canvas } = await imgSrcToCtx(imgSrc, options);

  return ctx.getImageData(0, 0, canvas.width, canvas.height);
}
