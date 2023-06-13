// Helper function to find primes
function isPrime(num) {
  if (num < 2) return false;
  if (num === 2) return true;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function sumPrimes(num) {
  let sum = 0;
  // Go through each number, check if it's a prime,
  // and if so, add it to the sum
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      sum += i
    }
  }
  
  return sum;
}

sumPrimes(10);
