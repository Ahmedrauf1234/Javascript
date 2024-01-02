//===========================Set Time Out=================================>>

setTimeout(function(){
    //console.log('Console from set time out');

},2000) //2 sec baad comsole chalegaa.. time hum mili seconds me dete hen hamesha

//================================Set interval =========================>>

setInterval(function(){
    //console.log('Ahmed');
},2000) //same set time out ki tarah hai bss farq ye hai jitni time diya hai ye har us time k baad function call krwata rahegaa...

//===============================Stop work with  set interVal======================>>

// let interVal = setInterval(function(){
//     console.log('Ahmed');
// },1000)

// function Stop(){
//     clearInterval(interVal)
// }
//================================Events (kisi bhi specific action per koi task perform krwana hai usko hum events kehte hen)=============================>>

//const btn = document.querySelector('#btn')
// btn.addEventListener('click',Stop)

// btn.addEventListener('mouseover',function(){
//     console.log('clicked');
// })

//===============================Events in javascript using Chatgpt===================>>


// There are numerous events in JavaScript that you can listen for and handle. Here is a list of some common events:

// Mouse Events:
// click: Occurs when the user clicks on an element.
// dblclick: Occurs when the user double-clicks on an element.
// mousedown: Occurs when the mouse button is pressed over an element.
// mouseup: Occurs when the mouse button is released over an element.
// mousemove: Occurs when the mouse pointer moves over an element.
// mouseover: Occurs when the mouse pointer enters an element.
// mouseout: Occurs when the mouse pointer leaves an element.
// Keyboard Events:
// keydown: Occurs when a key is pressed down.
// keyup: Occurs when a key is released.
// keypress: Occurs when a key is pressed and released.
// Form Events:
// submit: Occurs when a form is submitted.
// change: Occurs when the value of an input element changes (for text fields, checkboxes, etc.).
// input: Occurs when the value of an input element changes (similar to change but more frequent).
// focus: Occurs when an element receives focus.
// blur: Occurs when an element loses focus.
// Window Events:
// load: Occurs when a page has finished loading.
// unload: Occurs when a page is being unloaded (closed or navigated away).
// resize: Occurs when the browser window is resized.
// scroll: Occurs when the user scrolls through the page.
// Document Events:
// DOMContentLoaded: Occurs when the HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// Touch Events:
// touchstart: Occurs when a finger is placed on a touch-sensitive device.
// touchmove: Occurs when a finger is moved on a touch-sensitive device.
// touchend: Occurs when a finger is removed from a touch-sensitive device.
// Miscellaneous Events:
// contextmenu: Occurs when the right mouse button is clicked, or the context menu is triggered.
// error: Occurs when an error occurs during the loading of an external resource (like an image).
//===============================================End==========================>>

//===============================Form Work=======================>>
const form = document.querySelector('form');
const input = document.querySelector('#value')
form.addEventListener('submit',(e)=>{
    e.preventDefault() //kisi bhi element ka default behavior khtm krna ho
    console.log(input.value);
})

//Form ka default behavior hotaa hai sumbit per click krne k baad wohh oper action per jata hai jab bhi hum input used krenge to form ka tag me used krenge or or button per type sumbit krenge or event ki madad se form k tag per Submit lagayenge...




