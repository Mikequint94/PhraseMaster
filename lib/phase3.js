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
    let input = document.getElementById("textinput");
    input.value = "";
    let myThis = this;
    input.addEventListener("keyup", function(e) {
      e.preventDefault();
      if (e.keyCode === 13 && myThis.redText === false) {
        myThis.checkResponse(input.value);
      }
    });
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
    ctx.fillRect(352, 250, 500, 3);

    let input = document.getElementById("textinput");
    input.value = "";
    document.getElementById('textinput').className = "phase3input";

    this.redText = false;
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
        if (this.filltype.length < 8) {
          document.getElementById('textinput').classList.add("success");
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
  //
  // handleClick() {
  //     let canvas = document.getElementById("myCanvas");
  //     let ctx = this.ctx;
  //     let relativeX = event.clientX - canvas.offsetLeft;
  //     let relativeY = event.clientY - canvas.offsetTop;
  //     let fulltarget = this.fulltarget;
  //     console.log(relativeX, relativeY);
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
  // }
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
        myThis.clear();
        console.log("congrajuritos");
      }, 1000);
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
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Great job!", 150, 200);
    this.ctx.fillText("You answered all of the questions correctly.", 150, 255);
    this.ctx.fillText("In the next level you must type the ", 150, 340);
    this.ctx.fillText("correct phrase given the language.", 150, 395);
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
module.exports = Phase3;
