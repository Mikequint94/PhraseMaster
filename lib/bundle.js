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
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__game___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__game__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__game_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__translator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__translator__);




let target = [];


document.addEventListener("DOMContentLoaded", function(){
  const canvasEl = document.getElementsByTagName("canvas")[0];
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const button = document.querySelector(".nextbutton");
  button.addEventListener("click", (e) => {
    e.preventDefault();
    __WEBPACK_IMPORTED_MODULE_2__translator___default.a.translate(document.getElementById('textinput').value, target);
    __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.clear(ctx, sv, es);
    __WEBPACK_IMPORTED_MODULE_1__game_view___default.a.phase1(ctx, target);
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
  const game = new __WEBPACK_IMPORTED_MODULE_0__game___default.a();
  new __WEBPACK_IMPORTED_MODULE_1__game_view___default.a(game, ctx).start();
});


/***/ }),

/***/ 32:
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
      translations.push(data.data.translations[0].translatedText);
      console.log(translations);
      return translations
    });
  }

}




}
module.exports = Translator;

// const languages = ['sv', 'es', 'de', 'fr', 'zh-CN', 'iw', 'ru', 'no'];


/***/ }),

/***/ 97:
/***/ (function(module, exports) {



class Game {
  constructor() {
        

  }



}
module.exports = Game;


/***/ }),

/***/ 99:
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

  }

  static clear(ctx, es, sv) {
    ctx.clearRect(0,100,1000,600);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 100, 1000, 600);
    es.className = "hidden";
    sv.className = "hidden";
    document.getElementById('textinput').className = "hidden";
  }
  static phase1(ctx, target) {
    let i = 0;
    // let ctx = this.ctx;
    for (i=0; i< target.length; i++) {
      ctx.fillStyle = "#01c417";
      ctx.font = "38px Arial";
      ctx.fillText(target[i], 250, 200 + 100*i);
      ctx.fillStyle = 'Purple';
      ctx.fillRect(330, 200 + 100*i, 500, 3);


    }
  }
}
module.exports = GameView;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map