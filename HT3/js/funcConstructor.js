'use strict'

function Draw() {
    this.rectangle = function () {
        const rectangle = document.querySelector('.rectangle');
        if (rectangle.getContext) {
            const context = rectangle.getContext('2d');

            context.fillStyle = '#faba7a';
            context.fillRect(50, 100, 600, 400);
        }
    }
    this.triangle = function () {
        const triangle = document.querySelector('.triangle');
        if (triangle.getContext) {
            const context = triangle.getContext('2d');

            context.beginPath();
            context.moveTo(100, 500);
            context.lineTo(350, 50);
            context.lineTo(650, 500);
            context.fillStyle = '#929cf0';
            context.fill();
        }
    }
}

const figure = new Draw;

figure.triangle();
figure.rectangle();