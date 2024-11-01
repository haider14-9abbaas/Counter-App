let count = 0;

const counterDisplay = document.getElementById("counter");

function updateCounter() {
    counterDisplay.textContent = count;
    if (count > 0) {
        counterDisplay.style.color = "#32cd32";
    } else if (count < 0) {
        counterDisplay.style.color = "#ff4500";
    } else {
        counterDisplay.style.color = "#e5e5e5";
    }
}


function increment() {
    count++;
    updateCounter();
}

function decrement() {
    count--;
    updateCounter();
}

function resetCounter() {
    count = 0;
    updateCounter();
}