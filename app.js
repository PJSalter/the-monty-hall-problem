/************** DOM to manipulate the elements 
 and attributes from HTML document.
 ****************/

//picking up the main body of the page.
const wholeBody = document.querySelector('main');
console.log(wholeBody);

// picking up the instructions.
const instruct = document.querySelector('#to-do');
console.log(instruct);

const FirstRow = document.querySelector('#rowNumOne');

const secondRow = document.querySelector('#rowNumTwo');

//DOM manipulation for all three propability doors.
const d1 = document.querySelector('#doorNumOne');
const d2 = document.querySelector('#doorNumTwo');
const d3 = document.querySelector('#doorNumThree');

// buttons for yes or no.
const switchForYes = document.getElementById('yes-button');
const switchForNo = document.getElementById('no-button');

// picking up the images for each door.
const doorImgOne = document.getElementById('doorOne');
const doorImgTwo = document.getElementById('doorTwo');
const doorImgThree = document.getElementById('doorThree');

// DOM picking up the probabilities.
const SwitchAndWin = document.querySelector("#choiceIsYours");
const SwitchAndLose = document.querySelector("#LossPropability");
const NoSwitchAndWin = document.querySelector("#chooseToNotSwitchAndWin");
const NoSwitchAndLose = document.querySelector("#NoSwitchAndLose");

