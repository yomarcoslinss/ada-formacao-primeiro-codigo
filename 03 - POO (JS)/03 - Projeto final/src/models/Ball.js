import { interval } from "../main.js";

export class Ball {
    constructor(canvas, player) {
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.player = player;
        this.x = this.canvas.width / 2;
        this.y = this.canvas.height - 100;
        this.moveX = 2;
        this.moveY = -2;
        this.radius = 10;
    }

    draw() {
        if (
            this.x + this.moveX > this.canvas.width - this.radius ||
            this.x + this.moveX < this.radius
        ) {
            this.moveX = -this.moveX;
        }

        if (this.y + this.moveY < this.radius) {
            this.moveY = -this.moveY;
        } else if (this.y + 50 + this.moveY > this.canvas.height - this.radius
        ) {
            if (this.x > this.player.x && this.x < this.player.x + this.player.width) {
                this.moveY = -this.moveY;
            } else {
                clearInterval(interval);
                document.location.reload();
                alert("Fim de jogo :( ");
            }
        }

        this.x += this.moveX;
        this.y += this.moveY;

        this.context.beginPath();
        this.context.arc(this.x, this.y, 10, 0, Math.PI * 2);
        this.context.fillStyle = "white";
        this.context.fill();
        this.context.closePath();
    }
}
