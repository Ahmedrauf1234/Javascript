//=============================Call Back Functions Practice============================>>

//========================================For Each====================>>
const div = document.querySelector('div');
let Arr = [1,2,3,4,5,6,7,8,77,44,25,100,200,300];
Arr.forEach(function(items){
    div.innerHTML += items
})

//=================================Map===================================>>

 Arr.map( (num) =>{
    if(num % 2 === 0){
        console.log(`Even:${num}`);
         
    }else{
        console.log(`Odd ${num}`);
        
    }
    
})
//=============End=================>>

let givVal = Arr.map(function(val){
    let Sum = val + 1 / 2
    return Math.ceil(Sum);
})
//console.log(givVal);
//=======================End=================>>

let cal = Arr.map(function(valsPow){
    let calulate = Math.pow(valsPow,3)
    return calulate
})
console.log(cal);
//==========================End===========================>>
//Q) input ko short form me kese likhenge?
const input = "George Raymond Richard Martin";
let res = input.split(" ")
 let final = res.map(function(Word){
    return Word[0]
 }).join("")
 console.log(final);//GRRM
 //========================End========================>>


 //================================Filter========================>>
 let Numbers = [1,2,3,4,5,6,7,8,9,10];
 let FilNum = Numbers.filter(function(nums){
     return nums > 2 //filter hame 2 se bari values filter kr k dedega
 }) 
console.log(FilNum);

let mapNum = Numbers.map(function(vals){
    return vals > 2 // lakin map hame true ya false me degaa answer
})
console.log(mapNum);

//=============================End============================>>

//=====================Chaining====================//=======================>>
let values = [2,4,6,8,10,12,14,16,18,57,97,107,66];
let array1 = []
let token = values.map(function(mapNums){
    let Abc = mapNums + 10
    return Abc
}).filter(function(fill){
    let devide = fill  % 2 === 0;
    return devide;
}).map(function(maps){
   let abc = maps + 4
   return abc
   
})
console.log(`All Even Numbers ${token}`);
//======================================End==================================>>

//=================================Palindrome=========================>>

let User = prompt('Enter Word?');
function Palindrome(User){
  let UserLowerCase = User.toLowerCase()

  let ReverseUser = UserLowerCase.split("").reverse().join("");
  console.log(ReverseUser);
  if(UserLowerCase === ReverseUser){
    console.log(`Palindrome ${User}`);
  }else{
    console.log(`Not Palindrome ${User}`);
  }
 }
Palindrome(User)

//===============================End=================================>>














































