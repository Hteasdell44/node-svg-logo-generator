let userShape;

class Shape {

    constructor(backgroundColor, text, textColor) {
        this.backgroundColor = backgroundColor;
        this.text = text;
        this.textColor = textColor;
    }
};

class Square extends Shape {

    constructor(backgroundColor, text, textColor){

        super(backgroundColor, text, textColor);
    }

    render() {

        return `<svg width="200" height="200"><rect x="0" y="0" width="200" height="200" fill="${this.backgroundColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

class Circle extends Shape {

    constructor(backgroundColor, text, textColor){

        super(backgroundColor, text, textColor);
    }

    render() {

        return `<svg height="350" width="350"><circle cx="110" cy="110" r="100" fill="${this.backgroundColor}"/><text x="110" y="110" text-anchor="middle" alignment-baseline="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }

};

class Triangle extends Shape {

    constructor(backgroundColor, text, textColor){

        super(backgroundColor, text, textColor);
    }

    render() {

        return `<svg width="200" height="200"><polygon points="95, 1 200, 182 4, 182" fill="${this.backgroundColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`;
    }
};

function createShape(userInput) {

    switch(userInput.shape) {
        case "Circle":
            userShape = new Circle(userInput.backgroundColor, userInput.logoText, userInput.textColor);
            break;
        case "Square":
            userShape = new Square(userInput.backgroundColor, userInput.logoText, userInput.textColor);
            break;
        case "Triangle":
            userShape = new Triangle(userInput.backgroundColor, userInput.logoText, userInput.textColor);
            break;
    }

    return userShape;
}

module.exports = {

    createShape,
    Shape,
    Square,
    Circle,
    Triangle
};