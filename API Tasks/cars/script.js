'use strict'


let container = document.getElementById("container");

let apiURL="https://vpic.nhtsa.dot.gov/api/vehicles/GetVehicleTypesForMake/merc?format=json";//url
fetch(apiURL).then(response=>
    {
        return response.json();}
).then(data=>{
   console.log(data);
   const result=data.Results;
   console.log(result);
   result.forEach(element => {
        console.log(element.MakeName+": "+element.VehicleTypeName);
        let card = document.createElement("div");
        card.setAttribute("width","200");
        // console.log(container.appendChild(card));
        
        let MakeName = document.createElement("p");
        
        let VehicleTypeName = document.createElement("p");
        MakeName.textContent=element.MakeName;
        VehicleTypeName.textContent=element.VehicleTypeName;
        console.log(element.VehicleTypeName);
        
        console.log(1);
        
        card.appendChild(MakeName);
        console.log();
        
        card.appendChild(VehicleTypeName);
        console.log(card);
        
        console.log(4);
        
        container.appendChild(card);

   });
})




