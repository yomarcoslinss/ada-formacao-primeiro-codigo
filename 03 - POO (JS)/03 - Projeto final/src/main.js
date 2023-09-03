import { Game } from "./models/Game.js";


const canvas = document.getElementById("game-canvas");
const breakout = new Game(canvas);


// breakout.render();
setInterval(breakout.update.bind(breakout), 10)
