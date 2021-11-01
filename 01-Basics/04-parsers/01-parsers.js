// const number = 456;
// const numberString = "456";

// console.log(Number(numberString) + number);
// console.log(+ numberString + number);

let numb = {
    value: 200
};
const numbS = {
    value: 150
};
numbS.value = 200;
console.log(numb.value == numbS.value); //true
//console.log(+numb === numbS);