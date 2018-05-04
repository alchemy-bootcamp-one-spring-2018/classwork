# HTML and CSS

## Agenda

* Code review and discussion
* HTML and CSS Layout
* Review of the week

## HTML and CSS Layout

### CSS

Understanding CSS: Thinking inside the box (!!!)

> The key to understanding how CSS works is to imagine that there is an invisible box around every HTML element.

```css
* {
   border: 1px solid red !important;
}
```

[Example Layouts](https://www.pinterest.com/mitchellhudson/css-layout-challenges/)

### HTML/CSS Boxes vs JS Trees

* html boxes
* css boxes
* compared to js tree

### Selectors

1. Big Three:
    1. tag `p`
    1. class `.`
    1. id `#`
1. parent child
    1. any `parent child`
    1. direct `parent > child`
1. combined `selector1, selector2, selector3`
1. attributes
    1. `input[type=radio]`
1. pseudo-selectors

#### Cascade

How CSS rules cascade

* If there are two or more rules that apply to the same element, it is important to understand which will take precedence.  

* Understanding how CSS rules cascade means you can write simpler style sheets because you can create generic rules that apply to most elements and then override the properties on individual elements that need to appear differently.

### Layout

* `display`
    * `block`, `inline`, `inline-block`, `none`
* `position`
    * `static`, `relative`, `absolute`
* width, height, overflow
* Border, margin, & padding
        * "Trouble" aka TRBL = top, right, bottom, left
* Border width, style, & color
* Centering content
* Changing inline/block
* Visibility
* `display: none` vs `visibility: hidden`
* Additional border topics (border images, box shadow, border radius)

## Review

### Control Flow

### Types

### Variables

### Git/GitHub

### Process

## Misc

A few things to cover if they have not already been addressed this week:

* `'use strict';`
* W3 Schools vs. MDN vs Stack Overflow, etc.
* The increment operator
* Logical operators % short circuiting
* String methods
* Array methods

## Design Resources

* [CSS Zen Garden](http://www.csszengarden.com/)
* [GIMP](https://www.gimp.org/)
* [Unsplash](https://unsplash.com/)