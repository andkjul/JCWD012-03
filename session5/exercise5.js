// stats without sort function
function getStatsWithSort(arr) {
    arr.sort((a, b) => a - b); 
    let lowest = arr[0];
    let highest = arr[arr.length - 1];
    let sum = arr.reduce((acc, val) => acc + val, 0);
    let average = sum / arr.length;

    const result = {
        lowest,
        highest,
        average
    };
    
    console.log(result);
    return result;
}

getStatsWithSort([23, 34, 5, 23, 12]);

// separate every words -> apple, banana, cherry, date
function concatenateWords(arr) {
    if (arr.length === 0) {
        console.log('');
        return '';
    }
    if (arr.length === 1) {
        console.log(arr[0]);
        return arr[0];
    }

    let lastWord = arr.pop();
    let result = arr.join(",") + ", and " + lastWord;
    console.log(result);
    return result;
}
concatenateWords(["apple", "banana", "cherry", "date"])


// // split string and invert to array -> "Hello World" -> ["Hello", "Word"]
function stringToArray(str) {
    let words = "";
    let result = [];

    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ' || i === str.length - 1) {
            if (str[i] !== " ") {
                words += str[i]
            }
            result.push(words)
            words = ""
        } else {
            words += str[i]
        }
    }
    return result
}
console.log(stringToArray("Hello World"))

// calculate each element
function calculateArrayItem (arr1, arr2) {
    if (arr1.length != arr2.length) {
        return "invalid array length"
    }
    let result = []
    for (let i = 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i])
    }

    return result
}
console.log(calculateArrayItem([1,2,3], [3,2,1]))


// add item without replace
function arrAddNewItem(arr, num) {
    let flag = false
    for(let i = 0; i<= arr.length; i++) {
        if (num === arr[i]) {
            flag = true
            break
        }
    }
    if (flag === false) {
        (arr.push(num))
    }
    return arr
}
console.log(arrAddNewItem([1,2,3,4], 4))
console.log(arrAddNewItem([1,2,3,4], 7))

// duplicate value in array
function findDuplicateArray(arr) {
    let result = []
    let duplicate = null
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length; j++) {
            if(arr[i] == arr[j] && i != j && duplicate !== arr[i]) {
                duplicate = arr[i]
                result.push(duplicate)
            }
        }
    }
    return result
}

console.log(findDuplicateArray([1, 2, 2, 2, 3, 3, 4, 5, 5]))
// ada bug jika nomer tidak berurut