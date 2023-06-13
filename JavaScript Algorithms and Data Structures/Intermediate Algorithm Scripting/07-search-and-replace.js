function myReplace(str, before, after) {
  // Check if the first letter is lowercase
  const lowercase = /[a-z]/.test(before[0]);
  
  // Make sure the replacement word maintains the correct case
  (lowercase) ?
    after = after[0].toLowerCase() + after.slice(1)
    : after = after[0].toUpperCase() + after.slice(1)
  
  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
