let url = "https://restcountries.com/v3.1/all";

let container = document.getElementById("container");

fetch(url).then(response => {
    return response.json();
}).then(data => {
    data.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("width","200");
        let img = document.createElement("img");
        let name = document.createElement("p");
        card.appendChild(img);
        card.appendChild(name);
        name.textContent = element.name.common;
        img.setAttribute("src",element.flags.png)
        container.appendChild(card);
    });
})