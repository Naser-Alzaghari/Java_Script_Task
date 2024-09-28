//Q1
let div1= document.getElementById("div1");
let div2= document.getElementById("div2");
let div3= document.getElementById("div3");
let body = document.querySelector("body");
let username = document.getElementById("username");
let password = document.getElementById("password");
let confirmpassword = document.getElementById("confirmpassword");
let username_lable = document.createElement("label");
let password_lable = document.createElement("label");
let confirmpassword_lable = document.createElement("label");
let button = document.querySelector("button");
let username_required = document.getElementById("username_required");
let password_required = document.getElementById("password_required");
let confirmpassword_required = document.getElementById("confirmpassword_required");
let password_matching = document.getElementById("password_matching");
username_lable.setAttribute("for", "username");
username_lable.innerHTML = "username:";
password_lable.setAttribute("for", "password");
password_lable.innerHTML = "password:";
confirmpassword_lable.setAttribute("for", "confirmpassword");
confirmpassword_lable.innerHTML = "Confirm password:";
username.setAttribute("required","");
password.setAttribute("required","");
confirmpassword.setAttribute("required","");
button.setAttribute("disabled","")
div1.prepend(username_lable);
div2.prepend(password_lable);
div3.prepend(confirmpassword_lable);

function validation(){
    if(password.value != confirmpassword.value){
        password_matching.classList.add("add_required");
    } else {
        password_matching.classList.remove("add_required");
    }
}

function register(){
    alert("you have successfully registerd");
}


function check(num){
    if(password.value == confirmpassword.value && password.value != "" && username.value != ""){
        button.removeAttribute("disabled","");
        button.style.backgroundColor = "blue";
    } else {
        button.setAttribute("disabled","")
        button.style.backgroundColor = "cornflowerblue";
        }
        switch(num){
            case 1: {
                if(username.value == ""){
                    username_required.classList.add("add_required")
                } else {
                    username_required.classList.remove("add_required")
                }
            }break;
            case 2: {
                if(password.value == ""){
                    password_required.classList.add("add_required")
                } else {
                    password_required.classList.remove("add_required")
                }
            }break;
            case 3: {
                if(confirmpassword.value == ""){
                    confirmpassword_required.classList.add("add_required")
                } else {
                    confirmpassword_required.classList.remove("add_required")
                }
            }
        }

    
}