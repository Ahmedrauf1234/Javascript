//================================ES6 in javascript=========================>>


//================Try Catch============>> error agar oper wali line me hota hai to neachey wala code nh chaltaa lakin try me agar code me error hogaa to neachey wala code hamaara chal jayegaaa

// try {
//     console.log('hello world!');
    
// } catch (error) {
//     console.log(error);
//     console.error(error);

// }
// console.log('Ahmed Rauf');
//==================================End===============================>>

//==============================Fetch========================>>
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//  fetch('https://jsonplaceholder.typicode.com/todos')
//  .then(function(response){
//     response.json()
//  })
//  .then(function(json){
//     console.log(json);
//  })
//  .catch(function(err){
//     console.log(err);
//  }) //fail

//=============================End======================>>
//============================Fetch in axios=======================>>
// axios('https://jsonplaceholder.typicode.com/todos/1')
// .then(function(res){
//     console.log(res.data);
// }).catch(function(err){
//     console.log(err);
// })

//=======End============>>


//======================Async aWait (Async k liye function hona lazmi hai) jo line Asyncronus bananai hai us per awat lagadenge means usline ka console tab chale jab data aajaye hamare pass ============>>

//  async function renderApiData(){
//     const data = await axios('https://jsonplaceholder.typicode.com/todos');
//     console.log(data.data);
// }

// renderApiData()
// console.log('Ahmed');
//===================================End=============================>>

//===================================Task catch ======================>>
//agar function k saath api link me error ata hai to or wohh try catch ki body me likha hai or try catch ki body k baad koi or code likhaa hai hai wo function k andar he to wo chal jayegaa try catch ki wajah se main work try catch ka yahi hai..or agar try catch nh hotaa to pore function me jhn error hotaa wo pora function me error dedetta 1 error ki wajah se..

 async function add(){
    try {
        let api = await  axios('https://jsonplaceholder.typicode.com/users')
        console.log(api.data);

    } catch (error) {
        console.log(error);
    }
    console.log(' try catch se bhar wala log chal raha hai'); //chal jayega ye agar api me error hota hai phr bhi..
}
add()


//=============================problem button id Addeventlistner=====================>>
  async function problem(){
    const div = document.querySelector('#div');
    try {
        let api = await  axios('https://jsonplaceholder.typicode.com/users')
        // console.log(api.data);
        api.data.map(function(items , index){
            div.innerHTML +=`
           <h1> ${items.name} </h1> <button id="btn">Click index</button> <hr/>`
        })
        const btn = document.querySelectorAll('#btn');
       btn.forEach(function(items , index){
        items.addEventListener('click',function(){
            console.log(api.data[index]);
        })
        // console.log(items);
       })
    } catch (error) {
        console.log(error);
    }

}
problem()
//==============End===============>>

//===============================Ternary Operator====================>>
//normal ese likhte hen
let bankBal = 20000;
if(bankBal > 40000){
    console.log('Shaadi mubarak!!');
}
else if(bankBal < 3000){
            console.log('dekhte hen');
}else{
    console.log('istikhaare me naa aaya hai ammmi zehar kahlengi');
}
//same condition using ternary operator
bankBal > 40000 ? console.log('Shaadi mubarak') : console.log('Warr gayaa');
//Else if in ternary operator
bankBal > 40000 ? console.log('Shaadi mubarak') :
bankBal < 3000 ? console.log('Acha dekhte hen') : console.log('warr gayaa');

//==================================Spread operator=========================>>
//1st hum 2 arrays ko ese milate hen
const Arr1 = [1,2,3,4,5,]
const arr2 = [6,7,8,];
let concatArr = Arr1.concat(arr2)
console.log(concatArr);

//New method Spread
const Arr3 = [1,2,3,4,5,]
const arr4 = [...Arr3,6,7,8];
console.log(arr4);
//======End=======>>

//=================================Rest Operator========================>>
//hame pata nhi user kitne numbers de to hum rest operator lagate hen ye hame Array return krta hai.
const sunOfVal = (...num)=>{
   let nums = num.reduce(function(acc , curVal){
        return acc + curVal
        
    },0)
    return nums
}
console.log(sunOfVal(1,2,3,4,5));

//==============End===========>>


//==============================Object Destructuring======================>>
//Normal Object
let obj = {
    name : 'Ahmed',
    age : 22,
    isLoggedin: false
}
let Name = obj.name
console.log(Name);

//destructuring
let obj2 = {
    name : 'Ahmed',
    age : 22,
    isLoggedin: false
}
let {name:n , age , isLoggedin } = obj2
console.log(n);

//==============================Array  Destructuring======================>>

let numbers = [1,2,3,4,5];
let [a,b,c,,d] = numbers
console.log(d);

//=========End============>>

//===========================Lexical Scoping============================>>
function hello1(){
    let city = 'karachi'
    // console.log(city2);
    function hello2(){
        // let city2 = 'lahore'
        console.log(city);
    }
    hello2()

}
hello1()

//================End==============>>

//===========================Lexical scope and cclosures===============>>

function abc(){
    let city = 'karachi'
    function abc2(){
        console.log(city);
    }
    return abc2
}
abc()()

//==============================Javascript End=====================>>






































