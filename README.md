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
Additionally, all the forms are styled to match.  Logged in visitors can create new projects, add steps for the project, edit projects, edit steps, and add comments to any existing project.  
![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,h_540/v1506718182/MakeAnythingFormFeatures_h3dsu6.jpg
"Form Features")

Functionality
==

MakeAnything features search to filter projects by title.  I was able to combine this component with the page showing all projects by a single crafter.  Here is an example of a typical user going through the site and leaving a comment.

![alt text](https://res.cloudinary.com/make-anything/image/upload/v1506721204/giphy_uneqcu.gif
  "Search")

Since this is a single page application, it was difficult to maintain similar visual feel across components.  I achieved consistency and non-repetitive code by using conditional statements to set visibility and content of subcomponents based on factors such as logged in user, project author, and the type of media present in the step or project.
````javascript
return(
  <div className="projectshow">
    <ul className="header">
      <li className="steps-edit">
        {editproject}
      </li>
      <li className={titleclass}>{project.title}</li>
      <li className={authorclass}>by:
        <Link to={`/member/${project.author.id}/${project.author.username}/projects`}>  {project.author.username}</Link>
      </li>
    </ul>
    <ul className="pictextvid">
      {image}
      <h2>{project.description}</h2>
      {video}
    </ul>
    <ul className="steps">
      {steps}
      <br/>
      {addSteps}
    </ul>
    <div className="comment-form">
      {comments}
      <CommentIndexContainer />
    </div>
  </div>
);
} else {
  return(
    <div className="loadingtext">
      <h3>Loading</h3>
    </div>
  );
  ````

Future Directions
==

**Keywords and Categories:**
Searching by project title is cool, but searching by keyword is even better!  All projects will be tagged with relevant keywords to allow for improved search.  There will also be a list of categories a user can view and select from for inspiration.

**Enhanced User Interactions:**
Users can view each others projects and leave comments, but what if they want more?  Future updates will add more information to user's profile.  Users will be able to like projects, follow other users, and direct message users with private questions or with requests for collaboration.

 ![alt text](https://res.cloudinary.com/make-anything/image/upload/c_scale,w_115/v1506614644/Logo_Make_Anything_Robot_blackicon_a9hmif.png
 "MakeAnything Logo") **[MakeAnything App](https://make-anything-app.herokuapp.com "MakeAnything")**
