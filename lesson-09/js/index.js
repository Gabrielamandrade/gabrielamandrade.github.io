const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const cards = document.querySelector(".cards");
        for (let i = 0; i < towns.length; i++) {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let pimg = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p"); 
            let p5 = document.createElement("p");     
        h2.textContent = `${towns[i].name}`;
        p1.textContent = `${towns[i].motto}`;
        p2.textContent = `Founded Year: ${towns[i].yearFounded}`;
        p3.textContent = `Current Population: ${towns[i].currentPopulation}`;
        p4.textContent = `Average Rain Fall: ${towns[i].averageRainfall}`;
        p5.textContent = `Events: ${towns[i].events}`;         
        pimg.setAttribute('src', towns[i].photo);
        pimg.setAttribute("alt", `${towns[i].name}`);
         card.appendChild(h2);
         card.appendChild(pimg);
         card.appendChild(p1);
         card.appendChild(p2);
         card.appendChild(p3);
         card.appendChild(p4);
         card.appendChild(p5);
         document.querySelector("div.cards").appendChild(card);
        }
        });
        //------------------------------------------------------------------------------------------------------------

 