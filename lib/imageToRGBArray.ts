import type { Options, RGBArray } from '../index';

import { imgSrcToCtx, ctxToRGBArray } from './utils.js';

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imgSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBArray} The array of pixels
 */
export async function imageToRGBArray(
  imgSrc: string,
  options: Options
): Promise<RGBArray> {
  const { ctx } = await imgSrcToCtx(imgSrc, options);

  return ctxToRGBArray(ctx);
}
