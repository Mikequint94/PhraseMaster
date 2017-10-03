
class Phase2 {
  constructor(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    // this.translator = new Translator();

  }

  start(ctx, translations, fulltarget) {
    console.log("started phase 2!");
    console.log(translations, fulltarget);

    Phase2.clear(ctx);
    Phase2.drawStars(ctx, []);
      debugger
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

  game(ctx, translations, fulltarget) {
    let filltype = [];
    document.getElementById('next').className = "hidden";
    // Phase2.clear(ctx);l
    this.round(ctx, translations, fulltarget, filltype);
    // Phase2.drawStars(ctx, 0);
  }

  round(ctx, translations, fulltarget, filltype) {
    // if (filltype.length > 0) {
    // document.removeEventListener("click", Phase2.handleClick.bind(ctx, answerY, language, filltype, fulltarget, translations), false);
    // }
    Phase2.clear(ctx);
    Phase2.drawStars(ctx, filltype);
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
    } else if (phrase.length > 25) {
      ctx.font = "33px Arial";
    }
    ctx.fillText(phrase, 122, 278);
    let answerY;

    for (let i=0; i < fulltarget.length; i++) {
      ctx.fillStyle = "cyan";
      ctx.font = "38px Arial";
      ctx.fillText(fulltarget[i], 680, 180 + 80*i);
      if (fulltarget[i] === language) {
        answerY = 180 + 80*i;
      }
    }

    document.addEventListener("click", this.handleClick.bind(ctx, answerY, language, filltype, fulltarget, translations), false);

    }

  handleClick(answerY, language, filltype, fulltarget, translations) {
      let canvas = document.getElementById("myCanvas");
      const ctx = canvas.getContext("2d");
      let relativeX = event.clientX - canvas.offsetLeft;
      let relativeY = event.clientY - canvas.offsetTop;
      console.log(relativeX, relativeY);
      console.log(ctx, answerY, language, filltype, fulltarget, translations);
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
      if (filltype.length < 8) {
        document.removeEventListener("click", Phase2.handleClick.bind(ctx, answerY, language, filltype, fulltarget, translations), false);

        setTimeout(function() {
          Phase2.round(ctx, translations, fulltarget, filltype);
        }, 1500);
      } else {
        console.log("phase1 complete!");
      }
    }
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
