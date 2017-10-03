
class Phase2 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.translator = new Translator();

  }

  start(translations, fulltarget) {
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
    ctx.fillStyle ="lime";
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

  round() {
    // if (filltype.length > 0) {
    // document.removeEventListener("click", Phase2.handleClick.bind(ctx, answerY, language, filltype, fulltarget, translations), false);
    // }
    this.clear();
    this.drawStars(this.filltype);
    let ctx = this.ctx;
    ctx.fillStyle = 'Purple';
    ctx.fillRect(110, 280, 500, 3);
    // console.log(translations);
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    console.log(randompick);
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
          this.filltype.push("X");
          this.drawStars();
      }
      if (this.filltype.length < 8) {
        let myThis = this;
        setTimeout(function() {
          myThis.round();
        }, 1500);
      } else {
        console.log("phase1 complete!");
      }
    }
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
