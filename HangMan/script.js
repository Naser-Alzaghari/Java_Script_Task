let array = ["apple","orange","car","tree"];
array = array[Math.floor(Math.random() * array.length)];
let button = document.getElementById("check");
let image = document.getElementById("hangman");
let left_trys = document.getElementById("left_trys");
let input = document.getElementById("input");
let imageId = 0;
let word = document.getElementById("word");
let text_word = array.replace(/./g ,"_");
let used_char = document.getElementById("used_char");
word.innerHTML = text_word;
function checkInput(){
    used_char.textContent += input.value;
    if(array.match(input.value)){
        console.log(true);
        for(let i=0; i<array.length; i++){
            if(array[i] == input.value){
                text_word = text_word.slice(0,i).concat(input.value, text_word.slice(i+1))
                console.log(text_word);
                word.innerHTML = text_word;
            }
        }
        
    } else {
        console.log(false);
        changeImage();
    }

    if (!text_word.includes("_")){
        alert("YOU WIN");
        button.setAttribute("disabled","");
    }
    input.value="";
}


function changeImage(){
    imageId++;
    if (imageId <= 6){
        image.setAttribute("src", "hangman-".concat(imageId,".svg"));
        left_trys.innerHTML = "".concat(imageId, "/6");
    }
    if (imageId == 6){
        alert("YOU LOST");
        button.setAttribute("disabled","");
    }
}