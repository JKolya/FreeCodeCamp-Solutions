/*
* Bonfire: Title Case a Sentence 
*
* Return the provided string with the first 
* letter of each word capitalized. 
* Make sure the rest of the word is in lower case.
*
* For the purpose of this exercise, 
* you should also capitalize connecting words 
* like "the" and "of".
*/

function titleCase(str) {
  words = str.toLowerCase().split(" "); //split words into array
  for (var a in words) {
  	//first character toUpperCase then add rest of the word
    words[a] = words[a].charAt(0).toUpperCase() + words[a].substr(1);
  }
  return words.join(" ");
}

titleCase("I'm a little tea pot");