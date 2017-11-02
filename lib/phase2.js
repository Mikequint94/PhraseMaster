class Phase2 {
  constructor(ctx) {
    this.ctx = ctx;
  }

  start(translations, fulltarget) {
    this.currentPhase = true;
    this.translations = translations;
    this.fulltarget = fulltarget;
    this.filltype = [];
    this.clear();
  }

  clear() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 100, 1000, 600);
  }

  instructions() {
    let ctx = this.ctx;
    ctx.fillStyle ="cyan";
    ctx.font = "38px Arial";
    ctx.fillText("Your task is to select the correct language", 120,160);
    ctx.fillText("based on the given translated phrase", 120,210);
    ctx.fillText("Fill up all the stars to move on to the next level", 120,300);
    ctx.fillText("Good Luck!", 120,390);
  }

  gameplay() {
    document.getElementById('next').className = "hidden";
    document.getElementById('answer-list').className = "";
    this.round();
  }
  round() {
    this.clickable = true;
    this.clear();
    this.drawStars();
    let ctx = this.ctx;
    ctx.fillStyle = 'Purple';
    ctx.fillRect(110, 280, 500, 3);
    let randompick = Math.floor(Math.random()*Object.keys(this.translations).length);

    while (this.phrase === this.translations[randompick]) {
      randompick = Math.floor(Math.random()*Object.keys(this.translations).length);
    }
    this.phrase = this.translations[randompick];
    this.language = this.fulltarget[randompick];
    let phrase = this.phrase;
    let language = this.language;
    ctx.fillStyle = 'aquamarine';
    if (phrase.length > 39) {
      ctx.font = "25px Arial";
    } else if (phrase.length > 36) {
      ctx.font = "27px Arial";
    } else if (phrase.length > 31) {
      ctx.font = "29px Arial";
    } else if (phrase.length > 25) {
      ctx.font = "33px Arial";
    }
    ctx.fillText(phrase, 122, 278);
    this.answerY = undefined;

    const list = document.getElementById('answer-list');
    while (list.firstChild) {
      list.removeChild(list.firstChild);
    }

    for (let i=0; i < this.fulltarget.length; i++) {

      const answer = document.createElement("div");
      answer.innerHTML = this.fulltarget[i];
      list.appendChild(answer);
      answer.addEventListener("click", this.handleCheck.bind(this));
      if (this.fulltarget[i] === language) {
        answer.classList.add("correct-answer");
      }
    }
  }
  handleCheck() {
    if (this.currentPhase && this.clickable) {
      this.clickable = false;
      if (event.target.className === "correct-answer") {
        event.target.classList.add("success");
        this.filltype.push("good");
        this.drawStars();
      } else {
        event.target.classList.add("fail");
        this.filltype.push("X");
        this.drawStars();
      }
      if (this.filltype.length < 8) {
        let myThis = this;
        setTimeout(function() {
          myThis.round();
        }, 1500);
      } else {
        let myThis = this;
        setTimeout(function() {
          const list = document.getElementById('answer-list');
          while (list.firstChild) {
            list.removeChild(list.firstChild);
          }
          myThis.checkWin();
        }, 1500);
      }
    }
  }

  checkWin() {
    this.clear();
    if (this.filltype.filter(el => el==="X").length >= 3) {
      this.displayLoss();
      let myThis = this;
      setTimeout(function() {
        myThis.filltype = [];
        myThis.round();
      }, 3000);
    } else {
      this.displayWin();
    }
  }

  displayLoss() {
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="red";
    this.ctx.fillText("You did not answer enough questions correctly.", 100, 240);
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Thats okay! Just try again.", 265, 310);
  }

  displayWin() {
    this.currentPhase = null;
    this.ctx.font = "40px Arial";
    this.ctx.fillStyle="cyan";
    this.ctx.fillText("Great job!", 125, 215);
    // this.ctx.fillText("You answered all of the questions correctly.", 125, 255);
    this.ctx.fillText("In the next level you will see several phrases.", 125, 325);
    this.ctx.fillText("Say each phrase out loud, then type it out,", 125, 380);
    this.ctx.fillText("and hit enter.", 125, 435);
    document.getElementById('next').className = "nextbutton";
  }

  drawStars() {
    let ctx = this.ctx;
    let filltype = this.filltype;
    let x =185;
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
module.exports = Phase2;
