const buttons = document.querySelectorAll('button');
let display = document.querySelector('.display');

let count = 0;

function updateCount(operation) {
    if (operation == '+' || operation == 'ArrowUp') {
        count++;
    } else if (operation == '-' || operation == 'ArrowDown') {
        count--;
    } else if (operation == 'RESET' || operation == 'Escape') {
        count = 0;
    }
    displayCount(count);
}

function displayCount(n) {
    display.innerText = n;
}

// button events
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        updateCount(e.target.innerText);
    })
})

// keypress events 
document.addEventListener('keydown', (e) => {
    updateCount(e.key);
});

