function commonEnd(a, b) {
  if (!a || a.length === 0 || !b || b.length === 0) {
    return false;
  }

  let firstValue1 = a[0]
  let lastValue1 = a[a.length - 1]
  let firstValue2 = b[0]
  let lastValue2 = b[b.length-1]

  if (firstValue1 === firstValue2 || lastValue1 === lastValue2) {
    return true;
  } else {
    return false;
  }
}

function endsMeet(values, n) {
  var newArray = []
  var arrayLimit = (values.length - 1 - n)
  if (values === undefined || values.length < n || n < 0 || Number.isInteger(n)) {
    return newArray;
  } else {
    for (i = 0; i < n; i++) {
      let beginningValue = values[i]
      newArray.push(beginningValue)
    }
    for (i = n - 1; i > arrayLimit; i--) {
      let thisValue = values[i]
      newArray.push(thisValue)
    }
  }
}

function difference(numbers) {
  function checkNumber(aNumber) {
    return Number.isInteger(aNumber)
  }
  if (numbers == undefined || numbers.length < 1 || { // check to see if is a number )
    return undefined;
  } else {
    let ascending = numbers.sort(function(a, b){return a - b});
    let smallest = numbers[0]
    let descending = numbers.sort(function(a, b){return b - a});
    let largest = numbers[0]
    let difference = largest - smallest;
    return difference;
  }
}

function max(number) {
  // write your code here
}

function middle(values) {
  // write your code here
}

function increasing(numbers) {
  // write your code here
}

function everywhere(values, x) {
  // write your code here
}

function consecutive(numbers) {
  // write your code here
}

function balance(numbers) {
  // write your code here
  console.log("test");
}

function clumps(values) {
  // write your code here
}

/*
 * Exports all functions for use in external grader.js file. Do not modify.
 */

module.exports = {
  commonEnd,
  endsMeet,
  difference,
  max,
  middle,
  increasing,
  everywhere,
  consecutive,
  balance,
  clumps
};
