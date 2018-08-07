# QuizMaker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.7.

**This project was recently updated to Angular 6.  No major changes needed outside of updating imports from the necessary libraries.**

This is a rewrite of my Quiz Maker project from AngularJS.  On the UI side, this version features responsive web design choices for mobile users.  Parts of the code are rewritten to accommodate the necessary changes required for converting between the two libraries.  Notably, this version utilizes the router module instead of AJAX calls for transitioning templates.  I use ngFor to populate questions on the review phase instead of a separate function in this version as well.  Ultimately, I feel this version possesses more eloquent design principles over the initial AngularJs version of Quiz Maker.

## Commit on 8/7/2018
Improved the UI features on the MakeCSS/MakeCss2 html pages.  Instead of utilizing a interval function to influence the RGB values, I went with sliders and added the option to manually enter RGB or hex values for styling purposes.  Added Angular form validation to both the Questionairre and Review Questions html templates.  Provided the user the ability to take their quiz prior to finishing to ensure it functions properly once the template is saved.  Future changes will focus on cleaning up the overall appearance of the app since I first wrote this when I first started learning Angular.

## Commit on 6/13/2018
Fixed an issue where text would flash on router change on makeCSS router template.
