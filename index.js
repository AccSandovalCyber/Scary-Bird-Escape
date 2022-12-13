const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024;
canvas.height = 50;

class Sprite {
    constructor({ position, velocity, color = "red", offset }) {
        this.position = position;
    }
}

draw() 