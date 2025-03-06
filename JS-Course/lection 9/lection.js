/*
const prices = [64, 7556, 345, 7556, 345, 7556, 345, 7556, 433, 345, 756, 123, 942, 3112, 421, 9341, 1212, 8, 43, 41, 345, 341, 21, 321, 123];

function getPricesData(prices = []) {
    const totalPrice = prices.reduce((total, price, index, array) => total + price, 0 )
    const avgPrice = totalPrice/ prices.length
    return `Итого ${totalPrice}, средняя цена ${avgPrice}`
}
console.log(getPricesData(prices))*/


//let newArr = [1,2,2,3,3,3,4,3,3,3,2,2,1]
/*function getOdd(arr = []) {
    let result
    for (const number of arr) {
        let counter = 0
        for(const number2 of arr) {
            if(number2 === number) {
                counter++
            }
        }
        if(counter % 2) {
            return number
        }
    }
}*/

/*
function getOdd(arr = []) {
    return arr.find((num, i, array) => array.filter((el) => el === num).length % 2)
}
console.log(getOdd([1, 1, 2]))*/

/*const arr = [123, 4565565, 1, 241234124124, 12, 5656, 12]
console.log(sortArray(arr))

function sortArray(arr) {
const array = [...arr]
    return array.sort((a, b) => String(a).length - String(b).length)
}*/

/*function moveZeros(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 1)
            arr.push(0)
        }
    }
    return arr
}*/

//TODO: 5
