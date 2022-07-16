import type { Options } from '../index';

import { imgSrcToCtx, ctxToRGBMatrix } from './utils';

/**
 * Get an array of pixels with colors from an image
 *
 * @param {string} imgSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {RGBAMatrix} The matrix of colors
 */
export async function imageToRGBMatrix(imgSrc: string, options: Options) {
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

  canvas.width = Math.floor(img.width * resizeRatio);
  canvas.height = Math.floor(img.height * resizeRatio);

  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

  return ctxToRGBMatrix(ctx);
}
