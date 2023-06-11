function destroyer(arr) {
  // Create an array of items to be destroyed
  const destroy_us = [];
  for (let i = 1; i < arguments.length; i++) {
    destroy_us.push(arguments[i]);
  }
  
  // Filter to find items that shouldn't be destroyed
  const new_arr = arr.filter(
    item => !destroy_us.includes(item)
  );

  return new_arr;
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
