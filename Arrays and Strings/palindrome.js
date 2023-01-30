// var string = "kshitij";
var string = "malayalam";

var stringReverse = "";

for (let i = string.length - 1; i >= 0; i--) {
  stringReverse += string[i];
}

if (stringReverse == string) {
  console.log(string, "is a Palindrome");
} else console.log(string, "is not a Palindrome");
