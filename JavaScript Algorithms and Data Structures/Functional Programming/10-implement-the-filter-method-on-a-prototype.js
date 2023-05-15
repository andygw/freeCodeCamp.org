Array.prototype.myFilter = function(callback) {
  const newArray = [];

  // Only change code below this line
  for (let i = 0, len = this.length; i < len; i++) {
    if (callback(this[i], i, this)) {
      newArray.push(this[i])
    }
  }
  // Only change code above this line

  return newArray;
};
