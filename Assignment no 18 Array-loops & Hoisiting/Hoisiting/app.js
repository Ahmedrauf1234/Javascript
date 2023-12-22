//================================Hoisiting============================>>

function One(){
    let UserName = 'Ahmed'

    function Two(){
        let City = 'Karachi'
        console.log(UserName);
    }
    // console.log(City); //One wala function two wale function me se kuch bhi Access nh krsakhta lakin two wala function one wale ko access kr sakhta hai
    Two()
}

One()
//===============================End=========================>>
if (true){
    let UserName = 'Ahmed';
    if(UserName=== 'Ahmed'){
        let City = ' Karachi'
        console.log(UserName + City);
        // console.log(City); ab krsakhte hen access scope k andar hogaya
    }
    // console.log(City); //Error Scope se bahar access nh krsakhte
}
// console.log(UserName); //Error Scope se bhr nh krsakhte access
//===============================End===============================>>
//=========================Normal function==================>>

console.log(addOne(6));//oper call krenge nhb ayega error

function addOne(Num){
    return Num + 1; //6
}
console.log(addOne(5)) //Error nh ayega
//=============================End===========================>>

//========================Function Store in Varible====================>>

//Addtwo(12); //Ab ayega error means varible declear krne se pehle aap usko access krrahe ho isiliye error ayega 

let Addtwo = function(Num){
        return Num + 2 //12
}
console.log(Addtwo(10)); //error nh ayega













