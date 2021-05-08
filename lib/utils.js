export async function imgSrcToCtx(imgSrc, options) {
  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = function onImageLoad() {
      const canvas = options.canvas || document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      resolve({ img, canvas, ctx });
    };
    img.src = imgSrc;
  });
}

export function ctxToRGBArray(ctx) {
  const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
  const result = [];
  for (let y = 0; y < ctx.canvas.height; y++) {
    for (let x = 0; x < ctx.canvas.width; x++) {
      result.push({
        x: x,
        y: y,
        rgb: {
          r: data[y * ctx.canvas.width * 4 + x * 4],
          g: data[y * ctx.canvas.width * 4 + x * 4 + 1],
          b: data[y * ctx.canvas.width * 4 + x * 4 + 2],
          a: data[y * ctx.canvas.width * 4 + x * 4 + 3],
        },
      });
    }
  }
  return result;
}

export function ctxToRGBMatrix(ctx) {
  const { data } = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { width, height } = ctx.canvas;
  let result = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!result[x]) result[x] = [];

      result[x][y] = {
        r: data[y * width * 4 + x * 4],
        g: data[y * width * 4 + x * 4 + 1],
        b: data[y * width * 4 + x * 4 + 2],
        a: data[y * width * 4 + x * 4 + 3],
      };
    }
  }
  return result;
}
