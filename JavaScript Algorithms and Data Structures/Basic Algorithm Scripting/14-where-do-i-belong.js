function getIndexToIns(arr, num) {
  // Put the number into the array
  arr.push(num);

  // Sort the array
  arr.sort((x, y) => {
    return x - y;
  });
  
  // Find the index of the number within the sorted array
  return arr.indexOf(num);
}

getIndexToIns([40, 60], 50);
