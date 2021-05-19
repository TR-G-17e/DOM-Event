/*
click - нажатие мышки
submit - отправка формы (form.onSumbit)
mouseover / mouseout - hover
keydown и keyup - нажали и отпустили клавишу на клавиатуре

DOMContentLoaded - 

////
mousedown / mouseup - нажатие левой кнопки мыши
*/

// document.addEventListener("DOMContentLoaded", () => {
//   const btn = document.querySelector("#btn");
//   // btn.onclick = makeRed

//   btn.addEventListener("click", makeRed);
// });

// const h5 = document.querySelector('h5');

// function makeRed() {
//   h5.style.color = "red";
// }

// const btn = document.querySelector("#btn");
// // btn.onclick = makeRed

// btn.addEventListener("click", makeRed);

const helloWorldCollection = document.querySelectorAll('h3');

function abracadabra(event) {
    console.log( event );
    console.log( event.target.innerText );
    console.log( event.currentTarget.id );
}

// helloWorldCollection.forEach( ele => {
//     ele.addEventListener('click', event => abracadabra(event))
// } )

const d = document.querySelector('div');
// // console.log(d.childNodes);

// d.childNodes.forEach( e => console.log(e) )

// for (element of helloWorldCollection) {
//     // element.addEventListener('click', event => abracadabra(event))
//     element.addEventListener('click', abracadabra)
//     console.log(123);
// }

d.addEventListener('click', abracadabra)