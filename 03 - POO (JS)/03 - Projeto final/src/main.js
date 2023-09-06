import { Game } from "./models/Game.js";


const canvas = document.getElementById("game-canvas");
const breakout = new Game(canvas);


export const interval = setInterval(breakout.update.bind(breakout), 10)
