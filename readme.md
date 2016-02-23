# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #1

## Make a game!

### Overview

For this project, you'll be creating a familiar game with HTML and JS! Please choose one of the following:

* **War**
* **Concentration (aka Memory)**
* **Trivia (Self-scoring)**
* **Flash Cards**

This is an opportunity to **be creative**, and work through some **tough programming challenges**.

**You will be working individually for this project**, but we'll be guiding you along the process and helping as you go. Show us what you've got!

### Asking For Help

[Please read!](https://github.com/ga-dc/wdi8/blob/master/asking-for-help.md)

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

* A **hosted copy of your game or app, built by you**, hosted on Github Pages
  * Your HTML/CSS should pass the [HTML5 Validator](https://html5.validator.nu) and [CSS Validator](https://jigsaw.w3.org/css-validator/)
* A **git repository hosted on Github** with frequent commits dating back to the very beginning of the project
  * A **link to your hosted project** in the URL section of your Github repo
  * **A ``readme.md`` file**, including
    * Explanations of the technologies used, the approach taken, installation instructions, unsolved problems, etc.
    * At least 5 [user stories](https://github.com/ga-dc/curriculum/tree/master/02-intermediate-front-end/process-stories-wireframes).

The URL section of your Github repo:
![URL section](http://i.imgur.com/QQ7RsfR.gif)

---

### Deploying via GitHub Pages.

**DO NOT** follow the instructions provided by GitHub for creating your Project Pages. Why not? They expect `gh_pages` to be a separate informational site about the project contained in the repo. What we want is to use the `gh_pages` functionality to actually host our application.

Instead, try these steps:

#### 1. Create a gh-pages branch, from master:
```
git checkout master
git checkout -b gh-pages
```
#### 2. Initial deploy to origin (via push):
```
git push -u origin gh-pages
```
#### 3. Verify
Browse to `<your_github_username>.github.io/<repo_name>`

#### Follow-up deployments:
After making further changes, deploy via push:
```
git push origin gh-pages
```

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

### Schedule
- Anything not specified here will be considered project work time. Take some time to eat lunch and take breaks. Attendance will be taken at 9 in the classrooms each morning.

Day | Time | Event | who
----- | ------------ | ----- | -----
Tuesday | 10:00 - 12:30 | Outcomes | everyone
Thursday | 2:30 - 5:00 | Project 1 Presentations | everyone

### Presentations

All presentations will be science fair style. There will be 3 separate groups. During your group's 45-minute block, you'll set up at a table and demo / discuss your project with the non-presenting students as they walk around.

#### Schedule for Presentations
You'll be assigned a group number on the day of the presentation.

| Time        | Group  |
|:-----------:|:------:|
| 2:00 - 2:40 | 1      |
| 2:50 - 3:30 | 2      |
| 3:40 - 4:20 | 3      |

#### Retro

4:30 - 5:15 - [Squad Retro](retro.md)

//
I selected the trivia game as my project 1 subject. Mainly bc I just enjoy those more. I may regret my decision later. Over the weekend I found some designs that I could use so that would not take up project week time.

I am going to start small with just 3 topics with one question. If time permits, I will add 3 questions per round. But I am starting simple stupid so the game will be basic for stage 1.

bronze plan : trivia questions on the page
silver plan: being able to interact and answer the questions
gold plan: for the jquery animation to work and flow easily.
