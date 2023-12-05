// let cityName = 'karachi';
// let cityName2 = 'Karachi';
// console.log(cityName===cityName2); //false

///////////////////////////Strings Mrthods //////////////////////////////////

//1) toLowerCase() //user jo bhi value dega small letters me hojayegi or agar wo true hogi to if chalega wrna else
// const input = document.querySelector('#form')
// function checkcity(){
//     //console.log(input.value);
//     let userval = input.value
//     if(userval.toLowerCase() === 'karachi'){
//         console.log('uss bro');
//     }
//     else{
//         console.log('another city');
//     }
// }

//karachi ko small krdega
// const city = 'KARACHI'
// console.log(city.toLowerCase());




//user se lena hai safest city
const input = document.querySelector('#form')

const cities = ['karachi','islamabad','lahore','peshawar','larkana'];
let iscities = false;

function checkcity(){
    for(let i = 0; i < cities.length; i++){
        if(input.value.toLowerCase() === cities[i]){
            iscities = true
            break
        }
    }
    if(iscities){
        console.log('you are in safest city');
    }else{
        console.log('kalma parhlo');
    }
}

//length //Slice //sting per sirf array k tammam methods me se slice or length chalta hai bs
let city = 'karachi'
console.log(city.length);
console.log(city.slice(1,5));
console.log(city.slice(1));



//trim //original me changes nh krega====== original me changes sirrf splice krta hai
let City1 = 'karachi'
let newStr = City1.trim()
console.log(newStr);
console.log(newStr.length);


//replace and replace all

const str =  "In previous chapter you learn replace pervious to diffrent ways to replace"
console.log(str.replace('replace','update')); //sirf pehle wale replace ko change krega

const str1 =  "In previous chapter you learn replace pervious to diffrent ways to replace"
console.log(str.replaceAll('replace','update')); //ye saare replace ko cahange krdega

//Split kisi bhi atring ko array badal dega
let string = 'AhmedA Rauf'
console.log(string.split(' '));

//join kisi bhi array ko string me badal dega
let arr = ['Ahmed','Rauf']
console.log(arr.join('-'));



//char at //value doge to batadega k us value per knsa charecter hai
const city1 = 'karachi'
console.log(city1.charAt(2));

//========================strings completed====================================

//==========================numbers methods======================================


//math.round

let number = 9.8   //round krdega means 10 krdega
console.log(Math.round(number));

//math.ceil //9.1 ho ya 9.2 ho ya 9.3 ho ya math.ceil 1 aage kr k he batayega means 10

let number1 = 9.1 
console.log(Math.ceil(number1));

//math.floor

let number2 = 9.9; //9.1 ho ya 9.2 ho ya 9.9 ho ya math.floor 1 peeche kr k he batayega means 9
console.log(Math.floor(number2));//9


//math.random

console.log(Math.random()*5); //1 se lekr 5 tk random numbers aajyenge points k saath
 //points agar naa chaiye hn? //floor or ciel dono laga sakhte hen
console.log(Math.floor(Math.random()*2)); 

//==========================Toss App ==================================>


function Toss(coin){
    console.log('Userr choice',coin);

    let randomNumber = Math.floor(Math.random()*2); 
    if( randomNumber   === 1 && coin === 'Masjid'){
        console.log('you win the toss');
    }
    
    else if (randomNumber === 0 && coin === 'Chand'){
        console.log('you win the toss');

    }
    
    else{
        console.log('loss');
    }
   
}

//===========================Toss App end =============================>

//=============================colors App =============================>


const body = document.querySelector('body');
const div = document.querySelector('div')
let colors = ['red','pink','blue','green','wheat']

for (let i = 0; i < colors.length; i++) {
    div.innerHTML += `<button style='margin:20px; padding:9px; border: 2px solid black; border-radius:10px; background-color: wheat;' onclick="changecolor(${i})" > ${colors[i]} </button>`

    
}

function changecolor(i){
    console.log(colors[i]);
    div.style.backgroundColor = colors[i]
}

//=============================colors App End =============================>

//=============================Switch statement=============================>

const number3 = 5;

switch (true){
    case number3 > 7:
        console.log("case 1 Run");
        break
        case number3 !== 6:
            console.log("case 2 Run");
            break
            default:
                console.log("default means else");
}


//============================End==========================================>








































































































