function mutation(arr) {
  // Make sure the checks are case-insensitive
  let word1 = arr[0].toLowerCase()
  let word2 = arr[1].toLowerCase()
  
  // Iterate through each letter of the second word
  for (let i = 0, len = word2.length; i < len; i++) { 
    
    // If the checked letter isn't in the first word, return false
    if (!word1.includes(word2[i])) {
      return false;
    }
  }
  
  // After we've checked all letters, we know we can return true
  return true;
}

mutation(["hello", "hey"]);
