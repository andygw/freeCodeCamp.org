function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    let new_str = "";
    for (let i = 0; i < num; i++) {
      new_str += str;
    }
    
    return new_str;
  }
}

repeatStringNumTimes("abc", 3);
