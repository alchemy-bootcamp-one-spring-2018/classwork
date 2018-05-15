Class 12: App Structure - Audio/Video
===

## Code Review

## Outline

Day | Topics | Lab
---|---|---
Tuesday | App Structure, Audio & Video | BusMall
Wednesday | Charts and Canvas | BusMall Report
Thursday | Local Storage, CSS Animations and Transitions | BusMall UX
Friday | Project Prep | Teams

## App Structure

* Old Way
* Component Architectures

## State

List of things that change

## Events

Functions passed as pseudo-state that trigger the owner to change the state (can include "payload" data)

### Design Process

1. Draw app (or page of app)
1. Break visually into components
1. Draw tree of components
1. Identify Data (State) and Flow
    1. State lives as close as possible
    1. Shared state must live in common ancestor

**DEMO: TV Station**

**EXERCISE: TODO**

## JavaScript Classes

1. Nested containers that make up your app
1. Can "remember" things (state!)
1. Via `this`

### Structure

1. Class per "component"
1. Can create html or use template
1. What can be rendered once?
1. What will be updated?

### Details

1. Reference template for component
    1. Okay for very simple components to just create DOM
1. Pass state and "event" handlers to `constructor`
1. Return DOM from `render`
    1. Clone template
    1. Integrate data (state) with elements
    1. Register event listeners
    1. Store in elements you need to update on `this`
    1. If need for both render and update, put in own method