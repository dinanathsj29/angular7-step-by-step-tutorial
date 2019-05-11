<p align="center">
    <img src="_images_angular7/angular_logo_1.png" alt="angular logo" title="angular logo" width="200" />
</p>

Angular 2/4/5/6/7
=====================
Welcome
---------------------
Hi All, I'm **`Dinanath Jayaswal, Senior UI/Web Developer and Adobe Certified Expert Professional`**, I wanna welcome you to `Angular7 step by step guide`. In this course/tutorial will go over and learn all the fundamental building blocks of Angular, which a developer needs to know to get started developing Angular applications. Will cover from Node/NPM/Angular CLI Setup, Angular basic+advanced and common concepts like Components, Interpolation, Data Binding, Pipes, Services, Directives, Routing and Nativation, Forms, Http and Observables, etc.

Who is this for? 
---------------------
This course is for anyone and everyone, Almost everyone! Fresher/Newcomer as well as experienced UI/frontend/Web Developers who are interested in boost skills and further career - by learning new latest dynamic JavaScript framework from Google to become a hi-tech developer.

Topics include
===================== 
1. [Angular7 Introduction](#01-angular7-introduction)
2. [Getting Started](#02-getting-started)

01 Angular7 Introduction
=====================
1.1. What is Angular:
---------------------
- Angular is a JavaScript (TypeScript based) open-source front-end web application framework from Google
- A framework to build a client-side application
- Great for SPAs (Single Page Application)
- Angular Ver2/4/5/6/7 frameworks target Mobile and Desktop
- The very first version `Angular 1.0 (1.xx)` is known as `AngularJS`, versions beyond `2+ `are generally known as `Angular`

1.2. SPA (Single Page Application)
---------------------
A SPA (Single Page Application) is a website/web applications in which part of page reload asynchronously without loading/re-loading whole page/app. It contains the menu, navigations, buttons, and blocks on a single page, as-and-when a user clicks on any of them; it dynamically rewrites/loads the current page rather than loading entire new pages from a server and so it is reactive, fast and speedy. (Web apps that load a single HTML page and dynamically update that page as the user interacts with the app).

1.3. Why to learn and use Angular:
---------------------
- Modular approach
- Re-usable code (Components)
- Development quicker and easier (Many inbuilt features helps to do development quicker+easier)
- Follows good programming practices and design patterns (MVC - Module View Controller)
- Inbuilt validations & Routing capabilities)
- Unit testable code
- Easily maintainable code
- Uses advanced features and principles like Dependency Injection, DRY (Do Not Repeat Yourself)
- Google + Microsoft collaboration (Angular + TypeScript)

1.4. Angular History:
---------------------
- The first version of Angular was Angular1.0 (AngularJS) which was released in 2010

| Year                                      | Version                                   |
| ------------------------------------------|-------------------------------------------|
| **AngularJs**   =   year 2010     =     v1.XX (1.0 version)                           |
| **Angular**     =   year 2016     =     Angular v2.0 and above (2/4/5/6/7 and coming future versions...)  |
| 2010                                      | Angular JS (Angular v1.XX versions)       |
| 2016                                      | Angular v2.0                              |
| **Version v3.0 skipped to avoid routing version 3.3.0**                               |
| 2016 December                             | Angular v4.0                              |
| 2017 November                             | Angular v5.0                              |
| 2018 April                                | Angular v6.0                              |
| 2018 October                              | Angular v7.0                              |

<h2>1.5. Difference between AngularJS and Angular<br/>
What’s new in Angular compared to AngularJS</h2>
Let’s focus through some of the main differences between AngularJS and Angular:

| AngularJs                                 | Angular                                   |
| ------------------------------------------|-------------------------------------------|
| **Angular is a complete rewrite of AngularJS**                                        |
| AngularJS is the name of the `first version of v1.XX (1.0 version)`.                      | Angular is the name of the Angular's `version beyond 2+ (Angular v2.0 and above i.e. 2/4/5/6/7 and coming future angular versions...)`                                                                   |
| AngularJS is a `JavaScript` based open-source front-end web application framework.    | Angular is a `JavaScript/TypeScript/Dart` based open-source front-end web application framework.     |
| AngularJS uses the concept of `scope($scope)` or `controller`.                        | Angular uses a hierarchy of `components` as its primary architectural base.                            |
| AngularJS has a simple syntax and uses to work with different directives like `ng-app`, `ng-init`, `ng-model`, `ng-for` etc.                                                               | In Angular syntax have been changed as it uses `[ ]` for property binding, and `( )` for event binding. |

1.6. Semantic Versioning System:
---------------------
- Change is nature's thumb rule, so every tool/technology/framework/library developed have to room for improvement
- Google team decided and declared that Angular major version will be upgraded twice a year with `Semantic Versioning System`
- **`Semantic Versioning System`** = `Major.Minor.Fix Patch, example: 0.0.1`
    - `Fix Patch` - can increase any time with bug fixes/patch release
    - `Minor version` - increases with every feature release which does not break any functionalities
    - `Major version` - Break in the functionalities/ extraordinary feature achievements 

02 Getting Started
=====================
2.1. Pre-requisites:
---------------------
Basic familiarity with HTML, CSS and JavaScript is must.

- HTML          - Markup
- CSS           - Style, Formates
- JavaScript    - Behaviour, Click, Validations
- TypeScript basics - Advanced JS features (Class, Arrow Function, Spread Operator)
- Text Editor / Visual Text Editors

2.2. Setup the Angular development environment:    
---------------------
In this section, we will learn how to set up a local development environment to start developing Angular apps. 

- `Node`, (website: https://nodejs.org/en) 
- `NPM`, (Node Package Manager - comes inbuilt with Node)
- `Angular CLI = Command Line Interface`, Angular CLI (Command Line Interface) for angular (website:  https://cli.angular.io/), 
    - it allows the developer to build/generate building blocks of angular application like component, services, routings, modules, etc. with best practices quicker and easier)
- `Text Editor`
    - Visual Studio Code / Visual Studio Code Insiders (website: https://code.visualstudio.com)
    - Sublime Text, 
    - Atom, 
    - Brackets etc.

2.3. Steps to Setup the Angular development environment:
---------------------
1. Download and Install node (node comes with npm) (website: https://nodejs.org/en)
<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/2.3.1_nodejs.png" alt="nodejs website" title="nodejs website" width="600" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Nodejs website - https://nodejs.org/en</figcaption>
  </figure>
</p>

2. After installation check version of node and npm by command: `node -v` / `node --version` OR `npm -v` / `npm --version`
3. Install Angular CLI (website https://cli.angular.io/) by using command: `npm install -g @angular/cli` (it will install Angular CLI globally)

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/2.3.2_angular_cli.png" alt="Angular CLI website" title="Angular CLI website" width="600" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular CLI website - https://cli.angular.io/</figcaption>
  </figure>
</p>

4. After installation check version of angular CLI by using the command: `ng -v` OR `ng --version`
5. Create a new app with angular CLI by using syntax: `ng new project/appName` example: command: `ng new angular-demo-app`
6. Go inside the project/app directory, command: `cd angular-demo-app`
7. Build and run Angular App, command: `ng serve` OR `ng serve -o` OR `ng serve --open`
8. Go to the browser and launch Angular App by entering the web address: `localhost:4200`

2.4. Commonly / widely used node/npm commands:
---------------------
- to get Node version, type command: `node -v`  OR `node --version`
- to get NPM version, type command: `npm -v`  OR `npm --version`
- to install Angular CLI, type command: `npm install -g @angular/cli`
- to get angular CLI version, type command: `ng -v` OR `ng --version` (this command displays details of node, npm, and other angular package versions)
