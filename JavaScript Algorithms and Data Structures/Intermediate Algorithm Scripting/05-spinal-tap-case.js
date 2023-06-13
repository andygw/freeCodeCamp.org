function spinalCase(str) {
  // Regex solution for words connected without spaces
  const lower_upper = /([a-z])([A-Z])/g;
  let new_str = str.replace(lower_upper, "$1 $2");

  // Convert to lowercase
  new_str = new_str.toLowerCase()
    // Split it up at any non-letter character
    .split(/[^A-Za-z]/)
    // Rejoin with dashes
    .join("-");
  
  return new_str;
}

spinalCase('This Is Spinal Tap');
