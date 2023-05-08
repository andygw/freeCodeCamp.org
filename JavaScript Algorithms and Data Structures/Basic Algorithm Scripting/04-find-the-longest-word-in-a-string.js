function findLongestWordLength(str) {
  const str_array = str.split(" ");
  let longest = 0;

  for (let word in str_array) {
    if (str_array[word].length > longest) {
      longest = str_array[word].length;
    };
    
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
