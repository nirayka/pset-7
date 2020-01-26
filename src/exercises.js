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
  let newA = []
  if (!values || values.length < n || !(n % 1 === 0) || n <= 0) {
    return newA;
  } else {
    if (n === 0) {
      return values;
    } else {
      for (let x = 0; x < n; x++) {
        if (values[x] !== undefined) {
          newA.push(values[x]);
        }
      }
      for (let x = n; x > 0; x--) {
        if (values[values.length - x] !== undefined) {
          newA.push(values[values.length - x]);
        }
      }
      return newA;
    }
  }
}

function difference(numbers) {
  if (numbers == undefined || numbers.length < 1 || numbers.some(isNaN)) {
    return;
  } else {
    let largest = Number(Math.max.apply(null, numbers))
    let smallest = Number(Math.min.apply(null, numbers))
    let difference = largest - smallest;
    return difference;
  }
}

function max(number) {

  if (!number || number.length === 0) {
    return undefined;
  }
  if (number.length % 2 === 0 || number.length < 3 ) {
    return undefined;
  }
  if (number.some(isNaN)) {
    return undefined;
  }
  else {
    var firstValue = number[0];
    var middleValue = number[Math.floor(number.length/2)];
    var lastValue = number[number.length-1];
    var array = [];
    var largest = Number(Math.max.apply(null, array));
    array.push(firstValue, middleValue, lastValue);
    return Number(Math.max.apply(null, array));
  }
}



function middle(values) {
  if (!values || values.length % 2 === 0 || values.length < 3) {
  return [];
} else {
  let newArray = [];
  let middle = Math.floor(values.length / 2);
  newArray.push(values[middle - 1], values[middle], values[middle + 1]);
  return newArray;
  }
}

function increasing(numbers) {
  if (!numbers || numbers.length < 3) {
    return false;
  }
  let flag = false;
  for (let i = 0; i < numbers.length - 2; i++) {
    let index = Number.isInteger(numbers[i]);
    if (index === false) {
      return false;
    }
    let first = numbers[i];
    let second = numbers[i + 1];
    let third = numbers[i + 2];
    let secondIndex = Number.isInteger(second);
    let thirdIndex = Number.isInteger(third);

    if (secondIndex === false || thirdIndex === false) {
      return false;
    }
    if (first < second && second < third) {
      flag = true;
    }
  }
  if (flag) {
    return true;
  } else {
    return false;
  }
}

function everywhere(values, x) {
  let flag;
  if (!values || values.length < 1 || !x) {
    return false;
  } else {
    for (let y = 0; y < values.length - 1; y++) {
      if (values[y].isNaN) {
        flag = false;
        return false;
      }
    }

    let first;
    let second;
    let third;

    for (let i = 0; i < values.length - 1; i++) {
      if (i === 0) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i + 1] === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else if (i === (values.length - 1)) {
        if (values[i] === x) {
          flag = true;
        } else if (values[i - 1]) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      } else {
        second = values[i];
        first = values[i - 1];
        third = values[i + 1];

        if (second === x) {
          flag = true;
        } else if (first === x) {
          flag = true;
        } else if (third === x) {
          flag = true;
        } else {
          flag = false;
          return false;
        }
      }
    }

    if (flag === false) {
      return false;
    } else {
      return true;
    }
  }
}


function consecutive(numbers) {
  if (!numbers || numbers.length < 3) {
      return false;
    }
    let numeral = true;
    for (i = 0; i <= numbers.length - 1; i++) {
      if (isNaN(numbers[i])) {
        numeral = false;
      }
    }
    if (numeral === false) {
      return false;
    }
    let status = false;
    for (h = 0; h <= numbers.length - 1; h++) {
      let one = numbers[h] % 2;
      let two = numbers[h + 1] % 2;
      let three = numbers[h + 2] % 2;
      if (one === 0 && two === 0 && three === 0) {
        return true;
      } else if (one > 0 && two > 0 && three >0) {
        return true;
      } else {
        status = false;
      }
    }
    if (status === false) {
      return false;
    }
}

function balance(numbers) {
    var count = 0;
    var size = 0;
    var firstSum = 0;
    var secondSum = 0;

    if (!numbers || numbers.length < 2) {
      return false;
    }
    for (i = 0; i < numbers.length; i++) {
      if (!(Number.isInteger(numbers[i]))) {
        return false;
      }
    }
    for (z = 0; z < numbers.length; z++) {
      if (numbers[z] == undefined) {
        return true;
      }
    }
    for (x = numbers.length; x > -1; x--) {
      firstSum = 0
      secondSum = 0
      for (y = numbers.length - x; y > -1; y--) {
        firstSum = firstSum + numbers[y]
      }
      for(a = numbers.length - 1; a > numbers.length - x; a--) {
        secondSum = secondSum + numbers[a]
      }
      if (secondSum == firstSum) {
        count = 1
        return true;
      }
    }
    if (count == 0) {
      return false;
    }
}

function clumps(values) {
  var clumpFinalIndex;
  var clump = 0;
  var value;
  var sameValues;

  if (!values) {
    return -1;
  }
  else {
     for (let i = 0;i < values.length - 1;i++) {
         let test2 =i + 1;
         let test1 =i;
         value = values[test1];
         sameValues = values[test2];
         if (value === sameValues) {
            while (value === sameValues) {
                 value = values[test1++];
                 sameValues = values[test2++];
              }
             clump++;
             clumpFinalIndex = test1 - 1;
            i = clumpFinalIndex;
          }
       }
    return clump;
   }
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
