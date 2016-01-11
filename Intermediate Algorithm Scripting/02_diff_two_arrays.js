/*
* Bonfire: Diff Two Arrays
*
* Compare two arrays and return a new array 
* with any items only found in one of the original arrays.
*/ 

function diff(arr1, arr2) {
  var newArr = [];
  var i;
  newArr = newArr.concat(indexCheck(arr1, arr2));
  newArr = newArr.concat(indexCheck(arr2, arr1));
  return newArr;
}

function indexCheck(arr1, arr2) {
  var diff = [];
  for(i=0; i<arr1.length; i++) {
    if (arr2.indexOf(arr1[i]) === -1) diff.push(arr1[i]);
  }
  return diff;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);