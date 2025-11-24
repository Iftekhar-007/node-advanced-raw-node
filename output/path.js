const { basename, extname, parse, format, dirname } = require("path");

console.log("filename: ", __filename);
console.log("dirname :", __dirname);

console.log("base apth:", basename(__filename));
console.log("base ext: ", extname(__filename));
console.log(
  "base path without extention: ",
  basename(__filename, extname(__filename))
);

const parsed = parse(__filename);
console.log("parsed path: ", parsed);

console.log("formatted path: ", format(parsed));

const fakePath = "/shawon/D:/ph-level-02/practice.js";

console.log(
  dirname(fakePath),
  extname(fakePath),
  basename(fakePath),
  basename(fakePath, extname(fakePath))
);

const parsedFake = parse(fakePath);
console.log(parsedFake);
console.log(format(parsedFake));
