const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(responsePageLayout("index")));
});
app.get("/about", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(responsePageLayout(req.originalUrl)));
});
app.get("/contact-me", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from(responsePageLayout(req.originalUrl)));
});

app.listen(port, () => {
  console.log(`Server running at port ${port}`);
});

function responsePageLayout(path) {
  return `<ul>
<li><a href="http://localhost:8080">home</a></li>
<li><a href="http://localhost:8080/about">about</a></li>
<li><a href="http://localhost:8080/contact-me">contact me</a></li>
</ul>
<h1>${path.replace(/[/]/g, "")}</h1>`;
}
