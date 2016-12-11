var string = "";  
var size = 8;

for (i = 0; i < size; i++) {
    for (r = 0; r < size; r++) {
        if (i % 2 == 0) {
	   if (r % 2 == 0) {
      	        string += "#";
    	   } else {
      		string += " ";
           }
  	} else {
     	    if (r % 2 == 0) {
                string += " ";
            } else {
                string += "#"
            }
         }
     }
    string += "\n"
}

console.log(string)
