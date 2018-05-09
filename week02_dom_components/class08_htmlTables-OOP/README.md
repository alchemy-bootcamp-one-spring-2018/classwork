## **Week 2: Working with the DOM**
## Class #8: Object-Oriented Programming with Constructor Functions; HTML Tables

[Schedule](#schedule) | [Announcements](#announcements) | [Objectives](#learning-objectives) | [Notes](#notes) | [Readings](#readings)

<hr></hr>

### Schedule
1. Code review
1. HTML Tables
1. Object Oriented Programming aka OOP
1. HTML `<template>`, aka Components

### Announcments
1. More Lab-focused Lectures, 
1. Lecture content that is not directly Lab related will be called out & breif
1. Learning Objectives today will extend into Live Coding session

## Learning Objectives
- Translate an object literal into a constructor function. 
- Create instances of a model using a constructor function.
- Extend the properties and methods of a constructor function using the `prototype` property.
- Dynamically build an HTML table in the DOM using JavaScript.
- use JS Class syntax to create contructor function.
- use HTML5 `<template>` instead of createElement

## Notes
* Code Review
* HTML Tables
    * relevant tags: table, thead, tbody, tfooter, tr, td, th, colgroup, col
    * we create tables row by row
        * columns are created by nesting cells
* More OOP, now with constructor functions
    * constructor function
        * a factory to create our objects so the computer does the work for us
        * `new Student (name, lastInitial, faveNumber)`
        * new critical vocab: "instance of", "class"
    * prototype property
        * `Student.prototype.yell = function () { // code here! }`
    * JS Class syntax
        * `class Shoe { ... }`
        * no commas
* HTML5 `<template>`
    * use standard HTML to define a "Component" that will be dynamically displayed
    * `<template><li>Apple</li></template>`


<hr></hr>

## Readings

**HTML Chapter 6: "Tables"**

- p.131: Basic table structure
- p.132: Table headings
- p.133: Spanning columns & rows

**HTML Chapter 13: "Boxes" (CSS)**

- p.303: Box width, height, overflow
- p.307: Border, margin, & padding
- p.308: Border width, style, & color
- p.315: Centering content
- p.317: Changing inline/block
- p.318: Visibility
- p.321: Additional border topics (border images, box shadow, border radius)