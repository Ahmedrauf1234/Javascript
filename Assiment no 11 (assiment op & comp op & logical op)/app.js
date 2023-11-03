//Assiment operator practice

let num1 = 10;
num1 = num1 + 2
console.log(num1);

let $num1 = 10;
num1 += 2;
console.log(num1);

let num1_ = 10;
num1_ %= 2;
console.log(num1_);


let balls = 14;
balls += "12"
console.log(typeof(balls),balls);

let userid = 10;
userid += 5;
userid -= 5;
userid *= 5;
userid /= 5;
console.log(userid);


let usernames = "Ahmed"
let userids = 50;
userids = userids + 10;
userids -= 5;
console.log(typeof(userids),userids);


let products = 50;
let costumers = 100;
products = costumers; //100
costumers = products; //100
products += 50; //150
costumers += 100; //200
console.log(typeof(products,costumers),products,costumers);

let $products = 10;
$products = $products + "20"
console.log(typeof($products),$products);


// end 


//Comparision Operators

// // > greater than
// // < less than
// // == equal to //data type jo bhi ho condition true hogi ye true dedega
// // === double equal to //data type match honi chaiye wrna ye false krdega or condition true honi chaiye
// // != not equal to // datatype jo bhi ho condition true hogi true dedega
// // >= greater than and equal to //>= me 1 bhi true hogai console per true aajyega
// // <= less than and equal to //>= me 1 bhi true hogai console per true aajyega



let Num1 = 10;
let Num2 = 25;
let Comparision = Num1 === Num2;
console.log(Comparision);


// logical operators

// //|| // Or operator ko urdu me "ya" bolte hen ya to ye ya to ye
// //&& // and operator ko urdu me "Or" bolte hen Ahmed or talha
// "OR" operator jab lagega dono me se 1 bhi true hogai return true krdega
// "And" operator jab lagega dono me se 1 bhi false hogai return false krdega



//"OR"
let abc1 = 10;
let abc2 = 20;
let abc3 = 20;      //false        //false          //false       //true
 let compareval = abc1 > abc2 || abc1 == abc2 || abc1 === abc2 || abc3 >= abc1 || abc1 != abc3 || abc2 <= abc1 || abc3 == abc2;
             //true        //false        //true
  console.log(compareval);


  //And
  let value1 = 10
  let value2 = 20;
  let value3 = 5; 

                   //true              //true             //true
  let compVal = value1 > value3 || value3<= value2 && value3 != value1 || 
  
       //false               //false 
  value2 === value1 || value2 == value3
       //false            
  console.log(typeof(compVal),compVal);


 //OR
 let batsMan = 11;
 let bowlers = "10"
 let fielders =  "12"
                       //false           //true                //true
 let match = fielders === bowlers || batsMan <= fielders || fielders > bowlers || 
 
       //true                //true              //true              
 bowlers!==batsMan || batsMan != bowlers && batsMan === batsMan || 
 
      //true                 //true
bowlers != fielders || fielders >= bowlers;
 
 console.log(typeof(match),match);

 //if else work

 if(bowlers > fielders){
  console.log("if chal raha hai");
}

else if(batsMan != fielders){
  console.log("else if chal raha hai");
}

else{
  console.log("else chal raha hai");
}

//end

//!== practice

let Val1 = 10;
let Val2 ="10";
let compval = Val1 !== Val2
console.log(compval);

let seconds = "20";
let minutes = 45;
let hours  = "2";
                   
                 //true              //true                //false
let Time = seconds !== minutes || hours != minutes || minutes <= hours &&

        //false          //true                //false            //true
hours === minutes || seconds == seconds || hours > minutes || seconds !== hours;
console.log(typeof(Time),Time); 
//endkarac

let Karachi = 500;
let lahore = 400;
let peshawar = 900;
let islamabad = 250;
if(islamabad !== Karachi){
  console.log("Shame shame islamabad");
}
else if(lahore === peshawar){
  console.log("Wahhhhh");
}

else if (lahore !== Karachi ){
  console.log("Hayeee lahore");
}

else{
  console.log("Saare lpc");
}
//end 


//assiment operator
let Home = 5;
Home = 10 + "7" + 5;
Home += 5;
Home %= 5;
console.log(typeof(Home),Home);

//reasign 
let names = "2"
names = names + "4"
names = "10";
console.log(typeof(names),names);


//comparision
let mobiles = 100;
let laptops = 100;

                    //true                 //false            //true
let compare = laptops !== mobiles &&  laptops != mobiles || mobiles <= 

                 //false
laptops && laptops === mobiles;
console.log(compare);

//comparision practice
const $karachi = 45;
const $ismabad = "100"
const $peshawar = "20"
const $swat = 120
 

                   //false              //false                  //false
const comp = $karachi >= $swat || $peshawar === $karachi || $ismabad <= $karachi &&
      
       //true              //false            //true                 //true
$peshawar != $swat || $swat != $swat && $karachi == $karachi || $karachi <= $swat

            //true                //false
|| $ismabad !== $karachi || $peshawar != $peshawar;

console.log(typeof(comp),comp);
//end 



























































 








 
                         












//continue..

















