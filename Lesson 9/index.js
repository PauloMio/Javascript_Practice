// Random number generator

/*
let randomNum = Math.floor(Math.random() * 6) + 1;  // this gives it the number minimun to always be one so we'll get number from 1-6 kind of dice
*/

/*
let min = 50;
let max = 100;

let randomNum = Math.floor(Math.random() * (max - min)) + min;  // random number generator from 50-100

console.log(randomNum);
*/

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("myLabel1");
const Label2 = document.getElementById("myLabel2");
const Label3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}
