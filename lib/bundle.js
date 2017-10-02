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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__translator__);




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
    translations = __WEBPACK_IMPORTED_MODULE_2__translator___default.a.translate(document.getElementById('textinput').value, target);
    __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.clear(ctx);
    let timer = setTimeout(function() {__WEBPACK_IMPORTED_MODULE_1__game_view___default.a.phase1(ctx, fulltarget, translations);}, 500);
    // GameView.phase1(ctx, target, translations);
  });
  backButton.addEventListener("click", (e) => {
    e.preventDefault();
    new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
  });
  const sv = document.getElementById("1");
  sv.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sv")) {target.push("sv"); fulltarget.push("Swedish");}
    sv.classList.add("swedish-clicked");
  });
  const es = document.getElementById("2");
  es.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("es")) {target.push("es"); fulltarget.push("Spanish");}
    es.classList.add("spanish-clicked");
  });
  const fr = document.getElementById("3");
  fr.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("fr")) {target.push("fr"); fulltarget.push("French");}
    fr.classList.add("french-clicked");
  });
  const sw = document.getElementById("4");
  sw.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("sw")) {target.push("sw"); fulltarget.push("Swahili");}
    sw.classList.add("swahili-clicked");
  });
  const nl = document.getElementById("5");
  nl.addEventListener("click", (e) => {
    e.preventDefault();
    if (!target.includes("nl")) {target.push("nl"); fulltarget.push("Dutch");}
    nl.classList.add("dutch-clicked");
  });

  const ctx = canvasEl.getContext("2d");
  const game = new __WEBPACK_IMPORTED_MODULE_0__game___default.a();
  new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
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

// import Translator from './translator.js';
// import translate from 'google-translate-api';


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
      ctx.fillText(fulltarget[i], 180, 180 + 100*i);

      ctx.fillStyle = 'Purple';
      ctx.fillRect(350, 180 + 100*i, 500, 3);
      ctx.fillStyle = 'aquamarine';
      ctx.fillText(translations[i], 365, 178 + 100*i);

    }
  }
}
module.exports = GameView;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// const translate = require('google-translate-api');
// import translate from 'google-translate-api';
class Translator {
  constructor() {

  }
  static translate(string, language) {
    let translations = [];
    let i=0;
    for (i=0; i < language.length; i++) {
    $.ajax({
      method: "POST",
      url: "https://translation.googleapis.com/language/translate/v2?key=AIzaSyBWy35JH8z8FOUwjoVCuM98f_T8ZgA1dRo",
      data: {
        'q': string,
        'target': language[i]
      }
    }).then(data => {
      // console.log(data);
      translations.push(data.data.translations[0].translatedText);
      // console.log(translations);


    });
    if (i === language.length - 1) {
      return translations;
    }
  }

}




}
module.exports = Translator;

// const languages = ['sv', 'es', 'de', 'fr', 'zh-CN', 'iw', 'ru', 'no'];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map