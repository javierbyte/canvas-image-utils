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
  const { img, canvas, ctx } = await imgSrcToCtx(imgSrc, options);

  let resizeRatio = 1;

  if (options.size) {
    resizeRatio = options.size / Math.max(img.width, img.height);
  }

  if (options.maxSize) {
    if (img.width > options.maxSize || img.height > options.maxSize) {
      resizeRatio = options.maxSize / Math.max(img.width, img.height);
    }
  }

  const imageWidth = Math.floor(img.width * resizeRatio);
  const imageHeight = Math.floor(img.height * resizeRatio);

  canvas.width = imageWidth;
  canvas.height = imageHeight;

  ctx.drawImage(img, 0, 0, imageWidth, imageHeight);

  return ctxToRGBArray(ctx);
}
