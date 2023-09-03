import { Player } from "./Player.js";

export class Game {
    constructor(canvas) {
        this.player = new Player(canvas);
        this.canvas = canvas;
        this.context = canvas.getContext("2d");

        window.addEventListener("keydown", (e) => this.keyboard(e));
    }

    // render() {
    //     this.context.fillStyle = "black";
    //     this.context.fillRect(0, 0, 900, 600);
    //     this.player.draw();
    // }

    update() {
        this.context.fillStyle = "black";
        this.context.fillRect(0, 0, 900, 600);
        this.player.draw();
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
