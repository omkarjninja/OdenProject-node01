const express = require("express");
const path = require("path");
const app = express();

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});
app.get("/about", function (req, res) {
  // res.send("about page");
  res.sendFile(__dirname + "/about.html");
});
app.get("/contact", function (req, res) {
  res.sendFile(__dirname + "/contact.html");
});
app.get("*", function (req, res) {
  res.sendFile(__dirname + "/404.html");
});

app.listen(8000, () => console.log("Server is running on port 8000"));
