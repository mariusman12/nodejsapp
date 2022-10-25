const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app(cors());

app.get("/", (req, res) => {
  res.send("Hello World / !");
});

app.get("/add", (req, res) => {
  res.send("Hello World add!");
});

app.get("/add2", (req, res) => {
  res.send("Hello World add2!");
});
app.get("/getData", (req, res) => {
  fetch("https://reqres.in/api/users")
    .then((res) => res.json())
    .then((data) => console.log(data));
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
