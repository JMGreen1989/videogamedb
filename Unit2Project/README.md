![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# WDI Project Two

**Build a web-based, CRUD application.**

## Objectives

### Build confidence as a developer by building something of your own.

-  Manage yourself (your time and your emotions) when given a large amount of
unstructured work.
-  Gain experience building a complex application.
-  Document your work and share it with the public in an effective and articulate
manner.
-  Learn new technologies by reading documentation and experimenting.

## Tech Requirements

You will be expected to use the following technologies to implement this project:

- **HTML / EJS**: Your HTML should be semantic and valid. Your app uses EJS to render information on the page.
- **Node and Express**: Your app will need to have its own server, built using Express.
- **MVC Pattern**: Your app uses Models, Views, Controllers pattern we have gone over in class.
- **SQL / PG-PROMISE**: Your app will need to persist data. Your app should have **at least two related models**.
- Your app will need to make a third-party API call from the back-end using ANY npm package of your choosing.
    - [List of public APIs](https://github.com/toddmotto/public-apis)
    - [Another list of public APIs](https://github.com/abhishekbanthia/Public-APIs)
    - [Yet another list of public APIs](https://github.com/alexpanov/public-apis)
    - TRY OUT your API in postman before you get too emotionally invested in it, to make sure it works the way you think it does...
- **CSS & Design**: Your app should be pleasing to look at. Your design should take usability into account.

Here are a couple of example projects: [Forum](./examples/forum.md), [Wiki](./examples/wiki.md)

## Process

Resist the urge to jump immediately into coding.  For this sprint we want to carefully plan our approach.

- Database - draw out the tables & columns you plan to use in your database (ERD - Entity Relationship Diagram - is a fancy word for it)
- Wireframes - detail the flow of your app through simple wireframes
  * You can choose whether you want to whiteboard the wireframes or use some program.
  * Refer back to the [todo app wireframes](./wireframes.md) for an example of what we expect!
- Routes - design the HTTP route architecture of your app rembember our [RESTful conventions](https://en.wikipedia.org/wiki/Representational_state_transfer#Applied_to_Web_services)

- Set up a separate standing github repo (NOT this repo!) and **project board** for your project
- Find an API that you plan on using and test it out - make sure it fits your ERD; if not adjust your ERD.
- Schema & Seeds - when you are confident with your ERD, define its tables in SQL and put into a schema file. For easier testing, write a seed file as well to insert sample data to your DB.
- Models - you now have a working, populated database. Write a model with methods that use pg-promise to perform CRUD on the DB

## Timeline

* *Start Planning* - 4:00PM on Tuesday, April 17 - Prompt delivered: Consider a multi-table CRUD app focused on a topic that interests you.
It should allow you to exercise and demonstrate your ability to use the technologies we have covered in the second unit.
* *Project Approvals* - 9:00 AM - 12:00 AM on Wednesday, April 18 - Project Planning: Wireframes, user stories, database structure.
* *First Check-in* - AM Thursday, April 19 - Approvals: Git repo, project board, proof of concept, demonstration of third-party JSON API if using one.
* *Second Check-in* - AM Friday, April 20 - schema and seeds, models, routes structure, initial Heroku deployment(we will provide the steps).
* *Stand Ups* - Daily with squad
* *Presentations* - 10:00AM on Tuesday, April 24

## Deliverables

- A web app using express.js that 
  - has at least 2 related tables in a PostgreSQL database
  - has a JavaScript model for each table that use pg-promise to interface with the database
  - implements all CRUD functions (any one model does not need all of CRUD but each CRUD function -- including both read all and read one -- should be present in the app).
  - makes at least one fetch request -- either from the front end to a JSON endpoint exposed by your Express app or from either the front or back end to a third party JSON API
  - is hosted on Heroku
- A public repository on **GitHub.com** with your code for this project & a thorough commit history dating back to the beginning of the project
- A thorough `README.md` file that contains the following:
    - The project's name and description
    - A link to your video presentation (see below)
    - Your wireframes and user stories
    - The technologies, APIs, and modules you used and a description of each
    - A code snippet of a part of the app you're particularly proud of
    - Any things you plan to fix or features you plan to add
    - Instructions for downloading the code and running it on localhost
- A video presentation that:
    - Is 5 minutes in length
    - Shows off the features of the app you're most proud of
    - Shows off some of your code
    - Explains one or two technical details
    - Explains one or two technical challenges
    - Explains which improvements you might make
    - Is uploaded to a video steaming platform


## Instructional help
In a push for developer independence and self-reliance, we are going to adhere to
[these rules](./asking-for-help.md) for receiving help during this project.

## Keep in Mind

**You are going to encounter a ton of unexpected errors and problems.**

Expect to come up against a lot of what can *seem* like roadblocks. Push forward. These are amazing learning opportunities. A lot of students treat errors during projects as just getting in the way of "finishing". The point of this project is **not** to finish everything; the point is to integrate your knowledge and deepen your understanding of how to put apps together.

Errors provide the most valuable source of information about gaps in our understanding. Seeing an error as "it's not working" and randomly changing code until "it works" will make everything worse. Spending time thoughtfully debugging issues is a fantastic investment that will lead to greater mastery and understanding.

**Pro-Tip** - 'Failure is a temporary state.' :v:

### Project Feedback + Evaluation

Check out the evaluation rubric [HERE](./rubric.md)


### A Note on Plagiarism

Plagiarism is a serious offense and grounds for expulsion. Our entire policy can be found [HERE](./plagiarism-policy.md).

You are encouraged to ask others, including students, instructors, and stackoverflow, for help. However, it is NOT ACCEPTABLE TO COPY another person's code and submit it as your own. More importantly, it is detrimental to your learning and growth.

All of the following are considered plagiarism or cheating:
* Turning in work that is not your own.
* Turning in someone else's work as your own.
* Hiring, or paying someone to do your work for you.
* Copying words or code without giving credit.
* Building or copying someone else’s idea without their knowledge or giving credit.
* Giving incorrect information about a source.
* Changing words, variable names, etc. but copying the code or files of a source without giving credit.
* Copying so many ideas or code blocks from a source that it makes up the majority of your work, whether you give credit or not.
* Failing to put a quotation in quotation marks.
* Submitting work that consist of more than 50% of work that is not your own, even if cited!

In an effort to not plagiarize, credit for this content goes to:
* [Plagiarism.org](http://plagiarism.org/), specifically the “plagiarism 101” section.  Content was adapted for code.  For more information, please see:
  * [What is Plagiarism](http://www.plagiarism.org/plagiarism-101/what-is-plagiarism)
  * [Types of Plagiarism](http://www.plagiarism.org/plagiarism-101/types-of-plagiarism)
* [How do I safely write code in my own 'words' and not plagiarize?](http://programmers.stackexchange.com/questions/80167/how-do-i-safely-write-code-in-my-own-words-and-not-plagiarize)
* [Avoiding Plagiarism:  Writing Computer Code](http://www.upenn.edu/academicintegrity/ai_computercode.html)

<!-- Links -->

[forum]: forum.md
[wiki]: wiki.md
[erd]: http://en.wikipedia.org/wiki/Entity%E2%80%93relationship_model
