const fs = require("fs");

const content1 = "hello I am here \n learning new writing file with fs module";

try {
  fs.writeFileSync("./file-sync.txt", content1);
  console.log("file qwritten sync");
} catch (err) {
  console.log(err.message);
}
