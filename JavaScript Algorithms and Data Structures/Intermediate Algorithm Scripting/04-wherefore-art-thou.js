function whatIsInAName(collection, source) {
  // Array to store the final result
  const new_arr = [];

  // Array of keys used in the source
  const keys = Object.keys(source);
  
  // Loop through each object in the collection
  for (const item in collection) {
    // For each of the source keys, check that the collection item
    // using that key matches the source item using that key. If
    // it does, add it to the final array
    if (keys.every(key => collection[item][key] === source[key])) {
      new_arr.push(collection[item]);
    }
  }
  
  return new_arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
