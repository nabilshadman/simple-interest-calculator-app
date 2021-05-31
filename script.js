// validate principal value and compute interest
function compute() {
    // Create reference to the principal element for validating
    var principal_element = document.getElementById("principal");
    // Store principal value in a variable
    var principal = principal_element.value;

    // Check if the principal value is zero or less
    if (principal <= 0) {
        alert("Please enter a positive number");
        principal_element.focus();
        return false;
    }

    // Store rate and years values in variables
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    // Calcuate interest
    var interest = principal * years * rate / 100;

    // Store the maturity year based on current year
    var year = new Date().getFullYear()+parseInt(years);

    // update the span element after Compute Interest 
    // button to display result
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+"</mark>,\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;at an interest rate of <mark>"+rate+"%</mark>\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;You will receive an amount of <mark>"+interest+"</mark>,\<br\>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;in the year <mark>"+year+"</mark>\<br\>" 
}

// update interest rate displayed next to the slider
function updateRate() {
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
