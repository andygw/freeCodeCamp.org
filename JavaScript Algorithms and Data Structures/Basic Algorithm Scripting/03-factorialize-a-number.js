function factorialize(num) {
  let product = 1
  
  for (let i = num; i > 0; i--) {
    product *= i
  }
  
  return product;
}

factorialize(5);
