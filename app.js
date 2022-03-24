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
const switchAndWin = document.querySelector("#choiceIsYours");
console.log(switchAndWin);
const switchAndLose = document.querySelector("#LossPropability");
console.log(switchAndLose);
const noSwitchAndWin = document.querySelector("#chooseToNotSwitchAndWin");
console.log(noSwitchAndWin);
const noSwitchAndLose = document.querySelector("#NoSwitchAndLose");
console.log(noSwitchAndLose);

// the image of a car.
const medalWinner = "challenge-image/car.jpeg" 
console.log(medalWinner);

// the image of a goat.
const youLost = "challenge-image/goat.jpeg"
console.log(youLost);

// the variables for adding all the different doors.
let doorNumOneWillOpen;
let doorNumTwoWillOpen;
let doorNumThreeWillOpen;
let yayForWinner;

// Hiding all the elements that do not need to be visoble at all times.
secondRow.hidden = true;
switchAndWin.hidden = true;
switchAndLose.hidden = true;
noSwitchAndWin.hidden = true;
noSwitchAndLose.hidden = true;
d1.hidden = true;
d2.hidden = true;
d3.hidden = true;

// now to create a function that will shuffle each door at random every time.

// Function to randomly shuffle the doors
const randomiseThoseDoors = () => {
	yayForWinner = Math.floor(Math.random() * 3);
	if (yayForWinner === 1) {
		doorNumOneWillOpen = medalWinner;
        doorNumTwoWillOpen = youLost;
        doorNumThreeWillOpen = youLost;
	} else if (yayForWinner === 2) {
		doorNumTwoWillOpen = medalWinner;
		doorNumOneWillOpen = youLost;
		doorNumThreeWillOpen = youLost;
	} else {
		doorNumThreeWillOpen = medalWinner;
		doorNumTwoWillOpen = youLost;
		doorNumOneWillOpen = youLost;
	}
}
// Calling the randomise functionality of the doors.
randomiseThoseDoors();

// handling a click once user chooses to open door number one.
doorImgOne.addEventListener('click', () => {

	// Revealing necessary elements with messages in good timing to appear.
	firstRow.hidden = true;
	d1.hidden = false;
	setTimeout(()=>{
		d1.hidden = true;
	},1000);
	setTimeout(()=>{
		secondRow.hidden = false;
	},1000);

	// this will display a goat behind the door.
	if (doorNumTwoWillOpen === youLost) {
		setTimeout(() =>
		{ doorNumTwoWillOpen.src = doorNumTwoWillOpen; }, 2000);

	} else if (doorNumThreeWillOpen === youLost) {
		setTimeout(() =>
		{ doorNumThreeWillOpen.src = doorNumThreeWillOpen; }, 2000);
	}

	//handling if the user makes a decision to switch yes, then the button will click.
    switchForYes.addEventListener('click', () => {

		// if user opens the second door
		// a message will appear on the app screen.
		if (doorImgTwo.src === medalWinner){
			secondRow.hidden = true;
			instruct.innerHTML = "You chose to change to the third door";
			setTimeout(()=>{
				instruct.innerHTML =
				"exciting, we can now reveal this latest door";
			},1000);

			// to open the door of choice by user.
			setTimeout(() =>
			{ doorImgThree.src = doorNumThreeWillOpen; }, 2500);

			//will show a condition of the results on the actual page.
			if (doorNumThreeWillOpen === youLost) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
		//if the user chooses door three to open.
		else if (doorImgThree.src === youLost) {
			secondRow.hidden = true;
			instruct.innerHTML = "You wanted to open the second door";
			setTimeout(()=>{
				instruct.innerHTML =
				"exciting to reveal the second door";
			},1000);
			
			// for opening the door.
			setTimeout(() => { doorImgTwo.src = doorNumTwoWillOpen; }, 2500);
			//this will show the results page.
			if (doorNumTwoWillOpen === youLost) {
				setTimeout(() => { switchAndLose(); }, 3500)
			} else {
				setTimeout(() => { switchAndWin(); }, 3500)
			}
		}
	})
	//handling if the user does not want to switch.
    switchForNo.addEventListener('click', () => {
	
		secondRow.hidden = true;
		instruct.innerHTML = "you chose the first door";
		setTimeout(() =>
		{ instruct.innerHTML =
		"finding out whats behind the first door is exciting"; }, 1000);
		
		// Opening the chosen door
		setTimeout(() => { doorImgOne.src = doorNumOneWillOpen; }, 2500);
		
		// Conditions to display the result page
		if (doorNumOneWillOpen === youLost) {
            //error to fix
			setTimeout(() => { noSwitchAndLose(); }, 3500)
		} else {
			setTimeout(() => { noSwitchAndWin(); }, 3500)
		}
	})
})

// function to display the result of the player if they were to switch and win.
const switchAndWin = () => {
	body.hidden = true;
	switchAndWin.hidden = false;
}

// function to display results on when a player will switch but then lose by ther choice of switching.
const switchAndLose = () => {
    body.hidden = true;
    switchAndLose.hidden = false;
}

// a function that contains results for when a user doesn't switch and the wins.
const noSwitchAndWin = () => {
    body.hidden = true;
    noSwitchAndWin.hidden = false;
}

// function to display results when a user does not switch and then loses.
const noSwitchAndLose = () => {
    body.hidden = true;
    noSwitchAndLose.hidden = false;
}









