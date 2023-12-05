//======================Single Tons=====================>


const tinderUser = new Object() //isko single Ton object bolte hen 
//console.log(tinderUser);

const tinderuser = {} //isko Non-single Ton object bolenge
//console.log(tinderuser);

tinderuser.name = 'Ahmed'
tinderuser.email = 'Ahmed@chatgpt.com'
tinderuser.id = '123Abc'
tinderuser.isLoggedIn = false
//console.log(tinderuser); ye sari values  tinderuser me me assingn hogai


//===============nested Objects===============>
const regularUser = {
    email : 'Some@gmail.com',
    fulName : {
        UserFullname : {
            FirstNAme : 'Ahmed',
            lastName : 'Rauf'

        }
    }

}
//console.log(regularUser.fulName.UserFullname.lastName);//Rauf
//===============End===============>

const obj1 = {
    1 : 'a',
    2 : 'b',
    3 : 'c'
}
const obj2 = {
    4 : 'a',
    5 : 'b',
    6 : 'c'
}

//const obj3 = Object.assign(obj1,obj2) //dono abjects ko agar combine krnaa hai
//console.log(obj3);

const obj3 = {...obj1,...obj2} //zada tarr ese he combine krte hen hum
//console.log(obj3);


//database se values aarahi hoti hen Array and objects ki soorat me aati hen

let Users = [
    {
        id : 1,
        email : 'Ahmed.rauf11@yahoo.com'

    },
    {
        id : 2,
        email : 'Ahmed.rauf11@yahoo.com'

    }
]

//===========End========>

console.log(tinderuser);

console.log(Object.keys(tinderuser)); //agar hame objects ki keys pata krni ho ye array ki shahkl me ayengi
console.log(Object.values(tinderuser)); //ese hum values bhi pata krsakhte hen ye bhi array ki shshkl me ayengi

console.log(Object.entries(tinderuser)); //ye wala method key or value ko alag alag array me krdega ex: ['name' : 'Ahmed']

console.log(tinderuser.hasOwnProperty('isLoggedIn')); //agar hame pata krna ho k hamare object me "isLoggedIn" naam ki koi property hai to hasOwnproperty batadega //True















