// if function
let age = 15
console.log(age >= 17)
if (age >= 17) {
    console.log("you have ID card")}
    else {
        console.log("you dont have ID card")
    }


// else if function
let trafficLamp = "yellow"
if (trafficLamp == "red"){ // comparison operator "==" operator that makes boolean
    console.log("stop")} // && dipakai untuk nambah constrain atau let
    else if (trafficLamp == "yellow") {
    console.log("slow down")
    } else if (trafficLamp == "green"){
    console.log("go")
    } else console.log("format invalid")

// switch case -> jarang dipakai alias FYI aja
switch(trafficLamp) { 
    case "red":
        console.log("stop")
        break
    case "yellow":
        console.log("slow down")
        break
    case "green":
        console.log("go")
        break
    default:
        console.log("format invalid")    
}

const EXPR = "Papayas"

switch(EXPR){
    case "Oranges":
        console.log("Oranges are $0.59 a pound")
        break
    case "Mangoes":
    case "Papayas":
        console.log("Mangoes and papayas are $2.79 a pound")
        break
    default:
        console.log(`Sorry, we are out of ${EXPR}`)
}

// logical operator (&& = and) (|| = or) (! = not)
/*
    A = 100 - 86
    B = 85 - 75
    C = 74 - 65
*/

let value = 70 // true && false = false, true && true = true
if (value >= 86 && value <= 100){
    console.log("A")
}   else if(value >= 75 && value <= 85){
    console.log("B")
}   else if(value >= 65 && value <= 74){
    console.log("C")
}

let car = "BMW" // true || false = true, false || false = false
if(car == "BMW" || car == "Porsche"){
    console.log("Your car is great")
}

/* 
Ternary
pengganti if "?" dipakai untuk kondisi pertama atau if, lalu ":" untuk else
*/
let result = age > 0 ? "Dia punya umur": "Dia baru lahir"
console.log(result)

// Contoh Ternary lain
console.log(
    (trafficLamp == "red") ? "stop" : 
    (trafficLamp == "yellow") ? "slow down" :
    (trafficLamp == "green") ? "go" :
    "invalid format" 
  );

/*
Loop Statements = commands or instruction is repeating the commands until the certain condition
    beginning
    ending
    step
*/

// Loop For
for(let i = 1 ; i <= 5; i = i + 1) // loop dimulai dari i = 1, diulang sampai 5, melangkah sebanyak selangkah
{console.log(i)} // ini dieksekusi karena kondisi kedua true

// While Loop = cek dulu baru do
let j = 1
while (j <= 3){
    console.log("while ke " + j);
    j = j+1;
}
console.log(j);

// Do While Loop = do duluan setelah itu cek
let k = 1;

do {
    console.log("do while ", k); // print 1
    k = k + 1 // bisa disingkat "k += 1" atau disingkat "k++"
} while(k <=3); 


/*
PSEUDOCODE
    DECLARE i EQUALS TO 1

    FOR i LESS THAN 5 
        PRINT i
        i EQUALS i PLUS 1
    PRINT "diluar loop i = "+1
*/