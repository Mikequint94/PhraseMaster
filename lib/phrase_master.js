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
  let gameView = new GameView(ctx);
  let phaseTwo = new Phase2(ctx);
  let phaseThree = new Phase3(ctx);
  let phaseFour = new Phase4(ctx);
  gameView.start();
  gameView.drawStars(fillnum);
  const nextButton = document.querySelector(".nextbutton");
  const backButton = document.getElementById('back');
  const playAgain = document.getElementById('replay');
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
            translations = Translator.translate(document.getElementById('textinput').value, target);
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
            ctx.fillRect(130,130, 771, 80);
          }, 2800);
          ctx.fillStyle = "black";
          ctx.fillRect(130,130, 771, 80);
          ctx.font = "40px Arial";
          ctx.fillStyle="purple";
          ctx.fillRect(200,193, 615, 5);
          ctx.fillStyle="lime";
          ctx.fillText("Please enter a phrase to translate!", 200, 190);
        }
      } else {
        setTimeout(function() {
          ctx.fillStyle = "black";
          ctx.fillRect(130,130, 771, 80);
        }, 2800);
        ctx.fillStyle = "black";
        ctx.fillRect(130,130, 771, 80);
        ctx.font = "40px Arial";
        ctx.fillStyle="purple";
        ctx.fillRect(138,193, 751, 5);
        ctx.fillStyle="lime";
        ctx.fillText("Please select between 2 and 5 languages!", 138, 190);
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
  });
  playAgain.addEventListener("click", (e) => {
    window.location.reload();
  });

  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv") && target.length > 4) {
    } else if (!target.includes("sv")) {
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
    if (!target.includes("es") && target.length > 4) {
    } else if (!target.includes("es")) {
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
    if (!target.includes("fr") && target.length > 4) {
    } else if (!target.includes("fr")) {
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
    if (!target.includes("sw") && target.length > 4) {
    } else if (!target.includes("sw")) {
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
    if (!target.includes("nl") && target.length > 4) {
    } else if (!target.includes("nl")) {
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
  const ga = document.getElementById("6");
  ga.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("ga") && target.length > 4) {
    } else if (!target.includes("ga")) {
      target.push("ga"); fulltarget.push("Irish");
      ga.classList.add("irish-clicked");
      fillnum += 1;
    } else {
      target.splice(target.indexOf("ga"), 1); fulltarget.splice(target.indexOf("Irish"), 1);
      ga.classList.remove("irish-clicked");
      fillnum -= 1;
    }
    gameView.drawStars(fillnum);
  });
  const it = document.getElementById("7");
  it.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("it") && target.length > 4) {
    } else if (!target.includes("it")) {
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
    if (!target.includes("de") && target.length > 4) {
    } else if (!target.includes("de")) {
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
    if (!target.includes("mi") && target.length > 4) {
    } else if (!target.includes("mi")) {
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
    if (!target.includes("af") && target.length > 4) {
    } else if (!target.includes("af")) {
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
});
