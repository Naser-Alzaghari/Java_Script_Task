
fetch('https://api.ipify.org?format=json')
.then(response => response.json())
.then(data => {
    data.ip;
    fetch("http://api.weatherapi.com/v1/current.json?key=944ed896d1ab4250ada85925240110&q="+data.ip+"&aqi=no").then(responce =>{
        
        return responce.json();
    }).then(data => {
        
        let card = document.createElement("div");
        card.style.width = "300px";
        card.style.margin = "10px auto";
        card.style.border = "5px solid aquamarine";
        card.style.borderRadius = "10px";
        card.style.padding = "10px";
        card.style.textAlign = "center";
        let country = document.createElement("p");
        let tempture = document.createElement("div");
        tempture.id = "tempture";
        let img = document.createElement("img");
        let temp_c = document.createElement("span");
        let temp_f = document.createElement("span");
        let condition = document.createElement("p");
        let imgContainer = document.createElement("div");
        imgContainer.style.textAlign = "center";
        country.style.fontSize = "25px";
        


        country.textContent = "current location: "+data.location.name;
        img.setAttribute("src", data.current.condition.icon);
        imgContainer.append(img);
        img.style.display = "block";
        img.style.margin= "0 auto";
        temp_c.textContent = "celsius: "+data.current.temp_c;
        temp_f.textContent = "fahrenheit: "+data.current.temp_f;
        condition.textContent = data.current.condition.text;

        
        tempture.appendChild(temp_c);
        tempture.appendChild(temp_f);
        card.appendChild(country);
        card.appendChild(imgContainer);
        card.appendChild(tempture);
        card.appendChild(condition);
        container.appendChild(card);
    });
})
.catch(error => {
    console.log('Error:', error);
});


let array = ["amman", "zarqa", "Irbid", "Aqaba", "Al-Salt", "Jerash"];
let container = document.getElementById("container");

array.forEach(element => {
    fetch("http://api.weatherapi.com/v1/current.json?key=944ed896d1ab4250ada85925240110&q="+element+"&aqi=no").then(responce =>{
        
        return responce.json();
    }).then(data => {
        
        let card = document.createElement("div");
        card.style.width = "300px";
        card.style.margin = "10px auto";
        card.style.border = "5px solid darkblue";
        card.style.borderRadius = "10px";
        card.style.padding = "10px";
        card.style.textAlign = "center";
        let country = document.createElement("p");
        let tempture = document.createElement("div");
        tempture.id = "tempture";
        let img = document.createElement("img");
        let temp_c = document.createElement("span");
        let temp_f = document.createElement("span");
        let condition = document.createElement("p");
        let imgContainer = document.createElement("div");
        imgContainer.style.textAlign = "center";
        country.style.fontSize = "25px";
        


        country.textContent = data.location.name;
        img.setAttribute("src", data.current.condition.icon);
        imgContainer.append(img);
        img.style.display = "block";
        img.style.margin= "0 auto";
        temp_c.textContent = "celsius: "+data.current.temp_c;
        temp_f.textContent = "fahrenheit: "+data.current.temp_f;
        condition.textContent = data.current.condition.text;

        
        tempture.appendChild(temp_c);
        tempture.appendChild(temp_f);
        card.appendChild(country);
        card.appendChild(imgContainer);
        card.appendChild(tempture);
        card.appendChild(condition);
        container.appendChild(card);
    });
});
