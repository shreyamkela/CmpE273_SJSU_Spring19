const express = require("express");
const calculate = require("./helpers/calculate");
const cors = require("cors");

var app = express();

//use cors to allow cross origin resource sharing
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.urlencoded({ extended: true })); // Through this, req.body contains the POSTed form data - body-parser functionality is available with express v4.16+ in this manner. Body parser itself was deprecated in the newer versions.
app.use(express.json());
// From Postman, when checking the post routes, the req.body will by posted through x-www-form-urlencoded in the body tab Postman (not form-data)

app.get("/", (req, res) => {
  res.send("Render Calculator");
});

app.post("/", (req, res) => {
  var query = req.body.query;
  console.log(query);
  var result = calculate.me(query);
  console.log(result);
  res.send("Result: " + result); // Cannot send just result, which is a number, using res.send as res.send interprets numbers as status codes - https://stackoverflow.com/questions/39498601/unable-to-send-numbers-using-res-send-using-express-with-node
});

app.listen(3001, () => {
  console.log("Express Server is up on port 3001");
});
