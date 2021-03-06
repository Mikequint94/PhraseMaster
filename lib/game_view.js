class GameView {
  constructor(ctx) {
    this.ctx = ctx;
  }

  start() {
    let ctx = this.ctx;
    ctx.fillStyle = 'black';

    ctx.fillRect(0, 0, 1000, 600);
    ctx.font = "60px Arial";
    ctx.fillStyle = 'Purple';
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
