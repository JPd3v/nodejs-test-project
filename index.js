const http = require("http");
const url = require("node:url");
const fs = require("fs");

const port = 8080;

const server = http.createServer((req, res) => {
  const htmlFile = `.${req.url === "/" ? "/index" : req.url}.html`;

  fs.readFile(htmlFile, (error, data) => {
    if (error) {
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    return res.end();
  });
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});
