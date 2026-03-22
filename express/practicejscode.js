// const random = crypto.randomUUID();

// console.log(random);


// const params = new URLSearchParams({
//     username: "aryan",
//     age: 23,
//     role: "fullstack developer"
// }) // TO send the data in the url


// callback hell

// console.log(0.1+0.2 === 0.3) // false (chcek the reason)


//shallow copy
// deep copy -> JOSN.string/... .> lodash .> _deepClone  ... spread operator


//page index (vectorless rag)

// console.log("aryan"- "gpta") // NaN


// let a = 10
// let b = 31

// function swap(a, b) {
//     // a = a + b;  one way
//     // b = a - b
//     // a = a - b

//     // [a , b] = [b , a]  another way to swap

//     // let temp = a;  // another way to swap
//     // a = b;
//     // b = temp

//     console.log( a +  " " +b)
// }
// swap(a , b)




// console.log(typeof (NaN))
// console.log(isNaN(23/'a'))

// const arr = [13, 10, 12, 15, 9, 11]
// //sort

// for (let i = 0; i < arr.length; i++){
//     for (let j = 0; j < arr.length - i-1; j++){
//         if (arr[j] > arr[j + 1]) {
//             swap(arr , j , j+1)
//         }
        
//     }
// }
// function swap(arr , i, j) {
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j] = temp
    
// }

// console.log(arr)

// function outer() {  closure
//     let count = 10;
//     function inner() {
//         console.log(count)
//     }
//    return inner
// }
// const result = outer()
// result()// inner remember its lexical scope

// var a = 20 // redclaration and reinitialsation both are allowed .......
// var a = 90
// console.log(a)


// const arr = ["aryan", 200, "gupta", 20, 'a']

// const numbers = arr.filter((item) => typeof item === 'number')
// const strings = arr.filter((item) => typeof item === 'string' && item.length > 1)
// const characters = arr.filter((item) => typeof item === 'string' && item.length == 1)


// const names = ['vedant', 'dent']
 
// function check(str1, str2) {
//     for (let i = 0; i < str2.length; i++){
//         if (!str1.includes(str2[i])) return false;
//     }
//     return true;
// }
// const result = check(names[0] , names[1])  str2 char are present in str1 or not
 
// console.log(result)

const arrow = () => {
    console.log(this)
}
arrow()

function arrow1() {
    console.log(this)
}
arrow1()

