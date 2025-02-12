const prompt = require("prompt-sync")();



// Mild Challenges 
/// The three siblings get their allowance once a week.
/// Their current obsession is buying unique card games and collecting shoes.
/// Below is the total money they split weekly, their names, and the price of
///     a card game and a pair of shoes.

let weeklyAllowance = 129;
let sibling1 = "Jordan";
let sibling2 = "Quinn";
let sibling3 = "Ricardo Montoya De La Rosa Ramirez";
let game = 15.99;
let shoes = 89.78;




// 1. If divided evenly, how much would each sibling get for the week?
let amount = weeklyAllowance / 3
console.log("Each sibling will get "+amount+" dollars")
// 2. How many games can Jordan buy with their cut?
let Games = amount / game
Games = Math.round(Games)
console.log("Jordan can buy "+Games+" Games")
// 3. The cost of games just went up by a dollar and shoes are on sale at 50% (half) off. Change the variables to their new prices.
game = game + 1
console.log(Math.round(game))
shoes = shoes / 2
console.log(shoes)
// 4. Quinn and Ricardo are twins. If they put their money together, how many on sale shoes can they buy in a month (4 weeks)?
let twinsAmount = amount * 2
console.log(twinsAmount)
let weeklyTwins = twinsAmount * 4
console.log(weeklyTwins)
let numShoes = weeklyTwins / shoes
numShoes = Math.round(numShoes)
console.log("They can buy "+numShoes+" pairs of shoes")
// 5. How many more games can they buy if they put their money together compared to if they had bought games on their own?
let numGames = twinsAmount / game
numGames = Math.round(numGames)
let difference = numGames - Games
console.log("They can buy "+difference+" more games together")
// 6. Print out the three siblings' names. "The three siblings are __, __, and ___."
console.log("The 3 siblings are "+sibling1+", "+sibling2+", and "+sibling3+"." )
// 7. Use console.log() and a built-in method to count how many characters are in Ricardo's name.
let ricardoNameLength = sibling3.length;
console.log("Number of characters in Ricardo's name: " + ricardoNameLength);
// 8. Use console.log() and a built-in method to print out the string "RICARDO MONTOYA DE LA ROSA RAMIREZ"
let capitalRicardo = sibling3.toUpperCase();
console.log(capitalRicardo);
// 9. Use console.log() and a built-in method to print out the string "ricardo montoya de la rosa ramirez"
let lowerRicardo = sibling3.toLowerCase();
console.log(lowerRicardo);

// 10. Use console.log() and a built-in method to print out Ricardo's name, but with all the instances of the letter a removed or deleted.
let nameWithoutA = sibling3.replace(/a/gi, '');
console.log(nameWithoutA);
// 11. Use console.log() and a built-in method to print out "De La Rosa"
let partOfName = "De La Rosa";
console.log(partOfName);
// Medium Challenges

// 12. Rewrite these function as an arrow function.
/// Then, call them with different inputs to check the result.

// function getRandomNum() {
//     return Math.floor(Math.random() * 100);
// }

 const getRandomNum = () => Math.floor(Math.random()*100);
console.log(getRandomNum())

// function greeting(name) {
//     return `Hello ${name}, I'm glad you can make it!`;
// }

const greeting = name => `Hello ${name}, I'm glad you can make it!`
console.log(greeting())


// function perfectRoot(x) {
//     let root = Math.sqrt(x);
//     if (Math.floor(root) === root) {
//         return root;
//     } else {
//         return "No perfect root"
//     }
// }

const perfectRoot = x => {
    let root = Math.sqrt(x)
    if (Math.floor(root) === root) {
        return root;
        } else {
    return "No perfect root"
       }
}
console.log(perfectRoot())

// 13. Fix/Finish the following functions.
/// Then, call them with at least 2 different inputs to ensure they work.

/// a. Adds 2 numbers and returns the sum
const addNums = (x, y) => {
    let sum = x + y;
    return sum
}
// uncomment the line below, to call the function, and add one more function call
console.log(addNums(4, 6));
console.log(addNums(5, 7));

/// b. Prints a special message if name is "Beyonce"
const isBeyonce = (name) => {
    if(name == "Beyonce") { 
        return "Welcome Queen!";
    } else {
        return `Sorry {name}, you're not Beyonce`;
    }
}
// Test "Beyonce" and other names to ensure it works
console.log(isBeyonce("Beyonce"))


/// c. If the number is even, return the number divided by 2, otherwise, return the number
/// For example reduceEvens(10) => 5 -- reduceEvens(11) => 11
const reduceEvens = (x) => {
    if(x % 2 == 0){
       return  x / 2
    } else {
        return x;
    }
}
//Write your own function calls
console.log(reduceEvens(10))
console.log(reduceEvens(13))

// 14. Write a function called shortenString(string) that returns the first 10 characters of a string if it is longer than 10
//remove all
const shortenString = string => {
if(string.length > 10){
    return string.substring(0, 10);
}else{
    return string
}
}

let string = "Hello, world! This is a test string.";
console.log(shortenString(string));

// Spicy Challenges
let burger = 5.00;
let fries = 3.00;
let soda = 1.00;

// 15. Write a function buyBurgers(budget) that takes in a budget amount and returns the number of burgers that can be bought.
// Prompt the user for their budget and call the function.
/// If no burgers, fries, and sodas can be bought, return "Sorry, no burgers for you."

const buyBurgers = (budget) => {
const totalBurgers = Math.floor(budget / burger)
if(totalBurgers > 0){
    return totalBurgers
}else{
    return "Sorry not enough Cash"
}
}

const budget = prompt("Enter your budget: ")
console.log(buyBurgers(budget));
// 16. A meal consists of 1 burger, 1 fry, and 1 soda.
/// Write a function called buyMeals(budget) that tells the user how many meals they can buy and how much money they will have left over.
// Prompt the user for their budget and call the function.
/// Bonus: Round the answer to the nearest penny.
const buyMeals = (budget) => {
const mealCost = burger + fries + soda
const totalMeals = Math.floor(budget/ mealCost)
const leftOver = (budget % mealCost).toFixed(2); // Round to the nearest penny

return{
    meals: totalMeals,
    leftover: parseFloat(leftOver)
}
}

const budgetForMeals = prompt("Enter your budget for meals:");
const result = buyMeals(budgetForMeals);
console.log(`You can buy ${result.meals} meals and have $${result.leftover} left over.`);
// 17. [Challenge] Write a function missingLeg(side1, side2) that takes in the length of a hypotenuse and a leg of a right triangle and prints out the missing leg's length
// Prompt the user for the two sides and call the function
/// The larger side should be the hypotenuse  

const missingLeg = (side1, side2) => {
    // Determine which side is the hypotenuse
    const hypotenuse = Math.max(side1, side2);
    const leg = Math.min(side1, side2);
    
    // Calculate the missing leg
    const missing_leg = Math.sqrt(hypotenuse ** 2 - leg ** 2);
    
    console.log(`The length of the missing leg is: ${missing_leg.toFixed(2)}`);
}

// Prompt the user for input
const side1 = parseFloat(prompt("Enter the length of the first side (hypotenuse or leg): "));
const side2 = parseFloat(prompt("Enter the length of the second side (hypotenuse or leg): "));
missingLeg(side1, side2);

// 18. [Super Challenge] In math, Factorial is the product of an integer and all the integers below it.
/// For example: factorial(3) = 3*2*1 = 6 ---  factorial(5) = 5*4*3*2*1 = 120
/// Write a function factorial(x) that finds the factorial of any integer.
// Prompt the user for a number and call the function
const factorial = (x) => {
    if (x < 0) return "Factorial is not defined for negative numbers.";
    if (x === 0 || x === 1) return 1;

    let result = 1;
    for (let i = 2; i <= x; i++) {
        result *= i;
    }
    return result;
}

// Prompt the user for a number
const number = parseInt(prompt("Enter a non-negative integer to find its factorial: "));
console.log(`The factorial of ${number} is: ${factorial(number)}`);