let input = document.getElementById("input");
let list = document.createElement("list");


let list_container = document.getElementById("list_container");


let body = document.querySelector("body");
let list_data = "";
let id = 1;
function AddItem(){
    let deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    let button=deleteButton;
    button.id="button"+id;
    button.innerHTML = "delete";
    let item = document.createElement("li");
    item.id='item'+id;
    button.setAttribute('onclick',"deleteItem("+id+")");
    let title = document.createElement("h4");
    title.style.display = "inline-block";
    title.innerHTML = input.value+" ";
    item.append(title);
    item.append(button);
    list_container.append(item);
    id++;
    input.value="";
}

function deleteItem(num){
    document.querySelector(".container #list_container #item"+num).remove();
}