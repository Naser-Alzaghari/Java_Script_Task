let paragraph = document.getElementById("paragraph");
let body = document.querySelector("body");
let link = document.createElement("a");
let heading = document.querySelector("h1");
let numOfWords = document.createElement("p");
link.href = "https://google.com";
link.innerHTML = "link to google";
numOfWords = paragraph.textContent.split(" ").length;
heighlight();
splitp();

body.append(link);
heading.after(numOfWords)


function heighlight(){
    let text = paragraph.textContent;
    text = text.split(" ");
    let result = [];
    text.forEach(element => {
        if (element.length >= 8){
            result.push('<span class="highlight">'+element+'</span>');
        } else {
            result.push(element);
        }
    });
    
    paragraph.innerHTML = result.join(" ");
}

function splitp(){
    let text = paragraph.innerHTML;
    paragraph.innerHTML = text.replace(/\./g, ".<br>");
    console.log(text.replace(".", ".<br>"));
    
}
