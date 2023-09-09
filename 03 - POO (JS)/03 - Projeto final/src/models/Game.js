import { Player } from "./Player.js";
import { Ball } from "./Ball.js";
import { Brick } from "./Brick.js";

export class Game {
    constructor(canvas) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.player = new Player(canvas);
        this.ball = new Ball(canvas, this.player);
        this.brick = new Brick(canvas, this.ball);
        window.addEventListener("keydown", (e) => this.keyboard(e));
    }

    // render() {
    //     this.player.draw();
    // }

    update() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.player.draw();
        this.ball.draw();
        this.brick.brickCollision()
        this.brick.draw();

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
