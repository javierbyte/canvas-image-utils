import { imgSrcToCtx, ctxToRGBMatrix } from "./utils.js";

export async function imageToRGBMatrix(imgSrc, options = {}) {
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
