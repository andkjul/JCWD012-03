// Triangle
function triangle(hei) {
    let lastNumber = 0
    for(let i = 1; i <= height; i++) {
        let numbers = ""
        for(let j = 1; j <= i; j++) {
            lastNumber++
            lastNumber = lastNumber < 10 ? "0"+lastNumber : lastNumber
            numbers += lastNumber + " "
        }
        console.log(numbers)
    }
}
triangle(5)

// fizzBuzz
function fizzBuzz(fizz, buzz) {
    for (let i = 1; i <= 100; i++)
    if (i % fizz === 0 && i % buzz === 0){
        console.log(i, "fizzBuzz")
    } else if (i % fizz === 0) {
        console.log(i, "fizz") 
    } else if (i % buzz === 0) {
        console.log(i, "buzz")
    } 
}
fizzBuzz(3, 5, 10)

// BMI
function bodyMassIndex(weight, height) {
    let bmi = weight / (height / 100) ** 2;
    if (bmi < 18.5){
        return "less weight"
    } else if(bmi >= 18.5 && bmi <= 24.9) {
        return "ideal"
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight"
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight"
    } else {
        return "obesity"
    }
}
console.log(bodyMassIndex(91,170))

// remove array
function removeAllOdds(arr) {
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 === 0) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
console.log(removeAllOdds([1,2,3,4,5,6,7,8,9,10]))