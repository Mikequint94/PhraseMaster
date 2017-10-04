import Game from "./game";
import GameView from "./game_view";
import Phase2 from "./phase2";
import Translator from './translator';
import Phase3 from "./phase3";

let target = [];
let fulltarget = [];
let fillnum = 0;
let phasenum = 0;

document.addEventListener("DOMContentLoaded", function(){


  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext("2d");
  const game = new Game();
  let gameView = new GameView(game, ctx);
  let phaseTwo = new Phase2(game, ctx);
  let phaseThree = new Phase3(game, ctx);
  gameView.start();
  gameView.drawStars(fillnum);
  const nextButton = document.querySelector(".nextbutton");
  const backButton = document.getElementById('back');
  let translations = {};
  document.getElementById("textinput").addEventListener("keyup", function(event) {
  event.preventDefault();
    if (event.keyCode === 13 && phasenum === 0) {
      document.getElementById("next").click();
    }
  });

  nextButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (phasenum === 0) {
      if (fillnum > 1 && fillnum < 6) {
        if (document.getElementById('textinput').value.length > 0) {
          translations = Translator.translate(document.getElementById('textinput').value, target);
          gameView.clear();
          ctx.fillStyle = 'cyan';
          ctx.fillText("Study the translated phrases before moving on", 104, 285);
          ctx.fillText("(Click next to view)", 315, 347);

          document.getElementById("textinput").removeEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13 && phasenum === 0) {
              document.getElementById("next").click();
            }
          });

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
      gameView.clear();
      phasenum += 1;
      gameView.phase1(fulltarget, translations);
    } else if (phasenum === 2) {
      phaseTwo.start(translations, fulltarget);
      phasenum +=1;
      phaseTwo.instructions();
    } else if (phasenum === 3) {
      phasenum +=1;
      phaseTwo.gameplay();
    } else if (phasenum === 4) {
      phaseThree.start(translations, fulltarget);
    }
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('next').className = "nextbutton";

    document.getElementById('textinput').className = "";
    document.getElementById('1').className = "language swedish";
    document.getElementById('2').className = "language spanish";
    document.getElementById('3').className = "language french";
    document.getElementById('4').className = "language swahili";
    document.getElementById('5').className = "language dutch";

    gameView.clear();
    phaseTwo.clear();
    phaseTwo.clearListener();
    gameView = new GameView(game, ctx);
    phaseTwo = new Phase2(game, ctx);
    gameView.start();
    fillnum = 0;
    target = [];
    fulltarget = [];
    phasenum = 0;
    gameView.drawStars(fillnum);
  });

  
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {
      target.push("sv"); fulltarget.push("Swedish");
      sv.classList.add("swedish-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("sv"), 1);
      sv.classList.remove("swedish-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("es")) {
      target.push("es"); fulltarget.push("Spanish");
      es.classList.add("spanish-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("es"), 1);
      es.classList.remove("spanish-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const fr = document.getElementById("3");
  fr.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("fr")) {
      target.push("fr"); fulltarget.push("French");
      fr.classList.add("french-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("fr"), 1);
      fr.classList.remove("french-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const sw = document.getElementById("4");
  sw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sw")) {
      target.push("sw"); fulltarget.push("Swahili");
      sw.classList.add("swahili-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("sw"), 1);
      sw.classList.remove("swahili-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const nl = document.getElementById("5");
  nl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("nl")) {
      target.push("nl"); fulltarget.push("Dutch");
      nl.classList.add("dutch-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("nl"), 1);
      nl.classList.remove("dutch-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  // debugger


});
