let str = "one two three";
let fixRegex = /(.+) (.+) (.+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);
