let names = document.querySelector('#names');
let donation = document.querySelector('#inp');
let ul = document.querySelector('#ul')
let object = {}
let array = []
function addDonation(){
    ul.innerHTML = ""
    object.Name = names.value
    object.Donation = donation.value
    array.push(object)
    console.log(array);
    //=====================
    for(i = 0; i < array.length; i++){
     ul.innerHTML+= `<li> Name : ${object.names} donation : ${object.donation} </li>`

}
}
