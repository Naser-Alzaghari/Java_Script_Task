let formGarden=document.getElementById("formGarden");
formGarden.addEventListener('submit',addFlower);


// declare array of object
let FlowerArr=[]

// call table contant
let taHead=document.getElementById("taHead");
let taBody=document.getElementById("taBody");
let taFooter=document.getElementById("taFooter");

// read data from form

function addFlower(event){
    event.preventDefault();
    // console.log(event , "form event");
    
    let name=event.target.nameInp.value;
    // console.log(name , "form name");

    let image=event.target.selImg.value;
    // console.log(email , "email");

    let seson=event.target.sesonInp.value;
    // console.log(depWork, "select value");
    
   new Flower(name, image, seson);//hoisting
    renderInfo()
    employeeIntoLocalStorage()


}
// ad new employee
function Flower(name, image, seson){
    this.flowerName=name;
    this.flowerImage= image;
    this.flowerSeason=seson;
    this.empSalary=salaryMount(10, 25)

    FlowerArr.push(this);
    console.log(FlowerArr, "employe array result");
    }
function AddFlower(name, image, seson, salary){
    this.flowerName=name;
    this.flowerImage= image;
    this.flowerSeason=seson;
    this.empSalary=salary;
    FlowerArr.push(this);
}
    // calculate salary
    function salaryMount(min, max) {
        return Math.floor(Math.random() * (max - min) + min); 
      }

// built header 
function creatHeader(){
    let trEle=document.createElement('tr');
    taHead.appendChild(trEle);

    let thEl1=document.createElement('th');
    trEle.appendChild(thEl1);
    thEl1.textContent='image';


    let thEl2=document.createElement('th');
    trEle.appendChild(thEl2);
    thEl2.textContent="name";

    let thEl3=document.createElement('th');
    trEle.appendChild(thEl3);
    thEl3.textContent="season";

    let thEl4=document.createElement('th');
    trEle.appendChild(thEl4);
    thEl4.textContent="price";
    
    let thEl5=document.createElement('th');
    trEle.appendChild(thEl5);
    thEl5.textContent="Edit";
}

creatHeader()

let id=FlowerArr.length;
function renderInfo(){
    taBody.innerHTML="";
    let sum=0;
    for (let i = 0; i < FlowerArr.length; i++) {
        let trBody=document.createElement("tr");
        trBody.id = "flower"+(++id);
        taBody.appendChild(trBody);

       let tdEl1=document.createElement('td');
       trBody.appendChild(tdEl1);
       let img = document.createElement("img");
       img.setAttribute("src",FlowerArr[i].flowerImage+".jpg");
       img.setAttribute("width","100")
       tdEl1.append(img);

       let tdEl2=document.createElement('td');
       trBody.appendChild(tdEl2);
       tdEl2.textContent=FlowerArr[i].flowerName;
       tdEl2.id = "name"+id;
       tdEl2.value=FlowerArr[i].flowerName;

       let tdEl3=document.createElement('td');
       trBody.appendChild(tdEl3);
       tdEl3.id = "Season"+id;
       tdEl3.textContent=FlowerArr[i].flowerSeason;
       tdEl3.value=FlowerArr[i].flowerSeason;


       let tdEl4=document.createElement('td');
       trBody.appendChild(tdEl4);
       tdEl4.textContent=FlowerArr[i].empSalary;        
       tdEl4.value=FlowerArr[i].empSalary;
        tdEl4.id = "price"+id;
       let tdEl5=document.createElement('button');
       trBody.appendChild(tdEl5);
       tdEl5.innerHTML="Edit"
       tdEl5.id="btn"+id;
       tdEl5.setAttribute("onclick",'onbtnclick('+id+')');

       sum += FlowerArr[i].empSalary;
    }
    footerRender(sum)
}

function onbtnclick(id){
    let name= document.getElementById("name"+id);
    let Season= document.getElementById("Season"+id);
    let price= document.getElementById("price"+id);
    let button = document.getElementById("btn"+id);

    if (button.innerHTML=="save"){
        button.innerHTML="Edit";
        name.innerHTML=document.querySelector("#name"+id+" input").value;
        FlowerArr[id-1].flowerName = name.innerHTML;
        Season.innerHTML=document.querySelector("#Season"+id+" input").value;
        FlowerArr[id-1].flowerSeason = Season.innerHTML;
        price.innerHTML=document.querySelector("#price"+id+" input").value;
        FlowerArr[id-1].empSalary = price.innerHTML;
        employeeIntoLocalStorage()  
    } else {
        button.innerHTML="save";
        let text1 = name.value;    
        name.innerHTML= '<input value="'+text1+'"></input>';
        let text2 = Season.value;    
        Season.innerHTML= '<input value="'+text2+'"></input>';
        let text3 = price.value;    
        price.innerHTML= '<input value="'+text3+'"></input>'
    }
}

function footerRender(sum){
    taFooter.innerHTML="";
    let trFo=document.createElement('tr');
    taFooter.appendChild(trFo);

    let tdFo=document.createElement('td');
    trFo.appendChild(tdFo);
    tdFo.textContent=sum;
    }


function employeeIntoLocalStorage(){
    let empData=JSON.stringify(FlowerArr);
    localStorage.setItem("localData",empData);
}

function employeeOutLocalStorage(){
    let dataEmp=localStorage.getItem("localData");
    let empLoyeeData= JSON.parse(dataEmp);
      if (dataEmp !== null){  for (let i = 0; i < empLoyeeData.length; i++) {
            new AddFlower(empLoyeeData[i].flowerName, empLoyeeData[i].flowerImage,  empLoyeeData[i].flowerSeason, empLoyeeData[i].empSalary);     
        }}
    renderInfo()


}
employeeOutLocalStorage()



function fetchJSONData() {
    fetch("./sample.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) =>
            console.log(data))
        .catch((error) =>
            console.error("Unable to fetch data:", error));
}