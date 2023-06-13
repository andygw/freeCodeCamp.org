function uniteUnique(arr) {
  const new_arr = [];

  for (let i = 0; i < arguments.length; i++) {
    const sub_array = arguments[i];

    for (const num in sub_array) {
      const this_num = sub_array[num];
      
      if (!new_arr.includes(this_num)) {
        new_arr.push(this_num);
      }
    }
  }
  
  return new_arr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
