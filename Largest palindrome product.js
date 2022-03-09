// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

let a = [];

console.time("num");

for (let i = 100; i < 1000; i++) {
  for (let j = 999; j > 99; j--) {
    let y = i * j;
    let z = parseInt((i * j).toString().split("").reverse().join(""));
    if (y == z) a.push(y);
  }
}

// this prints an array with all the palindromes of the product of two 3-digit numbers
console.log(a);

console.log(Math.max.apply(null, a));

console.timeEnd("num");

const b = new Set(a);
console.log(b);
console.log(
  `There are ${b.size} palindromes of the results of the product of two 3-digit numbers`
);
