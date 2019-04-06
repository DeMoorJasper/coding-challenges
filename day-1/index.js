function findAdditionOfTwo(data, result, start = 0, end = 1) {
  if (data[start] + data[end] === result) {
    return true;
  }

  end++;

  if (end === data.length) {
    start++;
    end = start + 1;

    if (end === data.length) return false;
  }

  return findAdditionOfTwo(data, result, start, end);
}

function printQuestionAndResult(data, result) {
  console.log(
    data.toString(),
    "contains a multiplication of 2 digits that equal",
    result,
    "?",
    findAdditionOfTwo(data, result)
  );
}

printQuestionAndResult([10, 15, 3, 7], 17);
printQuestionAndResult([10, 15, 3, 7], 87);
printQuestionAndResult([8, 13, 9, 32], 21);
printQuestionAndResult([9, 45, 85, 24], 109);
printQuestionAndResult([54, 5, 8, 23], 230);
printQuestionAndResult([78, 2, 6, 97], 99);
printQuestionAndResult([76, 34, 4, 2], 6);
