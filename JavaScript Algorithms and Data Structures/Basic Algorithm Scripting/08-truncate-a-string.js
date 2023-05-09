function truncateString(str, num) {
  // Turn the string into an array
  const str_arr = str.split("");
  
  // Take the characters from the start up to num
  const trunc_arr = str_arr.slice(0, num);

  // Rejoin those into a string, and append the ellipsis
  const rejoined_str = trunc_arr.join("") + "...";

  // If the num is smaller than the string's length, return the modified
  // string from above. Otherwise, just return the original string.
  return (num < str.length) ? rejoined_str : str;

  // This can all be done in one line, but it's less readable.
  // return (num < str.length) ? str.split("").slice(0, num).join("") + "..." : str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
