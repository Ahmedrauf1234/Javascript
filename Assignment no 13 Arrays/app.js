// let fruits = ["apple","orange","banana","mango",true,45]
// console.log(fruits[3]);//is k ander hum index values likhte hen

let fruits = ["apple","orange",["Ahmed","talha",45,false,"abc"],"banana","mango",true,45,["nashpati","computer",["pakistan"],]]



// console.log(fruits[2][2],fruits[7][2],fruits[4],fruits[7][2][1],fruits[7][3][1][1]);
console.log(fruits[7][2][0]);



//write print pakistan in console
let phal = ["apple","orange",["Ahmed","talha",45,false,"abc"],"banana","mango",true,45,["nashpati","computer",["india","america",["pakistan"]],]]
console.log(phal[7][2][2][0]); //pakistan

// writeb print india console

let abc = ["apple",["maldives",["India"],"duai"],"orange",["Ahmed","talha",45,false,"abc"],"banana","mango",true,45,["nashpati","computer",["india","america",["pakistan"]],]]
console.log(abc[1][1][0]); //india

// write print hello console

let hello = ["apple",["maldives",["India"],"duai"],"orange",["Ahmed","talha",45,false,"abc"],"banana","mango",true,45,["nashpati","computer",["india","america",["pakistan","australia",["hello?"]  ]  ]  ]  ]
console.log(hello[8][2][2][2][0]); //hello

// write print javascript in console

let hello1 = ["apple",["maldives",["India"],"dubai"],"orange",["Ahmed","talha",45,false,"abc"],"banana","mango",true,45,["nashpati","computer",["india","america",["pakistan",["Html","css",["javascript"]],"australia",["hello?"]  ]  ]  ]  ]
console.log(hello1[8][2][2][1][2][0]) //javascript
// console.log(hello1[8][2][2][3][0]); ////hello? print

// change arrays in ressign values && conditions


let arr = ["pakistan",["hongkong"],"india",[45,100],"bangladesh","afgnistan"]
arr[0]= "india"
console.log(arr);
arr[1][0]="maldives"
console.log(arr);
function check(){
if(arr[0]=="pakistan"){
    console.log("wellcome");
}
else if(arr[1][0]=="maldives"){
    console.log("Hey");
}
else{
    console.log("dafaa");
}
}
check();

if (arr[3][1]>=100){
    console.log("hello?");
}
else{
    console.log("bye");
}
//end

// methods in arrays

// push and pop end se add krdega and delete krdega
let arr1 = ["Apple","banana","nashpati","mobile"]
arr1.push("Ahmed")
console.log(arr1);
arr1.pop()
console.log(arr1);


// shift and unshift start se add and delete krdegaa
arr1.unshift("talha")
console.log(arr1);
arr1.shift()
console.log(arr1);

// slice and splice //splice is all rounder (add/delete) sab krdega

let arr2 = ["Ahmed","talha","hammad","muhammad"]
arr2.splice(2,2,"hammad","muhammad")
console.log(arr2);


let arr3 = arr2.slice(1 , 4) 
console.log(arr3);

let abc1 = arr2.slice(0) //0 se leke end tk pora print hoga
console.log(abc1);


//split dono ko alag alag krdega ex=["Ahmed","rauf"]
let names = "Ahmed rauf"
let newAryy = names.split(" ")
console.log(newAryy);


//concat dono arr ko mila k 1 arr krdega
let concatArr = ["apple","bananna"]
let concatArr1= ["water","juice"]
const newArr = concatArr.concat(concatArr1)
console.log(newArr);

//join  //arr ko sting me convert krta hai

const myname = ["muhammad","Ahmed","Abdul","Rauf"] 
const names4 = myname.join(" ")
console.log(names4);


//sort //ABcd wise set krdega

const player = ["Ahmed","banana","talha","hammad","cat"]
const newplayer = player.sort()
console.log(newplayer);


//reverse arr ko reverse krdega
 
const pak = ["karachi","lahore","peshawar","quetta"]
const reversepak = pak.reverse()
console.log(reversepak);

// indexof jo bhi aap naam doge agar wo arr me mojood hoga uska index number batadega agar majood nh hoga wohh to -1 ajayega means mojood nhi
 const index = ["Ahmed","banana","talha","hammad","cat"]
 const newindex = index.indexOf("hammad") //3
 console.log(newindex);

 //last indexOf

const a = ["Ahmed","banana","talha","hammad","cat","abc"]
const newA = a.lastIndexOf("abc")
console.log(newA);

//find last value of index number in array means abdullah index num? 
let Val  = ["Ahmed","axhad","hassan","abdullah"]
let Val1 = Val.at(-1)
console.log(Val1);

//=======================Next===============//===========>

let names1 = ['Ahmed','Ahmed','abdullah','Axhad','Ahmed']
console.log(names1.indexOf('Ahmed',2)); //1 jaise 2 naam k member hn array me to ese get krenge

//==================End==========================>












































































