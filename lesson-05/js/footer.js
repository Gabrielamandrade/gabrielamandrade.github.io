
let date = new Date(document.lastModified);
let days = ["Sunday", "Monday","Tuesday", "Wednessday", "Thrusday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "Octuber", "November", "December"];

let dayMain = days[date.getDay()] + ", " + date.getDate() + " " + months[date.getMonth()] + " " + date.getFullYear();
console.log(dayMain) 

document.getElementById("output").innerHTML = dayMain;