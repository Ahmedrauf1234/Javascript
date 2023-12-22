//===========================Map============//====================>>


const myNumbers = [1,2,3,4,5,60,70,20,10,300];
const newNums = myNumbers.map(function(num){
   return num + 10;
})

//console.log(newNums);  //try to forEach //Done
//===============End=================>>


//=================Chaining==================>>

const newNums1 = myNumbers.map(function(nums){
   return nums * 10
}).map(function(Answer1){
    return Answer1 + 1
}).filter(function(Answer2){
   return Answer2 >= 40;
})

//console.log(newNums1);

//==================================Reduce=====================//=========>>

const MyNums = [1,2,3];
const myTotal = MyNums.reduce(function(acc,curval){
    console.log(`acc : ${acc} curr: ${curval}`);
    return acc + curval
},0)

console.log(myTotal); //0 jo  hai wo accumulator me store hojata hai

//=========================reduce in arrow fnctions=============//============>>

const mytotals = MyNums.reduce((acc,curr) =>{ return acc + curr },1)
console.log(mytotals); //7
//acc 1 + 1
//acc 2 + 2
//acc 4 + 3
//======================End ==============>>

//====================Shopping Cart Ex=======================>>
//jitne bhi prices hen unko add krna hi
const ShoppingCart = [
    {
        itemName : 'javascript',
        price : 455
    },
    {
        itemName : 'C lanuage',
        price : 2700
    },
    {
        itemName : 'C++',
        price : 700
    },
    {
        itemName : 'python',
        price : 5000
    },
    {
        itemName : 'React js',
        price : 6000
    }
]
const Rupees = ShoppingCart.reduce(function(acc,item){
   return acc + item.price
},0)
console.log(`Total Rupees is ${Rupees}`);

//====================Practice===================>>

const myNumbersAgain = [1,2,3,4,5,60,70,20,10,300];
 myNumbersAgain.forEach(function(numbers){
         console.log(numbers + 10);
})






