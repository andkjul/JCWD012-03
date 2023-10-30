/*
● Create a function that can create a triangle pattern according to the height we provide like the
following :
01
02 03
04 05 06
07 08 09 10
● Parameters : height → triangle height
*/

function triangle(height) { // declare function
    let currentNum = 1;
    for (let i = 1; i <= height; i++) { // For each level of the triangle
        let line = '';
        for (let j = 1; j <= i; j++) { // Number of items in the current level
            if (currentNum < 10) {
                line += '0' + currentNum + ' ';  // Add leading zero for numbers less than 10
            } else {
                line += currentNum + ' ';
            }
            currentNum++;
        }
        console.log(line.trim()); // Print the current level
    }
}

triangle(4);  // Test the function

/*
● Create a function that can loop the number of times according to the input we provide, and will
replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", multiples of 3 and 5 with
"FizzBuzz".
● Parameters : n → total looping
○ Example: n = 6 →1, 2, Fizz, 4, Buzz, Fizz
○ Example: n = 15 → 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 12, 13, 14, FizzBuzz */

function fizzBuzz(n) {
    let result = [];
    
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push('FizzBuzz');
        } else if (i % 3 === 0) {
            result.push('Fizz');
        } else if (i % 5 === 0) {
            result.push('Buzz');
        } else {
            result.push(i);
        }
    }
    
    return result.join(', ');
}

console.log(fizzBuzz(6));   // Test with 6
console.log(fizzBuzz(15));  // Test with 15

// BMI Calculation

function calculateBMI(weight, height) {
    // Calculate BMI
    const bmi = weight / (height * height);

    // Determine the category
    if (bmi < 18.5) {
        return "less weight";
    } else if (bmi >= 18.5 && bmi < 25.0) {
        return "ideal";
    } else if (bmi >= 25.0 && bmi < 30.0) {
        return "overweight";
    } else if (bmi >= 30.0 && bmi < 35.0) {
        return "very overweight";
    } else {
        return "obesity";
    }
}

const weight = 70;  // in kg
const height = 1.75;  // in meters
console.log(calculateBMI(weight, height));

// Remove odd numbers in array and return a new array that contains even numbers only
function removeOddNumbers(arr) {
    return arr.filter(number => number % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(removeOddNumbers(numbers));  // Expected output: [2, 4, 6, 8, 10]

// Split string to array
function stringToArray(str){
    return str.split(' ');
}
    let testString = "Hello World"
    console.log(stringToArray(testString))
