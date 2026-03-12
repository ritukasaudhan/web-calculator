function appendValue(value){
document.getElementById("display").value += value;
}

function clearDisplay(){
document.getElementById("display").value = "";
}

function calculate(){
let result = document.getElementById("display").value;
document.getElementById("display").value = eval(result);
}

function deleteLast(){
let current = document.getElementById("display").value;
document.getElementById("display").value = current.slice(0,-1);
}

document.addEventListener("keydown", function(event){

let key = event.key;

if(!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/"){
appendValue(key);
}

if(key === "Enter"){
calculate();
}

if(key === "Backspace"){
deleteLast();
}

if(key === "Escape"){
clearDisplay();
}

});