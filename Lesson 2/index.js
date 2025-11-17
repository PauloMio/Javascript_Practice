// variables = a container that stores a value.
//             Behaves as if it were the value it contains.

// 1. declaration   let x;
// 2. assignment    x = 100;    // will display "100" on broser console

// 3. declaration & assignment  let x = 100;    // Use if you already know what your values shoudl be. It will display "100" in the console as well

// let age = 24;
// let price = 10.95;

// console.log(age);
// console.log(price);

// console.log(`Age: ${age}`);
// console.log(`Cinema Ticket Price: ${price}$`);

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Using String */
// let firstName = 'Paulo';    // Example of string
// let statusQuo = true;          // Example of Bolean. Bolean is either "true" or "false". Only those two.

// console.log(typeof firstName);  // 'typeof' = used for displaying the type of data
// console.log(typeof age);
// console.log(typeof price);
// console.log(typeof statusQuo);


// console.log(`I am ${firstName}, and I am ${age} years old.`);
// console.log(`I paid ${price} for a Cinema ticket.`);
// console.log(`It is ${statusQuo}.`);

/*-------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/* Using it for .html */

let firstName = "Paulo Mio";
let age = 24;
let sts = true;

document.getElementById("p1").textContent = `I am ${firstName}, my current age as of 2025 is ${age}.`;
document.getElementById("p2").textContent = `So I am ${age} years old.`;
document.getElementById("p3").textContent = `Am I reading Meditations? It's ${sts}.`;