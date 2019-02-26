const express = require("express");
const calculate = require("./helpers/calculate");

var app = express();

app.use(express.urlencoded({ extended: true })); // Through this, req.body contains the POSTed form data - body-parser functionality is available with express v4.16+ in this manner. Body parser itself was deprecated in the newer versions.
app.use(express.json());
// From Postman, when checking the post routes, the req.body will by posted through x-www-form-urlencoded in the body tab Postman (not form-data)

app.get("/", (req, res) => {
  res.send("Render Calculator");
});

app.post("/", (req, res) => {
  var query = req.body.query;
  var result = calculate.calculateThis(query);
  console.log(result);
  res.send("Result");
});

app.listen(3001, () => {
  console.log("Express Server is up on port 3001");
});
