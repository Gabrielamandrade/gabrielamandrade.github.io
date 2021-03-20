
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=c8c8d72f54d234fc65062d314f269aa0";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    let day = 0;
    const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Fri", "Sat"];
//---------------------


//----------------------------------------------------------


    let d = new Date(jsObject.dt_txt);
    console.log(d);
    document.getElementById(`forecast${day+1}`).textContent = jsObject.main.temp;
    document.getElementById(`dayofweek${day+1}`).textContent = dayofweek.[d.getDay()];
      
  });
