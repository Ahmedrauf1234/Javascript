//palindrome

// let User = 'MaDaM'
//  let con = User.toLowerCase();
// //  console.log(con);

//  let check = con.split('').reverse().join('')
// //  console.log(check);



//  if(con === check){
//     console.log('palindrome hai bhai');
//  }else{
//     console.log('nhi hai');
//  }

//=================================================================
// const parant = document.querySelector('.parant')
// console.log(parant.children);
// console.log(parant.children[0].innerHTML);
// for(i = 0; i < parant.children.length; i++){
//     console.log(parant.children[i].innerHTML);
// }
// console.log(parant.lastElementChild);

// const dayone = document.querySelector('.day')
// console.log(dayone.parentNode);
// console.log(dayone.nextElementSibling);
// console.log(parant.childNodes);
//===============================Create element======================>>

// const div = document.createElement('div')
// div.className = 'main'
// div.id = 'myId'
// div.id = Math.round(Math.random()*2+3)
// div.setAttribute('title','addtitle')
// div.style.backgroundColor = 'red'
// // div.innerHTML = '<h1>Ahmed Rauf</h1>'
// // console.log(div);
// //======================
// let addtext = document.createTextNode('Ahmed Rauf')
// div.appendChild(addtext);
// document.body.appendChild(div)
//====================================adding list===================>>
function addlanguage(langName){
    const li = document.createElement('li')
    li.innerHTML = `${langName}`
    document.querySelector('.langNames').appendChild(li)

}
addlanguage('python')
addlanguage('python')









