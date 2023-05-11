function titleCase(str) {
  // Turn the sentence into an array of words
  const str_arr = str.split(" ");
  
  // Iterate through each word in the array
  for (let i = 0; i < str_arr.length; i++) {
    // Change the first letter of the word to uppercase
    const first = str_arr[i][0].toUpperCase();
    
    // Change the remainder of the word to lowercase.
    const rest = str_arr[i].slice(1, str_arr[i].length).toLowerCase();
    
    // Replace the word in the array with those parts put together
    str_arr[i] = first + rest;
  }
 
  // Rejoin the array into a sentence.
  return str_arr.join(" ");
}

titleCase("I'm a little tea pot");
