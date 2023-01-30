let vowel = ["a", "e", "i", "o", "u"];

let string = "apple mango banana grapes";
let stringArr = string.split("");
let vowelCount = 0,
  consonantCount = 0;

stringArr.forEach((element) => {
  if (vowel.indexOf(element) != -1) {
    vowelCount++;
  } else if (vowel.indexOf(element) == -1 && element != " ") {
    consonantCount++;
  }
});

console.log(`Vowel Count: ${vowelCount}\nConsonant Count: ${consonantCount} `);
