// let users;
// var users;
// const user;


// let user = "Ahmed"
// let Ahmed = "user"
// Ahmed = "user"
// user = "Ahmed"
// console.log(user);


//functions //kisi bhi block of code ko resuable banana hai usko hum function me likhte hen



// console.log("hello world");
// console.log("hello world");
// console.log("hello world");

// function repeatConsole(){
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// console.log("hello world");
// }
// repeatConsole()
// repeatConsole()
// repeatConsole()
// repeatConsole()
// repeatConsole()
// repeatConsole()




// function greetUser(){
//     console.log("hello Ahmed");
// }
// greetUser //isko bolte hen function ka reference pass kiya hai console per kuch bhi nh ayega q k round brackets nh lagaye..sirf reference pass kiya hai




//gunction values get


// function User1(Username){ //user1 k round bracket me jo likha hai isko parameter pass krana bolte hen (asal me ye varible hai)
//     console.log("Ahmed" +" "+ Username);
// }
// User1("talha") //isko bolte hen arguments (value yhn per hai varibles ki jo perameter me hai)


// function ids(Ahmed,Talha,hassan,Axhad){
//     console.log("All students id's is",Ahmed,Talha,hassan,Axhad);
// }
// ids(12,13,14,15)

//user information

// let names = prompt("Enter your name")
// let age = +prompt("Enter your age")


// function Greetuser(personname,age){
//     if(isNaN(+names) && typeof(age)=== "number"){
//         console.log("Hello"+" "+personname+" "+"your age is"+" "+age);
//     }
    

//     else{
//         console.log(" Bhai jaan sahi value do");
//     }
// }


// Greetuser(names,age)

//again practice
// let person = prompt("Enter your name?")
// let pertsonAge = +prompt("Enter your age?")
// let personCity = prompt("Enter your city")

//  function personInformation(naam,ages,city){
//     if(isNaN(+person) && typeof(pertsonAge)=== "number" && isNaN(+personCity)){
//         console.log("Hello",naam,"your age is",ages,"and your city is",city);

//     }
//     else{
//         console.log("Please enter correct values");
//     }
//  }
//  personInformation(person,pertsonAge,personCity)



 
 //operators && expressions practice

//  let a = 12
//  let b = 10
//  let c = 20
//  let e = 13

// let student = prompt("Enter value?")
// if(student==a || student==b || student==c || student==e ){
//     console.log("Addmisson Done");
// }
// else{
//     console.log("not done");
// }


//function returns work

// function sum(num1,num2){
//      console.log(num1 + num2);
//     return num1 + num2
// }
// console.log(sum(20 , 30));

// //practice again

// function gharkanokar(saman1 , saman2){

    
//     console.log(saman1 +" "+ saman2);
//     return  saman1 +" "+ saman2
// }
// console.log(gharkanokar("doodh","dhaniya"));


//again

// function ramookaka(dish1 , dish2 , dish3 ){
//       return "yelo aap ka kahna" +" "+dish1 +"  "+ "yelo" +" "+ dish2 +" "+ "meethe me"+" "+ dish3 
      
// }
// console.log(ramookaka("biryani","tinde","gulab jamoon"));

// //new function

// function nokar(lalokhat,waterpump,newkarachi){
//        return "lalokhat aap ko"+" "+lalokhat +"me jana hai"+" "+"waterpump aap ko"+" "+waterpump+" "+"me jana hai"+" "+"Or new karachi aap ko"+" "+newkarachi+" "+"me jana hai";

// }
// console.log(nokar("rikshaw","bike","chinchi"));

//end
//rikshaw sawari function

// let sawari = prompt("Baji khn jana hai?")
// let kiraya = +prompt("aap ka budget kitna hai baji?")
// let capacityofrikshaw = +prompt("baji kitne passsenger hen?")
// function onlinerikshawwala(sawari,kiraya,capacityofrikshaw){
//     if(isNaN(+sawari) && typeof(kiraya)==="number" && kiraya>=100 && typeof(capacityofrikshaw)==="number"&&capacityofrikshaw<=5){
//         console.log("baji araha hn me");
//     }
    
    
    
//     else{
//         console.log("baji mzk nh kro rozi per betha hn");
//     }

// }
// onlinerikshawwala(sawari,kiraya,capacityofrikshaw)
//end




// function greetUser(){
//     let names = "hello user"
//      return names
// }
// console.log(greetUser());
// greetUser()


// function sumOf(num1,num2){
//     const sum = num1 + num2
//     return sum
// }
// console.log(sumOf(10,20));

//again practice
// let studentName = prompt("Enter your name?")
// let Student = +prompt("Enter your roll number?")
// let Addmissonstudents = 12
// function studentidentity(studentName,Student,Addmissonstudents){
//     if(isNaN(+studentName) && typeof(Student)==="number" && Student==Addmissonstudents){
//         console.log("Congrats aap ka addmission ho chuka hai");
//     }
//     else{
//         console.log("Sorry next semester me try kren😊");
//     }
// }
// studentidentity(studentName,Student,Addmissonstudents)


// let arr = ["Ahmed","Axhad","talha"]
// // console.log(arr.splice(1,1,"sadiq"),arr);
// // arr.unshift("abdullah","hammad")
// // arr.shift()

// arr.push("hammad","abdullah")
// arr.pop()
// console.log(arr);

//marksheet practice
// let Student = prompt("Enter your name?")
// let English = +prompt("Enter your English marks?")
// let urdu = +prompt("Enter your urdu marks?")
// let maths = +prompt("Enter your maths marks?")
// let physics = +prompt("Enter your physics marks?")
// let pakistanstudies = +prompt("Enter your PST marks?")
// let totalmarks = 500;
// let usertotal = English + urdu + maths + physics + pakistanstudies;
// let percentage = (usertotal/totalmarks)*100
// // let checkuser = isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number"
// function marksheet(Student,English,urdu,maths,physics,pakistanstudies) {
//  if(isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number" && percentage >= 80 && percentage < 101 ){
//         console.log("Hey"+" "+Student+" "+"congrats your marks is"+" "+usertotal+" "+"And your percentage is"+" "+percentage+" "+"your grade is A+");
//     }
//     else if( isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number" && percentage>=70 && percentage < 80){
//         console.log("Hey"+" "+Student+" "+"congrats your marks is"+" "+usertotal+" "+"And your percentage is"+" "+percentage+" "+"your grade is A");
//     }

//     else if( isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number" && percentage >= 60 && percentage < 70){
//         console.log("Hey"+" "+Student+" "+"congrats your marks is"+" "+usertotal+" "+"And your percentage is"+" "+percentage+" "+"your grade is B");
//     }
//     else if( isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number" &&  percentage >= 50 && percentage < 60){
//         console.log("Hey"+" "+Student+" "+"congrats your marks is"+" "+usertotal+" "+"And your percentage is"+" "+percentage+" "+"your grade is C");
//     }
//     else if( isNaN(+Student) && typeof(English,urdu,maths,physics,pakistanstudies)==="number" &&   percentage >= 40 && percentage < 50){
//         console.log("Hey"+" "+Student+" "+"congrats your marks is"+" "+usertotal+" "+"And your percentage is"+" "+percentage+" "+"your grade is D");
//     }
    
//     else{
//         console.log("Hey"+" "+Student+" "+"Your marks is"+" "+usertotal+" "+ "You are Fail");
//     }
    
// }
// marksheet(Student,English,urdu,maths,physics,pakistanstudies)



// function Add(a,b){
//     return a+b;

// }
// console.log(Add(10,10));
// console.log(Add(10,20));
// console.log(Add(10,30));
// console.log(Add(10,40));
// console.log(Add(10,50));
// console.log(Add(10,60));







// function add(a,b,c){
//       return a+b+c
//     }
// console.log(add(12,13,1));
 // console.log(add(45,56));

//  let a = 24;
//  let b = "24"
//  let c = 23;   
//                 //true   //false   //false     //true   //false     //true
//  let compare = a !== c || b != a || c === b && a <= b || b > c || c !== a ;
//  console.log(typeof(compare),compare);




let person = prompt("Enter your name?")
let personCNIC = +prompt("Enter cnic?")
function information(person,personCNIC){
    if(isNaN(+person) && typeof(personCNIC)==="number"){
    console.log("yes you are registered");
    }
    else {
        console.log("value invalid");
    }
}
 information(person,personCNIC)


















