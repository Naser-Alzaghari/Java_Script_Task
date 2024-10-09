let date = document.getElementById("date");
let calculate = document.getElementById("calculate");
let result = document.getElementById("result");

calculate.addEventListener("click", ()=>{
    clac();
})

console.log(date.value);

function clac(){
    let birthDate = new Date(date.value).getFullYear();
    let now = new Date().getFullYear();
    result.innerHTML = now - birthDate

    // let y2 = birthDate.getFullYear();
    
    // let y3 = y1-y2;
    
    // console.log(y3);

    // result.innerHTML = `you are ${now.getFullYear()-birthDate.getFullYear()} years and ${now.getMonth()-birthDate.getMonth()} months and ${now.getDay()-birthDate.getDay()} days and ${now.getFullYear()-birthDate.getFullYear()} minets`;
}

