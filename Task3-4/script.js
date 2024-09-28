let names = ['ben', 'jol', 'judt', 'anne'];
let scores = [65,27,85,92];
let id = names.length-1;



let name_input = document.getElementById("name");
let score = document.getElementById("score");
let table = document.querySelector("table");
let Average_scores = document.getElementById("Average_scores");


let addScore = document.getElementById("addScore");
let displayResults = document.getElementById("displayResults");
let displayScores = document.getElementById("displayScores");
DisplayResults();
DisplayScores();







function AddScore(){
    if(name_input.value != "" && score.value != ""){
        document.getElementById("name_validation").classList.remove("show_validation_message");
        document.getElementById("score_validation").classList.remove("show_validation_message");
        names[++id]=name_input.value;
        scores[id]=Number(score.value);
        // let record = document.createElement("tr");
        // let name1 = document.createElement("td");
        // let score1 = document.createElement("td");
        // name1.textContent = name_input.value;
        // score1.textContent = score.value;
        // console.log(names);
        // console.log(scores);
        
        
        // record.append(name1);
        // record.append(score1);
        // table.append(record);
        // console.log(record);
    }
    else {
        if(name_input.value == ""){
            document.getElementById("name_validation").classList.add("show_validation_message");
        } else {
            document.getElementById("name_validation").classList.remove("show_validation_message");
        }
        if(score.value == ""){
            document.getElementById("score_validation").classList.add("show_validation_message");
        } else {
            document.getElementById("score_validation").classList.remove("show_validation_message");
        }
    }
}

function DisplayResults(){
    let average = calcAverage(scores);
    Average_scores.textContent = "Average Scores = "+average;
    let high_Score_index = maxnum_index(scores);
    High_Score.textContent = "High Score = "+names[high_Score_index]+" with a score of "+scores[high_Score_index];
}
function DisplayScores(){
    document.querySelectorAll("table tr").forEach(e => e.remove());
    for (let i=0 ; i<names.length ; i++){
        let record = document.createElement("tr");
        let name_input = document.createElement("td");
        let score = document.createElement("td");
        name_input.textContent = names[i];
        score.textContent = scores[i];
        record.append(name_input);
        record.append(score);
        table.append(record);
    }
}

function calcAverage(array){
    let result = 0;
    array.forEach(element => {
        result+=element;
    });
    
    return result/array.length;
}

function maxnum_index(array){
    let result=0;
    for(let i=1; i<array.length ; i++){
        if(array[i]>array[result])
            result=i;
    }
    console.log(result);
    
    return result;
}