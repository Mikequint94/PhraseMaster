
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
    Phase2.drawStars(ctx, 0);
  }

  static clear(ctx) {
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 100, 1000, 600);
  }

  static instructions(ctx) {
    document.getElementById('next').className = "hidden";
    ctx.fillStyle ="lime";
    ctx.fillText("Your task is to select the correct language", 120,160);
    ctx.fillText("based on the given translated phrase", 120,210);
    ctx.fillText("Good Luck!", 120,330);
  }

  static drawStars(ctx, fillnum) {
    let x =200;
    let y = 550;
    ctx.fillStyle = 'black';
    ctx.fillRect(320,520,430,100);
    for (let i=0; i<8; i++) {
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

}
module.exports = Phase2;
