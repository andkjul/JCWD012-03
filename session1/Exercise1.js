// Find area of rectangle
let length = 20 // input length 
let width = 10  // input width
let area = length*width // input area = length * width
console.log("rectangle area: " + area) // print area

// Find perimeter of rectangle  
let perimeter = 2 * (length + width) // input perimeter
console.log("rectangle perimeter: " + perimeter) // print area

// Find diameter, circumference and area of circle
let radius = 15 // input radius 
let diameter = 2 * radius // input diameter
let PI = 3.14159 // input PI
let circumference = 2 * PI * radius  // input circumference
let area2 = PI * radius * radius // input area
console.log("diameter: " + diameter,"circumference: " + circumference,"area: " + area2) // Print diameter, circumference, area2

// Find third angle of triangle
let angle1 = 80 // input angle1 
let angle2 = 60 // input angle2
let angle3 = 180 - (angle1+angle2)// angle3 = 180 - (angle1 + angle2)
console.log("third angle: " + angle3) // Print angle3

// Get difference between dates
const now = new Date() // input date1, date2
const then = new Date("2023-10-23") // input date2
const difftime = Math.abs(then - now)// diff = date2 - date1, math.abs used to get absolute value (positive difference) regardless of which date is earlier or later.
const diffdays = Math.ceil(difftime/(1000*60*60*24)) // The Math.ceil() function is used to round the number of days up to the next integer value.When converting the time difference to days, it calculates the number of days as a decimal
console.log("today: " + now,"date before today: " + then) // print now and then
console.log("diff between days: " + diffdays) // print diffdays

// Convert days to years, months and days
let days = 500  // Input days
let years = Math.floor(days/365) // years = days / 365 // Math.floor() used to round a number down to the nearest integer
days = days % 365 // use modulo to get remaining months
let months= Math.floor(days/30) // months = (days % 365) / 30 // Math.floor() used to round a number down to the nearest integer
days = days % 30 // use modulo to get remaining days
console.log(years + " years") // print years
console.log(months + " months") // print months 
console.log(days + " days") // print remainingDays