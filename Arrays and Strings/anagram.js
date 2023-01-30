var string1 = "loop";
var string2 = "pool";

var str1Arr = string1.split("");
var str2Arr = string2.split("");

str1Arr.sort();
str2Arr.sort();

if (str1Arr.join("") == str2Arr.join("")) {
  console.log(`${string1} and ${string2} are anagram`);
} else {
  console.log(`${string1} and ${string2} are not anagram`);
}
