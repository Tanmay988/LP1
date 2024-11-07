let countDownDate;
let countDownFunc;
let isCounting = false;

function updateTimer(){
    if(!countDownDate) return;

    let now = new Date().getTime();
    let distance = countDownDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        document.getElementById("note").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    
        if(distance < 0) {
            clearInterval(countDownFunc);
            document.getElementById("note").innerHTML = "Expired";
        }   
}
document.getElementById("start").addEventListener("click", function() {
    if (!isCounting) {
        const userInput = document.getElementById("dateTime-Input").value;
        if (userInput) {
            countDownDate = new Date(userInput).getTime();
            if (!isNaN(countDownDate)) {
                countDownFunc = setInterval(updateTimer, 1000);
                isCounting = true;
                updateTimer();
            } else {
                document.getElementById("note").innerText = "Please enter a valid date and time.";
                document.getElementById("note").style.color = "red";
            }
        } else {
            document.getElementById("note").innerText = "Please select a date and time.";
            document.getElementById("note").style.color = "red";
        }
    }
});

document.getElementById("stop").addEventListener("click", function() {
    clearInterval(countDownFunc);
    isCounting = false;
});

// Reset countdown
document.getElementById("reset").addEventListener("click", function() {
    clearInterval(countDownFunc);
    document.getElementById("note").innerHTML = "Enter date and time";
    document.getElementById("datetime-input").value = "";
    isCounting = false;
    countDownDate = null;
});

updateTimer();

