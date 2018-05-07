# Tested Functions

## Agenda

* Code review and discussion
* Test Driven Development
* SDLC, User Stories & Acceptance Criteria

## Test Driven Development

**What is it?**  Write software that tests for the desired functionality FIRST.  Then run the tests, they all **fail**. Then write the code to make the tests **pass**.  There are JS libraries that provide functions that allow test code to be written in a semi-narrative way - see example.

  Mocha, Jest, Jasmine, Protractor (Angular), Karma, Chai, Enzyme (React)

### Example
   (in pseudo-code)

	Describe( "Hello World" )
        It( "should display the text 'Hello World' when the page loads" )
        	text = document.innerText
        	Expect(text).toEqual('Hello World')

**Why do it?**

* You ensure that requirements are met when initially developing a feature
* You ensure that existing features continue to work while the App changes


### Edge Cases
Test for the unexpected!!! Test for the stupid!!!  

* Is the value of an input the expected data type?
* Is the Data Source responding?
* Is the User maliciously trying to destroy my App?

#### Is my new code crashing existing functionality ANYWHERE in the app?

## User Stories & Acceptance Criteria

### User Stories
In Silicon Valley, the Post-Its on the White Board are User Stories.  They define an individual task assignment for a developer. Hopefully work is broken-down such that, an individual User Story is no more than 2 days of work to be "Dev-Complete".

User Stories are written in the form:

```
As a __User__, 
I need/want the __application/feature___ to perform/have __some functionality__, 
so that I __some objective__.

As a user, I need the Index page to say "Hello World", so that I feel welcomed.
```

### Acceptance Criteria
Every User Story has Acceptance Criteria. Acceptance Criteria defines the objectives of the task. Generally, User Stories & Acceptance Criteria are written by either: Product Owners, UX Designers or Technical Analysts. Operational stories like a refactor will be written be a Tech Lead or Architect.

Acceptance Criteria is written in the form:

```
Given  .... (pre-requisites), describe expected behavior

Given I have loaded the Index page, the text "Hello World" will be visible.
```

## Resources

* [https://github.com/mawrkus/js-unit-testing-guide]()
* [https://designmodo.com/test-javascript-unit/]()
* [https://jrsinclair.com/articles/2016/gentle-introduction-to-javascript-tdd-intro/]()
