var base64ImageToImageData = function(base64, callback, options) {
  var opts = options || {};

  var img = new window.Image();
  img.onload = function onImageLoad() {
    var canvas = document.createElement("canvas");
    var ctx;
    var rawData;
    var result;

    var resizeRatio = 1;
    if (opts.size) {
      resizeRatio = opts.size / Math.max(img.width, img.height);
    }

    if (opts.maxSize) {
      if (img.width > opts.maxSize || img.height > opts.maxSize) {
        resizeRatio = opts.maxSize / Math.max(img.width, img.height);
      }
    }

    var imageWidth = Math.floor(img.width * resizeRatio);
    var imageHeight = Math.floor(img.height * resizeRatio);

    canvas.width = imageWidth;
    canvas.height = imageHeight;

    ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0, imageWidth, imageHeight);

    rawData = ctx.getImageData(0, 0, ctx.canvas.width, ctx.canvas.height);

    callback(null, rawData, img);
  };
  img.src = base64;
};

module.exports = base64ImageToImageData;
