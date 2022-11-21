// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process
// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest
// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest



// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
// Pseudocode
    // Create describe statement. Within quotes choose the name for your future function, which you are describing in this section (removeFirstAndShuffle).
    // Create it statement. Within quotes input a descriptor of the function's purpose.
    // Per set of given variables (colors1/2 & sampleOutput1/2), create expect statements.
        // Provide arguments of function name and input variables (removeFirstAndShuffle(colors1/2)). Append with .toEqual()
    // Provide arguments of (expect.arrayContaining()) and output variables (sampleOutput1/2)
    // $ yarn jest
describe("removeFirstAndShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        const sampleOutput1 = ["yellow", "blue", "pink", "green"]
        expect(removeFirstAndShuffle(colors1)).toEqual(expect.arrayContaining(sampleOutput1))
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        const sampleOutput2 = ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(removeFirstAndShuffle(colors2)).toEqual(expect.arrayContaining(sampleOutput2))
    })
})
// $ yarn jest (results)
    // ReferenceError: removeFirstAndShuffle is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       1 failed, 1 total
// b) Create the function that makes the test pass.
// Pseudocode
    // Create function (removeFirstAndShuffle). array as parameter.
    // Call .shift() upon array. This step ensures that the array we pass as the argument will have its first item removed.
    // Use spread operator to copy this new array without the first item, and assign it to a new array variable (newArray).
    // Use for loop to iterate through newArray. Specify arguments (starting point of iteration, ending point of iteration, increment through each element individually).
    // For each iteration, multiply newArray.length by a random number and round that result down. Assign it to a variable (randomPosition).
    // For each iteration, call .splice() on newArray and provide arguments randomPosition (gives a random index of newArray each time) and 1 (removes 1 item from newArray). Output of .splice() is the removed item.
    // For each iteration, call .push() on newArray, and using the spread operator with variable randomItem will push a randomItem to newArray. In the step above, we provided .splice() a second argument of 1 which removes 1 item from the array per iteration. This ensures that no items are pushed into newArray more than once.
    // Every function needs a return. return newArray.
    // $ yarn jest
const removeFirstAndShuffle = (array) => {
    array.shift()
    const newArray = [...array]
    for (let i = 0; i < newArray.length; i++) {
        const randomPosition = Math.floor(newArray.length * Math.random())
        const randomItem = newArray.splice(randomPosition, 1)
        newArray.push(...randomItem)
    }
    return newArray
}
// $ yarn jest (results)
    // Test Suites: 1 passed, 1 total
    // Tests:       1 passed, 1 total



// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.
// a) Create a test with expect statements for each of the variables provided.
// Pseudocode
    // Create describe statement. Within quotes choose the name for your future function, which you are describing in this section (tally).
    // Create it statement. Within quotes input a descriptor of the function's purpose.
    // Per set of given variables (votes1/2 & votesOutput1/2), create expect statements.
        // Provide arguments of function name and input variables (tally(votes1/2)). Append with .toEqual()
    // Provide arguments of output variables (votesOutput1/2)
    // $ yarn jest
describe("tally", () => {
    it("takes in an object that contains up votes and down votes and returns the end tally", () => {
        const votes1 = {upVotes: 13, downVotes: 2}
        const votesOutput1 = 11
        expect(tally(votes1)).toEqual(votesOutput1)
        const votes2 = {upVotes: 2, downVotes: 33}
        const votesOutput2 = -31
        expect(tally(votes2)).toEqual(votesOutput2)
    })
})
// $ yarn jest (results)
    // ReferenceError: tally is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       2 failed, 2 total
// b) Create the function that makes the test pass.
// Pseudocode
    // Create function (tally). object as parameter.
    // Using what I learned in last week's assessment, I know that Object.values(object) returns an array of whatever value is passed in. With this knowledge I can take the 0th index of Object.values(object) (corresponding to the upvotes) and subtract it by the 1st index of that same array (corresponding to the downvotes). All that's left is prepending this equation with a return.
    // $ yarn jest
const tally = (object) => {
    return Object.values(object)[0] - Object.values(object)[1]
}
// $ yarn jest (results)
    // Test Suites: 1 passed, 1 total
    // Tests:       2 passed, 2 total



// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
// a) Create a test with an expect statement using the variables provided.
// Pseudocode
    // Create describe statement. Within quotes choose the name for your future function, which you are describing in this section (noDuplicates).
    // Create it statement. Within quotes input a descriptor of the function's purpose.
    // For given variables (dataArray1/2 & dataOutput), create expect statement.
        // Provide argument of function name and input variables (noDuplicates(dataArray1/2)). Append with .toEqual()
    // Provide argument of output variable (dataOutput)
    // $ yarn jest
describe("noDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const dataArray1 = ["array", "object", "number", "string", "Boolean"]
        const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
        const dataOutput = ["array", "object", "number", "string", "Boolean", "null", "undefined"]
        expect(noDuplicates(dataArray1, dataArray2)).toEqual(dataOutput)
    })
})
// $ yarn jest (results)
    // ReferenceError: noDuplicates is not defined
    // Test Suites: 1 failed, 1 total
    // Tests:       3 failed, 3 total
// b) Create the function that makes the test pass.
// Pseudocode
    // Create function (noDuplicates). Will take two arrays as parameters.
    // Use spread operator to copy the two arrays into a new combined array (combinedArray) that contains all the elements from both provided arrays.
    // Use spread operator to create a new (use keyword new) array and utilize the "Set" keyword (Set is an object that lets you store unique values). Return this.
    // $ yarn jest
const noDuplicates = (array1, array2) => {
    let combinedArray = [...array1, ...array2]
    return uniqueArray = [...new Set(combinedArray)]
}
// $ yarn jest (results)
    // Test Suites: 1 passed, 1 total
    // Tests:       3 passed, 3 total