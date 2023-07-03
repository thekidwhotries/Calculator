
function addition() {
    var number1=parseInt(document.getElementById('num1').value) ;
    var number2=parseInt( document.getElementById('num2').value);
    var result=number1+number2;
    console.log(result);
    document.getElementById('show-result').innerHTML=`<h1>Addition of ${number1} and ${number2} is ${result}</h1>`
}


function subtraction() {
    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);
    var result=number1-number2;
    console.log(result, "subtraction");
    document.getElementById('show-result').innerHTML=`<h1>subtraction of ${number1} and ${number2} is ${result}</h1>` 
}

function division() {
    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);
    var result=number1/number2;
    console.log(result, "division");
    document.getElementById('show-result').innerHTML=`<h1>division of ${number1} and ${number2} is ${result}</h1>`
}

function multiplication() {
    var number1=parseInt(document.getElementById('num1').value);
    var number2=parseInt(document.getElementById('num2').value);
    var result=number1*number2;
    console.log(result, "multiplication");
    document.getElementById('show-result').innerHTML=`<h1>division of ${number1} and ${number2} is ${result}</h1>`
}







// Here we are wrting to tell the computer what needs to be done when we say to add the numbers.