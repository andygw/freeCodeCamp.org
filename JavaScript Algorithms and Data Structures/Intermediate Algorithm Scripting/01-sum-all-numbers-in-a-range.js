function sumAll(arr) {
  let sum = 0;
  const start = Math.min(arr[0], arr[1]);
  const end = Math.max(arr[0], arr[1]);
  
  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum;
}

sumAll([1, 4]);
