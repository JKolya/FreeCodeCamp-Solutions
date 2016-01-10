/*
* Bonfire: Chunky Monkey 
*
* Write a function that splits an 
* array (first argument) into groups 
* the length of size (second argument) 
* and returns them as a multidimensional 
* array.
*/

function chunk(arr, size) {
  var chunks = [];
  for (var i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
  return chunks;
}

console.log(chunk(["a", "b", "c", "d"], 2));
