let outerDiv = document.querySelector('.outer-container');

function createHTML(tag, classe, text) {
    let element = document.createElement(tag);

    if (classe) {
        element.classList.add(classe);
    }

    if (text) {
        element.innerHTML = text;
    }

    return element;
}


// title div 

const divTitle = createHTML('div', 'title', '');
outerDiv.append(divTitle);

const title = createHTML('h1', '', 'counter');
divTitle.append(title);


// display div 

const divDisplay = createHTML('div', 'display', '0');
outerDiv.append(divDisplay);

// buttons div 

const buttonsDiv = createHTML('div', 'buttons', '');
outerDiv.append(buttonsDiv);

const buttonsPlus = createHTML('button', 'increase', '+');
const buttonReset = createHTML('button', 'reset', 'reset');
const buttonMinus = createHTML('button', 'decrease', '-');
buttonsDiv.append(buttonsPlus);
buttonsDiv.append(buttonReset);
buttonsDiv.append(buttonMinus);








