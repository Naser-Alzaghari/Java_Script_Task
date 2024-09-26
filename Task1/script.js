"use strict"

// Q1.1
console.log(1000 / 500 , "Cash flow ratio");

// Q1.2
console.log(1000 - 500, "Net income ");

// Q1.3
console.log(1000 + 500, "Total assets ");

// Q1.4
console.log(1000 * 500, "Net income ");

// Q1.5
console.log((7 + 9 + 2)/3, "Average");

// Q1.6
console.log(150 - (150 * 0.3), "Discount");

// Q1.7
{
    let age = 20;
    age > 18 && age < 30 ? console.log(true, "Age limit") : console.log(false, "Age limit");
}

// Q1.8
console.log(2**3, "Exponential ");

// Q2.1

// ● typeof(100) -> Number
// ● typeof(73.9) -> Number
// ● typeof(NaN) -> Number
// ● typeof("Water") -> String
// ● typeof(false) -> boolean
// ● typeof(9 != 11) -> boolean
// ● "Orang" + "e" -> Orange
// ● "Orange" - "s" -> ERROR
// ● "4" + "8" -> 48
// ● "4" - "8" -> -4
// ● "name" + 3 -> name3
// ● "name" - 3 -> NAN
// ● 82 * "word" -> NAN
// ● 1 + "hello" -> 1hello
// ● "hello" + 1 -> hello1
// ● 1 + true -> 2
// ● "hello" + true -> hellotrue
// ● typeof (Infinity) -> number
// ● 1 == '1' -> true
// ● 1 === '1' -> false


//-----------------------------------------------
// STRINGS
console.log("STRINGS:");

//Q1.1
console.log("Welcome to Orange".toUpperCase(), "Q1.1");

//Q1.2
console.log("Welcome to Orange".split(" ")[1].toUpperCase(), "Q1.2");


//Q1.3
console.log("Hello from ","Welcome to Orange".split(" ")[2], "Q1.3");


//Q1.4
console.log("Welcome to Orange".toLocaleLowerCase(), "Q1.4");


//Q1.5
console.log("Welcome to Orange".length, "Q1.5");


//Q1.6
{
    let txt = "Welcome to Orange".split(" ");
    console.log(txt[0] + " " + txt[1] + " \"" + txt[2] + "\"", "Q1.6");
}

//Q1.7
console.log("Welcome to Orange","Jordan", "Q1.7");

// Q2 
{
    let txt = "cactus";
    console.log((txt[0].concat(txt.slice(1).replace(txt[0],"*"))), "Q2");
}

// -------------------------------------------------
//Arrays

{
    {
        // Q1.1
        let array = ["Coding", "Academy", "By", "Orange"];
        array.push("Jordan")
        console.log(array, "Q1.1")
    }
    {
        // Q1.2
        let array = ["Coding", "Academy", "By", "Orange"];
        console.log(array.slice(0,2), "Q1.2")
    }

    {
        // Q1.3
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(0, 0, "Welcome", "To")
        console.log(array, "Q1.3")
    }
    {
        // Q1.4
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(0, 1)
        console.log(array, "Q1.4")
    }
    {
        // Q1.5
        let array = ["Coding", "Academy", "By", "Orange"];
        let str ="";
        for (let i=0; i<array.length; i++){
            if(i<array.length-1)
                str+=array[i]+" ";
            else
                str+=array[i];
        }
        console.log("\"",str,"\"", "Q1.5");
    }
    {
        // Q1.6
        let array = ["Coding", "Academy", "By", "Orange"];
        console.log(array, "Q1.6");
    }
    {
        // Q1.7
        let array = ["Coding", "Academy", "By", "Orange"];
        array.splice(1,2);
        console.log(array, "Q1.7");
    }
}

// Q2
{
    let fruit = ["banana", "apple", "orange", "watermelon"];
    let vegetables = ["carrot", "tomato", "pepper", "lettuce"];

    // Q2.a
    fruit.pop();
    console.log(fruit, "Q2.a");

    // Q2.b
    fruit.splice(0,1);
    console.log(fruit, "Q2.b");

    // Q2.c
    console.log(fruit.findIndex(x => x == "orange"), "Q2.c");

    // Q2.d
    fruit.push(fruit.findIndex(x => x == "orange"), "Q2.d");
    console.log(fruit);

    // Q2.e
    console.log(vegetables.length, "Q2.e")

    // Q2.f
    vegetables.push(vegetables.length);
    console.log(vegetables, "Q2.f");

    // Q2.g
    let food = fruit.concat(vegetables);
    console.log(food, "Q2.g");

    // Q2.h
    food.splice(4,2);
    console.log(food, "Q2.h");

    // Q2.i
    food=food.reverse();
    console.log(food, "Q2.i");

    // Q3.j
    food=food.toString();
    console.log(food, "Q2.j");
    
}


//---------------------------------------------------

// Functions
function func_1 (s){
    return s.toString().split(" ");
}
console.log(func_1("Naser alzaghari", "Q1"));

function func_2 (s){
    return s.replace(/^\d{7}/, "*******");
}
console.log(func_2("234432234432"), "Q2");

function func_3 (s){    
    return s.slice(0,3).concat("...").concat(s.slice(s.search('@')));
}
console.log(func_3("naseralzaga@afd.com"), "Q3");

function func_4(s){
    return s[0].toUpperCase().concat(s.slice(1));
}
console.log(func_4("orange"), "Q4");

function func_5(s){
    s=s.toString();
    let result = "";
    for(let i=s.length-1; i>=0; i--){
        result+=s[i];
    }
    return result;
}
console.log(func_5(342089374), "Q5");

{
    let num1 = 10;
    let num2 = 20;
    function func_6(){
        let temp = num1;
        num1 = num2;
        num2 = temp;
    }
    func_6();
    console.log(num1,num2, "Q6");
}

function func_7(str, index){
    return str.replace()
}

function func_8(str, index){
    return str.slice(0,index).concat(str.slice(index+1));
}
console.log(func_8("orange",3), "Q8");

function func_9(str1,str2){
    return str1.slice(1).concat(str2.slice(1));
}
console.log(func_9("lora","lnge"), "Q9");


function func_10(char, str){
    if(str[0] == char || str[str.length-1] == char)
        return true;
    else
        return false;
}
console.log(func_10("o", "orage"), "Q10");


function func_11(str){
    return str.split(" ");
}
console.log(func_11("Coding Academy by Orange"), "Q11");

function func_12(str){
    console.log(str.split("").sort().toString().replaceAll(",",""), "Q12");
}
func_12("orange");

//-------------------------------------------

//conditional

//Q1
{
    let age = 20;
    if (age > 60){
        console.log("You may join the seniors’ program.");
    }
    else if (age <= 60 && age > 30){
        console.log("You are not eligible. You may join other programs.");
    }else if(age <=30 && age > 18) {
        console.log("You are eligible. Start your application.");
    }else if(age<=18){
        console.log("You may join the kids' program.");
    }
    
}

//Q2
function switchCase(str)
{
    let result="";

    for(let i=0; i<str.length;i++){
        if(str[i].charCodeAt() >= 97)
        {
            result+=str[i].toUpperCase();
        }
        else {
            result+=str[i].toLowerCase();
        }
        
    }
    return result;
}
console.log(switchCase("AJfsAMsdwA"), "Q2");

//Q3
function FirstLetterAndSpaces(str){
    str=str.split(" ");
    for(let i=0; i<str.length;i++){
        str[i]=str[i][0].toUpperCase().concat(str[i].slice(1));
    }
    str=str.join("");
    return str;
}
console.log(FirstLetterAndSpaces("Coding Academy by Orange"), "Q3");


//Q4
function Arraychange(array, str){
    array.splice(array.indexOf('by'),1);
    return array;
}
{
    let array = "Coding Academy by Orange".split(" ");
    console.log(Arraychange(array, "by"), "Q4");
}


//Q5
function oddOrEven(num){
    if(num%2==0){
        console.log("even", "Q5");
    } else {
        console.log("odd", "Q5");
        
    }
}
oddOrEven(11);


//Q6
function checkNumber(val){
    if(typeof(val) == "number")
        return true;
    return false;
}
console.log(checkNumber(123), "Q6");

//Q7
function biggerNumber(num1, num2){
    if(num1>num2)
        return num1;
    num2;
}
console.log(biggerNumber(7,2), "Q7");


//----------------------------------------------------
//loops

//Q1
for(let i=0; i<=50 ; i+=2){
    console.log(i);
}
{
    let i=0;
    while(i<=50){
        console.log(i);
        i+=2;
    }
}

//Q2
let flag=0;
for(let i=0; flag < 2; i+=2){
    console.log(i);
    if(i==50){
        i=0;
        flag++;
    }
}

//Q3
{
    let i = 1;
    while(i<100){
        if(i%3==0 && i%5==0)
            console.log("FizzBuzz");
        else if (i%3==0){
            console.log("Fizz");
        } else if (i%5==0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}

//Q4
function fizzBuzz(i){
    let result=i;
    if(i%3==0 && i%5==0)
        return "FizzBuzz";
    else if (i%3==0){
        return "Fizz";
    } else if (i%5==0){
        return "Buzz";
    } else {
        return i;
    }
}
console.log(fizzBuzz(15));



//Q5


//Q6
