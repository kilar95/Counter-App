const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

let count = 0;

function updateCount(operation) {
    if (operation == '+' || operation == 'ArrowUp') {
        count = count + 1;
    } else if (operation == '-' || operation == 'ArrowDown') {
        count = count - 1;
    } else if (operation == 'RESET' || operation == 'Escape') {
        count = 0;
    }

    displayCount(count);
}

function displayCount(n) {
    display.innerText = n;
}

buttons.forEach(button => {
    button.addEventListener('click', (e)=> {
        updateCount(e.target.innerText);
        
    })
})


// keypress events 
document.addEventListener('keydown', (e) => {
    updateCount(e.key);
  });


// change the font size based on count to fit bigger numbers

document.addEventListener("DOMContentLoaded", () => {
    resizeToFit();
  });

function resizeToFit(){
    let numLength = display.innerText.length;

    if (numLength >= 4  && numLength <= 6) {
        display.style.fontSize = '86px';
    } else if (display.innerText.length > 6) {
        display.style.fontSize = '48px';
    }
}