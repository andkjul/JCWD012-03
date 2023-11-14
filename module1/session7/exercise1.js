// compare two object
function compareObject(obj1, obj2) {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)

    if (keys1.length !== keys2.length){
        return false
    }
    for(let key of keys1) {
        if (obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}

console.log(compareObject({a: 1}, {a: 1}))
console.log(compareObject({a: 3}, {a: 2}))
console.log(compareObject({a: "Hi"}, {a: 2}))

// get intersection of two objects
function getIntersection(obj1, obj2) {
    const intersection = {};
  
    Object.keys(obj1).forEach(key => {
      if (key in obj2 && obj1[key] === obj2[key]) {
        intersection[key] = obj1[key];
      }
    });
  
    return intersection;
  }
const result = getIntersection({ a: 1, b: 2 }, { a: 1, c: 3 });
console.log(result); // Output: { a: 1 }
  
// student
function mergeStudentData(array1, array2) {
    const combinedArray = [...array1, ...array2];
    const uniqueStudents = new Map(combinedArray.map(student => [student.email, student]));
    
    return Array.from(uniqueStudents.values());
  }
    const array1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
  ];
  
  const array2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
  ];
  
  const arrayResult = mergeStudentData(array1, array2);
  console.log(arrayResult);
  
/* Accept input as an array of objects and switch all values into property and
property into value */
function switchPropertiesAndValues(inputArray) {
    return inputArray.map(object => {
      const switchedObject = {};
      Object.keys(object).forEach(key => {
        // Convert the key to a string to use as a value
        // Convert the value to a string to use as a key
        switchedObject[object[key]] = key;
      });
      return switchedObject;
    });
  }
  const input = [{ name: 'David', age: 20 }];
  const output = switchPropertiesAndValues(input);
  console.log(output);
  
// factorial
function factorial(n) {
    // Base case
    if (n === 0) {
      return 1;
    }
    // Recursive case
    else {
      return n * factorial(n - 1);
    }
  }
  const input1 = 5;
  const output1 = factorial(input1);
  console.log(`Factorial of ${input1} is: ${output1}`);
