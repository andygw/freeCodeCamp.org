function sumFibs(num) {
  // Build an array of Fibonacci numbers up to the given number
  const fib_nums = [0, 1];
  for (let i = 2; fib_nums[i - 1] + fib_nums[i - 2] <= num; i++) {
    const fib_num_1 = fib_nums[fib_nums.length - 1];
    const fib_num_2 = fib_nums[fib_nums.length - 2];
    fib_nums.push(fib_num_1 + fib_num_2);
  };
  
  // Reduce to the odd sums
  const odd_sums = fib_nums.reduce((sum, current_num) => {
    if (current_num % 2 !== 0) {
      return sum + current_num;
    } else {
      return sum;
    }
  });
  
  return odd_sums;
}

sumFibs(4);
