// Write a code to convert celsius to fahrenheit
// 1. declare fahrenheit and celcius
// 2. calculate fahrenheit value 
// 3. formula: fahrenheit = (celcius *9/5) + 32
// 4. print celcius and fahrenheit values "X°C adalah Y°F"
let celcius = 60;
let fahrenheit = celcius * (9/5) + 32;
console.log(`${celcius} °Celcius adalah ${fahrenheit} °Fahrenheit`);

// 1. declare odd and even condition
// 2. if odd then "angka ganjil", if even then "angka genap"
// 3. print result
let number = 25
if (number % 2 == 0){
    console.log(number + " adalah angka genap");
}   else {console.log(number + " adalah angka ganjil")}

// alternative odd even
console.log(number % 2 == 0 ? "even" : "odd")

// 1. declare boolean jika prime maka true
// 2. declare number
// 3. jika syarat i < num maka i+1, maka false, 
// 4. print jika true maka num adalah bilangan prima, jika false maka bukan bilangan prima
let num = 6
let isPrime = true
if (num<2) {isPrime = false}

for (let i=3; i < num; i++){
    isPrime = false; break;
}

if(isPrime){
    console.log(num + " adalah bilangan prima");
}else {console.log(num + " bukan bilangan prima")}

// input value awal
// sum value awal
// looping to j
// print result
let sum = 0
let nomor = 3
for (let j = 1; j <= nomor; j++){
    sum+=j;
}
console.log(`Sum dari ${nomor} adalah ${sum}`)

// input value awal
// value awal factorial
// looping to k
// print result
let factorial = 1
let nomor2 = 5
for (let k = 1; k <= nomor2; k++){
    factorial*=k;
}
console.log(`Faktorial dari ${nomor2} adalah ${factorial}`)

// ● Write a code to print the first N fibonacci numbers
// ○ Example: 15 → 610
// Get input N
let fib = 15
let n1 = 0, n2 = 1, nextSeq

for (let l = 1; l <= fib; l++){
    nextSeq = n1 + n2;
    n1 = n2
    n2 = nextSeq
}
console.log(`${n1} adalah nomor fibonacci dari ${fib}`)