function calc(var1, var2 = 100) {
  return Number(var1) + Number(var2);
}

const expression = function (var1, var2) {
  return var1 + var2;
};

console.log(calc(70, 10), expression(70, 20));
