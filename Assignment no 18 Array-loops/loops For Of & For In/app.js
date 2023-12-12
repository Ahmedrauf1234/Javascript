//=================For Of loop====================>>

const arr =  [1, 2, 3, 4, 5]
for (const Values of arr) { //for off loop sirf arrays per laghta hai
    console.log(Values); 
}

const greetings = 'hello world' //for of strings me bhi used hota hai
for (const greet of greetings) {
    console.log(`Each character ${greet}`);
}

//==================Map=====================>>
const map =  new Map()  //ye 1 object hota hai
map.set('name','Ahmed')
map.set('age','21')
map.set('isloggedIn','true')
//map.set('name','Ahmed') //wapsi se agar koi value add kkrna chahye hum wo hum nhi krsakhte
//console.log(map);

//=======map in loop======>>
for (const [key,key1]  of map) {
   console.log(`${key} :> ${key1}`);
}
//========end===========>>

//=======Object per foroff loop lagana ho======>>

// const myObj = {
//     name : 'Ahmed',
//     Age : 21,
//     RollNo : '12-4566-8',
//     isloggedIn : false
// }

// for (const [key,value] of myObj) { //Object per For of loop nh laga sakhte
//     console.log(`${key} :> ${value}`); //Error myObj is not Iterable
// }
//==========end ============>>

//==================================For In loop========================>>

const myObj1 = {
    name : 'Ahmed',
    Age : 21,
    RollNo : '12-4566-8',
    isloggedIn : false
}
for (const key in myObj1) {  //object ko ese krwate hen print
   console.log(`${key} And valus is ${myObj1[key]}`);
}
//=========End=======>>

//======Array per For In loop chalana ho agar=================>>

let fruits = ['apple','banana','orange','mango','Nashpati'];
for (const key in fruits) {
    // console.log(key);
    console.log(`${key}:>${fruits[key]}`); //forin ka loop array per chalta hai
}
//======End=======>>



















