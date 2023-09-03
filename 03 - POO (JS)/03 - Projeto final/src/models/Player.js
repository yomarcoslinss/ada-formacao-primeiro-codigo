export class Player {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.width = 100;
        this.height = 10;
        this.x = canvas.width / 2 - this.width / 2;
        this.y = canvas.height / 2 - this.height / 2 + 250;
        this.speed = 15;
    }

    moveLeft() {
        if(this.x < -80) {
            this.x += this.canvas.width;
        }

        this.x -= this.speed;
    }

    moveRight() {
        if(this.x > this.canvas.width - 12) {
            this.x -= this.canvas.width;
        }
        
        this.x += this.speed;
    }

    draw() {
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, 900, 600)
        this.context.fillStyle = "white";
        this.context.fillRect(this.x, this.y, this.width, this.height);
    }
    
}