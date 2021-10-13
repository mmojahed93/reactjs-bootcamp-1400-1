// function createCar(color, brand, model, name) {
//     return {
//         color,
//         brand,
//         model,
//         move: function (d) {
//             console.log("moving %s meter...", d)
//         }
//     }
// }
//
// const someObj = createCar('white', 'BMW', 2015, 'mohammad')
//
function Car(color, brand, model, phone = '') {
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.phone = phone;
    this.move = function (d) {
        console.log("Moving the car %s meter...", d)
    }
}

const newCar = new Car('white', 'mercedes', 2019, '091252')
// console.log(newCar)


// let counter1 = 5;
// let counter2 = counter1;
// counter1 = 10
// // console.log("counter1", counter1)
// // console.log("counter2", counter2)
//
// let obj1 = {counter: 5} // 0xf512a61f88b51
// let obj2 = obj1 // 0xf512a61f88b51
// obj1.counter = 10
// console.log(obj1)
// console.log(obj2)

// let counter = 0;
// function count(counter1) {
//     ++counter1;
// }
// count(counter)
// console.log(counter)

// let obj = {counter: 0};
// function count2(obj2) {
//     obj2.counter++;
// }
// count2(obj)
// console.log(obj)

//
// ##################   Clone objects  ###################
//
const oldObject = {
    lName: 'mojahed',
    id: 95148562,
    fName: 'mohammad',
    nickName: 'mahdi',
    move: function () {
        console.log("slm :)")
    }
}

// const newObject = {...oldObject};
// newObject['print'] = function () {
//     console.log('Im printing')
// }


// Object.assign(newObject, oldObject, srcObject)

// for (let key in oldObject){
//     newObject[key] = oldObject[key]
// }

// console.log("oldObject", oldObject)
// // console.log("srcObject",srcObject)
// console.log("newObject", newObject)
// console.log(oldObject === newObject)
// newObject.move()
// newObject.print()

//
// ##################   Checking keys in objects  ###################
//
// console.log('lName' in obj)
// console.log('LName' in obj)
// console.log('lName0' in obj)

// if(!!obj['lName']){
//     console.log(obj['lName'])
// }


// console.log(Object.keys(obj))

// for (let key in obj) {
//     console.log(key, obj[key])
// }
// for (let key of Object.keys(obj)) {
//     console.log(key, obj[key])
// }
// for (let entry of Object.entries(obj)) {
//     console.log(entry[0], entry[1])
// }

// ##################   Math Object  ###################
// console.log(Math.sqrt(5))
// console.log(Math.min(5, 3, -1))
// console.log(Math.round(Math.random()))

// ##################   String Object  ###################
// const someString = "     Hello World       "
// console.log(someString.length)
// console.log(someString[0])
// console.log(someString[someString.length - 1])
// console.log(someString.toLowerCase())
// console.log(someString.toUpperCase())
// console.log(someString.split('l'))
// console.log(someString.includes('l'))
// console.log(someString.includes('a'))
// console.log(someString.substring(4))
// console.log(someString.substring(4,7))
// console.log(someString.startsWith('hi'))
// console.log(someString.startsWith('hello'))
// console.log(someString.startsWith('Hel'))
// console.log(someString.endsWith('ld'))
// console.log(someString.indexOf('World'))
// console.log(someString.indexOf('llooo'))
// const newString = someString.replace('Hello','hi');
// console.log(newString)
// console.log(someString + "test")
// console.log(someString.trim() + "test")
// console.log(someString.trimLeft() + "test")

// ##################   Template  ###################
// const name = "ali";
// const str = "slm " + name + " \nchetori?" + (5 + 3)
// function bye(){
//     return "bye"
// }
// console.log(str)
// const str2 = `slm ${name}
// chetor? ${5 + 3}
// ${bye()}`
// console.log(str2)

// ##################   Date  ###################
// const now = new Date()
// const date1 = new Date(2020, 9, 2, 5, 30, 50)
// const date2 = new Date("2021 03 19")
// console.log(now)
// console.log(date1.toDateString())
// console.log(date1.toISOString())
// console.log(date2)


const food = {
    name: '', // A desired name
    type: '', // Like fast-food,
    price: 55000, // toomans
    deliverTime: 30, // minutes
    rate: 5, // Range between 0-5
    comments: [], // List of comment object
    isReady: false, // Is food ready or not
}

const comment = {
    author: '', // Author name
    date: '',
    rate: 2.3, // Range between 0-5
    text: '',
}

// order(isPremiumUser){
//     if isPremiumUser
//         log(0.8 * price, rate)
//     else
//         log(price, rate)


//
// ##################   Arrays  ###################
//

// ##################   Adding to arrays  ###################
// const myArr = [0, 1, 2, 4]
// console.log(myArr)
// myArr.push(5, 6, 7)
// console.log(myArr)
// myArr.unshift(-2, -1)
// console.log(myArr)
// myArr.splice(2, 0, 'a', 'b')
// console.log(myArr)


// ##################   Finding in arrays  ###################
// const myArr = [1, 2, 3, 2, 5, 6, 7, 2]
// console.log(myArr.indexOf(3) !== -1)
// console.log(myArr.indexOf(5) !== -1)
// console.log(myArr.indexOf(2))
// console.log(myArr.lastIndexOf(2))

// const charArr = ['a', 'b', 'c', 'a', 'x', 'c', 'a']
// console.log(charArr.indexOf('a', 4))
// console.log(charArr.includes('a'))
// console.log(charArr.includes('y'))

// const std1 = {id: 1, name: 'mohammad'};
// const objArr = [
//     {id: 1, name: 'mohammad'},
//     {id: 2, name: 'mahdi'},
//     {id: 3, name: 'mahdi'},
// ]
// console.log(objArr.indexOf({id: 1, name: 'mohammad'}))
// console.log(objArr.includes({id: 1, name: 'mohammad'}))
//
// console.log(Math.pow(2, 5))

// const foundItem0 = objArr.find(function (element){
//     return element.name === 'mahdi' && element.id === 3
// })
// const foundItem1 = objArr.find(element => element.name === 'mahdi' && element.id === 3)
// console.log(foundItem0)
// console.log(foundItem1)


// ##################   Arrow function  ###################

// function someFunction(param1, param2) {
//     console.log(param1, param2)
// }
//
// someFunction(1, 2)
//
// const someFunction1 = param1 => console.log(param1)
//
// someFunction1(3)


// ##################   callback function  ###################

// function callBackExample(callback) {
//     const value = 5;
//     return callback(value)
// }
//
//
// console.log(callBackExample(function (element) {
//     return 2 ** element
// }))


// ##################   Removing element  ###################
// const arr = [1, 2, 3, 4, 5]
// const lastItem = arr.pop();
// console.log(arr)
// console.log(lastItem)
//
// const firstItem = arr.shift();
// console.log(arr)
// console.log(firstItem)

// const someMiddleItems = arr.splice(2, 2);
// console.log(arr)
// console.log(someMiddleItems)


// ##################   Emptying element  ###################
// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = arr1
// console.log(arr1)
// arr1.splice(0, arr1.length)
// while (arr1.length > 0) {
//     arr1.pop()
// }
// console.log(arr1)
// console.log(arr2)

// ##################   Combining/Slicing arrays  ###################
// const arr1 = [0, 1, 2];
// const arr2 = [3, 4, 5];
// const arr3 = arr1.concat(arr2)
// console.log(arr1)
// console.log(arr2)
// console.log(arr3)


// ##################   Spread operator arrays  ###################
const arr0 = [0, 1, 2]
const arr1 = [3, 4, 5]
const arr2 = [arr1, 'a', 'b', ...arr0, {a: 'a'}]
// const arr3 = [...arr2]
// console.log(arr2)
// console.log(arr2[0])


/*
* 0 2
* 8 5
*/

const matrix0 = [[0, 2], [8, 5]]
const matrix1 = [[0, 2], [8, 5]]


// const joinedResult = arr3.join(' - ');
// const newArr = joinedResult.split(' - ')
// console.log(joinedResult)
// console.log(newArr)

const names = ['Mohammad', 'Farzin', 'Ali', 'Arash'];
names.sort();
// console.log(names);

// let arr = [32, 16, 64, 2, 1024];
// arr.sort((a, b) => a - b)
// console.log(arr)

const students = [
    {name: 'ali', average: 16.7, id: 5},
    {name: 'mohammad', average: 13.9, id: 3},
    {name: 'reza', average: 18.7, id: 9},
    {name: 'shahin', average: 15.2, id: 10},
]

const compareFunction = (a, b) => {
    if (a.average > b.average) {
        return 1
    }
    if (a.average < b.average) {
        return -1
    }
    return 0
}

students.sort(compareFunction)
// console.log(students)


const arr = [-5, 3, -1, -7]
// const allIsPositive = arr.every(item => {
//     console.log(item)
//     return item > 0
// })
// const someIsPositive = arr.some(item => {
//     console.log(item)
//     return item > 0
// })
// console.log(allIsPositive)
// console.log(someIsPositive)


// const arr5 = [-5, 3, -1, 7]
// const filteredList = arr5.filter(value => value > 0)
// console.log(filteredList)

// const arr6 = [-5, -3, -1, -7]
// const items = arr6.map(item => {
//     let obj = { key: item }
//     return obj
// })
// console.log(items)


// const arr7 = [-5, 0, 6, 1, 5, 9, -7]
// const items = arr7
//     .filter(n => n > 0)
//     .map(n => ({value: n}))
//     .filter(obj => obj.value > 1)
//     .sort((a, b) => a.value - b.value)
//
// // console.log(items)
//
// const array1 = [5, 7, 3, 9];
// const reduceResult = array1.reduce(function (prevVal, currentVal) {
//     return prevVal + currentVal
// })
// console.log(reduceResult);


function calc(prevVal, currentVal) {
    console.log("reduce-> prevVal: %s currentVal: %s", prevVal, currentVal)
    return prevVal + currentVal
}

// const arr9 = [5, 7, 3, 9];
// const reduceResult = arr9.reduce(calc, 0)
//
// console.log(reduceResult);

const myArr = [2, 5, 2, 2, 3, 5, 1, 3, 5, 7, 9, 7]
// const occurrences = {2: 3, 5: 3, 3: 2, 1: 1, 7: 2, 9: 1}

const occurrences = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4].reduce(function (acc, curr) {
    acc[curr] ? ++acc[curr] : acc[curr] = 1
    return acc
//     if(acc[curr]){
//         ++acc[curr]
//     }else{
//         acc[curr] = 1
//     }
// return acc

}, {});

// function test(a, b) {
//     return a + b, a,b
// }
//
// console.log(test(3,5)) // => {2: 5, 4: 1, 5: 3, 9: 1}

for (let item in arr){
    console.log(item)
}