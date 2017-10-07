![alt text](https://res.cloudinary.com/make-anything/image/upload/v1507229621/PMLogopxlr2_fcqdqr.png "PhraseMaster Logo")


Brief Overview
==

PhraseMaster is an original game used to teach a user a single phrase in multiple other languages. It is easy to learn a lot of phrases in a specific language, but nowhere else is it possible to learn multiple translations simultaneously. This app teaches in a fun and interactive way with multiple levels building in difficulty until you have mastered the phrase.  Unlike other apps, you get to choose what you want to learn.

####   [Phrase Master](https://www.phrasemaster.fun/ "PhraseMaster")


This web application was crafted using Canvas and vanilla JavaScript, with translation data served from Google Cloud Translation API.



Design
==

PhraseMaster was designed to be simple.  3 Stages of simple learning followed by a final quiz at the end.  You must master each step to continue which forces you to really learn.   

![alt text](http://res.cloudinary.com/make-anything/image/upload/c_scale,h_540/v1507313743/Screen_Shot_2017-10-06_at_11.13.26_AM_mugzd3.png "Selection Stage")

I embraced the challenge of using canvas for the text and quiz elements of the game.  Rather than using HTML do design the layout of the page, I used canvas properties for printing and click handling.  This presented a lot of math challenges with alignment and mouse positioning.  

Different languages contain different symbols and letters which would make accurately answering the questions impossible.  To solve this problem I created my own replaceAll function to allow the user to type the foreign letter or an english equivalent and be correct either way.  This also lets the user respond with a case insensitive response and omit punctuation.

```javascript
String.prototype.replaceAll = function(target, replacement) {
  let phrase = this;
  for (let i=0; i< target.length; i++) {
    phrase = phrase.split(target[i]).join(replacement[i]);
  }
  return phrase;
};

let phraseLowerNoAccent = this.phrase.toLowerCase()
.replaceAll(["ö","å","ä","æ","ø","ç","é","â","ê","î","ô","û","à","è","ù","ë","ï","ü","á","í","ó","ú","ñ","¿","¡",".","!","?"],
            ["o","a","a","ae","o","c","e","a","e","i","o","u","a","e","u","e","i","u","a","i","o","u","n","","","","",""]);
```

Functionality
==

After choosing a phrase and languages to learn, the user is shown a dictionary of the phrases to start studying prior to the game.  The user then must pass 3 levels before he/she becomes a PhraseMaster.

Level 1: Given the phrase, the user must choose the correct language.

Level 2: The user must speak the phrase out loud and then type in the phrase they are shown.  This helps the user learn to prepare for the final step.

Level 3:  Given just the language, the user must type out the phrase.  Once this is perfected, the user has officially reached their goal and learned!

![alt text](https://res.cloudinary.com/make-anything/image/upload/v1507363550/giphy_sghtbv.gif
  "Sample Game")

Future Directions
==

**Speech:**
Being able to learn new phrases visually is cool, but hearing the phrase to master pronunciation would make this app even more powerful!

**Conversion from Canvas to HTML Elements:**
Although I learned a lot about canvas creating this app, I think it would be simpler and more adaptable if I created the text elements as HTML elements rather than Canvas drawings on the screen.

 ![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,h_200/v1507274657/PMLogopxlrSquare3_tuwsca.png
 "PhraseMaster Logo")   **[PhraseMaster](https://Phrasemaster.fun "PhraseMaster")**
