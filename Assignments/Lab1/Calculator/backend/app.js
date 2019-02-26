const express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Render Calculator");
});

app.post("/", (req, res) => {
  res.send(req.body);
});

app.listen(3001, () => {
  console.log("Express Server is up on port 3001");
});
