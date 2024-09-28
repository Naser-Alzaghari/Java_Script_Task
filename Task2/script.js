"use strict"

//JavaScript Loops

//Q1
function factorial (num){
    let result = 1;
    for(let i=1; i<=num; i++){
        result*=i;
    }
    return result;
}
console.log(factorial(5));

//Q2
function Fibonacci(num){
    let i=0;
    let j=1;
    let temp=0;
    let result = "0 1 ";
    while(true){
        temp=i+j;
        i=j;
        j=temp;
        if(temp>num)
            break;
        result+=temp+" ";
    }
    return result;
}
console.log(Fibonacci(13), "Q2");

//Q3
{
            
    function prime_num(num){
        while(num>1){
            let temp=2;
            while(temp<num){
                if(num % temp == 0)break;
                temp++;
            }
            if (temp == num)
                console.log(num);
            num--;
        }
    }
    prime_num(20);
}




//Q4
{
    let arrays= [[1,2,3],[4,5,6],[7,8,9]];
    let result="";
    for(let i=0; i<arrays.length;i++){
        for(let j = 0 ; j<arrays[i].length;j++){
            result+=arrays[i][j]+" ";
        }
    }
    console.log(result, "Q4");
    
}

//Q5
{
    function revurse (array){
        let result ="";
        for(let i=array.length-1;i>=0;i--){
            result+=array[i]+" ";
        }
        return result;
    }
    console.log(revurse([1,2,3,4,5]), "Q5");
}

//JavaScript Arrays
console.log("JavaScript Arrays");

//Q1
{
    function concats(array1,array2){
        return array1.concat(array2);
    }
    console.log(concats([1],[2]), "Q1");
    
}

//Q2
{
    function slices(array, num1, num2){
        return array.slice(num1, num2);
    }
    console.log(slices([1,34,6,3,1,34,64,32],2,4), "Q2");
    
}

//Q3
{
    function splices(array, num1){
        return array.splices(num1);
    }
    
}


//Q4
{
    function return_Array(array){
        let result="";
        for(let i=0; i<array.length;i++){
            result+=array[i]+" ";
        }
        return result;
    }
    console.log(return_Array([1,2,4,5,6,7]));
}

//Q5
{
    function return_Array_foreach(array){
        let result="";
        array.forEach(element => result+=element+" ");
        return result;
    }
    console.log(return_Array_foreach([1,2,4,5,6,7]), ", Q5");
}

//-----------------------------------
//JavaScript IF statement

//Q1
{
    let pass = "amflkmafa";
    function passCheck(str){
    if (pass.length >= 8)
        console.log("your password is strong", ", Q1");
    }
    passCheck(pass);
}

//Q2
{
    let color = "red";
    color = color.toLowerCase();
    if (color == "red" || color == "green" || color == "blue"){
        console.log("color is primary", ", Q2");
    }
}

//Q3
{
    let y=-5;
    if(y<0)
        console.log("y is negative number", ", Q3");
}

//Q4
{
    let array=[1,2,3,4];
    
    if(Array.isArray(array))
        console.log("its an array", ", Q4");
}

//---------------------------------------------------
//JavaScript Objects
//Q1
{
    function addToObj(object, key, value){
        object[key]=value;
        return object;
    }
    let object = {name: 'ahamd', age: 25};
    object = addToObj(object, "Address", "amman", ", Q1");
    console.log(object);
}

//Q2
{
    let object = {name: 'ahamd', age: 25 , gender: "male"};
    console.log(Object.values(object), ", Q2");

}

//Q3
{
    let object = {name: 'ahamd', age: 25 , gender: "male"};
    console.log(Object.entries(object), ", Q3");

}

//Q4
{
    let object = {name: 'ahamd', age: 25};
    console.log(Object.assign(object, {gender: "male"}), ", Q4");

}

//Q5
{
    let object = {name: 'ahamd', age: 25 , gender: "male"};
    console.log(Object.seal(object), ", Q5");
}

//------------------------------------------
//JavaScript Functions

//Q1
{
    function checknum(num1, num2){
        if (num2 < num1){
            return num2;
        }
        return num1;
    }
    function findTheSmallestNumber(array){
        let result = array[0];
        array.forEach(element => result=checknum(result,element));
        return result;
        }
        let array = [-10,3,-4,0];
        console.log(findTheSmallestNumber(array), ", Q1");
        ;
}

//Q2
{
    function sortLetters(str){
        return str.split("").sort().join("");
    }
    console.log(sortLetters("naser"), ", Q2");
    ;
}

//Q3
{
    function numOfWords(str){
        return str.split(" ").length;
    }
    console.log(numOfWords("nasd nfa iad ofsa kf wqokds fws"), ", Q3");
    ;
}

//Q4
{
    function multiply(array){
        array.forEach((element, i) => {
            array[i] = element*array.length;
        });
        return array;
    }
    console.log(multiply([1,2,3,4,2])," , Q4");
}

//Q5
{
    function doubleChar(str){
        let result="";
        str.split("").forEach(element => result+=element+element);
        return result;
    }
    console.log(doubleChar("naser"),", Q5");

}
