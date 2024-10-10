
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

I have used the recommended [Code Beautify](https://codebeautify.org/jsvalidate) to validate all of my JS files.

| File | Screenshot | Notes |
| :---: | :---: | :---: |
| main.js | ![screenshot](img/screenshots/javascript-validator.png) | Unexpected let, needed for count function |

## Browser Compatibility

I have tested Your Weather on the following browsers to check for compatibility issues.

| Browser | Main | Score |
| :---: | :---: | :---: |
| [Chrome](https://www.google.com/chrome) | ![screenshot](img/flag-germany.svg) | ![screenshot](documentation/browsers/chrome/chrome-modal.png) | ![screenshot](documentation/browsers/chrome/chrome-displayed-c.png) | ![screenshot](documentation/browsers/chrome/chrome-displayed-f.png) | Works as expected |
| [Firefox (Developer Edition)](https://www.mozilla.org/firefox/developer) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-main.png) | ![screenshot](img/flag-germany.svg) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-displayed-c.png) | ![screenshot](documentation/browsers/firefox-dev/firefox-dev-displayed-f.png) | Works as expected |
| [Edge](https://www.microsoft.com/edge)| ![screenshot](documentation/browsers/edge/edge-main.png) | ![screenshot](img/flag-germany.svg) | ![screenshot](documentation/browsers/edge/edge-displayed-c.png) | ![screenshot](documentation/browsers/edge/edge-displayed-f.png) | Works as expected |
| [Safari](https://support.apple.com/downloads/safari) | ![screenshot](documentation/browsers/safari/safari-main.png) | ![screenshot](documentation/browsers/safari/safari-modal.png) | ![screenshot](documentation/browsers/safari/safari-displayed-c.png) | ![screenshot](documentation/browsers/safari/safari-displayed-f.png) | Works as expected |
| [Brave](https://brave.com/download) | ![screenshot](documentation/browsers/brave/brave-main.png) | ![screenshot](documentation/browsers/brave/brave-modal.png) | ![screenshot](documentation/browsers/brave/brave-displayed-c.png) | ![screenshot](documentation/browsers/brave/brave-displayed-f.png) | Works as expected |

## Responsiveness

I have tested my deployed project on multiple devices to check for responsiveness issues.

<details>
<summary>Click for report</summary>

| Device | Main | Score |
| :---: | :---: | :---: | :---: |
| Mobile (iPhone 15 Pro) | ![screenshot](img/screenshots/iphone-screenshot-main.PNG) | ![screenshot](img/screenshots/iphone-screenshot-score.PNG) | Appeared as expected |
| Tablet (DevTools - iPad Air) | ![screenshot](img/screenshots/ipad-screenshot-main.PNG) | ![screenshot](img/screenshots/ipad-screenshot-score.PNG) | Appeared as expected |
| 15" Laptop | ![screenshot](documentation/responsiveness/15-inch-laptop/mdpi/laptop-main.png) | ![screenshot](documentation/responsiveness/15-inch-laptop/mdpi/laptop-modal.png) |
</details>

## Accessibility

I have tested my deployed project using the [WAVE](https://wave.webaim.org/) web accessibility evaluation tool to check for any accessibility issues.

| Page | Summary | Details | Contrast | Notes |
| :---: | :---: | :---: | :---: | :---: |
| Main | ![screenshot](img/screenshots/wave-summary.png) | ![screenshot](img/screenshots/wave-details.png) | ![screenshot](img/screenshots/wave-contrast.png) | The error is due to there being no alt information for the image, due to the nature of the quiz a user with limited to no eyesight would find this game difficult to play. There is also a missing H2 as I wanted a smaller sized heading. |

## User Story Testing

| User Story | Screenshot |
| :---: | :---: |
| As a new site user, I would like to know the purpose of the site, so I understand why I might use it. | ![screenshot](img/screenshots/user-purpose.png) |
| As a new site user, I would like to be able to clearly see the flag and it's answers so I can make an informed choice. | ![screenshot](img/screenshots/user-purpose.png) |
| As a new site user, I would like to be able to select my answer with ease and be told if I am correct or not. | ![screenshot](img/screenshots/user-success-fail.MOV) |
| As a new site user, I would like to be able to keep a track of my score as a way as determining my success. | ![screenshot](img/screenshots/user-score.png) |
| As a new site user, I would like to be able to restart the game again in order to improve my score. | ![screenshot](img/screenshots/user-restart.png) |

| As a returning site user, I would like to be met with the game in the format I am accustommed to. | ![screenshot](img/screenshots/return-user-screen.png)|
| As a returning site user, I would like to be challenged to questions I have not seen before.| ![screenshot](img/screenshots/return-user-screen.png) | ![screenshot](img/screenshots/return-user-random.png) |
