import type { Options, RGBAMatrix } from '../index';

import { imgSrcToCtx, ctxToRGBMatrix } from './utils';

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imgSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBAMatrix} The matrix of colors
 */
export async function imageToRGBMatrix(
  imgSrc: string,
  options: Options
): Promise<RGBAMatrix> {
  const { ctx } = await imgSrcToCtx(imgSrc, options);

  return ctxToRGBMatrix(ctx);
}
