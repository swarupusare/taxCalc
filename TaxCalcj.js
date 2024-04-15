 

// Anual salary
var anualInput = document.getElementById("anualInput");
var anualIcon = document.getElementById("anualIcon");
// Add event listener to toggle class on click
anualInput.addEventListener("keyup", function () {
    var inputValue = anualInput.value;
    // Check if the input value is not a number
    if (isNaN(inputValue)) {
        // Show error message
        anualIcon.classList.add("as");
    } else {
        // Remove error message
        anualIcon.classList.remove("as");
    } 
   
});
 
// Extra  income
var extraIncInput = document.getElementById("extraIncInput");
var extraIncIcon = document.getElementById("extraIncIcon");
// Add event listener to toggle class on click
extraIncInput.addEventListener("keyup", function () {
    var inputValue = extraIncInput.value;
    // Check if the input value is not a number
    if (isNaN(inputValue)) {
        // Show error message
         extraIncIcon.classList.add("as");
    } else {
        // Remove error message
        extraIncIcon.classList.remove("as");
    } 
   
});
//Deduction
var deductionInput = document.getElementById("deductionInput");
var deductionIcon = document.getElementById("deductionIcon");
// Add event listener to toggle class on click
deductionInput.addEventListener("keyup", function () {
    var inputValue = deductionInput.value;
    // Check if the input value is not a number
    if (isNaN(inputValue)) {
        // Show error message
         deductionIcon.classList.add("as");
    } else {
        // Remove error message
        deductionIcon.classList.remove("as");
    } 
   
});
var ageInput = document.getElementById("ageInput");
var ageIcon = document.getElementById("ageIcon");

var myDiv = document.getElementById("calc");
// Add event listener to toggle class on click
myDiv.addEventListener("click", function () {
    var anualInputValue = anualInput.value;
    var extraInputValue = extraIncInput.value;
    var ageInputValue = ageInput.value;
    var deductionInputValue = deductionInput.value;
    if ((valid(anualInputValue) && valid(extraInputValue)) && (valid(ageInputValue) && valid(deductionInputValue))){
        var res = 0;
        if (ageInputValue == 60)res = 0.1;
        if (ageInputValue == 40) res = 0.4;
        if (ageInputValue == 30) res = 0.3;
        let num1 = parseFloat(anualInputValue);
        let num2 = parseFloat(extraInputValue);
        let num3 = parseFloat(deductionInputValue);
        var overallinc = (num1 + num2) - num3;
        if (overallinc > 800000) res = res * (overallinc - 800000);
        else res = overallinc;
        document.getElementById("result").textContent = res;
        document.getElementById("resultDialog").classList.add("resultv");              
    }else   ageIcon.classList.add("vs");
});
 
function valid(inp) {
    if (isNaN(inp) || inp.length == 0 || inp=="") {
        return false;
    }
    return true;
}

var myDiv2 = document.getElementById("cls");
// Add event listener to toggle class on click
myDiv2.addEventListener("click", function() {
    document.getElementById("resultDialog").classList.remove("resultv");
 });
 