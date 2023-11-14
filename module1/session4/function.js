// function declaration
function sayhello(name, age){ // name dan age adalah parameter
    console.log("hello", name)
    console.log("welcome to javascript")
    console.log("your age is", age)
    return name, age // return harus di akhir
}
function square(s){
    let area = s*s;
    return area // return adalah nilai balik/ menghasilkan output dengan nilai
}

// -- function expression -- 
sayhello("jul", 26)
sayhello("julian", 28)

console.log(square(10)) // punya nilai balik karena ada return

let myArea = square(10)
console.log(myArea)

// -- anonymous function --
// let myFunction = function(x, y){
// console.log("anonymous function",x,y)}

// myFunction(10,23)

//-- argument -- 
function myFunc(a, b, ...manyMore){
    console.log(a)
    console.log(b)
    console.log(manyMore)
}

myFunc = (10,20,30,40,50,60)

// -- recursive -- mirip dengan looping alias manggil diri sendiri
function countdown(fromNumber) {
    console.log(fromNumber)

    let nextNumber = fromNumber - 1
    if(nextNumber > 0) { // ini syarat, maka countdown terus diulang
    countdown(nextNumber)
    }
}
countdown(3)

// arrow function --> alternatif untuk menulis syntax lebih pendek
// arrow function tidak boleh digunakan sebagai function
const squareArrow = (s) => {
    return s * s
}
console.log(square(4))

// predefined function -> function yang udah ada secara default
console.log(isNaN(12))  // Not a Number
console.log(isNaN(12 * undefined)) 
console.log(parseInt("123")) // Ngubah string jadi number