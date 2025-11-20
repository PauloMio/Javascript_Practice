// How to accept user input

// 1. Easy way = window promt
// 2. Professional way = HTML textbox

/* Easy Way */
/*
let username = window.prompt(`What's your username: `);

console.log(username);
*/

/* Professional Way */

let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`
}
