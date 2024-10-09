let container = document.querySelector(".NotesContainer");

let addNotebutton = document.getElementById("addNote");
let noteIdNumber = 1;
addNotebutton.addEventListener("click", ()=>{
    addNote();
    saveData();
})

getData();

function addNote(){
let note = document.createElement("div");
note.classList.add("note");
note.id = "note"+noteIdNumber;
let textarea = document.createElement("textarea");
let bin = document.createElement("a");
bin.classList.add("delete_bin");
bin.id = "bin"+(noteIdNumber++);
let img = document.createElement("img");
img.setAttribute("width",30);
img.setAttribute("src","bin.png");
bin.appendChild(img);
bin.style.cursor = "pointer";
note.appendChild(textarea);
note.appendChild(bin);
container.prepend(note);
bin.setAttribute("onclick",`removeNote(${noteIdNumber-1})`);
textarea.setAttribute("onkeyup", `saveData(${noteIdNumber-1})`)
}

function removeNote(id){
    document.querySelector("#note"+id).remove();
    let data = container.innerHTML;
    let jsontxt= JSON.stringify(data);
    localStorage.setItem("data",jsontxt);
    console.log(jsontxt);
}

function saveData(id){
    let note = document.querySelector("#note"+id+" textarea")
    note.innerHTML = note.value;
    let data = container.innerHTML;
    let jsontxt= JSON.stringify(data);
    localStorage.setItem("data",jsontxt);
    console.log(jsontxt);
}

function getData(){
    let txt = localStorage.getItem("data");
    let data = JSON.parse(txt);
    container.innerHTML = data;
}


{/* <div class="note"><textarea></textarea><a class="delete_bin"><img width="30" src="bin.png" alt=""></a></div> */}