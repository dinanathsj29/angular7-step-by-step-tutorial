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
3. [Angular First Hello World App](#03-angular-first-hello-world-app)
4. [Components](#04-components)
5. [Interpolation (Data Binding)](#05-interpolation-data-binding)
6. [Property Binding](#06-property-binding)
7. [Class Binding](#07-class-binding)
8. [Style Binding](#08-style-binding)
9. [Event Binding](#09-event-binding)


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
5. Create a new app with angular CLI by using syntax: `ng new project/appName` example: command: `ng new angular6-1-demo`
6. Go inside the project/app directory, command: `cd angular6-1-demo`
7. Build and run Angular App, command: `ng serve` OR `ng serve -o` OR `ng serve --open`
8. Go to the browser and launch/check Angular App by entering the web address: `localhost:4200`

2.4. Commonly / widely used node/npm commands:
---------------------
- to get Node version, type command: `node -v`  OR `node --version`
- to get NPM version, type command: `npm -v`  OR `npm --version`
- to install Angular CLI, type command: `npm install -g @angular/cli`
- to get angular CLI version, type command: `ng -v` OR `ng --version` (this command displays details of a node, npm, and other angular package versions)

03 Angular First Hello World App
=====================
- If using Visual Studio Code / Insiders, open Command panel/terminal from menu: View -> Terminal (shortcut key is `CTRL + BackTick` OR `COMMAND + J`)
- To create a new app with angular CLI by using syntax: `ng new project/appName` example: command: `ng new angular6-1-demo`
- Go inside the project/app directory, command: `cd angular6-1-demo OR cd appName`
- To Build and run Angular App, command: `ng serve / npm start` OR `ng serve -o` OR `ng serve --open`
- To change port from 4200 to other port - type command:  `ng serve --port 5000`
- To check the application in browser type path/url: `localhost:4200 / 5000`

3.1. Angular application Architecture summary:
---------------------
- `Angular app`: (Show graphical representation of `src -> app -> components` folder)
    - Angular apps are modular in nature 
    - Consists of one or more modules (Angular App is a collection of one or many modules)
    - Modules are main feature area - User module, Admin module, Dashboard module, Employee module)
    - `Angular Application Root Module is AppModule (app.module.ts) ` 
    - `Modules` are lines of code which can be IMPORTed or EXPORTed
        - Module consists of one or more Components and Services 
        - `Components` - .HTML Template + .ts Class + .CSS 
            - A component represents/controls view in the browser
            - (example: header, footer, sidebar, common panels, common search utility, similar feature components used throughout the application)
            - `Angular Application Root (bootstrapped) component is AppComponent (app.comoponent.ts)`
        - `Services` - Class which consists of Business logic (common programming feature used throughout the application)

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/3.1_application_architecture.png" alt="Angular Application Folder Architecture" title="Angular Application Folder Architecture" width="400" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular Application Folder Architecture</figcaption>
  </figure>
</p>

Modules interact and ultimately render Components+Services view in the browser.

3.2. Angular application File / Folder Architecture summary:
---------------------
- `package.json`: consists of Node/NPM library/package/module dependencies for application development
- `node_modues` - folder consists of all installed packages
- `src/main.ts` - entry point to angular application. src/index.html
- `app/app.module.ts` - route module of application
- `app/app.component.ts` - route component of application
- `ng serve / npm start` -> main.ts (index.html) -> app.module.ts -> app.component.ts -> (app.component.html + css)

04 Components
=====================
- The core/key idea behind Angular is to build application using `reusable parts/chunks i.e. components`
- Components are main building blocks of UI and an/any angular application. (Show graphical representation)
- `Angular Application Root (bootstrapped) component is AppComponent (app.comoponent.ts)`

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/4_components.png" alt="Angular Components " title="Angular Components" width="400" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular Components</figcaption>
  </figure>
</p>

A component is self contained, reusable piece of UI made up of 3 important parts:
1. `Template` - `View, HTML code` (User Interface for application also known as view)
2. `Class` - `Business logic/Application logic` for the view, `TypeScript/JavaScript code`, (Data, Methods & properties)
3. `Decorator/Metadata` - `Metadata, a @function` which provide more information for angular class. example: app.component.ts: 

> **Syntax & Example**: app.component.ts
```typescript
@Component({
    selector: 'app-root', // selector - a custom html tag
    templateUrl: './app.component.html', // template/templateUrl - html view,
    styleUrls: ['./app.component.css'] // styleUrls - css style sheet
})
```

4.1. Creating component:
---------------------
- We can create component manually, but in that scenario, we need to do and follow various steps/manual entries
- It's advisable to use angular CLI to create a component, services, routing, etc. 
`To create a component using angular CLI`:
    - `syntax`: ng generate component componentName OR ng generate component path/componentName
    - `command`: ng generate component components/component-demo1 OR ng g c components/component-demo1
    - **`It generates 4 new files: .css-styles, .html-markup, .spec.ts-test, .ts-class`**
    - Also, an automated `import` /update/entry of components is done in `app.module.ts` file at the top `imports section` and in `declarations array` which consists of all the components used in the application
    - A component must be a member of/belongs to an `@NgModule - declarations array` in order for it to be usable by another component or application
    - To use current component in application, copy and paste new component `'selector'` from .ts file i.e. `'app-component-demo1'` as a tag in `app.component.html `

4.2. @Component/Decorator/Metadata details:
---------------------
### 4.2.1. selector:
- Selector is basically a `custom HTML tag used to represent current component`
- Selector helps to `render .html file/html template` in browser
- Example: index.html: `<app-root></app-root>`
- Example: app.component.html: `<app-component-demo1><app-component-demo1>`
- There are total 3 ways to specify/write and use selectors:

> **Syntax & Example**: component-demo1.component.ts
```
    1. tag: < > selector: 'app-test', example: <app-test>
    2. class: . selector: '.app-test', example: <div class="app-test">
    3. attribute / [ ]: selector: '[app-test]', example: <div app-test>
```

### 4.2.2. template:
- `template` property denotes writing html markup in current class .ts file only
- `template` property can help to write all html/markup in .ts typescript file itself
- single line can be written directly:

> **Syntax & Example**:
```typescript
template: '<h1>Inline single template Heading used - template written in same .ts file</h1>',
```

- multi line html can be written with back-tick ` ` symbol: 
> **Syntax & Example**:
```typescript
template: `
    <h1> Multiple line template </h1>
    <div> template written in same .ts file </div>
`,
```
### 4.2.3. templateUrl:
- `templateUrl` denotes/points to an `external .html` file OR 
- Write html code in another .html file and call the file path with `templateUrl` property (separation of concern)

> **Syntax & Example**: 
```typescript
templateUrl: './app.component.html', // template/templateUrl - html view,
```

> **Syntax & Example**: component-demo2-template.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo2-template',
  templateUrl: './component-demo2-template.component.html',

  // single line template
  // template: '<h1>Inline single template para used </h1>',

  // multi line template
  template:`
    <h1>component-demo2-template templateUrl works!</h1>

    <h2>template</h2>
    template denotes writing html markup in current class file only, template property can help to write all html/markup in .ts typescript file itself.
  
    <p> Multiple line template </p>
    <div> template written in same .ts file </div>
    `,
  styleUrls: ['./component-demo2-template.component.css']
})
export class ComponentDemo2TemplateComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

### 4.2.4. styles:  
- style denotes writing `css style for current component only` - like inline css, 
- multiple css styles written inside array [ ] and back tick ` ` symbol

> **Syntax & Example**: 
```typescript
styles: [`
    h1 {
        text-align:center;
    }

    div {
        border:2px dashed gray;
    }
`]
```

### 4.2.5. styleUrls:
- `styleUrls` denotes external css file used for current component
- write css styles in another .css file and `call the file path with styleUrls` property (seperation of concern)

> **Syntax & Example**: 
```typescript
styleUrls: ['./app.component.css'] // styleUrls - css style sheet
```

> **Syntax & Example**: component-demo3-styles.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo3-styles',
  templateUrl: './component-demo3-styles.component.html',
  //styleUrls: ['./component-demo3-styles.component.css']
  styles: [`
    h1{
      text-align:center;
    }

    div{
      border:2px dashed gray;
    } 
  `]
})
export class ComponentDemo3StylesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo1.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  // 1. <tag/element> selector
  selector: 'app-component-demo1',
  // 2. .class selector
  // selector: '.app-component-demo1',
  // 3. [attribute] selector
  // selector: '[app-component-demo1]',
  templateUrl: './component-demo1.component.html',
  styleUrls: ['./component-demo1.component.css']
})
export class ComponentDemo1Component implements OnInit {
  private appName:string = 'Angualr 6 Application';

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo1.component.html
```html
<div>
  <h1>component-demo1 works! </h1>
  <ul>
    <li>{{ appName }}</li>
  </ul>

  <h2>What is Angular</h2>
  <ul>
    <li>Framework to build client side application</li>
    <li>Great for SPAs</li>
    <li>Angular 2/4/5/6/7 frameworks targets Mobile and Desktop.</li>
  </ul>
</div>
```

> **Syntax & Example**: app.component.html
```html
<!--The content below is only a placeholder and can be replaced.-->
<div class="container">

  <!-- There are total 3 ways to specify/write and use selectors: 
      tag: < >
      class: .
      attribute / [ ]
    -->

  <app-component-demo1></app-component-demo1>
  <!-- <div class="app-component-demo1"></div> -->
  <!-- <div app-component-demo1></div> -->
  <div class="custom-divider"></div>
</div>
```

> **Syntax & Example**: app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // create a property to send from parent to child
  parentMessage = 'From Parent';

  // 
  
}
```

> **Syntax & Example**: app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './componenets/component-demo1/component-demo1.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
  ],
  imports: [
    BrowserModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
```

> **Syntax & Example**: styles.css
```css
/* You can add global styles to this file, and also import other style files */

/* common global generic styles */
.custom-divider {
  margin: 30px 0px;
  border-bottom:2px dashed gray;
}

h1,h2,h3 {
  text-transform: uppercase;
  /* text-transform: capitalize; */
}

h2 {
  text-decoration: underline;
}

body {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  letter-spacing: 2px;
}

li {
  margin: 10px 0px;
}

input{
  padding: 5px;
}

button {
  border-radius: 5px;
  padding: 10px 15px;
  background-color: teal;
  border: none;
  outline: none;
  cursor: pointer;
  color: lightcyan;
}

/* class binding */
.text-primary {
  color: blue;
}

.text-danger {
  color: red;
}

.text-success {
  color: lawngreen;
}

.text-special {
  font-weight:bold;
  font-style: italic;
  color:orchid;
}

.text-strikethrough {
  text-decoration: line-through;
}
```
> **Syntax & Example**: index.html
```html
<!doctype html>
  <html lang="en">
    
    <head>
      <meta charset="utf-8">
      <title>Angular7Demo</title>
      <base href="/">

      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="icon" type="image/x-icon" href="favicon.ico">
    </head>

    <body>
      <app-root></app-root>
    </body>

  </html>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/4.2.1.output-selector-templateUrl-styleUrls.png" alt="Output -  selector, templateUrl, styleUrls" title="Output -  selector, templateUrl, styleUrls" width="800" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output -  selector, templateUrl, styleUrls</figcaption>
  </figure>
</p>

05 Interpolation Data Binding
=====================
- Interpolation denotes/evaluates the content inside `{{ }} braces` and displays the value in component view file
- Interpolation = expressions, data-binding to text nodes and attribute values
- interpolation expression = {{ varName }} or {{ fn_anyReturnFunction() }}
- Angular expressions are much like `JavaScript expressions` and they can contain literals, operators, and variables
- Data binding in Angular is the `synchronization/communication between the model and the view`
- `String interpolation` is used to display dynamic data on HTML template (front end / at user end)
- Variable value assignment not possible with interpolation, Example: `{{ name = 'Dinanath' or Total = 10 + 20 }}`

> **Syntax & Example**: component-demo4-interpolation.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo4-interpolation',
  templateUrl: './component-demo4-interpolation.component.html',
  styleUrls: ['./component-demo4-interpolation.component.css']
})
export class ComponentDemo4InterpolationComponent implements OnInit {
  // variables - class members
  public technology = 'Angular 6';
  public userName = 'Dinanath';
  // public siteUrl = 'http://www.google.com';
  public siteUrl = window.location.href;

  fn_showGreetingsToUser() {
    return 'Welcome ' + this.userName;
  }

  fn_showMessage() {
    return 'Welcome to ' + this.technology + ' ' + this.userName;
  }

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo4-interpolation.component.html
```html
<div>
  <h1>component-demo4-interpolation works!</h1>
  <ul>
    <li>maths = 2+2 = {{ 2+2 }}</li>
    <li>{{ "Welcome " + userName }}</li>
    <li>userName.length = {{ userName.length }}</li>
    <li>toUpperCase = {{ userName.toUpperCase() }}</li>
    <li>toLowerCase = {{ userName.toLowerCase() }}</li>
    <li>current Site URL: {{ siteUrl }}</li>
    <li>function call: {{ fn_showGreetingsToUser() }}</li>
    <li>function call: {{ fn_showMessage() }}</li>
  </ul>
</div>
```

> **Syntax & Example**: app.module.ts
```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComponentDemo1Component } from './componenets/component-demo1/component-demo1.component';
import { ComponentDemo2TemplateComponent } from './componenets/component-demo2-template/component-demo2-template.component';
import { ComponentDemo3StylesComponent } from './componenets/component-demo3-styles/component-demo3-styles.component';
import { ComponentDemo4InterpolationComponent } from './componenets/component-demo4-interpolation/component-demo4-interpolation.component';
import { ComponentDemo5PropertybindingComponent } from './componenets/component-demo5-propertybinding/component-demo5-propertybinding.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentDemo1Component,
    ComponentDemo2TemplateComponent,
    ComponentDemo3StylesComponent,
    ComponentDemo4InterpolationComponent,
  ],
  imports: [
    BrowserModule,
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
```
> **Syntax & Example**: app.component.html
```html
<!--The content below is only a placeholder and can be replaced.-->
<div class="container">

  <!-- There are total 3 ways to specify/write and use selectors: 
      tag: < >
      class: .
      attribute / [ ]
    -->

  <app-component-demo1></app-component-demo1>
  <!-- <div class="app-component-demo1"></div> -->
  <!-- <div app-component-demo1></div> -->
  <div class="custom-divider"></div>

  <!-- component decorator template -->
  <app-component-demo2-template></app-component-demo2-template>
  <div class="custom-divider"></div>

  <!-- css style -->
  <app-component-demo3-styles></app-component-demo3-styles>
  <div class="custom-divider"></div>

  <!-- interpolation -->
  <app-component-demo4-interpolation></app-component-demo4-interpolation>
  <div class="custom-divider"></div>

</div>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/5.interpolation.png" alt="Output - Interpolation Data Binding {{ }}" title="Output - Interpolation Data Binding {{ }}" width="800" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Interpolation Data Binding {{ }}</figcaption>
  </figure>
</p>

06 Property Binding
=====================
- String Interpolation and Property binding both are used for the same purpose i.e. one-way Data Binding
- String Interpolation and Property Binding both `flow value in one direction from our components to HTML elements`
- Basic Attributes are defined by HTML BUT `"value"` kind of dynamic attributes (properties) which are like properties are defined and managed by DOM
- `Attributes and properties are NOT the same`<br/>
    - `Attributes` = HTML &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; `Properties` = DOM (Document Object Model)
- Attributes initialise DOM properties and then they are done - cannot change once they are initialised
- Property values however can change, HTML attribute value specifies initial value and the `DOM value property is the current value`

> **Syntax & Example**: Property Binding is done with [square bracket] OR bind-properyName:

```html
example: <input type="text" value="dinanath" />
```

- type in console:$0.getAttribute("value");   output:"dinanath"  
- type in console:$0.value;   output:"dinanath" 
- Now type something new in text field "new Text"
- type in console:$0.getAttribute("value");   output:"dinanath"  
- type in console:$0.value;   output:"new Text"
- > **Note**: Attribute does not changed but `value property changed`
- `Property Binding done with [ ] square bracket` also with `{{ interpolation }}` But its advisable to use [ ] as its supports string, boolean all property types, boolean value like true/false etc does not works well with {{ interpolation }}

> **Syntax & Example**: component-demo5-propertybinding.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo5-propertybinding',
  templateUrl: './component-demo5-propertybinding.component.html',
  styleUrls: ['./component-demo5-propertybinding.component.css']
})
export class ComponentDemo5PropertybindingComponent implements OnInit {
  public _id = 'id1';
  public _isDisabled1 = true;
  public _isDisabled2 = false;

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo5-propertybinding.component.html
```html
<div>
  <h1>component-demo5-propertybinding works!</h1>

  <h3>attributes vs value</h3>
  <input size="40" type="text" value="angular property binding" />

  <h3 ngNonBindable>property binding [ ] vs interpolation {{ ngNonBindable }} </h3>

  <input type="text" [id]="_id" value="[ ] property-binding" /><br />
  <input type="text" id="{{_id}}" value="{ } interpolation property-binding" /> <br /> <br />

  <h3>attribute boolean (property) interpolation does not support </h3>
  <input type="text" disabled="false" [id]="_id" value="boolean false not works" /><br />
  <input type="text" disabled="true" [id]="_id" value="boolean true not works" /> <br /> <br />

  <h3>property binding boolean values supported  </h3>
  <input type="text" [disabled]="false" [id]="_id" value="[property-binding] works" /><br />
  <input type="text" [disabled]="true" [id]="_id" value="[property-binding] works" /><br /> <br />

  <h3>property binding boolean property with variable </h3>
  <input type="text" [disabled]="_isDisabled1" [id]="_id" value="[ var ] disabled works" /><br />
  <input type="text" [disabled]="_isDisabled2" [id]="_id" value="[ var ] enabled works" /><br />

  <h3>property binding with bind- </h3>
  <input type="text" bind-disabled="_isDisabled1" [id]="_id" value="[ var ] disabled works" /><br />
  <input type="text" bind-disabled="_isDisabled2" [id]="_id" value="[ var ] enabled works" /><br />

</div>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/6.property-binding.png" alt="Output - Property binding with {{}}, [ ] and bind- " title="Output - Property binding with {{}}, [ ] and bind- " width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Property binding with {{}}, [ ] and bind- </figcaption>
  </figure>
</p>

07 Class Binding
=====================
- Class binding refers to applying different classes normally or depends on condition (dynamically)
- Class binding is very important and really useful as it allows developer to apply/add and remove classes to html element dynamically based on condition or user interaction
- Class Binding Syntax: `<tag [class]="varName" />`, here `varName holds css className`
- If `[class] binding` and `class=" "` attribute both present in tag, `[class] binding` get first/higher priority and `class=" "` attribute becomes null & void (class style properties not applied to text -  so its advisable to use any one either class binding or class attribute)
- `[ngClass]` directive/attribute helps to apply multiple classes conditionally `<tag [ngClass]="varObjectName"`

> **Syntax & Example**: styles.css (write css classes in any file)
```css
.text-primary {
  color: blue;
}

.text-danger {
  color: red;
}

.text-success {
  color: lawngreen;
}

.text-special {
  font-weight:bold;
  font-style: italic;
  color:orchid;
}

.text-strikethrough {
  text-decoration: line-through;
}

.text-orange {
  color: orange;
}
```

> **Syntax & Example**: component-demo6-classbinding.component.ts
```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo6-classbinding',
  templateUrl: './component-demo6-classbinding.component.html',
  styleUrls: ['./component-demo6-classbinding.component.css']
})
export class ComponentDemo6ClassbindingComponent implements OnInit {
  public successClass = 'text-success';
  public dangerClass = 'text-danger';
  public isSpecialClass = true;
  public isErrorClass = true;

  public messageClasses = {
    'text-primary': this.isSpecialClass,
    'text-strikethrough': this.isSpecialClass
  }

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo6-classbinding.component.html
```html
<div>
  <h1>component-demo6-classbinding works! </h1>

  <h3 ngNonBindable>[class]="varName" (varName holds css className present in css)</h3>

  <h4 class="text-orange">simple class attribute</h4>
  
  <h4 [class]="successClass">This is class binding with []</h4>

  <h4 class="{{successClass}}">This is class binding with interpolation</h4>

  <h4 [class]="successClass" class="text-orange">This is class binding with [] also class attribute</h4>

  <h4 [class.text-special]="isSpecialClass">This is class binding with boolean variable condition </h4>

  <h4 [class.text-danger]="isErrorClass">This is class binding with boolean variable condition </h4>

  <h4 [ngClass]="messageClasses">This is ngClass binding to deal with multiple classes at once</h4>
  
</div>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/7.class-binding.png" alt="Output - Class binding with {{}}, [ ] and ngClass" title="Output - Class binding with {{}}, [ ] and ngClass" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Class binding with {{}}, [ ] and ngClass</figcaption>
  </figure>
</p>

08 Style Binding
=====================
- Style binding is similar to class binding but it refers to applying different inline styles to html element instead of applying css classes
- Style Binding Syntax: 
```
<tag [style.color]="'orange'"> text </tag> 
OR 
<tag [style.color]="'varName'"> text </tag>
```
- `[ngStyle]` directive/attribute helps to apply multiple inline styles `<tag [ngStyle]="varObjectName"`

> **Syntax & Example**: component-demo7-stylebinding.component.ts 
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo7-stylebinding',
  templateUrl: './component-demo7-stylebinding.component.html',
  styleUrls: ['./component-demo7-stylebinding.component.css']
})
export class ComponentDemo7StylebindingComponent implements OnInit {
  public greenColor = 'green';
  public redColor = 'red';
  public orangeColor = 'orange';
  public hasError = true;

  public headerStyles = {
    color: 'blue',
    textDecoration: 'line-through',
    fontStyle: 'italic'
  }

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo7-stylebinding.component.html
```html
<div>
  <h1>component-demo7-stylebinding works!</h1>

  <h3 ngNonBindable> &lt;tag [style.color]="'orange'"&gt; text &lt;/tag&gt;</h3>
  <h4 [style.color]="'orange'">applying inline styles</h4>

  <h3 ngNonBindable> &lt;tag [style.color]="'varName'"&gt; text &lt;/tag&gt;</h3>
  <h4 [style.color]="greenColor">applying inline styles with variable </h4>

  <h3 ngNonBindable> &lt;style.color]="hasError ? 'red' : 'green' "&gt; text &lt;/tag&gt;</h3>
  <h4 [style.color]="hasError ? 'red' : 'green' ">applying inline styles with variable conditions</h4>

  <h4 [ngStyle]="headerStyles">applying multiple inline styles</h4>
</div>

```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/8.style-binding.png" alt="Output - Style binding with [style.] and [ngStyle]" title="Output - Style binding with [style.] and [ngStyle]" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Style binding with [style.] and [ngStyle]</figcaption>
  </figure>
</p>

09 Event Binding
=====================
- Event binding captures any DOM event and performs actions
- Angular provides an ability to bind the events along with the methods, Event binding is used with `parenthesis ()`
- Usually data binding done from Component Class `.ts` to Component Template `.html` (variables in class .ts files used/bind with html/template .html)
- To responds to user events like mouse clicks or keyboard events we need data flow from TEMPLATE to CLASS, event binding flows from TEMPLATE to CLASS (.HTML/TEMPLATE/VIEW to .TS/CLASS file)
- Syntax: `<h1 (click)="fn()">Click Me - Change Style</h1>`

> **Syntax & Example**: component-demo8-eventbinding.component.ts
```ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-demo8-eventbinding',
  templateUrl: './component-demo8-eventbinding.component.html',
  styleUrls: ['./component-demo8-eventbinding.component.css']
})
export class ComponentDemo8EventbindingComponent implements OnInit {
  public isButtonClicked = false;
  public greetingMessage = '';
  public eventType = '';
  // public withoutHandlerMessage = '';

  fn_changeStyles() {
    this.isButtonClicked = !this.isButtonClicked;
    this.greetingMessage = 'welcome to event binding';
  }

  fn_checkClick(evt) {
    console.log(evt);
    this.eventType = evt.type;
  }

  constructor() { }

  ngOnInit() {
  }

}
```

> **Syntax & Example**: component-demo8-eventbinding.component.html
```html
<div>
  <h1>component-demo8-eventbinding works!</h1>

  <h2>Event Binding</h2>
- Event binding captures any DOM event and performs actions
- Angular provides an ability to bind the events along with the methods, Event binding is used with `parenthesis ()`
- Usually, data binding is done from Component Class `.ts` to Component Template `.html` (variables in class .ts files used/bind with HTML/template .html)
- To respond to user events like mouse clicks or keyboard events we need data flow from TEMPLATE to CLASS, event binding flows from TEMPLATE to CLASS (.HTML/TEMPLATE/VIEW to .TS/CLASS file)

  <h1 (click)="fn_changeStyles()" [class.text-primary]="isButtonClicked" style="cursor:pointer;">Click Me - Change Style</h1>

  <div>isButtonClicked: {{isButtonClicked}}.  | {{isButtonClicked ? greetingMessage : " "}} </div> <br /><br />

  <button (click)="fn_checkClick($event)">Click me!</button> Event: {{eventType}} 

  <button (click)="withoutHandlerMessage = 'Without handler function' ">Without handler function - Click me!</button> {{withoutHandlerMessage}}

</div>
```

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/9.event-binding-1.png" alt="Event binding with (click)" title="Event binding with (click)" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Event binding with (click)</figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images_angular7/9.event-binding-2.png" alt="Image - Output - Event binding with (click) - After Click" title="Image - Output - Event binding with (click) - After Click" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Event binding with (click) - After Click</figcaption>
  </figure>
</p>
