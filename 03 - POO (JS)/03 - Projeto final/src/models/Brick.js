import { interval } from "../main.js";


export class Brick {
    constructor(canvas, ball) {
        this.canvas = canvas;
        this.context = this.canvas.getContext("2d");
        this.ball = ball;
        this.brickColumn = 17;
        this.brickRow = 8;
        this.brickWidth = 40;
        this.brickHeight = 20;
        this.brickPadding = 10;
        this.brickOffsetTop = 30;
        this.brickOffsetLeft = 30;
        this.bricks = [];

        for (let c = 0; c < this.brickColumn; c++) {
            this.bricks[c] = [];
            for (let r = 0; r < this.brickRow; r++) {
                this.bricks[c][r] = { x: 0, y: 0, status: 1 };
            }
        }

        
    }

    brickCollision() {
        
        for (let c = 0; c < this.brickColumn; c++) {
            for (let r = 0; r < this.brickRow; r++) {
                const b = this.bricks[c][r];
                if (b.status == 1) {
                    if (this.ball.x > b.x && this.ball.x < b.x + this.brickWidth && 
                        this.ball.y > b.y && this.ball.y < b.y + this.brickHeight
                        ) {
                            this.ball.moveY = -this.ball.moveY;
                            b.status = 0;
                    }
                }
            }
        }

    }

    draw() {
        this.brickCollision();
        
        for (let c = 0; c < this.brickColumn; c++) {
            for (let r = 0; r < this.brickRow; r++) {
                if (this.bricks[c][r].status == 1) {
                    const brickX = c * (this.brickWidth + this.brickPadding) + this.brickOffsetLeft;
                    const brickY = r * (this.brickHeight + this.brickPadding) + this.brickOffsetTop;
                    this.bricks[c][r].x = brickX;
                    this.bricks[c][r].y = brickY;
                    this.context.beginPath();
                    this.context.rect(brickX, brickY, this.brickWidth, this.brickHeight);
                    this.context.fillStyle = "lime";
                    this.context.fill();
                    this.context.closePath();
                }
            }
        }

        if(this.bricks.every((bricksArray) => bricksArray.every((brick) => brick.status === 0))) {
            clearInterval(interval);
            document.location.reload();
            window.alert("Parabéns, você venceu !!!")
        }
    }

}
