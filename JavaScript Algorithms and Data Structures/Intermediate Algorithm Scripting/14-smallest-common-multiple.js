// Helper function to find all the primes for a given number
function primeGenerator(num) {
  const primes = {};
  
  for (let current_num = 2; current_num <= num; current_num++) {

    // See if the current_num is divisible by the main num
    while (num % current_num === 0) {

      // If current_num already has a counter, increment it.
      // If not, initialize the count at 1.
      primes[current_num] = (primes[current_num]) ? primes[current_num] + 1 : 1;

      // Divide by the current i to prep for the next iteration
      num /= current_num;
    }
  }
  
  return primes;
}

function smallestCommons(arr) {
  // Find the min and max
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  
  // Storage for the prime factors
  let primes = {}

  for (let current_num = min; current_num <= max; current_num++) {
    
    // Find the prime factors for the current number
    const current_primes = primeGenerator(current_num);

    // Iterate through those prime factors
    for (let factor in current_primes) {

      // Does the overall prime list lack the current factors?
      const not_set_yet = !primes[factor]
      
      // Or does the current number have more instances of the given prime factors
      // than the overall prime list has?
      const more_factors_in_current = current_primes[factor] > primes[factor]
      
      // If so, set the overall prime list to store the current prime factor
      if (not_set_yet || more_factors_in_current) {
        primes[factor] = current_primes[factor]
      }
    }
  }

  // Multiply the prime factors together to find the lowest common multiple
  let lcm = 1;
  for (let factor in primes) {
    lcm *= factor ** primes[factor]
  }

  return lcm;
}

smallestCommons([1,5]);
