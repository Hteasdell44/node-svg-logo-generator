const Shapes = require('./shapes');

describe('Shapes', () => {

    describe('Circle', () => {

        it('should return an orange circle with NEO writeen in black letters', () => {

            const shape = new Shapes.Circle("orange", "NEO", "black");
            expect(shape.render()).toEqual(`<svg height="350" width="350"><circle cx="110" cy="110" r="100" fill="orange"/><text x="110" y="110" text-anchor="middle" alignment-baseline="middle" fill="black">NEO</text></svg>`);

        });
    });

    describe('Square', () => {

        it('should return a blue square with RSC written in white letters', () => {

            const shape = new Shapes.Square("blue", "RSC", "white");
            expect(shape.render()).toEqual(`<svg width="200" height="200"><rect x="0" y="0" width="200" height="200" fill="blue"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="white">RSC</text></svg>`);
        });
    });

    describe('Triangle', () => {

        it('should return a green triangle with GIO written in blue letters', () => {

            const shape = new Shapes.Triangle("green", "GIO", "blue");
            expect(shape.render()).toEqual(`<svg width="200" height="200"><polygon points="95, 1 200, 182 4, 182" fill="green"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="blue">GIO</text></svg>`);
        });
    });
});