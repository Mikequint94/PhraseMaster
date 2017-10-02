import Game from "./game";
import GameView from "./game_view";
import Translator from './translator';

let target = [];
let fulltarget = [];


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const nextButton = document.querySelector(".nextbutton");
  const backButton = document.querySelector(".backbutton");
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    let translations = [];
    translations = Translator.translate(document.getElementById('textinput').value, target);
    GameView.clear(ctx);
    let timer = setTimeout(function() {GameView.phase1(ctx, fulltarget, translations);}, 500);
    // GameView.phase1(ctx, target, translations);
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    new GameView(game, ctx).start();
  });
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {
      target.push("sv"); fulltarget.push("Swedish");
      sv.classList.add("swedish-clicked");
    } else {
      target.splice(target.indexOf("sv"), 1);
      sv.classList.remove("swedish-clicked");
    }
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("es")) {
      target.push("es"); fulltarget.push("Spanish");
      es.classList.add("spanish-clicked");
    } else {
      target.splice(target.indexOf("es"), 1);
      es.classList.remove("spanish-clicked");
    }
  });
  const fr = document.getElementById("3");
  fr.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("fr")) {
      target.push("fr"); fulltarget.push("French");
      fr.classList.add("french-clicked");
    } else {
      target.splice(target.indexOf("fr"), 1);
      fr.classList.remove("french-clicked");
    }  });
  const sw = document.getElementById("4");
  sw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sw")) {
      target.push("sw"); fulltarget.push("Swahili");
      sw.classList.add("swahili-clicked");
    } else {
      target.splice(target.indexOf("sw"), 1);
      sw.classList.remove("swahili-clicked");
    }  });
  const nl = document.getElementById("5");
  nl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("nl")) {
      target.push("nl"); fulltarget.push("Dutch");
      nl.classList.add("dutch-clicked");
    } else {
      target.splice(target.indexOf("nl"), 1);
      nl.classList.remove("dutch-clicked");
    }  });

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
    GameView.drawStars(ctx);

});
