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
    
}
