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
let res = input.split(" ") //[array me change hogaya]
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

//let User = prompt('Enter Word?');
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
//Palindrome(User)

//===============================End=================================>>
//==============================Reduce=============================>>

var students = [
    { name: "John", age: 20, fees: 500 },
    { name: "Jane", age: 22, fees: 6120 },
    { name: "Bob", age: 21, fees: 950 },
    { name: "Alice", age: 19, fees: 520 },
    { name: "John", age: 20, fees: 800 },
    { name: "Jane", age: 22, fees: 600 },
    { name: "Bob", age: 21, fees: 550 },
    { name: "Alice", age: 19, fees: 520 },
    { name: "John", age: 77, fees: 5000 },
    { name: "Jane", age: 12, fees: 600 },
    { name: "Bob", age: 41, fees: 550 },
    { name: "Alice", age: 79, fees: 7820 },
    
  ];

  let studentsFess = students.reduce(function(Acc , currVal){
          let feeses = Acc + currVal.fees
          return feeses
  },0)
  console.log(studentsFess);
  //======================================End===================>>
  let Abc = [
    {
        rupees : 1
    },
    {
        rupees : 2
    },
    {
        rupees : 3
    }
]
let add = Abc.reduce(function(acc,currNum){
            let okay = acc + currNum.rupees 
            return okay

},0)
console.log(add);
//0 + 1
//1 + 2
//3 + 3

//====================End===================>>
//Accumulator ki value bhr bhi initilaized kr sakhte hen

let StudentNos = [2,3,4,5,6,7,];
let initialval = 0;
let result = StudentNos.reduce((accumulator,currentVal) => accumulator + currentVal )
console.log(result);
//==============================practice=======================>>

let StudentNos1 = [2,3,4,5,6,7];

let result1 = StudentNos1.reduce( function(Accc , currr){
    let ttt = currr + Accc
        return ttt
},0 )
console.log(result1);

//=============================End=========================>>
//===============================Age addmission ===================>>

let  studentsnums = [
    { name: "John", age: 20, fees: 500 },
    { name: "Jane", age: 22, fees: 6120 },
    { name: "Bob", age: 21, fees: 950 },
    { name: "Alice", age: 19, fees: 520 },
    { name: "John", age: 20, fees: 800 },
    { name: "Jane", age: 22, fees: 600 },
    { name: "Bob", age: 21, fees: 550 },
    { name: "Alice", age: 19, fees: 520 },
    { name: "John", age: 77, fees: 5000 },
    { name: "Jane", age: 12, fees: 600 },
    { name: "Bob", age: 41, fees: 550 },
    { name: "Alice", age: 79, fees: 7820 },
    
  ];
  let fills = studentsnums.filter( (eee) => {
                let Ages =   eee.age >= 20;
                return Ages
  }).map((aaa)=>{
        let fess_ = aaa.fees
        return fess_
  }).reduce((Acc1,finalres)=>{
        let fnf = finalres + Acc1
        return  fnf
  },0)
  console.log(`total fees is ${fills} greater then and equal to 20`);
  //=================End ===================>>

  //=========================finding 1st Object======================>>

 for (const key in studentsnums[0]) {
   console.log(`${key} and its value is ${studentsnums[0][key]}`);
 }
 //=========================ENd===================>>

 const productCart = [
    { 
        productName: "Product 1", 
        price: 100.99 
    },
    { 
        productName: "Product 2", 
        price: 200.99 
    },
    { 
        productName: "Product 3", 
        price: 780.50 
    },
    { 
        productName: "Product 4", 
        price: 1400.00 
    },
    { 
        productName: "Product 5", 
        price: 1500.75 
    },
    { 
        productName: "Product 6", 
        price: 6500.99 
    },
    { 
        productName: "Product 7", 
        price: 24.50 
    },
    { 
        productName: "Product 8", 
        price: 17.25 
    },
    { 
        productName: "Product 9", 
        price: 141.49 
    },
    { 
        productName: "Product 10", 
        price: 140.99 
    }
];
let Cart = productCart.reduce((add,valuess)=>{
            let addPrice =  add + valuess.price
            return addPrice
},0)
console.log(Math.floor(Cart));
//=============================End======================>>
//=======================Gym discount=======================>>

const gymmemberShip ={
    gymName : 'gulburg Gym',
    Memberfees : 2500,
    discount : function(members){
            let userDiscount;
            if(members > 2){
                userDiscount = 20
                console.log(`UserDiscount==>${userDiscount}%`);
              let disfin =  this.Memberfees = this.Memberfees - (this.Memberfees * userDiscount / 100)
              console.log(disfin);
            }else{
                userDiscount = 5
                console.log(`userDiscount==> ${userDiscount}%`);
            let disfinal =     this.Memberfees = this.Memberfees - (this.Memberfees*userDiscount/100)
            console.log(disfinal);

            }
    }
} 
gymmemberShip.discount(0)
//========================End================>>



  



















































