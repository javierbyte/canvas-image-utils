const { createWorker } = require("./utils");

const base64ImageToRGBMatrix = function(base64, callback, opts = {}) {
  const img = new window.Image();

  img.onload = function onImageLoad() {
    let resizeRatio = 1;

    if (opts.size) {
      resizeRatio = opts.size / Math.max(img.width, img.height);
    }

    if (opts.maxSize) {
      if (img.width > opts.maxSize || img.height > opts.maxSize) {
        resizeRatio = opts.maxSize / Math.max(img.width, img.height);
      }
    }

    const canvas = document.createElement("canvas");

    canvas.width = Math.floor(img.width * resizeRatio);
    canvas.height = Math.floor(img.height * resizeRatio);

    const ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const { data } = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

    function workerCode() {
      self.onmessage = function onWorkerJobStarted(message) {
        const data = message.data[0];
        const width = message.data[1];
        const height = message.data[2];

        let result = [];
        for (var y = 0; y < height; y++) {
          result[y] = [];
          for (var x = 0; x < width; x++) {
            result[y][x] = {
              r: data[y * width * 4 + x * 4],
              g: data[y * width * 4 + x * 4 + 1],
              b: data[y * width * 4 + x * 4 + 2],
              a: data[y * width * 4 + x * 4 + 3]
            };
          }
        }
        self.postMessage([result]);
      };
    }

    const worker = createWorker(workerCode);
    const { width, height } = canvas;

    worker.postMessage([data, width, height]);

    worker.onmessage = function onWorkerJobCompleted(message) {
      const [result] = message.data;
      callback(null, result);
    };
  };
  img.src = base64;
};

module.exports = base64ImageToRGBMatrix;
