//=========================For Each======================>> //Hogher Order

const Coding = ['js','ruby','java','python','C++','C'];
Coding.forEach(function(items){
    //console.log(items);
})
//========End======>>
//===========Next==========>>

function printMe(Abc){ //normal function banaya parameter diya or log krwadiya Abc ko
    //console.log(Abc);
}
Coding.forEach(printMe) //forEach ka function laaga k printMe me values store hvi or print me 1 khud function tha to console per aagai value

//======End========>>

Coding.forEach( (items,index,arr)=>{
        console.log(items,index,arr); //ye 3 parameters bhi leta hai
} )

//==========end========>>

//======================Array And Object==================>>
const myCoding = [
    {
        languageName: 'javascript',
        languageFileName:'js'
    },
    {
        languageName: 'C++',
        languageFileName:'C++'
    },
    {
        languageName: 'python',
        languageFileName:'Python'
    }
]
myCoding.forEach(function(item){
    // console.log(item.languageName);
   // console.log(item.languageName);

})
//  let a = myCoding.splice(1,1,obj ={Ahmed : 'aaa', age : 21})
//  console.log(myCoding);

// console.log(myCoding[1]);
//==================End======================>>

//===============================Return in ForEach=============//================>>

const Coding1 = ['js','ruby','java','python','C++','C'];
const values1 = Coding1.forEach( function(language){
    //console.log(language);
    return language   //ForEach kuch bhi return nh krtaa

})
console.log(values1); //undefined

//===================================End==================================>>

//==================================Filter===================================>>

const myNum = [1,2,3,4,5,6,7,8,9,10];
const Result = myNum.filter(function(num){
      return  num > 4  
})

console.log(Result);

//=========End==========>>

const Numbers = [1,2,3,4,5,55,66,23,45,56];
const addedNumbers = [];
Numbers.forEach( function(Num){
    if(Num > 10){
      addedNumbers.push(Num)
    }
})
console.log(addedNumbers);

//===================End================>>

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];
 
const userBooks = books.filter(function(Bks){
          return  Bks.genre === 'Fiction'
})
console.log(userBooks);

const userbooksSon = books.filter(function(Sons){
           return Sons.publish > 1998 && Sons.genre === 'History'
})

console.log(userbooksSon);

//=========================practice ===================>>

let cities = ['karachi','lahore','peshawar','larkana'];
 let res = cities.map(function(city){
        // console.log(city);
        return city
        
})

console.log(res[0]);





















