const requestURL = "https://byui-cit230.github.io/weather/data/towndata.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        const cards = document.querySelector(".cards");

        towns.forEach(town => {
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let pimg = document.createElement("img");
            let p1 = document.createElement("p");
            let p2 = document.createElement("p");
            let p3 = document.createElement("p");
            let p4 = document.createElement("p");

         h2.innerHTML = `${towns.name} <span style="color:blue">${town.lastname}</span>`;
 

         pimg.setAttribute('src', springfieldtowns.imageurl);
         pimg.setAttribute("alt", `Springfield ${springfieldtowns.name}`);
         

        h2.innerHTML = `${towns.name} <span style="">${towns.name}</span>`;
        pimg.innerHTML = `${towns.photo} <span style="">${towns.photo}</span>`;
        p1.innerHTML = `${towns.motto} <span style="">${towns.motto}</span>`;
        p2.innerHTML = `${towns.yearFounded} <span style="">${towns.yearFounded}</span>`;
        p3.innerHTML = `${towns.currentPopulation} <span style="">${towns.currentPopulation}</span>`;
        p4.innerHTML = `${towns.averageRainfall} <span style="">${towns.averageRainfall}</span>`;
        p5.innerHTML = `${towns.events} <span style="">${towns.events}</span>`;

         card.append(h2);
         cards.append(card);
         p1.append(p);
         p2.append(p);
         p3.append(p);
         p4.append(p);
         p5.append(p);
        });