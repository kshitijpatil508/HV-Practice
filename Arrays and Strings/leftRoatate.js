let a2 = [-2, -3, 4, -1, -2, 1, 5, -3, 2, 3, 1, 5, -1, 6, 7, 9, 0, 15];
var a = [-2, -3, 4, -1, -2, 1, 5, -3];
let arr = [1, 2, 3, 4, 5, 6, 7];
let d = 3;
function leftRotate(a, d) {
  for (let i = 0; i < d; i++) {
    a.push(a[i]);
  }
  for (let i = 0; i < d; i++) {
    a.splice(0, 1);
  }
  return a;
}

console.log(`${leftRotate(arr, d)}`);
