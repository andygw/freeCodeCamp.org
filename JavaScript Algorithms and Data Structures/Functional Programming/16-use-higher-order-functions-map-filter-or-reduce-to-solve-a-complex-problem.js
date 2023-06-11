const squareList = arr => {
  // Only change code below this line
  const positiveSquaredInts = arr
    // Find the positive ingegers
    .filter(nums => nums > 0 && Number.isInteger(nums))
    // Find their squares
    .map(nums => nums**2);

  return positiveSquaredInts;
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
