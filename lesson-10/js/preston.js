let city = 5604473;
let appid = c8c8d72f54d234fc65062d314f269aa0;
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?id=${cityID}&units=imperial&APPID=${appid}`;

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let day = 0;
    const dayofweek = ["Sun", "Mon", "Tue", "Wed", "Fri", "Sat"];
//---------------------

//----------------------------------------------------------


    let d = new Date(jsObject.list[4].dt_txt);
    console.log(d);
    document.getElementById(`forecast${day+1}`).textContent = jsObject.list[4].main.temp;
    document.getElementById(`dayofweek${day+1}`).textContent = dayofweek.[d.getDay()];

  });
