import Game from "./game";
import GameView from "./game_view";
import Phase2 from "./phase2";
import Translator from './translator';

let target = [];
let fulltarget = [];
let fillnum = 0;
let phasenum = 0;


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const nextButton = document.querySelector(".nextbutton");
  const backButton = document.querySelector(".backbutton");
  let translations = {};
  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (phasenum === 0) {
      if (fillnum > 1 && fillnum < 6) {
        if (document.getElementById('textinput').value.length > 0) {
          translations = Translator.translate(document.getElementById('textinput').value, target);
          GameView.clear(ctx);
          ctx.fillStyle = 'cyan';
          ctx.fillText("Study the translated phrases before moving on", 104, 285);
          ctx.fillText("(Click next to view)", 315, 347);
          phasenum +=1;
        } else {
          setTimeout(function() {
            ctx.fillStyle = "black";
            ctx.fillRect(170,280, 751, 40);
          }, 2800);
          ctx.fillStyle = "black";
          ctx.fillRect(170,280, 751, 40);
          ctx.font = "40px Arial";
          ctx.fillStyle="purple";
          ctx.fillRect(200,313, 615, 5);
          ctx.fillStyle="lime";
          ctx.fillText("Please enter a phrase to translate!", 200, 310);
        }
      } else {
        setTimeout(function() {
          ctx.fillStyle = "black";
          ctx.fillRect(170,280, 751, 40);
        }, 2800);
        ctx.fillStyle = "black";
        ctx.fillRect(170,280, 751, 40);
        ctx.font = "40px Arial";
        ctx.fillStyle="purple";
        ctx.fillRect(170,313, 751, 5);
        ctx.fillStyle="lime";
        ctx.fillText("Please select between 2 and 5 languages!", 170, 310);
      }

    } else if (phasenum === 1) {
      GameView.clear(ctx);
      phasenum += 1;
      GameView.phase1(ctx, fulltarget, translations);
    } else if (phasenum === 2) {
      phaseTwo.start(translations, fulltarget);
      phasenum +=1;
      phaseTwo.instructions();
    } else if (phasenum === 3) {
      phaseTwo.gameplay();
    }
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('next').className = "nextbutton";
    new GameView(game, ctx).start();
    fillnum = 0;
    target = [];
    fulltarget = [];
    phasenum = 0;
    GameView.drawStars(ctx, fillnum);
  });
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {
      target.push("sv"); fulltarget.push("Swedish");
      sv.classList.add("swedish-clicked");
      fillnum += 1;
      GameView.drawStars(ctx, fillnum);

    } else {
      target.splice(target.indexOf("sv"), 1);
      sv.classList.remove("swedish-clicked");
      fillnum -= 1;
      GameView.drawStars(ctx, fillnum);
    }
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("es")) {
      target.push("es"); fulltarget.push("Spanish");
      es.classList.add("spanish-clicked");
      fillnum += 1;
      GameView.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("es"), 1);
      es.classList.remove("spanish-clicked");
      fillnum -= 1;
      GameView.drawStars(ctx, fillnum);
    }
  });
  const fr = document.getElementById("3");
  fr.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("fr")) {
      target.push("fr"); fulltarget.push("French");
      fr.classList.add("french-clicked");
      fillnum += 1;
      GameView.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("fr"), 1);
      fr.classList.remove("french-clicked");
      fillnum -= 1;
      GameView.drawStars(ctx, fillnum);
    }  });
  const sw = document.getElementById("4");
  sw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sw")) {
      target.push("sw"); fulltarget.push("Swahili");
      sw.classList.add("swahili-clicked");
      fillnum += 1;
      GameView.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("sw"), 1);
      sw.classList.remove("swahili-clicked");
      fillnum -= 1;
      GameView.drawStars(ctx, fillnum);
    }  });
  const nl = document.getElementById("5");
  nl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("nl")) {
      target.push("nl"); fulltarget.push("Dutch");
      nl.classList.add("dutch-clicked");
      fillnum += 1;
      GameView.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("nl"), 1);
      nl.classList.remove("dutch-clicked");
      fillnum -= 1;
      GameView.drawStars(ctx, fillnum);
    }  });

  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  new GameView(game, ctx).start();
    GameView.drawStars(ctx, fillnum);
  const phaseTwo = new Phase2(game, ctx);

});
