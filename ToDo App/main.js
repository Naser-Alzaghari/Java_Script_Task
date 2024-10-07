const list_container = document.getElementById("list-container");
const input_box = document.getElementById("input-box");


function addTask(){
    if(input_box.value === ""){
        alert("add task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = input_box.value;
        let span = document.createElement('span');
        span.innerHTML="x";
        span.style.marginLeft = "auto"
        li.append(span)
        list_container.appendChild(li);
        input_box.value = "";
        save()
    }
    
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save()
    } else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save()
    }
})
function save(){
localStorage.setItem("data", list_container.innerHTML);
}

function get(){
    list_container.innerHTML = localStorage.getItem("data");
}
get()