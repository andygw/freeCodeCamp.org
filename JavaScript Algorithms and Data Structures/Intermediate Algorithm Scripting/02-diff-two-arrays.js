function diffArray(arr1, arr2) {
  const newArr = [];

  // Filter each array to find things that aren't in the other
  const new_arr1 = arr1.filter(item => {
    return !arr2.includes(item);
  })
  const new_arr2 = arr2.filter(item => {
    return !arr1.includes(item);
  })

  return newArr.concat(new_arr1).concat(new_arr2);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
