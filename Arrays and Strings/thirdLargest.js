let a = [2, 3, 1, 5, 6, 7, 9, 0, 15];

function largest3rd(a) {
  n = a.length;
  let max = a[0];
  let max1 = 0,
    max2 = 0;

  for (let i = 0; i < n; i++) {
    if (a[i] > max) {
      max = a[i];
    }
  }

  for (let i = 0; i < n; i++) {
    if (a[i] > max1 && a[i] < max) {
      max1 = a[i];
    }
  }
  for (let i = 0; i < n; i++) {
    if (a[i] > max2 && a[i] < max1) {
      max2 = a[i];
    }
  }

  console.log(`3rd Largest value in array is: ${max2}`);
}

largest3rd(a);
