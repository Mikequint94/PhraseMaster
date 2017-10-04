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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phase2__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__phase2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__phase2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__translator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__translator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase3__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__phase3___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__phase3__);






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
          translations = __WEBPACK_IMPORTED_MODULE_3__translator___default.a.translate(document.getElementById('textinput').value, target);
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
    gameView = new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx);
    phaseTwo = new __WEBPACK_IMPORTED_MODULE_2__phase2___default.a(game, ctx);
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
    ctx.fillText("Phrase Master",300,100);
    ctx.fillStyle = "#00ffff";
    ctx.font = "40px Arial";
    ctx.fillText("Enter a phrase: ", 200, 190);
    ctx.fillStyle = "#01c417";
    ctx.font = "38px Arial";
    ctx.fillText("Select up to 5 languages: ", 260, 270);

    document.getElementById('textinput').className = "";
    document.getElementById('1').className = "language swedish";
    document.getElementById('2').className = "language spanish";
    document.getElementById('3').className = "language french";
    document.getElementById('4').className = "language swahili";
    document.getElementById('5').className = "language dutch";
  }
  drawStars(fillnum) {
    let x =330;
    let y = 550;
    let ctx = this.ctx;
    ctx.fillStyle = 'black';
    ctx.fillRect(320,520,430,100);
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
    ctx.clearRect(0,100,1000,600);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 100, 1000, 600);
    document.getElementById('1').className = "hidden";
    document.getElementById('2').className = "hidden";
    document.getElementById('3').className = "hidden";
    document.getElementById('4').className = "hidden";
    document.getElementById('5').className = "hidden";
    document.getElementById('textinput').className = "hidden";
  }

  phase1(fulltarget,translations) {
    let i = 0;
    let ctx = this.ctx;
    for (i=0; i< fulltarget.length; i++) {
      ctx.fillStyle = "#01c417";
      ctx.font = "38px Arial";
      ctx.fillText(fulltarget[i], 140, 180 + 100*i);

      ctx.fillStyle = 'Purple';
      ctx.fillRect(310, 180 + 100*i, 500, 3);
      ctx.fillStyle = 'aquamarine';
      // console.log(translations[i].length);
      if (translations[i].length > 36) {
        ctx.font = "25px Arial";
      } else if (translations[i].length > 31) {
        ctx.font = "29px Arial";
      } else if (translations[i].length > 25) {
        ctx.font = "33px Arial";
      }
      ctx.fillText(translations[i], 322, 178 + 100*i);
      console.log(translations[i]);
    }
  }
}
module.exports = GameView;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

class Translator {
  constructor() {
  }
  static translate(string, language) {
    let apiKey = config.API_KEY;
    let translations = {};
    let strings = [];
    let i=0;
    for (i=0; i < language.length; i++) {
      strings[i] = string + " " + (i);
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=" + apiKey,
      data: {
        'q': strings[i],
        'target': language[i]
      }
    }).then((data) => {
      translations[data.data.translations[0].translatedText.slice(-1)] = (data.data.translations[0].translatedText.slice(0, -2).replace("&#39;", "'"));
    });
    if (i === language.length - 1) {
      return translations;
    }
  }
}
}
module.exports = Translator;


/***/ }),
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports) {

class Phase2 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.translator = new Translator();

  }

  start(translations, fulltarget) {
    this.currentPhase = true;
    console.log("started phase 2!");
    console.log(translations, fulltarget);
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];

    this.clear();
    this.drawStars([]);
  }

  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, 1000, 600);
  }

  instructions() {
    let ctx = this.ctx;
    ctx.fillStyle ="cyan";
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
    this.clear();
    this.drawStars();
    let ctx = this.ctx;
    ctx.fillStyle = 'Purple';
    ctx.fillRect(110, 280, 500, 3);
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    console.log(randompick);
    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    console.log(this.phrase, this.language);
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
    ctx.fillText(phrase, 122, 278);
    this.answerY = undefined;

    for (let i=0; i < this.fulltarget.length; i++) {
      ctx.fillStyle = "cyan";
      ctx.font = "38px Arial";
      ctx.fillText(this.fulltarget[i], 680, 180 + 80*i);
      if (this.fulltarget[i] === language) {
        this.answerY = 180 + 80*i;
      }
    }


    }

  handleClick() {
    if (this.currentPhase) {
      let canvas = document.getElementById("myCanvas");
      let ctx = this.ctx;
      let relativeX = event.clientX - canvas.offsetLeft;
      let relativeY = event.clientY - canvas.offsetTop;
      let fulltarget = this.fulltarget;
      console.log(relativeX, relativeY);
      console.log(ctx, this.answerY, this.language, this.filltype, this.fulltarget, this.translations);
      if (relativeX > 676 && relativeX < 820) {
        if (relativeY < this.answerY + 10 && relativeY > this.answerY-30) {
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
            if (relativeY < 210 && relativeY > 135) {
              ctx.fillText(fulltarget[0], 680, 180);
          } if (relativeY < 290 && relativeY > 215) {
              ctx.fillText(fulltarget[1], 680, 260);
          } if (relativeY < 370 && relativeY > 295) {
              ctx.fillText(fulltarget[2], 680, 340);
          } if (relativeY < 450 && relativeY > 375) {
              ctx.fillText(fulltarget[3], 680, 420);
          } if (relativeY < 530 && relativeY > 455) {
              ctx.fillText(fulltarget[4], 680, 500);
          }
          this.filltype.push("X");
          this.drawStars();
      }
      if (this.filltype.length < 2) {
        let myThis = this;
        setTimeout(function() {
          myThis.round();
        }, 1500);
      } else {
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
      setTimeout(function() {
        myThis.clear();
        myThis.filltype=[];
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
    this.ctx.fillText("Say each phrase out loud and then type it out.", 125, 395);
    document.getElementById('next').className = "nextbutton";
    this.clearListener();
  }

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
module.exports = Phase2;


/***/ }),
/* 7 */
/***/ (function(module, exports) {


class Phase3 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.filltype = [];
    // this.translator = new Translator();

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
    this.round();
    // document.addEventListener("click", this.handleClick.bind(this), false);
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
    ctx.fillRect(256, 230, 500, 3);

    let input = document.getElementById("textinput");
    input.value = "";
    document.getElementById('textinput').className = "phase3input";

    let myThis = this;
    input.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13) {
        myThis.checkResponse(input.value);
      }
    });
    // console.log(this.translations);
    // console.log(Object.keys(this.translations));
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    // console.log(randompick);
    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
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
    ctx.fillText(phrase, 256, 228);
    this.response = "";


    }
    checkResponse(input) {
      console.log(input, this.phrase);
      if (input === this.phrase) {
        this.filltype.push("good");
        this.round();
      }
    }
  //
  handleClick() {
      let canvas = document.getElementById("myCanvas");
      let ctx = this.ctx;
      let relativeX = event.clientX - canvas.offsetLeft;
      let relativeY = event.clientY - canvas.offsetTop;
      let fulltarget = this.fulltarget;
      console.log(relativeX, relativeY);
  //     if (relativeX > 676 && relativeX < 820) {
  //       if (relativeY < this.answerY + 10 && relativeY > this.answerY-30) {
  //         ctx.fillStyle = "lime";
  //         ctx.font = "38px Arial";
  //         ctx.fillText(this.language, 680, this.answerY);
  //         // console.log("clicked right answer");
  //         // console.log(filltype);
  //         this.filltype.push("good");
  //         this.drawStars();
  //       } else {
  //           ctx.fillStyle = "red";
  //           ctx.font = "38px Arial";
  //           if (relativeY < 205 && relativeY > 140) {
  //             ctx.fillText(fulltarget[0], 680, 180);
  //         } if (relativeY < 285 && relativeY > 220) {
  //             ctx.fillText(fulltarget[1], 680, 260);
  //         } if (relativeY < 365 && relativeY > 300) {
  //             ctx.fillText(fulltarget[2], 680, 340);
  //         } if (relativeY < 445 && relativeY > 380) {
  //             ctx.fillText(fulltarget[3], 680, 420);
  //         } if (relativeY < 525 && relativeY > 460) {
  //             ctx.fillText(fulltarget[4], 680, 500);
  //         }
  //         this.filltype.push("X");
  //         this.drawStars();
  //     }
  //     if (this.filltype.length < 8) {
  //       let myThis = this;
  //       setTimeout(function() {
  //         myThis.round();
  //       }, 1500);
  //     } else {
  //       let myThis = this;
  //       setTimeout(function() {
  //         myThis.checkWin();
  //       }, 1500);
  //     }
  //   }
  }
  // checkWin() {
  //   this.clear();
  //   if (this.filltype.includes("X")) {
  //     this.displayLoss();
  //     let myThis = this;
  //     setTimeout(function() {
  //       myThis.clear();
  //       myThis.filltype=[];
  //       myThis.round();
  //     }, 2500);
  //   } else {
  //     this.displayWin();
  //     let myThis = this;
  //     setTimeout(function() {
  //       myThis.clear();
  //
  //     })
  //   }
  // }
  //
  // displayLoss() {
  //   this.ctx.font = "40px Arial";
  //   this.ctx.fillStyle="red";
  //   this.ctx.fillText("You did not answer all the questions correctly.", 100, 240);
  //   this.ctx.fillStyle="cyan";
  //   this.ctx.fillText("Thats okay! Just try again.", 265, 310);
  // }
  //
  // displayWin() {
  //   this.ctx.font = "40px Arial";
  //   this.ctx.fillStyle="cyan";
  //   this.ctx.fillText("Great job!", 150, 200);
  //   this.ctx.fillText("You answered all of the questions correctly.", 150, 255);
  //   this.ctx.fillText("In the next level you must type the ", 150, 340);
  //   this.ctx.fillText("correct phrase given the language.", 150, 395);
  // }
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
module.exports = Phase3;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map