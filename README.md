# PhraseMaster

PhraseMaster is an original game used to teach a user english phrases in multiple other languages.  It is easy to learn a lot of phrases in a specific language, but nowhere else is it possible to learn just one phrase but in many other languages of your choosing.  This app will teach in a fun and interactive way with multiple levels building in difficulty until you have mastered the phrase.  Also unlike other apps, you get to choose what phrase you want to learn, not just go through the default pickings of the application.  

### How It Works

On the welcome screen the user will type in a short phrase.  There will be cute bubbles floating around the screen with different languages represented in each and you can select up to 5 to represent the languages you are interested in learning.  Upon selection, the translation will appear so you can begin learning the phrases.  

When you are ready to begin, you can click next and each phrase will appear one by one, and you must select the language you think the phrase is in.  Once you master this, the next phase is to know the language, and write out the translated phrase.

You can always ask for help and see the original list.

When you have mastered the phrase in all languages you get congratulated and can do it again!


### Wireframes

Entry Screen:
![alt text](https://res.cloudinary.com/make-anything/image/upload/v1506888703/6195006_lhz76e.png "Entry Screen")

Learning Phase 1:
![alt text](https://res.cloudinary.com/make-anything/image/upload/v1506888717/6195012_m22rto.png "Phase 1")

Learning Phase 2:
![alt text](https://res.cloudinary.com/make-anything/image/upload/v1506888731/6195020_ckt3sb.png "Phase 2")

Learning Phase 3 will be very similar.

### Implementation

A Google translate api will be utilized to rapidly gather the translations.

HTML5 Canvas will be used for DOM manipulation and rendering.  

Webpack will bundle and serve up the various scripts.

The scripts involved are as follows:

  `translate.js` contains the logic for making the api call and translating the phrase.

  `game.js` will be the starting file which calls for translation and stores the phrases and the entry screen as well as the game over logic.

  `phase1.js` will be the stage of the game where the user sees all the translations initially.

  `phase2.js` will be the stage of the game where the user chooses the language based on the phrase.

  `phase3.js` will be the stage where the user types the phrase based on the language given.

### Timeline

**Over the weekend: ** I will build the skeleton of my project.  Remember how to use canvas and begin a project and I want to have real translations show up on my index.html using the api.

**Day 1: **  I will get the entry screen styled and working perfectly.  Maybe not fancy animation yet but at least all of the words and pictures where they should be and translation working perfectly.

**Day 2: **  I will write the game logic and css for phase 1 and phase 2 of the game.

**Day 3: ** I will perfect the game logic, add logic for completing and starting again and work on styling.

**Day 4: **  Styling all day making it look crisp and enjoyable with a good color scheme and UX.


### Future Directions

If I have time I would like to implement the following:

Voice to speech, so the user can hear how each translation sounds and this will aid in their learning.

Speech to text, so the user can practice the phrase out loud and using an API can determine if they are correct or not.

A backend to store which phrases and languages a user has learned so they can look back thru their personal learned dictionary.
