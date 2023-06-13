function fearNotLetter(str) {
  // Loop through the characters
  for (let i = 0; i < str.length - 1; i++) {

    // Find the letter that we'd expect to come after the current letter
    const next = str.charCodeAt(i) + 1;
    
    // If that letter doesn't match what comes next in the string, we
    // know it's the missing letter
    if (str[i + 1] != String.fromCharCode(next)) {
      return String.fromCharCode(next);
    }
  };
  
  return undefined;
}

fearNotLetter("abce");
