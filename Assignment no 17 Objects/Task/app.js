
let names = document.querySelector('#names');
let donation = document.querySelector('#inp');
let object = {}
let array = []
function addDonation(){
    object.Name = names.value
    object.Donation = donation.value
    array.push(object)
    console.log(array);
    names.value = ""
    donation.value = ""

}

