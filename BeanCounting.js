var charNum = 0;
function countBs(string) {
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) == "B") {
      charNum += 1
    }  
  }
  return charNum;
}

var char = 0;
function countChar(string, letter) {
  for (i = 0; i < string.length; i++) {
    if (string.charAt(i) == letter) {
      char += 1
    }
  }
  return char;
}
  
console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4
