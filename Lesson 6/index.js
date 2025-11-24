// const = a variable that can't be changed
// let = are variables that can be changed
// make the varible name of const capitalized when using primitive data types like numbers a booleans, reference data types such as strings don't normally follow this

/*
const PI = 3.14159;
let radius;
let circomference;

radius = window.prompt('Enter the radius of a circle');
radius = Number(radius);

circomference = 2 * PI * radius;

console.log(circomference);
*/

const PI = 3.14159;
let radius;
let circomference;

document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circomference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circomference + "cm";
}