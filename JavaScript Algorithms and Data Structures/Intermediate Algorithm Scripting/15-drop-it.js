function dropElements(arr, func) {
  let new_arr = [];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      new_arr = arr.slice(i);
      break;
    }
  };
  
  return new_arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });
