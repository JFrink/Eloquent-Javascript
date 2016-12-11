var string = ""

for (i = 0; i < 8; i++) {
  for (r = 0; r < 8; r++) {
	if (r % 2 == 0) {
      string += "#"
      //console.log(string);
    } else {
      string += " "
      //console.log(string);
  	}
  }
  string += "\n"
}

console.log(string)
