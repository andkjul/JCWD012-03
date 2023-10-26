// let arr = []
// let arr2 = [1,2,"jul", true]

// console.log(arr)
// console.log(arr2)

let scores = [10,20,30,40]
let people = ["aries","dimas","yudhis"]

// console.log(scores)
// console.log(people)
// console.table(scores)

console.log(scores[1])

scores[1] = 90

console.log(scores)
console.log(scores)

scores.push(50); // push adalah method untuk ubah
console.log(scores)

console.log(scores.length) // length = indexlength 
console.log(scores.toString()) // jadi string dengan koma
let resultMultiply = scores.map(function(item){
    return item * 2 // setiap item * 2
})
console.log(resultMultiply) 

//
console.log(scores)
let findResult = scores.find((number) => 20);
console.log(findResult)

for (let score of scores){
    console.log(score)
}

// index 2D
let arr3 = [
    [1,2,3],
    [4,5,6]
]
console.table(arr3)
console.table(arr3[0])
console.table(arr3[0][1])