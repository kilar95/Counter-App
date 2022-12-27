// change the font size based on count to fit bigger numbers
document.addEventListener("DOMContentLoaded", () => {
    resizeToFit();
});

function resizeToFit() {
    let numLength = display.innerText.length;

    if (numLength >= 4 && numLength <= 6) {
        display.style.fontSize = '86px';
    } else if (display.innerText.length > 6) {
        display.style.fontSize = '48px';
    }
}