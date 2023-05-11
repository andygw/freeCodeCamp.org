function bouncer(arr) {
  const falsy = [false, null, 0, "", undefined, NaN]
  const vetted_arr = []
  
  for (let i = 0; i < arr.length; i++) {
    if (!falsy.includes(arr[i])) {
      vetted_arr.push(arr[i])
    }
  }
  
  return vetted_arr;
}

bouncer([7, "ate", "", false, 9]);
