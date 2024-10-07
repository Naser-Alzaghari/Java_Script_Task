let questions = [
    {
        question: "Jordan capital",
        answers: ["amman", "jerash", "aqaba", "orange"],
        correct: 0
    },
    {
        question: "how old i am?",
        answers: [10,20,25,30],
        correct: 2
    },
    {
        question: "what is my name",
        answers: ["saeed", "naser", "ahmad", "mahmoud"],
        correct: 1
    },
    
];

let curentq=0;
let Qn = 0;
const quiz_app = document.querySelector(".quiz_app");
addQuestion(questions[curentq]);










console.log(questions[0].answers[1]);
function addQuestion(question){
    quiz_app.innerHTML="";
    // quiz_app.innerHTML = `<div class="row">
    //             ${question.question}
    //         </div>
    //         <ul id="list-container">
    //             <li>${question.answers[0]}</li>
    //             <li>${question.answers[1]}</li>
    //             <li>${question.answers[2]}</li>
    //             <li>${question.answers[3]}</li>
    //         </ul>`;
    let row = document.createElement("div");
    row.classList.add("row");
    row.textContent = question.question;
    console.log(question.question);
    
    let ul = document.createElement("ul");
    ul.id = "list-container";
    console.log(111);
    
    for (let i=0; i<question.answers.length ; i++){
        let q = document.createElement("li");
        q.innerHTML = question.answers[i];
        if(i == question.correct){
            q.setAttribute ("correct","");
            
        }
        ul.appendChild(q);
    }




    quiz_app.appendChild(row);
    quiz_app.appendChild(ul);


    console.log(questions[0].answers[1]);
let list_container = document.getElementById("list-container");
let button = document.createElement("button");
button.textContent = "Next";
button.addEventListener("click", ()=>{
    addQuestion(questions[++curentq]);
    button.remove;
})



list_container.addEventListener("click",function(e){
    if(e.target.hasAttribute("correct","")){
        Qn++;
    } else {
        e.target.classList.add("false");
    }
    document.querySelector("#list-container li[correct]").classList.add("checked");
    if(curentq<questions.length-1)
        quiz_app.appendChild(button);
    else {
        let div = document.createElement("div");
        div.textContent=`your score is ${Qn} out of ${questions.length}`
        quiz_app.appendChild(div);
    }
});
}

