let rightNow = new Date()
console.log( rightNow); //datatype (object)
console.log( rightNow.toString()); //datatype (string)
console.log(rightNow.toLocaleDateString()); //date ka format ese hojayega ex:12/4/2023
console.log(rightNow.getDay()); //day batadega (0 == sunday) (1 == monday)...
console.log(rightNow.getMonth()); //jo month chal raha hoga computer me wo dedega month bhi 0 index se hoga shuru
console.log(rightNow.getHours()); //raat 12 se jitne ghante hogaye abhi tk wo batadega
console.log(rightNow.getSeconds());//seconds batadega jo abhi horahe hen
console.log(rightNow.getTime());
console.log(rightNow.getFullYear()); //jo abhi saal chal raha hoga wo batadega
//====================important method ==================//===>
console.log(rightNow.getTime());
//======================== End ===============>


//====================task===============>

//===========================Age calculator ====================>

const CurrentDate = new Date();
const myBirthday = new Date('may 17,2002')
const miliseconds = CurrentDate.getTime()
const Mymiliseconds = myBirthday.getTime()
const Minus = miliseconds - Mymiliseconds;
const formula = Minus / (1000*60*60*24*31*12)
console.log(Math.floor(formula));

//============================End =========================>

//................Continue......









// let rightNow1 = new Date('may 17,2002')
// let Days = ['Sunday','monday','tuesday','wednesday','thursday','friday','saturday','Sunday'];
// console.log(Days[rightNow1.getDay()]);