const crypto = require("crypto");

const md5hash = crypto.createHash("md5").update("password123").digest("hex");
console.log("md5 hash: ", md5hash);

const sha256hash = crypto
  .createHash("sha256")
  .update("password123")
  .digest("hex");
console.log("sha256 hash", sha256hash);

const sha512hash = crypto
  .createHash("sha512")
  .update("password123")
  .digest("hex");
console.log("sha512 hash", sha512hash);
