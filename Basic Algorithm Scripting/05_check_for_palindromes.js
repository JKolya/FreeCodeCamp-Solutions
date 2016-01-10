/*
* Bonfire: Check for Palindromes
*
* Return true if the given string is a palindrome. Otherwise, return false.
*/

function palindrome(str) {
  
  str = str.replace(/[\(|\), ._-]+/g, '').toLowerCase();
  var reverseStr = str.split('').reverse().join('');
  
  return reverseStr === str;
}

console.log(palindrome("eye")); //returns true
console.log(palindrome("not a palindrome")); //returns false