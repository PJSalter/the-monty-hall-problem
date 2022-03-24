/************** DOM to manipulate the elements 
 and attributes from HTML document.
 ****************/

//picking up the main body of the page.
const wholeBody = document.querySelector('main');
console.log(wholeBody);

// picking up the instructions.
const instruct = document.querySelector('#to-do');
console.log(instruct);

const firstRow = document.querySelector('#rowNumOne');
console.log(firstRow);
const secondRow = document.querySelector('#rowNumTwo');
console.log(secondRow);

//DOM manipulation for all three propability doors.
const d1 = document.querySelector('#doorNumOne');
console.log(d1);
const d2 = document.querySelector('#doorNumTwo');
console.log(d2);
const d3 = document.querySelector('#doorNumThree');
console.log(d3);

// buttons for yes or no.
const switchForYes = document.getElementById('yes-button');
console.log(switchForYes);
const switchForNo = document.getElementById('no-button');
console.log(switchForNo);

// picking up the images for each door.
const doorImgOne = document.getElementById('doorOne');
console.log(doorImgOne);
const doorImgTwo = document.getElementById('doorTwo');
console.log(doorImgTwo);
const doorImgThree = document.getElementById('doorThree');
console.log(doorImgThree);

// DOM picking up the probabilities.
const SwitchAndWin = document.querySelector("#choiceIsYours");
console.log(SwitchAndWin);
const SwitchAndLose = document.querySelector("#LossPropability");
console.log(SwitchAndLose);
const NoSwitchAndWin = document.querySelector("#chooseToNotSwitchAndWin");
console.log(NoSwitchAndWin);
const NoSwitchAndLose = document.querySelector("#NoSwitchAndLose");
console.log(NoSwitchAndLose);



