function largestOfFour(arr) {
  const final_arr = [];
  
  // Loop through the top-level array,
  // find the max number in each sub-array,
  // and add that number into the final array
  for (let sub_arr in arr) {
    final_arr.push(Math.max(...arr[sub_arr]));
  }

  return final_arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
