export function imageToRawData(imgSrc, options = {}) {
  const { crop = true, size } = options;

  return new Promise((resolve) => {
    const img = new window.Image();
    img.onload = function onImageLoad() {
      const canvas = options.canvas || document.createElement("canvas");
      const ctx = canvas.getContext("2d");

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
        canvas.width = size;
        canvas.height = size;

        const smallSide = Math.min(img.width, img.height);

        // const beforeCropHeight = Math.floor((img.height / smallSide) * size);
        // const beforeCropWidth = Math.floor((img.width / smallSide) * size);

        ctx.drawImage(
          img,
          (img.width - smallSide) / 2,
          (img.height - smallSide) / 2,
          smallSide,
          smallSide,
          0,
          0,
          size,
          size
        );
      } else {
        // NO CROP
        canvas.width = imageWidth;
        canvas.height = imageHeight;
        ctx.drawImage(img, 0, 0, imageWidth, imageHeight);
      }

      const rawData = ctx.getImageData(
        0,
        0,
        ctx.canvas.width,
        ctx.canvas.height
      );
      rawData.ctx = ctx;
      resolve(rawData);
    };
    img.src = imgSrc;
  });
}
