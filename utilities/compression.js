const zlib = require("zlib");
const compressResponse = (data) => {
  return new Promise((resolve, reject) => {
    var input = JSON.stringify(data);
    var compressed = zlib.gzip(input, (err, res) => {
      return resolve(res);
    });
  });
};
module.exports = {
  compressResponse,
};