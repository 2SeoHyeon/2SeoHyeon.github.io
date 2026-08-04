const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;

http.createServer((req, res) => {
  let filePath = req.url.split("?")[0];
  if (filePath === "/") filePath = "/param-parser-viewer.html";
  filePath = path.join(root, decodeURIComponent(filePath));
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404);
      res.end("not found");
      return;
    }
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(data);
  });
}).listen(8935, () => console.log("listening on 8935"));
