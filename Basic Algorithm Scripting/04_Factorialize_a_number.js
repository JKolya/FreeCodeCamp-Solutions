/*
* Bonfire: Factorialize a Number
*
* Return the factorial of the provided integer.
* If the integer is represented with the letter n, 
* a factorial is the product of all positive 
* integers less than or equal to n.
*/

function factorialize(num) {
  var n = 1;
  for (i = 1; i <= num; i++) {
        n *= i;
    }
  
  return n;
}

factorialize(5);