//  for loop

for(i=0;i<10; i++){
    console.log(i);
}

//Nested loop
for( let i=0; i<10; i++){
    console.log("Outerloop ===>",i);
    for (let j = 0; j < 10; j++) {
        console.log("inner loop ===>",j);
        
    }
}

// task table print 1 to 10 {scope / block bolte hen ese}

for(let i = 1; i <=10; i++){
    console.log(i,"===> table");
    for(let j = 1; j <= 10; j++){
        console.log(i +"x"+ j +"=" + i*j);
    }
}

//while loop value initialized pehle hogi loop k bhr or increement end me

let k = 1;
while(k <= 10){
    console.log(k);
    k++
}

//while loop table print task

let a = 1
while(a <= 10){
     console.log(5 + "x" + a + "="+5*a);
     a++

}

//do while loop

let b = 0;
do{
    console.log(b);
    b++

}while(b<=10);

//table print do while loop

let c = 1
do{
    console.log(6 + "x" + c + "=" + 6*c);
    c++
}while(c<=10);

// beckteck in javascript // jab bhi java script likhni hogi ese likhenge concat aga rkrwana hoaga console per linw break krni ho |n se hoogi
const names = "Ahmed"
const age = "21"
console.log(`my name is ${names} and my age is ${age}`);



//array in loop 

const fruit = ["apple","banana","orange","mango"]

for(let d = 0; d < fruit.length; d++){
    console.log(fruit[d]);
}


//practice in arry in loop using beckteck

let fruits1 = ["apple","banana","orange","mango","nashpati","cheeku"]
for(let e = 0; e<fruits1.length; e++){
    console.log(`${fruits1[e]} and its index number is ${e}`);
}

//table print in user

// let userInput = prompt("Enter number?")
// for(let f = 1; f<= 10; f++){

//     console.log(`${userInput} x ${f} = ${userInput*f}`);
// }

//table print in (div)

// let div = document.querySelector("div")
//  for(let g=1; g<=10; g++){
//     div.innerHTML += `5 x ${g} = ${5*g} <br>`
//  }


//multiple tables print in div using nested loop

let div = document.querySelector("div")

for(let g = 1; g<=10; g++){
    div.innerHTML += `===>${g} <br>`
    for(let h = 1; h<=10; h++){
      div.innerHTML += `${g} x ${h} = ${g*h} <br>`
        
    }
}

//user addmission work in arry in loop


// let userName = prompt("Enter your name?")
// let Students = ["Ahmed","Axhad","talha","muhammad","hammad"]
// let isAvailable = false
// for(let l = 0; l<Students.length; l++){
//     if(userName === Students[l]){
//         console.log("Addmission Done");
//         isAvailable = true
//     }

// }
// if(!isAvailable){
//     console.log("Sorry");
// }



//array practice
let Usercity = prompt("Enter your city will yo go?")
let cities = ["karachi","lahore","peshawar","multan","murree","sawat"]
let available = false
for(let m = 0; m<cities.length; m++){
    if(Usercity === cities[m]){
         alert("yes service is avalible")
        available = true
    }
}
if(!available){
    alert("sorry service not avalible")
}


































// let userFruit = 'mango'
// const fruit = ['mango' , 'orange' , 'pineapple'];
// let isAvailable = false;
// // console.log(fruit[1]);
// for (let i = 0; i < fruit.length; i++) {
//     if(userFruit === fruit[i]){
//         console.log('fruit available');
//         isAvailable = true
//     }
    
// }

// if(!isAvailable){
//     console.log('fruit not available');
// }














































































































































 