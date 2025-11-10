//for of loops

// const arr =[1,2,3,4,5]
// for (const num of arr){
//     console.log(num)
// }

// const greetings = "helloworld"
// for (const i of greetings){
//     console.log(`each carac is ${i}`)
// }

//Maps - it is a object stores unique values

// const map = new Map()
// map.set('IN',"India")
// map.set("FR","France")
// map.set('IN',"India")

// console.log(map);


// for(const key of map){
//     console.log(key);
// }

//why we are using array destructuring  to get the key and values in map , is it array of objects?
// ans :- Because when you loop over a Map using for...of,
// each iteration gives you a two-element array — [],[] !!

// for(const [key,value] of map){
//     console.log(key,":-", value);
// }

// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'SPiderman'
// }

// for (const [key,value] of myObject){
//     console.log(key,":-" value)
// }  object cannot be itterable

// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }

// for(const key in myObject){
//     console.log(myObject[key]); //  why use [] insted . dot  ?Because in this loop, key is a variable, not a fixed property name.
// }


// for (const key in myObject){
//     console.log(`${key} shortcut is for ${myObject[key]}`)
// }


const programming= ["js","rb","py","java"]

// for(const key in programming){
//     console.log(programming[key])
// }

// programming.forEach(function  (item) {
//     console.log(item);

// })

programming.forEach((item) =>{
    console.log(item);
})



