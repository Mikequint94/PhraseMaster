String.prototype.replaceAll = function(target, replacement) {
  let phrase = this;
  for (let i=0; i< target.length; i++) {
    phrase = phrase.split(target[i]).join(replacement[i]);
  }
  return phrase;
};

class Phase4 {
  constructor(ctx) {
    this.ctx = ctx;
    this.filltype = [];
  }

  start(translations, fulltarget) {
    this.clear();
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];
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
    this.drawStars();
    let ctx = this.ctx;

    let input = document.getElementById("textinput");
    input.value = "";
    document.getElementById('textinput').className = "phase3input";

    this.changeText = false;
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    document.getElementById('largelanguage').className= (this.language + "-large large");
    document.getElementById('largelanguage').innerText = (this.language);
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
    this.response = "";


    }
    checkResponse(input) {
      let ctx = this.ctx;
      let phraseLowerNoAccent = this.phrase.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"," "],
                  ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","","",""]);
      let inputLowerNoAccent = input.toLowerCase()
      .replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"," "],
                 ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","","",""]);

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
    if (this.filltype.count("X") >= 3) {
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
module.exports = Phase4;
