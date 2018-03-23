// spawn a worker without using an external file
// https://medium.com/@roman01la/run-web-worker-with-a-function-rather-than-external-file-303add905a0
function createWorker(fn) {
  return new Worker(URL.createObjectURL(new Blob([`(${fn})()`])));
}

module.exports = { createWorker };
