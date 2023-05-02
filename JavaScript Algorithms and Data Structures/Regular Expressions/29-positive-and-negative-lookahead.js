let sampleWord = "astronaut";
let pwRegex = /(?=.{6,})(?=.*\d{2,})/; // Change this line
let result = pwRegex.test(sampleWord);
