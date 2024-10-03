// ----------------------------------------------
// Activity 4: Array Operations
// ----------------------------------------------

// Topic: Creating and Accessing Arrays

// 1. Declare an array named 'fruits' and initialize it with four fruits: 'apple', 'banana', 'orange', and '_____'. 
// Add a new fruit to the array using the push() method.
let fruits = ['apple', 'banana', 'orange', '_____'];
fruits.push('kiwi');  // Add a new fruit to the end of the array
console.log('Fruit array:', fruits);

// 2. Access and display the first and last fruit in the array using console.log().
// Use the correct array index or array property.
console.log('First fruit:', fruits[0]);  // Fill in the index for the first fruit (Hint: index starts at 0)
console.log('Last fruit:', fruits[fruits.length - 1]);  // Use the correct property to access the last fruit (Hint: length - 1)

// Topic: Modifying Arrays

// 3. Replace the second fruit in the array with 'grape'. Remove the last fruit using the pop() method.
// Display the updated array.
fruits[1] = 'grape';  // Update the second fruit
fruits.pop();  // Remove the last fruit (Use the correct method)
console.log('Modified array:', fruits);

// Topic: Iterating Over Arrays

// 4. Use a for loop to iterate over the 'fruits' array and display each fruit.
for (let i = 0; i < fruits.length; i++) {  // Fill in the correct loop condition
  console.log(fruits[i]);  // Display each fruit
}

// 5. Use the forEach() method to iterate over the 'fruits' array and display each fruit.
fruits.forEach(function(fruit) {  // Use the correct method to iterate over the array
  console.log(fruit);  // Display each fruit
});

// Topic: Array Methods

// 6. Declare an array named 'numbers' with the following values: [10, 20, 30, 40, 50].
// Use the following methods on the 'numbers' array:
//   a) Find the index of the number '30'.
//   b) Check if the number '40' is in the array.
//   c) Add '60' to the end of the array using the push() method.
//   d) Remove the first number using the shift() method.

let numbers = [10, 20, 30, 40, 50];

console.log('Index of 30:', numbers.indexOf(30));  // Find the index of 30
console.log('Includes 40:', numbers.includes(40));  // Check if 40 is included

numbers.push(60);  // Add 60 to the array
numbers.shift();  // Remove the first element
console.log('Updated array:', numbers);

// Topic: Slicing and Splicing Arrays

// 7. Use the slice() method to create a subarray from the second to the fourth element of 'numbers'.
// Display the sliced array.
let slicedArray = numbers.slice(1, 4);  // Slice from index 1 to index 3
console.log('Sliced array:', slicedArray);

// 8. Use the splice() method to remove the second and third elements from 'numbers'.
// Display the removed elements and the updated array.
let removedElements = numbers.splice(1, 2);  // Remove two elements starting from index 1
console.log('Removed elements:', removedElements);
console.log('Updated array:', numbers);