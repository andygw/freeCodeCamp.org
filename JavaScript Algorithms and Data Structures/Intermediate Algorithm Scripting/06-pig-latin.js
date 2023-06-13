function translatePigLatin(str) {

  // Check for vowels
  const vowels = /[aeiou]/
  if (vowels.test(str[0])) {
    return str + "way"
  }
  
  // Find the starting consonant cluster
  let consonant_cluster = "";
  for (let i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      break;
    }
    consonant_cluster += str[i]
  }
  
  // Rearrange the string
  str = str.substring(consonant_cluster.length)
    + str.substring(0, consonant_cluster.length)
    + "ay"

  return str;
}

translatePigLatin("consonant");
