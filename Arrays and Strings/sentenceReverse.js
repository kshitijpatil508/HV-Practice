var string = "I am still Itachi Uchiha of the Leaf";

var sentenceArray = string.split(" ");
var sentenceRev = "";
for (i = sentenceArray.length - 1; i >= 0; i--) {
  sentenceRev += sentenceArray[i] + " ";
}

console.log(sentenceRev);
