// 1
function sumOfNum(...numbers) {
    let sum = 0;
    for (let item of numbers){
        sum +=  item;
    }
    return sum;
}
let sumResult = sumOfNum(10, 50, 6, 7, 8, 11, 6, 3, 9);
console.log(sumResult)
// 3
function findMaxNumber(numbers) {
    return Math.max(...numbers);
  }
  let array = findMaxNumber([1, 3, 7, 2, 9, 5]);
  console.log(array)
//4
let checkEvenOdd = (number) => {
    if (number % 2 === 0) {
      return "this number is even";
    } else {
      return "this number is odd";
    }
  };
  
  let evenOrOdd = checkEvenOdd(7);
  console.log(evenOrOdd);
  
  