//==================================synchronous and asynchronous=================>>



//======================================synchronous==================================>>
//synchronous wo hotaa hai database per request behji let data = requstdataBase data foran to ayega nhi foran second line me chala jayega or console.log(data) undefined dedegaaa



//=======================================asynchronous=========================

//setInterval
//setTimeOut
//promises
//async await
//fetch
//axios
//=====jhn bhi ye likha hva dikh jaye wo asynchronous code hogaa=====>>
//=====Main stsck or side stack k darmiyan communication hoti hai usko hum Event loop kehte henn=====>>
// console.log('1');
// console.log('2');
// console.log('3');
// setTimeout(()=>{
//     console.log('4'); //ye asynchronous code hai
// });
// console.log('5');



//===============================Promises=================================>>
//promise asynchronous code hai

// let bankBalance = 100000
// const shaadiScenes = new Promise(function(resolve , reject){
//     if(bankBalance > 200000){
//         resolve('Shaadi mubarak')
//     }else{
//         reject('ammi zehar kahlengi');
//     }
// })

// shaadiScenes.then((res)=>{
//     console.log(res);
// }).catch((err)=>{
//     console.log(err);
// })


//======================= API (Application Programming Interface)===================>>

//data base se data mangane k liye hum API ka used krte hen link k zarye
//backend ko frontend se connect krne k liye hum API ka used krte henn


//Axios hame promise return krta hai abhi ye pending dega q k .then .catch lagaya nhi to to data pending per hai
console.log(axios('https://jsonplaceholder.typicode.com/users'));
//==================End==================>>

//ab hame ye database se object return kregaa 
axios('https://jsonplaceholder.typicode.com/users')
.then((res)=>{
    console.log(res.data);
}).catch((err)=>{
    console.log(err);
})

//jsonplceholder se Api ka link milta hai or axios k function me rakhtte henn
//axios ka script tag js ki script ka oper laghta hai

//=======================End======================>>


























