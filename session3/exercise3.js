/*Write a code to display themultiplication table of a giveninteger.
○ Example : Number → 9
○ Output :
■ 9 x 1
■ 9 x 2
■ ...
■ 9 x 10*/

let number = 9
for (let i = 1; i <= 9; i++){
    let result = number*i;
console.log(`${number} x ${i} = ${result}`)
}

/* Write a code to check whether a string is a palindrome or not.
○ Example : ‘madam’ → palindrome */
// input string, clean, reverse, compare
let word = "madam"
let reversed = word.split(" ").reverse().join(" ")

if(word == reversed){
    console.log(`Palindrome`);
}   else{
    console.log(`Not palindrome`)
}

// alphabet
// index dimulai dari 0, maka 0 = a
let alphabet = "abcdefghijklmnopqrstuvwxyz";

let str = "qUiCk bRoWn fOx";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase()) {
    result += str[i].toLowerCase(); 
  } else {
    result += str[i];
  }
}

console.log(result);

/*
Write a code to convert centimeter to kilometer.
○ Example : 100000 → “1 km”
*/
let cmnum = 3
let resultkm = `${cmnum} cm adalah ${cmnum*100000} km`
console.log(resultkm)

// Write a code to format number as currency (IDR)
// ○ Example : 1000 → “Rp. 1.000,00”
let number1 = 1000;
let rupiah = number.toString();

let sisa = rupiah.length % 3;
rupiah = rupiah.substring(0, sisa); 

while(rupiah.length < number.toString().length) {
  rupiah += '.' + rupiah.substring(rupiah.length, rupiah.length + 3); 
}

console.log('Rp. ' + rupiah + ',00');

// Write a code to remove the first occurrence of a given “search string” from a string
// ○ Example : string = “Hello world”, search string = “ell” → “Ho world”
let string = "Hello world";
let search = "ell";

let result3 = "";

for (let i = 0; i < string.length; i++) {
  if (string[i] === search[0]) {
    let matched = true;
    for (let j = 1; j < search.length; j++) {
      if (string[i + j] !== search[j]) {
        matched = false;
        break;
      }
    }

    if (matched) {
      i += search.length; 
      continue;
    }
  }

  result3 += string[i];
}

console.log(result3); // "Ho world"

// Write a code to capitalize the first letter of each word in a string
// ○ Example : “hello world” → “Hello World”
let strings = 'hello world'
let words = strings.split(' ')

for (let i = 0; i < words.length; i++) {
  words[i] = words[i][0].toUpperCase() + words[i].slice(1)
}
let result4 = words.join(' ')
console.log(result4)

// Write a code to reverse a string.
// ○ Example : “hello” → “olleh”
let string2 = "hello"
let reverse = ""

for (let i = string2.length - 1; i >= 0; i--){
  reverse += string2[i]
}
console.log(reverse)