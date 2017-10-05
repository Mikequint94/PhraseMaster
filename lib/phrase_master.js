import Game from "./game";
import GameView from "./game_view";
import Phase2 from "./phase2";
import Translator from './translator';
import Phase3 from "./phase3";
import Phase4 from "./phase4";

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
  let phaseFour = new Phase4(game, ctx);
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
          while (!translations) {
            translations = Translator.translate(document.getElementById('textinput').value, target);
          }
          gameView.clear();
          ctx.fillStyle = 'cyan';
          ctx.fillText("Study the translated phrases before moving on", 104, 285);
          ctx.fillText("(Click next or hit enter to continue)", 225, 347);

          document.getElementById("textinput").removeEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13 && phasenum === 0) {
              document.getElementById("next").click();
            }
          });
          phasenum +=1;
          document.getElementById('next').className = "hidden";
          setTimeout(function() {
            document.getElementById('next').className = "nextbutton";
            document.addEventListener("keyup", function(event) {
              event.preventDefault();
              if (event.keyCode === 13 && phasenum === 1) {
              document.getElementById("next").click();
            }
          });
        }, 1300);

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
      document.getElementById('next').className = "hidden";
      gameView.phase1(fulltarget, translations);
      setTimeout(function() {
        document.getElementById('next').className = "nextbutton";
        document.addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode === 13 && phasenum === 2) {
          document.getElementById("next").click();
        }
      });
    }, 1500);
    } else if (phasenum === 2) {
      document.getElementById('next').className = "hidden";
      phaseTwo.start(translations, fulltarget);
      phasenum +=1;
      setTimeout(function() {
        document.getElementById('next').className = "nextbutton";
        document.addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode === 13 && phasenum === 3) {
          document.getElementById("next").click();
        }
      });
    }, 1500);
      // phaseFour.start(translations, fulltarget);
      phaseTwo.instructions();
    } else if (phasenum === 3) {
      phasenum +=1;
      phaseTwo.gameplay();
      setTimeout(function() {
        document.addEventListener("keyup", function(event) {
          event.preventDefault();
          if (event.keyCode === 13 && phasenum === 4 && document.getElementById('next').className === "nextbutton") {
          document.getElementById("next").click();
        }
      });
    }, 1500);
    } else if (phasenum === 4) {
      phaseThree.start(translations, fulltarget);
      phasenum +=1;
    } else if (phasenum === 5) {
      phasenum +=1;
      phaseFour.start(translations, fulltarget);
    }
  });
  backButton.addEventListener("click", (e) => {
    window.location.reload();
    // e.preventDefault();
    // document.getElementById('next').className = "nextbutton";
    //
    // document.getElementById('textinput').className = "";
    // document.getElementById('textinput').value = "";
    // document.getElementById('1').className = "language swedish";
    // document.getElementById('2').className = "language spanish";
    // document.getElementById('3').className = "language french";
    // document.getElementById('4').className = "language swahili";
    // document.getElementById('5').className = "language dutch";
    //
    // gameView.clear();
    // phaseTwo.clear();
    // phaseTwo.clearListener();
    // gameView = new GameView(game, ctx);
    // phaseTwo = new Phase2(game, ctx);
    // gameView.start();
    // fillnum = 0;
    // target = [];
    // fulltarget = [];
    // phasenum = 0;
    // gameView.drawStars(fillnum);
  });


  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {
      target.push("sv"); fulltarget.push("Swedish");
      sv.classList.add("swedish-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("sv"), 1); fulltarget.splice(target.indexOf("Swedish"), 1);
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
      target.splice(target.indexOf("es"), 1); fulltarget.splice(target.indexOf("Spanish"), 1);
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
      target.splice(target.indexOf("fr"), 1); fulltarget.splice(target.indexOf("French"), 1);
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
      target.splice(target.indexOf("sw"), 1); fulltarget.splice(target.indexOf("Swahili"), 1);
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
      target.splice(target.indexOf("nl"), 1); fulltarget.splice(target.indexOf("Dutch"), 1);
      nl.classList.remove("dutch-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const vi = document.getElementById("6");
  vi.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("vi")) {
      target.push("vi"); fulltarget.push("Vietnamese");
      vi.classList.add("vietnamese-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("vi"), 1); fulltarget.splice(target.indexOf("Vietnamese"), 1);
      vi.classList.remove("vietnamese-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const it = document.getElementById("7");
  it.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("it")) {
      target.push("it"); fulltarget.push("Italian");
      it.classList.add("italian-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("it"), 1); fulltarget.splice(target.indexOf("Italian"), 1);
      it.classList.remove("italian-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const de = document.getElementById("8");
  de.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("de")) {
      target.push("de"); fulltarget.push("German");
      de.classList.add("german-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("de"), 1); fulltarget.splice(target.indexOf("German"), 1);
      de.classList.remove("german-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const mi = document.getElementById("9");
  mi.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("mi")) {
      target.push("mi"); fulltarget.push("Maori");
      mi.classList.add("maori-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("mi"), 1); fulltarget.splice(target.indexOf("Maori"), 1);
      mi.classList.remove("maori-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const af = document.getElementById("10");
  af.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("af")) {
      target.push("af"); fulltarget.push("Afrikaans");
      af.classList.add("afrikaans-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("af"), 1); fulltarget.splice(target.indexOf("Afrikaans"), 1);
      af.classList.remove("afrikaans-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  // debugger
});
