
let url = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";
let container = document.getElementById("container");

// fetch(url).then(response => {
//     return response.json();
// }).then(data => {
//     let card = document.createElement("div");
//     card.setAttribute("width","200");
//     let name = document.createElement("p");
//     console.log(data);
//     data.game_indices.forEach(element => {
//         console.log(element.version.name);
        
//     });
    
// })


fetch(url).then(response => {
    return response.json();
}).then(data => {
    
    
    console.log(data);
    data.results.forEach(element => {
        let card = document.createElement("div");
        card.setAttribute("width","200");
        let name = document.createElement("p");
        name.textContent = element.name;
        name.style.fontSize = "30px";
        card.appendChild(name);
        let abilitys = document.createElement("p");
        abilitys.innerHTML = "abilitys:"
        abilitys.style.color = "red";
        card.appendChild(abilitys);
        fetch(element.url).then(rs => {
            return rs.json();
        }).then(data1 => {
            data1.abilities.forEach(element => {
                let para = document.createElement("p");
                para.textContent= element.ability.name;
                card.appendChild(para);
            });
        })
        container.appendChild(card);
    });
        
    });
    
