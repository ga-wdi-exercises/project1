# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1

### Overview

For this project, you have a choice of a few different games / apps:
* **War**
* **Concentration (aka Memory)**
* **Trivia (Self-scoring)**
* **Flash Cards**

Everyone will get a chance to **be creative**, and work through some really **tough programming challenges** – since you've already gotten your feet wet with Tic Tac Toe, it's up to you to come up with a fun and interesting project to build.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!


---

### Technical Requirements

Your app must:

* **Render in the browser**
* **Include separate HTML / CSS / JavaScript files**
* Stick with **KISS (Keep It Simple Stupid)** and **DRY (Don't Repeat Yourself)** principles
* Use **Javascript or jQuery** for **DOM manipulation**
* **Deploy online**, using [Github **Project** pages](https://pages.github.com).
* Use **semantic markup** for HTML and CSS (adhere to best practices)

---

### Necessary Deliverables

* A **hosted copy of your game or app, built by you**, hosted on Github pages.
  * Your HTML/CSS should pass the [HTML5 Validator](https://html5.validator.nu) and [CSS Validators](https://jigsaw.w3.org/css-validator/)
* A **git repository hosted on Github** with frequent commits dating back to the very beginning of the project
  * A **link to your hosted project** in the URL section of your Github repo
  * **A ``readme.md`` file** with explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.

---

### Deploying via GitHub Pages.

**DO NOT** follow the instructions provided by GitHub for creating your Project Pages.  

tldr;

1. Create a branch from "master" named "gh-pages".
2. Push "gh-pages" to "origin".
3. Browse to `<your_github_name>.github.io/<repo_name>`.

Why? They expect GitHub Project pages to provide an, easy way to create a separate information site for our application.  They expect us to host our application somewhere else (with robust servers, db, custom domain, etc.).  We just want our project to be available here.

Steps:

#### 1. Create a tracking branch, from master:
```
git checkout master
git checkout -b gh-pages
```
#### 2. Initial deploy to origin (via push):
```
git push --set-upstream  # defaults to "origin gh-pages"
```
#### 3. Verify
Browse to `<your_github_name>.github.io/<repo_name>`.  Don't forget to add this to your repo url and readme.

#### Follow-up deployments:
After making further changes, deploy via push:
```
git push  # since you setup tracking, it deploys to this branch on origin
```

Nice and simple.

---

### Suggested Ways to Get Started

* **Break the project down into different components** (data, presentation, views, style, DOM manipulation) and brainstorm each component individually. Use whiteboards!
* **Use your Development Tools** (console.log, inspector, alert statements, etc) to debug and solve problems
* Work through the lessons in class & ask questions when you need to! Think about adding relevant code to your game each night, instead of, you know... _procrastinating_.
* **Commit early, commit often.** Don’t be afraid to break something because you can always go back in time to a previous version.
* **Consult documentation resources** (MDN, jQuery, etc.) at home to better understand what you’ll be getting into.
* **Don’t be afraid to write code that you know you will have to remove later.** Create temporary elements (buttons, links, etc) that trigger events if real data is not available. For example, if you’re trying to figure out how to change some text when the game is over but you haven’t solved the win/lose game logic, you can create a button to simulate that until then.

---

### Project Choices
#### War
<a href="https://en.wikipedia.org/wiki/War_(card_game)">War</a> is a card game typically involving two players. Due to its simplicity, it is played most often by children. (Probably not so simple to program)

*Bonus:*
  * tieing - Account for how ties work in the war game
  * multiplayer functionality(3+)

#### Concentration
Sometimes just called "Memory", it's a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. If you get all the matching cards, you've won!

*Bonus:*
  * Let the user choose from different 'decks'
  * Add timers / scoring based on timers
  * Think of some fun way to modify the rules of

#### Self-scoring Trivia
Pre-load your app with some questions and answers.

Test the user's wits & knowledge with whatever-the-heck you know about (so you can actually win). Guess answers, have the computer tell you how
right you are!

*Bonus:*
  * Add time-based scoring
  * Track scores across games (even if the page is reloaded)
  * Allow users to compete against each other on a high-score board.

#### Flash-Cards
Pre-load your app with some data, and let the user flip through them quickly (back or front), and use the keyboard flip the card, and to mark whether they got it right or not. Track which cards were incorrect, and re-display them until the user gets them right!

*Bonus:*
  * Track scores over time (even if the page is reloaded)
  * Include images on one or both sides of the flash card
  * Let the user add flash cards (don't need to be saved across refreshes)

---

### Useful Resources

* **[MDN Javascript Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript)** _(a great reference for all things Vanilla Javascript)_
* **[jQuery Docs](http://api.jquery.com)** _(if you're using jQuery)_
* **[Github Pages](https://pages.github.com)** _(for hosting your game)_

---

### Project Feedback + Evaluation

* __Project Workflow__: Did you complete the user stories, wireframes, task tracking, and/or ERDs, as specified above? Did you use source control as expected for the phase of the program you’re in (detailed above)?

* __Technical Requirements__: Did you deliver a project that met all the technical requirements? Given what the class has covered so far, did you build something that was reasonably complex?

* __Code Quality__: Did you follow code style guidance and best practices covered in class, such as spacing, modularity, and semantic naming? Did you comment your code as your instructors have in class?

* __Problem Solving__: Are you able to defend why you implemented your solution in a certain way? Can you demonstrate that you thought through alternative implementations? 

* __Total__: Your instructors will give you a total score on your project between:

Score | Expectations
----- | ------------
**0** | _Does not meet expectations._
**1** | _Meets expectactions, good job!_
**2** | _Exceeds expectations_

This will serve as a helpful overall gauge of whether you met the project goals, but __the more important scores are the individual ones__ above, which can help you identify where to focus your efforts for the next project!
