/*
* Bonfire: Slasher Flick
*
* Return the remaining elements of 
* an array after chopping off n 
* elements from the head.
*
* The head meaning the beginning 
* of the array, or the zeroth index
*/

function slasher(arr, howMany) {
	//if we're chopping more numbers than are
	//in the array return an empty array
	if (howMany > arr.length) return [];
	//slice from the beginning of the array 
	return arr.slice(howMany, arr.length);
}

slasher([1, 2, 3], 2); //should return [3]