// exercise 1
function calculateDataStudent(dataStudent){
    const result = {
        score:{
            highest: dataStudent[0].score,
            lowest: dataStudent[0].score,
            average: dataStudent[0].score
        },
        age: {
            highest: dataStudent[0].age,
            lowest: dataStudent[0].age,
            average: dataStudent[0].age
        }
    }
    let totalAge = 0
    let totalScore = 0
    for(item of dataStudent){
        if(item.score > result.score.highest){
            result.score.highest = item.score
        }
        if(item.score < result.score.lowest) {
            result.score.lowest = item.score
        }
        if(item.age > result.age.highest) {
            result.age.highest = item.age
        }
        if(item.age < result.age.lowest) {
            result.age.lowest = item.age
        }
        
        totalScore += item.score
        totalAge += item.age
    }
    result.score.average = Math.round(totalScore / dataStudent.length)
    result.age.average = Math.round(totalAge / dataStudent.length)
    return result
}

const dataStudent = [
    {name:"Andika", email: "andikajulian@gmail.com", age: 26, score:78},
    {name:"Julian", email: "jul@gmail.com", age: 25, score:80},
    {name:"Lutpi", email: "lutpi@gmail.com", age: 25, score:90},
    {name:"Jamal", email: "jamal@gmail.com", age: 30, score:65},
]

console.table(calculateDataStudent(dataStudent))

// exercise2
class Product{
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

class Transaction{
    constructor(){
        this.total = 0;
        this.productCart =[]
    }

    addToCart(product, qty) {
        this.productCart.push({
            product:JSON.stringify(product),
            qty:qty,
            subtotal:product.price * qty,
        })
        for (item of this.productCart){
            this.total += item.subtotal
        }
    }
    showTotal(){
        return this.total
    }
    checkOut() {
        return {
            product: this.productCart,
            total: this.total
        }
    }
}

product1 = new Product("Asus Gaming B35 Motherboard", 1500000)
product2 = new Product("Casing NZXT Black", 1300000)
product3 = new Product("AOC monitor 27 inch", 2300000)

transaction1 = new Transaction()

transaction1.addToCart(product1,2)
transaction1.addToCart(product3,3)

console.log(transaction1.showTotal())
console.table(transaction1.product)