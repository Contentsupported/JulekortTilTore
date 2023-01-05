let images = document.querySelector('.images');
let letter = document.querySelector('.letter')
let xspot = document.querySelector('.xspot')




function found (){
    let audio = new Audio("./audio/Reindeer.mp3");
    audio.play();
}
function show (){
    let audio = new Audio("./audio/Jumpscare.mp3");
    audio.play();
    document.querySelector('body').style.backgroundImage = "url('./images/Jumpscare.gif')";
    images.remove();
}
function paper (){
    let audio = new Audio("./audio/Paper.mp3");
    audio.play();
    xspot.remove();
    letter.remove();
}



let scar = document.querySelector('.scare');

let Deer1 = document.querySelector('.Deer1');

Deer1.addEventListener('click', ()=>{
    Deer1.remove();
})

let Deer2 = document.querySelector('.Deer2');

Deer2.addEventListener('click', ()=>{
    Deer2.remove();
})

let Deer3 = document.querySelector('.Deer3');

Deer3.addEventListener('click', ()=>{
    Deer3.remove();
})

let Deer4 = document.querySelector('.Deer4');

Deer4.addEventListener('click', ()=>{
    
    Deer4.remove();
})

let Deer5 = document.querySelector('.Deer5');

Deer5.addEventListener('click', ()=>{
    Deer5.remove();
})

let Deer6 = document.querySelector('.Deer6');


Deer6.addEventListener('click', ()=>{
    Deer6.remove();
})

let Deer7 = document.querySelector('.Deer7');

Deer7.addEventListener('click', ()=>{
    Deer7.remove();

})

