import { imgSrcToCtx, ctxToRGBArray } from "./utils.js";

export async function imageToRGBArray(imgSrc, options = {}) {
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
