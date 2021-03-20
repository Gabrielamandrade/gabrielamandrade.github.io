
//°F "graus"

let  t = parseFloat(document.getElementById("tempFInput").value);
let  s = parseFloat(document.getElementById("speedInput").value);

let result =  windChill(t, s);


function windChill(tempF, speed) {
 

let a = 0.6215 * tempF;
let b = 35.75 * Math.pow(speed, 0.16 );
let c = 0.4275 * tempF
let d = c * Math.pow(speed, 0.16)
let chillFactor = 35.74 + a - b + d;

return chillFactor;
}
  
document.getElementById("Hightoutput").innerHTML = result.toFixed(2);

//wind chill




//mph miles per hours of the wind speed(velocidade do vento)