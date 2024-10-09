document.getElementById("submit").addEventListener("click", function () {
    let principal = parseFloat(document.getElementById('principal').value);
    let Rate_of_interest = parseFloat(document.getElementById('Rate_of_interest').value);
    let Time = parseFloat(document.getElementById('Time').value);

   
    if (principal <= 500 || principal >= 10000) {
        alert("Enter  a valid principal amount");
        return;
    }

    if (principal < 1000) {
        Rate_of_interest = 5;
    }
    else if (principal > 1000 && principal < 5000) {
        Rate_of_interest = 7;
    }
    else {
        Rate_of_interest = 10;
    }
    if (Time > 5) {
        Rate_of_interest += 2;

    }
    const interest = (principal * Rate_of_interest * Time / 100);
    console.log(interest)

    document.getElementById("interest_cal").innerHTML = Rate_of_interest.toFixed(3);
    document.getElementById("total_amount").innerHTML = principal + interest.toFixed(3);
    document.getElementById("Additional_Information").innerHTML =Time > 5?"Additional interest for 5 years":"hi hello world";
})