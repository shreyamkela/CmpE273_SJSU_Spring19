const fs = require("fs");

// var thisInject = ""; // thisInject should be inside module.exports as thisInject should be overwritten everytime this module is called. If thisInject is declared outside, then thisInject retains its state and the next time this module is called, the new report table will be added below the previous report table as we have used thisInject = thisInject + ....

module.exports.thisReport = report => {
  // Note, in arrow functions, when only 1 parameter is passed, there is no need for round brackets for eg, here around report
  fs.writeFileSync(
    "./report.json",
    JSON.stringify(report, undefined, 2),
    err => {
      //  Overwrite report.json with the updated report
      if (err) {
        console.log("Unable to append to report.json");
      } else {
        console.log(name);
      }
    }
  );

  var thisInject = "";
  for (keys in report) {
    let name = report[keys]["Name"];
    let dept = report[keys]["Department"];
    thisInject =
      thisInject +
      `<tr><td>${name}</td><td>${keys}</td><td>${dept}</td><td><form action='/update/${keys}' method='post'><input type='submit' value='Delete'></form></td><tr>`;
  }
  return thisInject;
};
