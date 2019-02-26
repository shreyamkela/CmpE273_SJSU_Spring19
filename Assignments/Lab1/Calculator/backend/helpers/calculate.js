var calculator = query => {
  var result = 0;
  var operand_1 = Number(query[0]);
  var operand_2 = Number(query[2]);

  switch (query[1]) {
    case "+":
      result = operand_1 + operand_2;
      break;

    case "-":
      result = operand_1 - operand_2;
      break;

    case "*":
      result = operand_1 * operand_2;
      break;

    case "/":
      result = operand_1 / operand_2;
      break;
  }
  return result;
};

module.exports.calculateThis = query => {
  query = query.split(" ");
  console.log(query);
  var result = calculator(query);
  return result;
};
