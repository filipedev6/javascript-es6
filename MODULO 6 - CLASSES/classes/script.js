// function Button(text, background) {
//     this.text = text;
//     this.background = background;
// }

// Button.prototype.element = function() {
//     const btn = document.createElement('button');

//     btn.innerText = this.text;
//     btn.style.background = this.background;

//     return btn;
// }

// class Button {
//     constructor(text, background) {
//         this.text = text;
//         this.background = background;
//     }

//     element() {
//         const btn = document.createElement('button');
//         btn.innerText = this.text;
//         btn.style.background = this.background;

//         return btn;
//     }

//     appendTo(target) {
//         const targetElement = document.querySelector(target);
//         targetElement.appendChild(this.element());
//     }
// }

// const btnBlue = new Button('Comprar', 'blue');

// console.log(btnBlue.appendTo('body'))

class Button {
    constructor(text) {
        this.text = text;
    }

    static create(background) {
        const button = document.createElement('button');
        button.style.background = background;
        button.innerText = 'Clique';
        return button
    }
}

const btnBlue = Button.create('blue');

console.log(btnBlue)
