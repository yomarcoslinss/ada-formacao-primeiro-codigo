import { Player } from "./Player.js";
import { Ball } from "./Ball.js";

export class Game {
    constructor(canvas) {
        this.player = new Player(canvas);
        this.ball = new Ball(canvas, this.player);
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        window.addEventListener("keydown", (e) => this.keyboard(e));
    }

    // render() {
    //     this.player.draw();
    // }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.draw();
        this.ball.draw();
    }

    keyboard(e) {
        const keyLeft = [37, 65];
        const keyRight = [39, 68];

        if (keyLeft.includes(e.keyCode)) {
            this.player.moveLeft();
        } else if (keyRight.includes(e.keyCode)) {
            this.player.moveRight();
        }
    }
}
