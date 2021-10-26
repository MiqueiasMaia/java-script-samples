var var1 = "1";
var var2 = "9";

var concat = concact(var1, var2);
var calcul = calc(var1, var2);

console.log(concat, calcul);

function concact(var1, var2) {
  return var1 + var2;
}

function calc(var1, var2 = 100) {
  return Number(var1) + Number(var2);
}

printer(calc(98, -567) + calc(98));

function printer(value) {
  return console.log(`The value is ${value}`);
}
