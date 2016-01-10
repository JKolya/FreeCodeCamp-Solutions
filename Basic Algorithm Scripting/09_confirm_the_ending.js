/*
* Bonfire: Confirm the Ending
*
* Check if a string (first argument) 
* ends with the given target string 
* (second argument).
*/


function end(str, target) {
  return str.substring(str.length - target.length) === target;
}

end("Bastian", "n"); //returns true