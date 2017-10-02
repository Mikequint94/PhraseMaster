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
  static drawStars(ctx) {
    let x = 200;
    let y = 200;
    for (let i=0; i<5; i++) {

      ctx.beginPath();
      ctx.fillStyle = 'red';
      ctx.strokeStyle = 'blue';
             ctx.moveTo(x,y);
              ctx.lineTo(x+5, y-0.5);
            ctx.lineTo(x+1.5,y-5);
           ctx.lineTo(x+2.5,y+5);
            ctx.lineTo(x+5,y+.5);
            ctx.lineTo(x-3.5,y+3.5);
             ctx.lineTo(x+1.5,y+5);
            ctx.lineTo(x-5.5,y-2.5);
            ctx.lineTo(330,310);
           ctx.lineTo(260,210);
            ctx.lineTo(380,180);
             ctx.closePath();
              ctx.stroke();
              // ctx.fill();
            }
            x += 40;
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
      // ctx.fillText(translations[i].length, 365, 178 + 100*i);

    }
  }
}
module.exports = GameView;
