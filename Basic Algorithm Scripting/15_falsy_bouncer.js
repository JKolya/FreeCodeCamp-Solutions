/*
* Bonfire: Falsy Bouncer 
*
* Remove all falsy values from an array.
*
* Falsy values in javascript are false, 
* null, 0, "", undefined, and NaN.
*/

function bouncer(arr) {
  var truthyArr = [];
   for (var i = 0; i < arr.length; i++) {
        if (arr[i]) truthyArr.push(arr[i]);
    }
  return truthyArr;
}

bouncer([7, "ate", "", false, 9]); //should return [7, "ate", 9]