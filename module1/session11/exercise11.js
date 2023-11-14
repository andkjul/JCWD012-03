function findMajority(nums) {
    let count = 0;
    let candidate = null;

    for (let num of nums) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate ? 1 : -1);
    }
    return candidate
}

console.log(findMajority([3,2,3]))

// roman numeral
/*
1 = I
2 = II
3 = III
4 = IV ??
5 = V
9 = IX ??
10 = X
*/
function romanNumeral(s) {
    let numeral = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let total = 0

    for (let i = 0; i < s.length; i++) {
        total += numeral[s[i]];
    }
    return total
}

console.log(romanNumeral("IV"))