// MAP

//This method creates a new array with the results of calling a provided function on every element in this array.

let arrMap = [1, 2, 3, 4, 5, 6];
// Multiply each value by 2

let newArrMap = arrMap.map(function (item) {
  return item * 2;
});

// arrow function
let newArrMap1 = arrMap.map((item) => {
  return item * 2;
});

// arrow function return default
let newArrMap2 = arrMap.map((item) => item * 2);

console.log(newArrMap);
// Par

// Solution
// console.log("Solution arrMap",newArrMap );
// console.log("Solution arrMapPair",newArrPair );

// FILTER

//This method creates a new array with only elements that passes the condition inside the provided function.

let arrFilter = [1, 2, 3, 4, 5, 6];

// Filter values by odds
let newArrFilter = arrFilter.filter((item) => {
  if (item % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

let newArrFilter1 = arrFilter.filter((item) => (item % 2 === 0 ? true : false));
// Solution
console.log("Solution arrFilter", newArrFilter1);

// SORT

// This method is used to arrange/sort array’s elements either in ascending or descending order.

let arrSort = [2, 4, 5, 3, 1, 6];

// Order array ascending

// Solution

let newArrSortAsc = arrSort.sort((item1, item2) => (item1 > item2 ? 1 : -1));

let newArrSortDesc = arrSort.sort((item1, item2) => (item1 > item2 ? -1 : 1));
/*

TERNARY

if(item1  > item2 ) {
  return 1
}else {
  return -1
}

item1 > item2 ? 1 : -1
*/

// ASC
console.log(newArrSortAsc);

// DESC
console.log(newArrSortDesc);

// FOREACH

// This method helps to loop over array by executing a provided callback function for each element in an array.

let arrForEach = [1, 2, 3, 4, 5, 6];

// Return each element with string
arrForEach.forEach((item, index) => {
  arrForEach[index] = item + " hola";
});

for (i = 0; i < arrForEach.length; i++) {
  arrForEach[i] = arrForEach[i] + " hola";
}

// Solution

console.log(arrForEach);

// CONCAT

// This method is used to merge two or more arrays and returns a new array, without changing the existing arrays.

let arrConcat1 = [1, 2, 3];
let arrConcat2 = [4, 5, 6];

// Concat 2 arrays

let arrConcatFinal = arrConcat2.concat(arrConcat1);
console.log("solution concat", arrConcatFinal);
// Solution

// EVERY

// This method checks every element in the array that passes the condition, returning true or false as appropriate.

let arrEvery = [1, 3, 5, 7, 9, 12];

// Check if array elements are odds numbers

// console.log("solution every", finalArrEvery)
// Solution

// SOME

// This method checks if at least one element in the array that passes the condition, returning true or false as appropriate.

let arrSome = [1, 3, 4, 5, 6, 9];

// Check if exists numbers greater than 5

// Solution
// console.log("solution some", finalArrSome)

// INCLUDES

// This method checks if an array includes the element that passes the condition, returning true or false as appropriate.

let arrIncludes = [1, 2, 3, 4, 5];

// Check if number 2 exists in array

//Solution
// console.log("solution includes",finalArrIncludes)
// JOIN

// This method returns a new string by concatenating all of the array’s elements separated by the specified separator.

let arrJoin = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", "!"];

// Return string

// Solution
// console.log(finalArrJoin)

// REDUCE

// This method applies a function against an accumulator and each element in the array to reduce it to a single value.

let arrReduce = [1, 3, 4, 5, 8, 9];

// Return sum of all elements in array

// Solution
// console.log("solution reduce",finalArrReduce)
// FIND

// This method returns the value of the first element in an array that pass the test in a testing function.

let arrFind = [1, 2, 3, 4, 4];

// Find if number 4 exists in array

// Solution
// console.log("solution find",finalArrFind)

// FINDINDEX

// This method returns the index of the first element in an array that pass the test in a testing function.

let arrFindIndex = [4, 2, 3, 3, 5, 6];

// Find position of number 4 and change it by 9

// Solution
// console.log(arrFindIndex)

// INDEXOF

// This method returns the index of the first occurrence of the specified element in the array, or -1 if it is not found.

// Find if word hello exists in array

let arrIndexOf = ["hello1", "hello", "!"];

// Solution
// console.log(finalArrIndexOf);
// FILL

// This method fills the elements in an array with a static value and returns the modified array.

let arrFill = null;

// Create an array with 4 elements and fill with number 10

// Solution

// SLICE

// This method returns a new array with specified start to end elements.

let arrSlice = [1, 2, 3, 4, 5, 6];

// Slice array from 0 to 3 item

// Solution

// REVERSE

// This method reverses an array in place. Element at last index will be first and element at 0 index will be last.

let arrReverse = [6, 5, 4, 8, 2, 1];

// Reverse array

// Solution

// POP

// This method removes the last element from the end of array and returns that element.

let arrPop = [1, 2, 3, 4];

// Delete last element

// Solution

// SHIFT

// This method removes the first element from an array and returns that element.

let arrShift = [1, 2, 3, 4];

// Remove first element

// Solution

// UNSHIFT

// This method adds one or more elements to the beginning of an array and returns the new length of the array.

let arrUnshift = [1, 2, 3, 4];

// Add number 0 at the beginning of array

// Solution
