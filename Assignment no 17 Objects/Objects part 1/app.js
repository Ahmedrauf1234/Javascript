//single Ton
//objects litrels

//collection of keys and properties is called object

const JsUser = {
    name : 'Ahmed',
    "full Name":'Abdul Rauf',
    age : 21,
    location : 'karachi',
    email : 'Ahmed@gmail.com',
    isLoggedIn : false,
    lastLoginDays : ['monday','tuesday','wednesday']

}
//=======print in Objects in console ===========>

console.log(JsUser.email); //ese bhi objects ki value hum pata krsakhte hen
console.log(JsUser['email']); //or ese bhi
console.log(JsUser["full Name"]); //agar key string me gap k saath hogi to wo key access ese hogi

//=======Changes in object=========

JsUser.email = 'Ahmed1234@chatgpt.com'
console.log(JsUser);
//Object.freeze(JsUser) //freeze krne k bad aap kuch bhi changes nh krsakhte
JsUser.location = 'lahore'//nh hngi changes
//console.log(JsUser);//nh hngi changes
JsUser.country = 'pakistan'
console.log(JsUser);
delete JsUser.country

//=======objects in function (add)========>

JsUser.greeting = function(){
    console.log('hello js User');
}
JsUser.MyFun = function(){
    console.log(`Hello MyFun ${this.location}`);
}
// console.log(JsUser.greeting());
// console.log(JsUser.MyFun());

//============================================Next========================
function createObject (name , age){
    this.name = name;
    this.age = age;
}

const obj = new createObject('abdullah' , 20)

console.log(obj);




















