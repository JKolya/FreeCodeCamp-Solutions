
/*
* Bonfire: Truncate a string
*
* Truncate a string (first argument) if 
* it is longer than the given maximum 
* string length (second argument). Return 
* the truncated string with a "..." ending.
*
* Note that the three dots at the end add 
* to the string length.
*
* If the num is less than or equal to 3, 
* then the length of the three dots is not 
* added to the string length.
*/

function truncate(str, num) {
	//if the string is lessthan or equal to 3
	//return the string without dots
  	if (str.length <= num ) return str;
  	//the 3 dots add to the length so set num -3
  	if (str.length > 3 && num > 3) num -= 3;
  	return str.slice(0, num) + "...";
}
truncate("A-tisket a-tasket A green and yellow basket", 11);