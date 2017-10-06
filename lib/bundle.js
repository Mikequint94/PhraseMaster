/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__game__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__game_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phase2__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phase2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__phase2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__translator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase3__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__phase3__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phase4__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__phase4___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__phase4__);







let target = [];
let fulltarget = [];
let fillnum = 0;
let phasenum = 0;

document.addEventListener("DOMContentLoaded", function(){


  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game___default.a();
  let gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx);
  let phaseTwo = new __WEBPACK_IMPORTED_MODULE_2__phase2___default.a(game, ctx);
  let phaseThree = new __WEBPACK_IMPORTED_MODULE_4__phase3___default.a(game, ctx);
  let phaseFour = new __WEBPACK_IMPORTED_MODULE_5__phase4___default.a(game, ctx);
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
          translations = __WEBPACK_IMPORTED_MODULE_3__translator___default.a.translate(document.getElementById('textinput').value, target);
          // while (!translations.length) {
            translations = __WEBPACK_IMPORTED_MODULE_3__translator___default.a.translate(document.getElementById('textinput').value, target);
          // }
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
  });
  playAgain.addEventListener("click", (e) => {
    window.location.reload();
  });

  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv") && target.length > 4) {
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
      console.log("You can only have up to 5 languages");
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
  // debugger
});


/***/ }),
/* 1 */
/***/ (function(module, exports) {



class Game {
  constructor() {
        

  }



}
module.exports = Game;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

class GameView {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start() {
    let ctx = this.ctx;
    ctx.fillStyle = 'black';

    ctx.fillRect(0, 0, 1000, 600);
    ctx.font = "60px Arial";
    ctx.fillStyle = 'Purple';
    // ctx.fillText("Phrase Master",300,100);
    ctx.fillStyle = "#00ffff";
    ctx.font = "40px Arial";
    ctx.fillText("Enter a phrase: ", 205, 125);
    ctx.fillStyle = "#01c417";
    ctx.font = "38px Arial";
    ctx.fillText("Select up to 5 languages: ", 285, 270);

    document.getElementById('textinput').className = "";
    document.getElementById('1').className = "language swedish";
    document.getElementById('2').className = "language spanish";
    document.getElementById('3').className = "language french";
    document.getElementById('4').className = "language swahili";
    document.getElementById('5').className = "language dutch";
    document.getElementById('6').className = "language irish";
    document.getElementById('7').className = "language italian";
    document.getElementById('8').className = "language german";
    document.getElementById('9').className = "language maori";
    document.getElementById('10').className = "language afrikaans";
  }
  drawStars(fillnum) {
    let x =305;
    let y = 550;
    let ctx = this.ctx;
    ctx.fillStyle = 'black';
    ctx.fillRect(300,520,430,100);
    for (let i=0; i<5; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'lime';
      ctx.strokeStyle = 'blue';
      ctx.moveTo(x,y);
      ctx.lineTo(x+5*5, y-0.5*5);
      ctx.lineTo(x+6.5*5,y-5.5*5);
      ctx.lineTo(x+9*5,y-0.5*5);
      ctx.lineTo(x+14*5,y-0*5);
      ctx.lineTo(x+10.5*5,y+3.5*5);
      ctx.lineTo(x+12*5,y+8.5*5);
      ctx.lineTo(x+6.5*5,y+6*5);
      ctx.lineTo(x+2*5,y+8.5*5);
      ctx.lineTo(x+3.5*5,y+3.5*5);
      ctx.lineTo(x,y);
      if (fillnum > 0) {
        ctx.fill();
        fillnum -= 1;
      }
      ctx.stroke();
      x += 80;
      }
  }

  clear() {
    let ctx = this.ctx;
    ctx.clearRect(0,80,1000,600);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 80, 1000, 600);
    document.getElementById('1').className = "hidden";
    document.getElementById('2').className = "hidden";
    document.getElementById('3').className = "hidden";
    document.getElementById('4').className = "hidden";
    document.getElementById('5').className = "hidden";
    document.getElementById('6').className = "hidden";
    document.getElementById('7').className = "hidden";
    document.getElementById('8').className = "hidden";
    document.getElementById('9').className = "hidden";
    document.getElementById('10').className = "hidden";
    document.getElementById('textinput').className = "hidden";
  }

  phase1(fulltarget,translations) {
    console.log(translations);
    let i = 0;
    let ctx = this.ctx;
    for (i=0; i< fulltarget.length; i++) {
      ctx.fillStyle = "#01c417";
      ctx.font = "38px Arial";
        if (fulltarget.length === 5) {
        ctx.fillText(fulltarget[i], 140, 150 + 100*i);

        ctx.fillStyle = 'Purple';
        ctx.fillRect(310, 150 + 100*i, 500, 3);
        ctx.fillStyle = 'aquamarine';
        if (translations[i].length > 36) {
          ctx.font = "25px Arial";
        } else if (translations[i].length > 31) {
          ctx.font = "29px Arial";
        } else if (translations[i].length > 25) {
          ctx.font = "33px Arial";
        }
        ctx.fillText(translations[i], 322, 148 + 100*i);
      } else {
        ctx.fillText(fulltarget[i], 140, 180 + 100*i);

        ctx.fillStyle = 'Purple';
        ctx.fillRect(310, 180 + 100*i, 500, 3);
        ctx.fillStyle = 'aquamarine';
        if (translations[i].length > 36) {
          ctx.font = "25px Arial";
        } else if (translations[i].length > 31) {
          ctx.font = "29px Arial";
        } else if (translations[i].length > 25) {
          ctx.font = "33px Arial";
        }
        ctx.fillText(translations[i], 322, 178 + 100*i);
      }
    }
  }
}
module.exports = GameView;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Phase2 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
  }

  start(translations, fulltarget) {
    this.currentPhase = true;
    console.log("started phase 2!");
    console.log(translations, fulltarget);
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];

    this.clear();
    // this.drawStars([]);
  }

  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, 1000, 600);
  }

  instructions() {
    let ctx = this.ctx;
    ctx.fillStyle ="cyan";
    ctx.font = "38px Arial";
    ctx.fillText("Your task is to select the correct language", 120,160);
    ctx.fillText("based on the given translated phrase", 120,210);
    ctx.fillText("Fill up all the stars to move on to the next level", 120,300);
    ctx.fillText("Good Luck!", 120,390);
  }

  gameplay() {

    document.getElementById('next').className = "hidden";
    this.round();
    document.addEventListener("click", this.handleClick.bind(this), false);
  }

  clearListener() {
    document.removeEventListener("click", this.handleClick.bind(this));
  }

  round() {
    this.clickable = true;
    console.log(this.clickable);
    this.clear();
    this.drawStars();
    let ctx = this.ctx;
    ctx.fillStyle = 'Purple';
    ctx.fillRect(110, 280, 500, 3);
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);

    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    // console.log(this.phrase, this.language);
    let phrase = this.phrase;
    let language = this.language;
    ctx.fillStyle = 'aquamarine';
    if (phrase.length > 39) {
      ctx.font = "25px Arial";
    } else if (phrase.length > 36) {
      ctx.font = "27px Arial";
    } else if (phrase.length > 31) {
      ctx.font = "29px Arial";
    } else if (phrase.length > 25) {
      ctx.font = "33px Arial";
    }
    ctx.fillText(phrase, 122, 278);
    this.answerY = undefined;

    const list = document.getElementById('answer-list');

    for (let i=0; i < this.fulltarget.length; i++) {
      const answer = document.createElement("div");
      answer.innerHTML = this.fulltarget[i];
      list.appendChild(answer);
      console.log(list, answer);
      // ctx.fillStyle = "cyan";
      // ctx.font = "38px Arial";
      // ctx.fillText(this.fulltarget[i], 680, 180 + 80*i);
      if (this.fulltarget[i] === language) {
        this.answerY = 0.72 * window.innerHeight - 570 + 180 + 80*i;
      }
    }



    }

  handleClick() {
    console.log(this.clickable);
    console.log("heightwindow", window.innerHeight);
    console.log("widthwindow", window.innerWidth);
    if (this.currentPhase && this.clickable) {
      // this.clickable = false;
      let canvas = document.getElementById("myCanvas");
      let ctx = this.ctx;
      let relativeX = event.clientX - canvas.offsetLeft;
      let relativeY = event.clientY - canvas.offsetTop;
      let fulltarget = this.fulltarget;
      console.log("X click", relativeX);
      console.log("Y click", relativeY);
      // console.log(ctx, this.answerY, this.language, this.filltype, this.fulltarget, this.translations);
      if (relativeX > (((window.innerWidth - 1000) / 2) + 670) && relativeX < (((window.innerWidth - 1000) / 2) + 825) && relativeY > (0.72 * window.innerHeight - 570 + 135) && relativeY < (0.72 * window.innerHeight - 570 + 135 + 80*(fulltarget.length))) {
        this.clickable = false;
        if (relativeY < this.answerY + 30 && relativeY > this.answerY-45) {
          ctx.fillStyle = "lime";
          ctx.font = "38px Arial";
          ctx.fillText(this.language, 680, this.answerY);
          // console.log("clicked right answer");
          // console.log(filltype);
          this.filltype.push("good");
          this.drawStars();
        } else {
            ctx.fillStyle = "red";
            ctx.font = "38px Arial";
            if (relativeY < (0.72 * window.innerHeight - 570 + 210) && relativeY > (0.72 * window.innerHeight - 570 + 135)) {
              ctx.fillText(fulltarget[0], 680, 180);
          } if (relativeY < (0.72 * window.innerHeight - 570 + 290) && relativeY > (0.72 * window.innerHeight - 570 +215)) {
              ctx.fillText(fulltarget[1], 680, 260);
          } if (relativeY < (0.72 * window.innerHeight - 570 + 370) && relativeY > (0.72 * window.innerHeight - 570 + 295) && fulltarget[2]) {
              ctx.fillText(fulltarget[2], 680, 340);
          } if (relativeY < (0.72 * window.innerHeight - 570 + 450) && relativeY > (0.72 * window.innerHeight - 570 + 375) && fulltarget[3]) {
              ctx.fillText(fulltarget[3], 680, 420);
          } if (relativeY < (0.72 * window.innerHeight - 570 + 530) && relativeY > (0.72 * window.innerHeight - 570 + 455) && fulltarget[4]) {
              ctx.fillText(fulltarget[4], 680, 500);
          }
          this.filltype.push("X");
          this.drawStars();
      }
      if (this.filltype.length < 8) {
        let myThis = this;
        setTimeout(function() {
          myThis.round();
        }, 1500);
      } else {
        // this.clickable = false;
        let myThis = this;
        setTimeout(function() {
          myThis.checkWin();
        }, 1500);
      }
    }
  }
  }
  checkWin() {
    this.clear();
    if (this.filltype.includes("X")) {
      this.displayLoss();
      let myThis = this;
      // debugger
      setTimeout(function() {
        // debugger
        // myThis.clear();
        myThis.filltype = [];
        myThis.round();
      }, 3000);
    } else {
      this.displayWin();
    }
  }

  displayLoss() {
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="red";
    this.ctx.fillText("You did not answer all the questions correctly.", 100, 240);
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Thats okay! Just try again.", 265, 310);
  }

  displayWin() {
    this.currentPhase = null;
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Great job!", 125, 200);
    this.ctx.fillText("You answered all of the questions correctly.", 125, 255);
    this.ctx.fillText("In the next level you will see several phrases.", 125, 340);
    this.ctx.fillText("Say each phrase out loud, then type it out,", 125, 395);
    this.ctx.fillText("and hit enter.", 125, 450);
    document.getElementById('next').className = "nextbutton";
    this.clearListener();
  }

  drawStars() {
    let ctx = this.ctx;
    let filltype = this.filltype;
    let x =185;
    let y = 550;
    ctx.fillStyle = 'black';
    ctx.fillRect(320,520,430,100);
    for (let i=0; i<8; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'lime';
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.moveTo(x,y);
      ctx.lineTo(x+5*5, y-0.5*5);
      ctx.lineTo(x+6.5*5,y-5.5*5);
      ctx.lineTo(x+9*5,y-0.5*5);
      ctx.lineTo(x+14*5,y-0*5);
      ctx.lineTo(x+10.5*5,y+3.5*5);
      ctx.lineTo(x+12*5,y+8.5*5);
      ctx.lineTo(x+6.5*5,y+6*5);
      ctx.lineTo(x+2*5,y+8.5*5);
      ctx.lineTo(x+3.5*5,y+3.5*5);
      ctx.lineTo(x,y);
      ctx.stroke();
      // debugger
      if (filltype[i] === "good") {
        ctx.fill();
      } else if (filltype[i] === "X") {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 8;
        ctx.moveTo(x + 2.5, y-5*5);
        ctx.lineTo(x+13.5*5,y+8*5);
        ctx.stroke();
        ctx.moveTo(x+2.5, y+8*5);
        ctx.lineTo(x+13.5*5,y-5*5);
        ctx.stroke();
      }
              // ctx.fill();
      x += 80;
      }
  }

}
module.exports = Phase2;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

String.prototype.replaceAll = function(target, replacement) {
  return this.split(target).join(replacement);
};

class Translator {
  constructor() {
  }
  static translate(string, language) {
    // let apiKey = config.API_KEY;
    let apiKey = "AIzaSyAm3jJ2iUD6Q-iLrAsy5qCCy52jH8sH7Tw";
    let translations = {};
    let strings = [];
    let i=0;
    for (i=0; i < language.length; i++) {
      strings[i] = string + " =" + (i);
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=" + apiKey,
      data: {
        'q': strings[i],
        'target': language[i]
      }
    }).then((data) => {
      translations[data.data.translations[0].translatedText.slice(-1)] = (data.data.translations[0].translatedText.slice(0, -3).replace("&#39;","'").replace("&#39;","'").replace("&#39;","'"));
    });
    if (i === language.length - 1) {
      return translations;
    }
  }
}
}
module.exports = Translator;


/***/ }),
/* 5 */
/***/ (function(module, exports) {

String.prototype.replaceAll = function(target, replacement) {
  let phrase = this;
  for (let i=0; i< target.length; i++) {
    phrase = phrase.split(target[i]).join(replacement[i]);
  }
  return phrase;
};

class Phase3 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.filltype = [];
  }

  start(translations, fulltarget) {
    this.clear();
    console.log("started phase 3!");
    console.log(translations, fulltarget);
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];
    console.log(translations);
    console.log(this.translations);
    this.gameplay();
  }
  //
  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, 1000, 600);
  }

  gameplay() {
    document.getElementById('next').className = "hidden";
    this.phase3win = false;
    this.currentPhase = 3;
    this.round();
    let input = document.getElementById("textinput");
    input.value = "";
    let myThis = this;
    input.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13 && myThis.redText === false && myThis.currentPhase === 3) {
        myThis.checkResponse(input.value);
      }
    });
  }

  clearListener() {
    document.removeEventListener("click", this.handleClick.bind(this));
  }
  //
  round() {
    this.clear();
    console.log(this.filltype);
    this.drawStars();
    let ctx = this.ctx;
    ctx.fillStyle = 'Purple';
    ctx.fillRect(352, 250, 500, 3);

    let input = document.getElementById("textinput");
    input.value = "";
    document.getElementById('textinput').className = "phase3input";

    this.redText = false;
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    document.getElementById('largelanguage').className= (this.language + "-large large");
    document.getElementById('largelanguage').innerText = (this.language);
    // console.log(this.phrase, this.language);
    let phrase = this.phrase;
    let language = this.language;
    ctx.fillStyle = 'aquamarine';
    if (phrase.length > 36) {
      ctx.font = "25px Arial";
    } else if (phrase.length > 31) {
      ctx.font = "29px Arial";
    } else if (phrase.length > 25) {
      ctx.font = "33px Arial";
    }
    ctx.fillText(phrase, 356, 248);
    this.response = "";


    }
    checkResponse(input) {
      console.log(input, this.phrase);
      let phraseLowerNoAccent = this.phrase.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"],
                  ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","",""]);
      let inputLowerNoAccent = input.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"],
                 ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","",""]);

      if (inputLowerNoAccent === phraseLowerNoAccent) {
        this.filltype.push("good");
        document.getElementById('textinput').classList.add("success");
        if (this.filltype.length < 8) {
          this.changeText = true;
          let myThis = this;
          setTimeout(function() {
            document.getElementById('textinput').className = "phase3input";
            myThis.changeText = false;
            myThis.round();
          }, 600);
        } else {
          this.drawStars();
          let myThis = this;
          setTimeout(function() {
            document.getElementById('textinput').className = "phase3input";
            myThis.checkWin();
          }, 1500);
        }
      } else if (input.length > 0){
        document.getElementById('textinput').classList.add("fail");
        this.changeText = true;
        let myThis = this;
        setTimeout(function() {
          document.getElementById('textinput').className = "phase3input";
          myThis.changeText = false;
        }, 600);
      }
    }
  checkWin() {
    this.clear();
    if (this.filltype.includes("X")) {
      this.displayLoss();
      let myThis = this;
      setTimeout(function() {
        myThis.clear();
        myThis.filltype=[];
        myThis.round();
      }, 2500);
    } else {
      this.displayWin();
      let myThis = this;
      setTimeout(function() {
        myThis.phase3win = true;
        document.getElementById('next').className = "nextbutton";
        document.addEventListener("keyup", function(e) {
          e.preventDefault();
          if (e.keyCode === 13 && myThis.phase3win) {
            document.getElementById('next').click();
          }
        });
      }, 2500);
    }
  }
  //
  displayLoss() {
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="red";
    this.ctx.fillText("You did not answer all the questions correctly.", 100, 240);
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Thats okay! Just try again.", 265, 310);
  }
  //
  displayWin() {
    document.getElementById('largelanguage').className = "hidden";
    document.getElementById('textinput').className = "hidden";
    this.currentPhase = false;
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Great job!", 150, 200);
    this.ctx.fillText("Now comes the hard part.", 150, 255);
    this.ctx.fillText("In the next level you must do the same", 150, 340);
    this.ctx.fillText("but all from memory.", 150, 395);
  }
  //
  drawStars() {
    let ctx = this.ctx;
    let filltype = this.filltype;
    let x =200;
    let y = 550;
    ctx.fillStyle = 'black';
    ctx.fillRect(320,520,430,100);
    for (let i=0; i<8; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'lime';
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.moveTo(x,y);
      ctx.lineTo(x+5*5, y-0.5*5);
      ctx.lineTo(x+6.5*5,y-5.5*5);
      ctx.lineTo(x+9*5,y-0.5*5);
      ctx.lineTo(x+14*5,y-0*5);
      ctx.lineTo(x+10.5*5,y+3.5*5);
      ctx.lineTo(x+12*5,y+8.5*5);
      ctx.lineTo(x+6.5*5,y+6*5);
      ctx.lineTo(x+2*5,y+8.5*5);
      ctx.lineTo(x+3.5*5,y+3.5*5);
      ctx.lineTo(x,y);
      ctx.stroke();
      // debugger
      if (filltype[i] === "good") {
        ctx.fill();
      } else if (filltype[i] === "X") {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 8;
        ctx.moveTo(x + 2.5, y-5*5);
        ctx.lineTo(x+13.5*5,y+8*5);
        ctx.stroke();
        ctx.moveTo(x+2.5, y+8*5);
        ctx.lineTo(x+13.5*5,y-5*5);
        ctx.stroke();
      }
      x += 80;
      }
  }

}
module.exports = Phase3;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

String.prototype.replaceAll = function(target, replacement) {
  let phrase = this;
  for (let i=0; i< target.length; i++) {
    phrase = phrase.split(target[i]).join(replacement[i]);
  }
  return phrase;
};

class Phase4 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.filltype = [];
  }

  start(translations, fulltarget) {
    this.clear();
    console.log("started phase 4!");
    // console.log(translations, fulltarget);
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];
    // console.log(translations);
    // console.log(this.translations);
    this.gameplay();
  }
  //
  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, 1000, 600);
  }

  gameplay() {
    document.getElementById('next').className = "hidden";
    this.phase4win = false;
    this.currentPhase = 4;
    this.round();
    let input = document.getElementById("textinput");
    input.value = "";
    let myThis = this;
    input.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13 && myThis.changeText === false && myThis.currentPhase === 4) {
        myThis.checkResponse(input.value);
      }
    });
  }
  round() {
    this.clear();
    console.log(this.filltype);
    this.drawStars();
    let ctx = this.ctx;
    // ctx.fillStyle = 'Purple';
    // ctx.fillRect(352, 250, 500, 3);

    let input = document.getElementById("textinput");
    input.value = "";
    document.getElementById('textinput').className = "phase3input";

    this.changeText = false;
    // console.log(this.translations);
    // console.log(Object.keys(this.translations));
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    // console.log(randompick);
    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    document.getElementById('largelanguage').className= (this.language + "-large large");
    document.getElementById('largelanguage').innerText = (this.language);
    // console.log(this.phrase, this.language);
    let phrase = this.phrase;
    let language = this.language;
    ctx.fillStyle = 'aquamarine';
    if (phrase.length > 36) {
      ctx.font = "25px Arial";
    } else if (phrase.length > 31) {
      ctx.font = "29px Arial";
    } else if (phrase.length > 25) {
      ctx.font = "33px Arial";
    }
    // ctx.fillText(phrase, 356, 248);
    this.response = "";


    }
    checkResponse(input) {
      let ctx = this.ctx;
      console.log(input, this.phrase);
      let phraseLowerNoAccent = this.phrase.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"],
                  ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","",""]);
      let inputLowerNoAccent = input.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"],
                 ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","",""]);

      if (inputLowerNoAccent === phraseLowerNoAccent) {
        this.filltype.push("good");
        this.drawStars();
        document.getElementById('textinput').classList.add("success");
        if (this.filltype.length < 8) {
          this.changeText = true;
          let myThis = this;
          setTimeout(function() {
            document.getElementById('textinput').className = "phase3input";
            myThis.changeText = false;
            myThis.round();
          }, 600);
        } else {
          console.log("Should Check Win here");
          let myThis = this;
          setTimeout(function() {
            document.getElementById('textinput').className = "phase3input";
            myThis.checkWin();
          }, 1300);
        }
      } else if (input.length > 0){
        this.filltype.push("X");
        this.drawStars();
        document.getElementById('textinput').classList.add("fail");
        this.changeText = true;

        let phrase = this.phrase;

        ctx.fillStyle = 'Purple';
        ctx.fillRect(352, 250, 500, 3);


        ctx.fillStyle = 'aquamarine';
        if (phrase.length > 36) {
          ctx.font = "25px Arial";
        } else if (phrase.length > 31) {
          ctx.font = "29px Arial";
        } else if (phrase.length > 25) {
          ctx.font = "33px Arial";
        }
        ctx.fillText(phrase, 356, 248);


        let myThis = this;
        setTimeout(function() {
          document.getElementById('textinput').className = "phase3input";
          myThis.changeText = false;
          myThis.clear();
          myThis.round();
        }, 1900);
      }
    }

  checkWin() {
    this.clear();
    if (this.filltype.includes("X")) {
      this.displayLoss();
      let myThis = this;
      setTimeout(function() {
        document.getElementById('largelanguage').className = "large";
        document.getElementById('textinput').className = "phase3input";

        myThis.clear();
        myThis.filltype=[];
        myThis.round();
      }, 2500);
    } else {
      this.displayWin();
      let myThis = this;

    }
  }
  //
  displayLoss() {
    document.getElementById('largelanguage').className = "hidden";
    document.getElementById('textinput').className = "hidden";

    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="red";
    this.ctx.fillText("You did not answer all the questions correctly.", 100, 240);
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Thats okay! Just try again.", 265, 310);
  }
  //
  displayWin() {
    document.getElementById('largelanguage').className = "hidden";
    document.getElementById('textinput').className = "hidden";
    this.currentPhase = false;
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Great job!", 150, 170);
    this.ctx.fillText("You are now...", 150, 225);
    this.ctx.font = "60px Arial";
    this.ctx.fillStyle="purple";
    this.ctx.fillText("A PHRASE MASTER", 150, 345);
    this.ctx.fillStyle="cyan";
    let myThis = this;
    setTimeout(function() {
      myThis.ctx.fillText(".", 320, 455);
    }, 150);
    setTimeout(function() {
      myThis.ctx.fillText(".", 350, 455);
    }, 300);
    setTimeout(function() {
      myThis.ctx.fillText(".", 380, 455);
    }, 450);
    setTimeout(function() {
      myThis.ctx.fillText(".", 410, 455);
    }, 600);
    setTimeout(function() {
      myThis.ctx.fillText(".", 440, 455);
    }, 750);
    setTimeout(function() {
      document.getElementById('replay').className = "playagain";
    }, 1100);
  }
  //
  drawStars() {
    let ctx = this.ctx;
    let filltype = this.filltype;
    let x =200;
    let y = 550;
    ctx.fillStyle = 'black';
    ctx.fillRect(320,520,430,100);
    for (let i=0; i<8; i++) {
      ctx.beginPath();
      ctx.fillStyle = 'lime';
      ctx.strokeStyle = 'blue';
      ctx.lineWidth = 1;
      ctx.moveTo(x,y);
      ctx.lineTo(x+5*5, y-0.5*5);
      ctx.lineTo(x+6.5*5,y-5.5*5);
      ctx.lineTo(x+9*5,y-0.5*5);
      ctx.lineTo(x+14*5,y-0*5);
      ctx.lineTo(x+10.5*5,y+3.5*5);
      ctx.lineTo(x+12*5,y+8.5*5);
      ctx.lineTo(x+6.5*5,y+6*5);
      ctx.lineTo(x+2*5,y+8.5*5);
      ctx.lineTo(x+3.5*5,y+3.5*5);
      ctx.lineTo(x,y);
      ctx.stroke();
      // debugger
      if (filltype[i] === "good") {
        ctx.fill();
      } else if (filltype[i] === "X") {
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.lineWidth = 8;
        ctx.moveTo(x + 2.5, y-5*5);
        ctx.lineTo(x+13.5*5,y+8*5);
        ctx.stroke();
        ctx.moveTo(x+2.5, y+8*5);
        ctx.lineTo(x+13.5*5,y-5*5);
        ctx.stroke();
      }
              // ctx.fill();
      x += 80;
      }
  }

}
module.exports = Phase4;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map