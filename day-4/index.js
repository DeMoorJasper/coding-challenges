let inputs = [[3, 4, -1, 1], [1, 2, 0]];

function findLowest(inputArr) {
  let missingNumbers = [];

  inputArr = inputArr.sort();
  for (let i = 0; i < inputArr.length; i++) {
    let n = inputArr[i];
    if (n < 1 || i < 1 || inputArr[i - 1] === inputArr[i] - 1 || inputArr[i - 1] < 0) continue;

    return n - 1;
  }

  return inputArr[inputArr.length - 1] + 1;
}

console.log(findLowest(inputs[0]));
console.log(findLowest(inputs[1]));
