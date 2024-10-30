import * as http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  if (req.url === "/view-image") {
    const imagePath = path.join("dist", "images", "veryhappydog.jpg");
    fs.readFile(imagePath, function (err, data) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end(`500 - Internal Error: ${err.message}`);
        return;
      } else {
        res.writeHead(200, { "Content-Type": "image/jpeg" });
        res.end(data);
        return;
      }
    });
    return;
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Page not found");
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
