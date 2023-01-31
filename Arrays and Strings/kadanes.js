let a2 = [-2, -3, 4, -1, -2, 1, 5, -3, 2, 3, 1, 5, -1, 6, 7, 9, 0, 15];
var a = [-2, -3, 4, -1, -2, 1, 5, -3];

function kadanes(a) {
  n = a.length;
  let current_max = 0;
  let prev_max = -10000000e12;

  for (let i = 0; i < n; i++) {
    current_max = current_max + a[i];
    if (prev_max < current_max) {
      prev_max = current_max;
    }
    if (current_max < 0) {
      current_max = 0;
    }
  }
  return prev_max;
}

console.log(kadanes(a2));
