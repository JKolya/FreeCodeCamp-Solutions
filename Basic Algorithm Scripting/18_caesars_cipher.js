/*
* Bonfire: Caesars Cipher
*
* One of the simplest and most widely 
* known ciphers is a Caesar cipher, also known 
* as a shift cipher. In a shift cipher the meanings 
* of the letters are shifted by some set amount.
*
* A common modern use is the ROT13 cipher, where the 
* values of the letters are shifted by 13 places. 
* Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.
*
* Write a function which takes a ROT13 encoded string 
* as input and returns a decoded string.
*
* All letters will be uppercase. Do not transform any 
* non-alphabetic character (i.e. spaces, punctuation), 
* but do pass them on.
*/

function rot13(encodedStr) {
  var codeArr = encodedStr.split("");  // String to Array
  var decodedArr = []; // Your Result goes here
  // Only change code below this line
  for (var i = 0; i < codeArr.length; i++) {
    var unicode = codeArr[i].charCodeAt(0) - 13;
    if (unicode < 65) {
      unicode += 26;
    }
    if (codeArr[i].charCodeAt(0) < 65 || codeArr[i].charCodeAt(0) > 90) {
      decodedArr.push(codeArr[i]);
      } else { 
        decodedArr.push(String.fromCharCode(unicode));
    }
  }
  // Only change code above this line
  return decodedArr.join(""); // Array to String
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");