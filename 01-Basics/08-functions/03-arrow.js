function calc(var1, var2 = 100) {
  return Number(var1) + Number(var2);
}

const expression = function (var1, var2) {
  return var1 + var2;
};

const arrowFunction1 = var1 => `o nome é ${var1}`;

const arrowFunction2 = (var1, var2) => {
  return var1 + var2;
};

console.log(calc(70, 10), expression(70, 20), arrowFunction2(70, 30), arrowFunction1('Miqueias'));
