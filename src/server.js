const express = require("express");
const expressJs = require("express");
const path = require("path");
const open = require("open");
const app = expressJs();

app.use("/img", express.static(__dirname + "/assets/img"));
app.use("/lib", express.static(__dirname + "/assets/lib"));
app.use("/css", express.static(__dirname + "/assets"));
app.use("/js", express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile("home.html", { root: path.join(__dirname, "pages/homepage") });
});

app.get("/bikes", function (req, res) {
  res.sendFile("bikes.html", { root: path.join(__dirname, "pages/bikes") });
});

app.get("/contacts", function (req, res) {
  res.sendFile("contacts.html", {
    root: path.join(__dirname, "pages/contacts"),
  });
});

app.listen(4000, function () {
  //  open("http://localhost:4000")
  console.log("Listening at Port 3000");
});
