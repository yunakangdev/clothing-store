const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const exphbs = require("express-handlebars");

app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.use(express.static("./"));

app.get("/", (req, res) => {
  res.render("index", { layout: false });
});

app.get("/index", (req, res) => {
  res.render("index", { layout: false });
});

app.get("/home", (req, res) => {
  res.render("index", { layout: false });
});

app.get("/2021SS", (req, res) => {
  res.render("2021SS", { layout: false });
});

app.get("/2021FW", (req, res) => {
  res.render("2021FW", { layout: false });
});

app.get("/about", (req, res) => {
  res.render("about", { layout: false });
});

app.get("/contact", (req, res) => {
  res.render("contact", { layout: false });
});

app.get("/stockists", (req, res) => {
  res.render("stockists", { layout: false });
});

app.get("/privacy", (req, res) => {
  res.render("privacy", { layout: false });
});

app.get("/subscribe", (req, res) => {
  res.render("subscribe", { layout: false });
});

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
