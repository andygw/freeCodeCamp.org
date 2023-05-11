function frankenSplice(arr1, arr2, n) {
  const start = arr2.slice(0, n);
  const end = arr2.slice(n);
  
  return start.concat(arr1).concat(end);
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);
