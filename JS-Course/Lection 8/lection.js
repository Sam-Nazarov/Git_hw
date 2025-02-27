//TODO: Array methods

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// const arr = [1,2,3,4,5]
// function handleArrayElements(logFunction, arr = []) {
//     for ( let i = 0; i < arr.length; i++) {
//         logFunction(arr[i], i)
//     }
// }
//
// const logToConsole = (value, index) =>  console.log(`Value = ${value} with index = ${index}`)
// const logToConsoleSimple = (value) => console.log(value + ' logToConsoleSimple')
// const makeStupidThing = (value, index) => console.log(value * index)
// handleArrayElements(logToConsole, arr, 888)
// handleArrayElements(logToConsoleSimple, arr, 888)
// handleArrayElements(makeStupidThing, arr, 888)

//version 4

// const logToConsole = (value, index) =>  console.log(`Value = ${value} with index = ${index}`)
// const logToConsoleSimple = (value) => console.log(value + ' logToConsoleSimple')
// const makeStupidThing = (value, index) => console.log(value * index)

// arr.forEach(logToConsole)
// let arr = [1,2,3,4]
// arr.forEach((value, index, arr) =>
//     console.log(`Value = ${value} with index = ${index}`))

// const arr = [1, 2, 3, 4, 5]
//
// const result = []
//
// for(let i = 0; i < arr.length; i++) {
//     result.push(i % 2 ? arr[i] ** 2 : arr[i] ** 3)
// }
// console.log(result)

// const arr = [1, 2, 3, 4, 5]
// const result = arr.map((el, i) => i % 2 ? arr[i] ** 2 : arr[i] ** 3)

//TODO: Reduce


// let totalPrice = 0
// for(const price of shoppingListPrices) {
//     totalPrice += price
// }
// console.log(totalPrice)

// const result = shoppingListPrices.reduce((result, price, index, array) => {
//     result = result + price
//     return result
// }, 0)


// const totalPrice = shoppingListPrices.reduce((a, b) => a + b, 0)
// console.log(totalPrice)

// const shoppingListPrices = [10, 20, 31, 42.5, 3, 8 , 14]
// const budget = 1000
//
// const balance = shoppingListPrices.reduce((result, price) => result - price, budget)
// console.log(balance)

//TODO: Sort

// const shoppingListPrices = [10, 20, 31, 42.5, 3, 8 , 14]
//
// const sortedList = shoppingListPrices.sort((a, b) => a - b)
// console.log(sortedList)


// const students = ['Anna', 'Onlga', 'Jullia', 'Boris']
//
// const sordetStudents = students.sort((a, b) => a.localeCompare(b));
// console.log(sordetStudents);


//TODO: Set

// const set = new Set()
// set.add(1)
// set.add(2)
// set.add(3)
// console.log(set.has(2))

const set = new Set([1, 2, 3, 4, 5, 6, 7])
console.log(set)
console.log(...set)
const arr = [1, 1, 2, 2, 3, 4, 5, 6, 7,]
const unique = [...new Set(arr)]







