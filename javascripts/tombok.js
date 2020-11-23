const numericArr = [2334, 434, 576567, 22, 45];
// for (let i = 0; i < numericArr.length; i += 1) {
//     console.log(numericArr[i]);

// }

// numericArr.forEach(function (item) {
//     console.log(item);
// });
numericArr.forEach(item => console.log(item));
const exponentArr = numericArr.map(item => item ** 2);
console.log(exponentArr);
const eventArr = numericArr.filter(item => item % 2 === 0);
console.log(eventArr);
const sumOfArr = numericArr.reduce((prevoiusValue, currentValue) => prevoiusValue + currentValue);
console.log(sumOfArr);