const assert = require("assert");

let inputs = [[1, 2, 3, 4, 5], [3, 2, 1]];
let expectedOutputs = [[120, 60, 40, 30, 24], [2, 3, 6]];

function getProductOfIndex(input, index) {
  let res = 1;
  for (let i = 0; i < input.length; i++) {
    if (i === index) continue;
    res *= input[i];
  }
  return res;
}

function getProduct(input) {
  let res = [...input];
  for (let i = 0; i < input.length; i++) {
    res[i] = getProductOfIndex(input, i);
  }
  return res;
}

for (let i = 0; i < inputs.length; i++) {
  assert.deepStrictEqual(getProduct(inputs[i]), expectedOutputs[i]);
  console.log(`Input ${i} passed!`);
}
