/*
* Bonfire: Find the Longest Word in a String
*
* Return the length of the longest word in the 
* provided sentence.
*
* Your response should be a number.
*/

function findLongestWord(str) {
  var words = str.split(" "); //split words into an array
  var longest = words.sort(function (a, b) { return b.length - a.length; })[0];
  return longest.length;
}

findLongestWord("The quick brown fox jumped over the lazy dog"); //should return 6
findLongestWord("May the force be with you") //should return 5