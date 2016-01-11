/*
* Bonfire: Roman Numeral Converter
*
* Convert the given number into a roman numeral.
*
* All roman numerals answers should be provided in upper-case.
*/


function convert(num) {
  var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],
                      ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"], 
                      ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],
                      ["","M", "MM", "MMM", "MMMM"]];

  var numeral = "";
  //set numerals starting right to left. to do that reverse the number
  var numSplit = num.toString().split('').reverse();

  //loop through the reversed string
  for (var i=0; i < numSplit.length; i++){
  	//apply numeral from array [0]1-9 [1] 10,20,30...[2]100,200...
    numeral = numeralCodes[i][numSplit[i]] + numeral;
  }
  return numeral;
}

convert(29); //returns XXIX