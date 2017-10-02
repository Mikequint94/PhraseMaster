import Game from "./game";
import GameView from "./game_view";
import Translator from './translator';

let target = [];


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const button = document.querySelector(".nextbutton");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    Translator.translate(document.getElementById('textinput').value, target);
    GameView.clear(ctx, sv, es);
    GameView.phase1(ctx, target);
    // console.log(translations);
  });
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    target.push("sv");
    sv.classList.add("swedish-clicked");
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    target.push("es");
    es.classList.add("spanish-clicked");
  });

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
});
