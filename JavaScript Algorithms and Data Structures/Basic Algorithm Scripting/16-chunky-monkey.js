function chunkArrayInGroups(arr, size) {
  const new_arr = []

  for (let i = 0, len = arr.length; i < len; i += size) {
    new_arr.push(arr.slice(i, i + size))
  }

  return new_arr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
