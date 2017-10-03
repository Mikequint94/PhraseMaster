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
    // Phase2.instructions(ctx);
    e.preventDefault();
    if (phasenum === 0) {
      if (fillnum > 1 && fillnum < 6) {
        if (document.getElementById('textinput').value.length > 0) {
          translations = __WEBPACK_IMPORTED_MODULE_3__translator___default.a.translate(document.getElementById('textinput').value, target);
          __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.clear(ctx);
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
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.clear(ctx);
      phasenum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.phase1(ctx, fulltarget, translations);
    } else if (phasenum === 2) {
      __WEBPACK_IMPORTED_MODULE_2__phase2___default.a.start(ctx, translations, fulltarget);
      phasenum +=1;
      __WEBPACK_IMPORTED_MODULE_2__phase2___default.a.instructions(ctx);
    } else if (phasenum === 3) {
      __WEBPACK_IMPORTED_MODULE_2__phase2___default.a.game(ctx, translations, fulltarget);
    }
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById('next').className = "nextbutton";
    new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
    fillnum = 0;
    target = [];
    fulltarget = [];
    phasenum = 0;
    __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
  });
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {
      target.push("sv"); fulltarget.push("Swedish");
      sv.classList.add("swedish-clicked");
      fillnum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);

    } else {
      target.splice(target.indexOf("sv"), 1);
      sv.classList.remove("swedish-clicked");
      fillnum -= 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    }
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("es")) {
      target.push("es"); fulltarget.push("Spanish");
      es.classList.add("spanish-clicked");
      fillnum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("es"), 1);
      es.classList.remove("spanish-clicked");
      fillnum -= 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    }
  });
  const fr = document.getElementById("3");
  fr.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("fr")) {
      target.push("fr"); fulltarget.push("French");
      fr.classList.add("french-clicked");
      fillnum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("fr"), 1);
      fr.classList.remove("french-clicked");
      fillnum -= 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    }  });
  const sw = document.getElementById("4");
  sw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sw")) {
      target.push("sw"); fulltarget.push("Swahili");
      sw.classList.add("swahili-clicked");
      fillnum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("sw"), 1);
      sw.classList.remove("swahili-clicked");
      fillnum -= 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    }  });
  const nl = document.getElementById("5");
  nl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("nl")) {
      target.push("nl"); fulltarget.push("Dutch");
      nl.classList.add("dutch-clicked");
      fillnum += 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    } else {
      target.splice(target.indexOf("nl"), 1);
      nl.classList.remove("dutch-clicked");
      fillnum -= 1;
      __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
    }  });

  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game___default.a();
  new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
    __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.drawStars(ctx, fillnum);
  new __WEBPACK_IMPORTED_MODULE_2__phase2___default.a(game, ctx);

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
    // this.translator = new Translator();
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
    // this.drawStars();
  }
  static drawStars(ctx, fillnum) {
    let x =330;
    let y = 550;
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
              // ctx.fill();
      x += 80;
      }
  }

  static drawCircles(ctx){

  }

  static clear(ctx) {
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
  static phase1(ctx, fulltarget,translations) {
    let i = 0;
    // let ctx = this.ctx;
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
      } else if (translations[i].length > 26) {
        ctx.font = "33px Arial";
      }
      ctx.fillText(translations[i], 322, 178 + 100*i);
      console.log(translations[i]);
      // ctx.fillText(translations[i].length, 365, 178 + 100*i);

    }
  }
}
module.exports = GameView;


/***/ }),
/* 3 */
/***/ (function(module, exports) {


// import Key from "../api_key.js";

class Translator {
  constructor() {

  }
  static translate(string, language) {
    let apiKey = config.API_KEY;
    let translations = {};
    let strings = [];
    let i=0;
    // let key = Key.new();
    // console.log(key);
    for (i=0; i < language.length; i++) {
      strings[i] = string + " " + (i);
      // console.log(strings[i]);
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=" + apiKey,
      data: {
        'q': strings[i],
        'target': language[i]
      }
    }).then((data) => {
      // console.log(data);
      // console.log(idx);
      translations[data.data.translations[0].translatedText.slice(-1)] = (data.data.translations[0].translatedText.slice(0, -2).replace("&#39;", "'"));
      // console.log(translations);


    });
    if (i === language.length - 1) {
      return translations;
      // console.log(translations);
    }
  }

}




}
module.exports = Translator;

// const languages = ['sv', 'es', 'de', 'fr', 'zh-CN', 'iw', 'ru', 'no'];


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

  static start(ctx, translations, fulltarget) {
    console.log("started phase 2!");
    console.log(translations, fulltarget);

    Phase2.clear(ctx);
    Phase2.drawStars(ctx, []);
  }

  static clear(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 100, 1000, 600);
  }

  static instructions(ctx) {
    ctx.fillStyle ="lime";
    ctx.fillText("Your task is to select the correct language", 120,160);
    ctx.fillText("based on the given translated phrase", 120,210);
    ctx.fillText("Fill up all the stars to move on to the next level", 120,300);
    ctx.fillText("Good Luck!", 120,390);
  }

  static game(ctx, translations, fulltarget) {
    let filltype = [];
    document.getElementById('next').className = "hidden";
    Phase2.clear(ctx);
    Phase2.drawStars(ctx, 0);
    Phase2.round(ctx, translations, fulltarget, filltype);
  }

  static round(ctx, translations, fulltarget, filltype) {
    ctx.fillStyle = 'Purple';
    ctx.fillRect(110, 280, 500, 3);
    // console.log(translations);
    let randompick = Math.floor(Math.random()*Object.keys(translations).length);
    console.log(randompick);
    let phrase = translations[randompick];
    let language = fulltarget[randompick];
    console.log(phrase, language);

    ctx.fillStyle = 'aquamarine';
    if (phrase.length > 36) {
      ctx.font = "25px Arial";
    } else if (phrase.length > 31) {
      ctx.font = "29px Arial";
    } else if (phrase.length > 26) {
      ctx.font = "33px Arial";
    }
    ctx.fillText(phrase, 122, 278);
    let answerY;
    document.addEventListener("click", function() {
      let canvas = document.getElementById("myCanvas");
      let relativeX = event.clientX - canvas.offsetLeft;
      let relativeY = event.clientY - canvas.offsetTop;
      // console.log(relativeX, relativeY);
      // console.log(answerY);
      if (relativeX > 676 && relativeX < 820) {
        if (relativeY < answerY + 10 && relativeY > answerY-30) {
        ctx.fillStyle = "lime";
        ctx.font = "38px Arial";
        ctx.fillText(language, 680, answerY);
        // console.log("clicked right answer");
        // console.log(filltype);
        filltype.push("good");
        Phase2.drawStars(ctx, filltype);
      } else {
        ctx.fillStyle = "red";
        ctx.font = "38px Arial";
        if (relativeY < 190 && relativeY > 150) {
        ctx.fillText(fulltarget[0], 680, 180);
      } if (relativeY < 270 && relativeY > 230) {
        ctx.fillText(fulltarget[1], 680, 260);
      } if (relativeY < 350 && relativeY > 310) {
        ctx.fillText(fulltarget[2], 680, 340);
      } if (relativeY < 430 && relativeY > 390) {
        ctx.fillText(fulltarget[3], 680, 420);
      } if (relativeY < 510 && relativeY > 470) {
        ctx.fillText(fulltarget[4], 680, 500);
      }
      filltype.push("X");
      Phase2.drawStars(ctx, filltype);
    }
    }
    }, false);

    for (let i=0; i < fulltarget.length; i++) {
      ctx.fillStyle = "cyan";
      ctx.font = "38px Arial";
      ctx.fillText(fulltarget[i], 680, 180 + 80*i);
      if (fulltarget[i] === language) {
        answerY = 180 + 80*i;
      }
    }
  }
  static handleClick(e, answerY) {

  }

  static drawStars(ctx, filltype) {
    // console.log(filltype);
    // console.log(filltype[0]);
    // console.log(filltype[1]);
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


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map