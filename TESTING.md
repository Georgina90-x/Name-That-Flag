
# Testing

Return back to the [README.md](README.md) file.

## Table of Contents

<details>
<summary>Click here for Table of Contents</summary>

- [Code Validation](#code-validation)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)

- [Browser Compatibility](#browser-compatibility)

- [Responsiveness](#responsiveness)

- [Accessibility](#accessibility)

- [Defensive Programming](#defensive-programming)

- [User Story Testing](#user-story-testing)
</details>

## Code Validation

### HTML

I have used the recommended [HTML W3C Validator](https://validator.w3.org) to validate all of my HTML files.

| Page | W3C URL | Screenshot | Notes |
| :---: | :---: | :---: | :---: |
| Main Page | [W3C](https://validator.w3.org/nu/?doc=https%3A%2F%2Fgeorgina90-x.github.io%2FName-That-Flag%2F) | ![screenshot](img/screenshots/html-validator.png) | IMG is empty due to it being filled with images via JS |

### CSS

I have used the recommended [CSS Jigsaw Validator](https://jigsaw.w3.org/css-validator) to validate all of my CSS files.

| File | Jigsaw URL | Screenshot | Notes |
| :---: | :---: | :---: | :---: |
| style.css | [Jigsaw](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fgeorgina90-x.github.io%2FName-That-Flag%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) | ![screenshot](img/screenshots/css-validator.png) | Pass: No Errors |

### JavaScript

I have used the recommended [JSlint](https://codebeautify.org/jsvalidate) to validate all of my JS files.

| File | Screenshot | Notes |
| :---: | :---: | :---: |
| main.js | ![screenshot](img/screenshots/jslint-test.png) | Line cannot be shortened and still reads clear. Parentheses not needed. |

## Browser Compatibility

I have tested Your Weather on the following browsers to check for compatibility issues.

| Browser | Main | Score |
| :---: | :---: | :---: |
| [Chrome](https://www.google.com/chrome) | ![screenshot](img/screenshots/chrome-main.png) | ![screenshot](img/screenshots/chrome-score.png) | Works as expected |
| [Firefox](https://www.mozilla.org/firefox/) | ![screenshot](img/screenshots/firefox-main.png) | ![screenshot](img/screenshots/firefox-score.png) | Works as expected |
| [Edge](https://www.microsoft.com/edge)| ![screenshot](img/screenshots/microsoft-edge-main.jpg) | ![screenshot](img/screenshots/microsoft-edge-score.jpg) | Works as expected |
| [Safari](https://support.apple.com/downloads/safari) | ![screenshot](img/screenshots/safari-main.png) | ![screenshot](img/screenshots/safari-score.png) | Works as expected |

## Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues.

<details>
<summary>Click for report</summary>

| Device | Main | Score |
| :---: | :---: | :---: | :---: |
| Mobile (iPhone 15 Pro) | ![screenshot](img/screenshots/iphone-screenshot-main.PNG) | ![screenshot](img/screenshots/iphone-screenshot-score.PNG) | Appeared as expected |
| Tablet (DevTools - iPad Air) | ![screenshot](img/screenshots/ipad-screenshot-main.PNG) | ![screenshot](img/screenshots/ipad-screenshot-score.PNG) | Appeared as expected |
| 15" Laptop | ![screenshot](img/screenshots/google-chrome-main.jpg) | ![screenshot](img/screenshots/google-chrome-score.jpg) |
</details>

## Accessibility

I have tested my deployed project using the [WAVE](https://wave.webaim.org/) web accessibility evaluation tool to check for any accessibility issues.

| Page | Summary | Details | Contrast | Notes |
| :---: | :---: | :---: | :---: | :---: |
| Main | ![screenshot](img/screenshots/wave-summary.png) | ![screenshot](img/screenshots/wave-details.png) | ![screenshot](img/screenshots/wave-contrast.png) | The error is due to there being no alt information for the image, due to the nature of the quiz a user with limited to no eyesight would find this game difficult to play. There is also a missing H2 as I wanted a smaller sized heading. |

## Defensive Programming

Defensive programming was manually tested with the below user acceptance testing:

<details>
<summary>Click for report</summary>

| Page | Expectation | Test | Result | Fix | Screenshot |
| :---: | :---: | :---: | :---: | :---: | :---: |
| Main | | | | | |
| | Name That Flag is designed so that when you open the page the full screen shows the flag image and the answers as well as a score/question area.| Tested the feature by clicking Name That Flag. | The feature behaved as expected. | Test concluded and passed. | ![screenshot](img/screenshots/chrome-main.png) |
| | When a user hovers over one of the answer buttons the cursor becomes a pointer and the answer changes to a black colour to indicate what they are about to select. | Tested the feature by hovering over the answers.| The feature behaved as expected, the cursor changed and the buttons highlighted. | Test concluded and passed. | ![screenshot](img/screenshots/cursor.jpg) |
| | Once an answer is selected and clicked the button will change colour to red or green to indicate success or failure. The score will also count when successfull. | Tested the feature by selecting both correct and incorrect answers. And checking the score updated. | The feature behaved as expected. | Test concluded and passed. | ! [Youtube](https://youtube.com/shorts/loIhT5JAe6U) |
|
| | The next question is supposed to automatically load once a choice has been made. | Tested the feature by selecting an answer and waiting for the next question. | The feature behaved as expected. |Test concluded and passed. | ! [Youtube](https://youtube.com/shorts/loIhT5JAe6U) |
| | Once the quiz is complete, the screen should show the score of correct answers and incorrect answers. | Tested the feature by clicking through to the end of the 10 questions. | The feature behaved as expected. |Test concluded and passed. | ! [Youtube](https://youtube.com/shorts/loIhT5JAe6U) |
| | Once the game is completed a 'new game' button should appear so the user can attempt the quiz again. | Tested the feature by clicking through the quiz and then selecting the new game button. | The feature behaved as expected. |Test concluded and passed. | ![screenshot](img/screenshots/firefox-score.png) |

</details>

## User Story Testing

| User Story | Screenshot |
| :---: | :---: |
| As a new site user, I would like to know the purpose of the site, so I understand why I might use it. | ![screenshot](img/screenshots/user-purpose.png) |
| As a new site user, I would like to be able to clearly see the flag and it's answers so I can make an informed choice. | ![screenshot](img/screenshots/user-purpose.png) |
| As a new site user, I would like to be able to select my answer with ease and be told if I am correct or not. | ![screenshot](img/screenshots/user-success-fail.mp4) |
| As a new site user, I would like to be able to keep a track of my score as a way as determining my success. | ![screenshot](img/screenshots/user-score.png) |
| As a new site user, I would like to be able to restart the game again in order to improve my score. | ![screenshot](img/screenshots/user-restart.png) |

| As a returning site user, I would like to be met with the game in the format I am accustommed to. | ![screenshot](img/screenshots/return-user-screen.png)|
| As a returning site user, I would like to be challenged to questions I have not seen before.| ![screenshot](img/screenshots/return-user-screen.png) | ![screenshot](img/screenshots/return-user-random.png) |
