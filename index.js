function hasTargetSum(array, target) {
  // Write your algorithm here
	for (let i = 0; i < array.length; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] + array[j] === target) {
				return true;
			}
		}
	}
	return false;
}

/* 
  Write the Big O time complexity of your function here
  Big O: O(n^2)
*/

/* 
  Add your pseudocode here
  Psuedocode:
  1. Loop through the array
  2. Loop through the array again
  3. If the sum of the two numbers is equal to the target, return true
  4. If the sum of the two numbers is not equal to the target, return false
*/

/*
  Add written explanation of your solution here
  Explanation:
  1. We loop through the array and check if the sum of the two numbers is equal to the target.
  2. If it is, we return true.
  3. If it is not, we return false.
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
	// add your own custom tests in here
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");
	console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));
	console.log("Expecting: true");
	console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");
	console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
	console.log("Expecting: false");
	console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
module.exports = hasTargetSum;
