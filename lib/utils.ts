import type { Options, RGBArray, RGBAMatrix } from '../index';

/**
 * Returns a "CanvasRenderingContext2D" from an image source.
 *
 * @param {string} imgSrc The source of the image
 * @param {Options} options Options for the conversion
 * @returns {{img: HTMLImageElement, canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D}} An object containing the original `img`, and the cropped and resized `canvas` and `ctx`.
 */

export async function imgSrcToCtx(
  imgSrc: string,
  options: Options
): Promise<{
  img: HTMLImageElement;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
}> {
  return new Promise((resolve) => {
    const { crop = true, size, maxSize } = options;

    const img = new window.Image();
    img.onload = function onImageLoad() {
      const canvas = options.canvas || document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      if (!ctx) {
        throw new Error("Failed to 'getContext2d'");
      }

      let resizeRatio = 1;
      if (size) {
        resizeRatio = size / Math.max(img.width, img.height);
      }

      if (options.maxSize) {
        if (img.width > options.maxSize || img.height > options.maxSize) {
          resizeRatio = options.maxSize / Math.max(img.width, img.height);
        }
      }

      const imageWidth = Math.floor(img.width * resizeRatio);
      const imageHeight = Math.floor(img.height * resizeRatio);

      if (crop) {
        canvas.width = size || maxSize || img.width;
        canvas.height = size || maxSize || img.height;

        const smallSide = Math.min(img.width, img.height);

        ctx.drawImage(
          img,
          (img.width - smallSide) / 2,
          (img.height - smallSide) / 2,
          smallSide,
          smallSide,
          0,
          0,
          canvas.width,
          canvas.height
        );
      } else {
        // NO CROP
        canvas.width = imageWidth;
        canvas.height = imageHeight;
        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
      }

      resolve({ img, canvas, ctx });
    };
    img.src = imgSrc;
  });
}

/**
 * Generates an array of pixel position and RGBA color from a CanvasRenderingContext2D
 *
 * @param {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D
 * @returns {RGBArray} The Array of pixels
 */
export function ctxToRGBArray(ctx: CanvasRenderingContext2D): RGBArray {
  const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
  const result: RGBArray = [];

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

/**
 * Generates a matrix of RGBA colors from a CanvasRenderingContext2D
 *
 * @param {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D
 * @returns {RGBAMatrix} The matrix of colors
 */
export function ctxToRGBMatrix(ctx: CanvasRenderingContext2D): RGBAMatrix {
  const { data } = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { width, height } = ctx.canvas;
  let result: Array<{ r: number; g: number; b: number; a: number }>[] = [];
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

/**
 * Generates a matrix grayscale values for each pixel. Each pixel is a 0-255 value and each row is an `Uint8Array`.
 *
 * @param {CanvasRenderingContext2D} ctx The CanvasRenderingContext2D
 */
export function ctxToRGBGrayscaleMatrix(
  ctx: CanvasRenderingContext2D,
  opacityBackgroundLightness = 255
): Uint8Array[] {
  const { data } = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);
  const { width, height } = ctx.canvas;
  let result = [];
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      if (!result[x]) {
        result[x] = new Uint8Array(height);
      }

      result[x][y] = Math.round(
        (data[y * width * 4 + x * 4] +
          data[y * width * 4 + x * 4 + 1] +
          data[y * width * 4 + x * 4 + 2]) /
          3
      );

      const opacity = data[y * width * 4 + x * 4 + 3];
      if (opacity !== 255) {
        result[x][y] = Math.round(
          result[x][y] * (opacity / 255) +
            opacityBackgroundLightness * (1 - opacity / 255)
        );
      }
    }
  }
  return result;
}

// export function ctxToRawUint8Array(ctx: CanvasRenderingContext2D) {
//   const data = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height).data;
//   const { width, height } = ctx.canvas;
//   const result = new Uint8Array(width * height);
//   for (let y = 0; y < ctx.canvas.height; y++) {
//     for (let x = 0; x < ctx.canvas.width; x++) {
//       result[width * x + y] = Math.floor(
//         (data[y * width * 4 + x * 4] +
//           data[y * width * 4 + x * 4 + 1] +
//           data[y * width * 4 + x * 4 + 2]) /
//           3
//       );
//     }
//   }
//   return result;
// }
