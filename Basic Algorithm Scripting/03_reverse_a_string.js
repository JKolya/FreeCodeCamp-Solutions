/*
* Bonfire: Reverse a String 
*
* Reverse the provided string.
* You may need to turn the string into an array before you can reverse it.
* Your result must be a string.
*/

function reverseString(str) {
  var array = str.split("").reverse().join("");
  return array;
}

reverseString("hello");
reverseString("Howdy");
reverseString("Greetings from Earth");