const express = require("express");
const cors = require("cors");

var app = express();

//use cors to allow cross origin resource sharing. This is required to enable get and post from frontend port 3000 to this backend port 3001
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(express.urlencoded({ extended: true })); // Through this, req.body contains the POSTed form data - body-parser functionality is available with express v4.16+ in this manner. Body parser itself was deprecated in the newer versions.
app.use(express.json());
// From Postman, when checking the post routes, the req.body will by posted through x-www-form-urlencoded in the body tab Postman (not form-data)

// app.get("/", (req, res) => {
//   res.send("Render Calculator");
// });

app.post("/", (req, res) => {
  let query = req.body.query;
  console.log(query);
  try {
    // if expression is invalid then eval will throw error and would send 500 error code to frontend, therefore we need a try catch to tackle invalid expressions
    let value = eval(query); // eval function can evaluate a valid mathematical expression - https://www.geeksforgeeks.org/javascript-eval-function/
    console.log(value);
    if (value == Infinity) {
      throw e;
    }
    res.status(200).send({ value: value });
  } catch (e) {
    // let value = "INVALID INPUT";
    // res.statusMessage("invalid");
    res.status(400).send("INVALID INPUT");
  }
});

app.listen(3001, () => {
  console.log("Express Server is up on port 3001");
});
