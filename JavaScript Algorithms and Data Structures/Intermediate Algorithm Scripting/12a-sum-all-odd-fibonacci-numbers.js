function sumFibs(num) {
  // Build an array of Fibonacci numbers up to the given number
  const fib_nums = [0, 1];
  for (let i = 2; fib_nums[i - 1] + fib_nums[i - 2] <= num; i++) {
    const fib_num_1 = fib_nums[fib_nums.length - 1];
    const fib_num_2 = fib_nums[fib_nums.length - 2];
    fib_nums.push(fib_num_1 + fib_num_2);
  };
  
  // Filter down to the odd numbers
  const odd_nums = fib_nums.filter(odds => (odds % 2 !== 0));

  // Simple reduce function to add the results up
  const odd_sums = odd_nums.reduce((sum, current_num) => {
    return sum + current_num;
  });
  
  return odd_sums;
}

sumFibs(4);
