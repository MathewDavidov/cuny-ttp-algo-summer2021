// Problem Statement #

// Given an array of characters where each character represents a fruit tree, you are given two baskets, and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

// You can start with any tree, but you can’t skip a tree once you have started. You will pick one fruit from each tree until you cannot, i.e., you will stop when you have to pick from a third fruit type.

// Write a function to return the maximum number of fruits in both baskets.

// Have to pick an index that bares the most fruit without changing to a 3rd.
// If the window reaches a new "fruit", it would start from the new fruits_into_baskets, but keep the old tree record. Then it would compare the two and whichever has the most fruit would be returned.

// variables: windowStart, windowEnd, current, maxTree

//edge cases:if empty, return 0

function fruits_into_baskets(fruits) {
  // TODO: Write code here

  let windowStart = 0;
  let baskets = new Map();
  let maxTree = new Map();

  if(fruits.length < 1) return 0;

  for(let windowEnd = 0; windowEnd < fruits.length; windowEnd++){
    
    if(!baskets.has(fruits[windowEnd])){
    baskets[fruits[windowEnd]] = 1}

    else baskets[fruits[windowEnd]]++

    if(baskets.size == 2) maxTree = Math.max(maxTree, baskets)    
    
    if(baskets.size > 2) {              //check if more than 2 fruits

    if(baskets[fruits[windowStart]] == 0) baskets.delete(fruits[windowStart])

    else baskets[fruits[windowStart]]--
    }
  }

  return(maxTree.size);


}

console.log(
  `Maximum number of fruits: ${fruits_into_baskets(['A', 'B', 'C', 'A', 'C'])}`
);
console.log(
  `Maximum number of fruits: ${fruits_into_baskets([
    'A',
    'B',
    'C',
    'B',
    'B',
    'C',
  ])}`
);

// Solution
// -----
// let windowStart = 0,
// maxLength = 0,
// fruitFrequency = {};

// // try to extend the range [windowStart, windowEnd]
// for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
// const rightFruit = fruits[windowEnd];
// if (!(rightFruit in fruitFrequency)) {
//   fruitFrequency[rightFruit] = 0;
// }
// fruitFrequency[rightFruit] += 1;

// // shrink the sliding window, until we are left with '2' fruits in the fruit frequency dictionary
// while (Object.keys(fruitFrequency).length > 2) {
//   const leftFruit = fruits[windowStart];
//   fruitFrequency[leftFruit] -= 1;
//   if (fruitFrequency[leftFruit] === 0) {
//     delete fruitFrequency[leftFruit];
//   }
//   windowStart += 1; // shrink the window
// }
// maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
// }

// return maxLength;
