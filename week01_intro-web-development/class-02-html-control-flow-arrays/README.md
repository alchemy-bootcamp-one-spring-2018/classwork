Html Elements, JS Control Flow and Arrays
===

## Agenda

* Code Review, Questions and Issues from Lab
* HTML Elements/Tags
* Toolkit
* JS Control Flow
* CSS Selectors for id and class
* Small DOM Integration
 
## Code Review

* Questions and Issues
* Volunteers show code
* We all discuss

## HTML Elements

* Review Structure
    * Angle Brackets `<` and `>`
    * Tags `<div>` and `</div>`
    * Attributes `<div class="content">Here is content</div>`
    * Children
* Why? (Parser)

**EXERCISE:** Teach HTML

## Toolkit

* node?
* `> npm i -g live-server eslint`, or:
* `> sudo npm i -g live-server eslint`
* VSCode Settings:
    * Extensions: Eslint, code spell checker, live-server
    * linting
    * spell check
    * auto-save
* live-server
* git credentials
* `<script src="app.js"></script>`
* Review linting settings

## JS Control Flow

Common structure:

1. Keyword
1. Parenthesis (usually condition)
1. Block of code `{` and `}`

**EXERCISE:** Teach Control Flow

## JS Big Three

Data Structure | Characteristic
---|---
Arrays | List of things in numeric order
Objects | Key (unique name)/value pairs
Functions | Run code on demand

## Simple CSS Selectors

* Use `<link rel="stylesheet" href="css/main.css">`
* Class and Id Seletors
    * `.class-name { }`
    * `#id { }`
* Key/Value pairs!
    * `property: value;`

## Interacting with the DOM

* Add `onclick="functionToCall()"` to run on click
* Use `document.getElementById(id)` to
    1. Get an element
    1. Set `node.textContent = ` or `node.nodeValue = `
