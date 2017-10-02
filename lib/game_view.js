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
  static phase1(target) {
    let i = 0;
    for (i=0; i< target.length; i++) {
      console.log(target[i]);
      
    }
  }
}
module.exports = GameView;
