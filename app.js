/************** DOM to manipulate the elements 
 and attributes from HTML document.
 ****************/

//picking up the main body of the page.
const wholeBody = document.getElementById('total-structure');
//console.log(wholeBody);

// const playAgain = document.querySelector('.reset-to-play-again');
// const getResult = document.querySelector('.result');

// picking up the instructions.
const instruct = document.querySelector('#to-do');
//console.log(instruct);

const firstRow = document.querySelector('#rowNumOne');
//console.log(firstRow);
const secondRow = document.querySelector('#rowNumTwo');
//console.log(secondRow);

//DOM manipulation for all three propability doors.
const d1 = document.querySelector('#doorNumOne');
//console.log(d1);
const d2 = document.querySelector('#doorNumTwo');
//console.log(d2);
const d3 = document.querySelector('#doorNumThree');
//console.log(d3);

// buttons for yes or no.
const switchForYes = document.getElementById('yes-button');
//console.log(switchForYes);
const switchForNo = document.getElementById('no-button');
//console.log(switchForNo);

// picking up the images for each door.
const doorImgOne = document.getElementById('doorOne');
//console.log(doorImgOne);
const doorImgTwo = document.getElementById('doorTwo');
//console.log(doorImgTwo);
const doorImgThree = document.getElementById('doorThree');
//console.log(doorImgThree);

// DOM picking up the probabilities.
const switchAndWin = document.querySelector("#choiceIsYours");
//console.log(switchAndWin);
const switchAndLose = document.querySelector("#LossPropability");
//console.log(switchAndLose);
const noSwitchAndWin = document.querySelector("#chooseToNotSwitchAndWin");
//console.log(noSwitchAndWin);
const noSwitchAndLose = document.querySelector("#NoSwitchAndLose");
//console.log(noSwitchAndLose);

// the image of a car.
const medalWinner = "challenge-image/car.jpeg" 
//console.log(medalWinner);

// the image of a goat.
const youLost = "challenge-image/goat.jpeg"
//console.log(youLost);

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

// function to display the result of the player if they were to switch and win.
const mindChangeAndWon = () => {
	wholeBody.hidden = true;
	switchAndWin.hidden = false;
    // playAgain.style.display = 'flex';
    // getResult.style.display = 'flex';
}

// function to display results on when a player will switch but then lose by ther choice of switching.
const mindChangeAndLost = () => {
    wholeBody.hidden = true;
    switchAndLose.hidden = false;
    // playAgain.style.display = 'flex';
    // getResult.style.display = 'flex';
}

// a function that contains results for when a user doesn't switch and the wins.
const wonWithoutSwitching = () => {
    wholeBody.hidden = true;
    noSwitchAndWin.hidden = false;
    // playAgain.style.display = 'flex';
    // getResult.style.display = 'flex';
}

// function to display results when a user does not switch and then loses.
const lostAndNoSwitch = () => {
    wholeBody.hidden = true;
    noSwitchAndLose.hidden = false;
    // playAgain.style.display = 'flex';
    // getResult.style.display = 'flex';
}

//******************//
  //event handler on click for Door One
//******************//

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
		{ doorImgTwo.src = doorNumTwoWillOpen; }, 2000);

	} else if (doorNumThreeWillOpen === youLost) {
		setTimeout(() =>
		{ doorImgThree.src = doorNumThreeWillOpen; }, 2000);
	}

	//handling if the user makes a decision to switch yes, then the button will click.
    switchForYes.addEventListener('click', () => {

		// if user opens the second door
		// a message will appear on the app screen.
		if (doorImgTwo.src === "challenge-image/goat.jpeg"){
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
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
			}
		}
		//if the user chooses door three to open.
		else if (doorImgThree.src === "challenge-image/goat.jpeg") {
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
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
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
			setTimeout(() => { lostAndNoSwitch(); }, 3500)
		} else {
			setTimeout(() => { wonWithoutSwitching(); }, 3500)
		}
	})
})


//event handler for second door.

doorImgTwo.addEventListener('click', () => {
	firstRow.hidden = true;
	d2.hidden = false;
	setTimeout(() => { d2.hidden = true; }, 1000);
	setTimeout(() => { secondRow.hidden = false; }, 1000)

	if (doorNumOneWillOpen === youLost) {
		setTimeout(() =>
		{ doorImgOne.src = doorNumOneWillOpen; }, 2000);

	} else if (doorNumThreeWillOpen === youLost) {
		setTimeout(() =>
		{ doorImgThree.src = doorNumThreeWillOpen; }, 2000);
	}

    switchForYes.addEventListener('click', () => {
		if (doorImgOne.src === "challenge-image/goat.jpeg") {
			secondRow.hidden = true;
			instruct.innerHTML = "You wanted to change to door three"
			setTimeout(() =>
			{ instruct.innerHTML =
			"whats the new door............"; }, 1000);
			setTimeout(() => { doorImgThree.src = doorNumThreeWillOpen; }, 2500);
			if (doorNumThreeWillOpen === youLost) {
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
			}
		} else if (doorImgThree.src === "challenge-image/goat.jpeg") {
			secondRow.hidden = true;
			instruct.innerHTML = "switching with door one";
			setTimeout(() => { instruct.innerHTML
			= "Revealing your chosen door......"; }, 1000);
			setTimeout(() => { doorImgOne.src = doorNumOneWillOpen; }, 2500);
			if (doorNumOneWillOpen === youLost) {
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
			}
		}
	})

    switchForNo.addEventListener('click', () => {
		secondRow.hidden = true;
		instruct.innerHTML = "you still have a choice with door two"
		setTimeout(() => { instruct.innerHTML =
		"what will door two reveal....."; }, 1000);
		setTimeout(() => { doorImgTwo.src = doorNumTwoWillOpen; }, 2500);
		if (doorNumTwoWillOpen === youLost) {
			setTimeout(() => { lostAndNoSwitch(); }, 3500)
		} else {
			setTimeout(() => { wonWithoutSwitching(); }, 3500)
		}
	})
})


// event handler for third door.

doorImgThree.addEventListener('click', () => {
	firstRow.hidden = true;
	d3.hidden = false;
	setTimeout(() => { d3.hidden = true; }, 1000);
	setTimeout(() => { secondRow.hidden = false; }, 1000)

	if (doorNumOneWillOpen === youLost) {
		setTimeout(() => { doorImgOne.src = doorNumOneWillOpen; }, 2000);

	} else if (doorNumTwoWillOpen === youLost) {
		setTimeout(() => { doorImgTwo.src = doorNumTwoWillOpen; }, 2000);
	}
    
    switchForYes.addEventListener('click', () => {
		if (doorImgOne.src === "challenge-image/goat.jpeg") {
			secondRow.hidden = true;
			instruct.innerHTML = "switching it up toward the second door"
			setTimeout(() => { instruct.innerHTML =
			"what will door two reveal"; }, 1000);
			setTimeout(() => { doorImgTwo.src = doorNumTwoWillOpen; }, 2500);
			if (doorNumTwoWillOpen === youLost) {
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
			}
		} else if (doorImgTwo.src === "challenge-image/goat.jpeg") {
			secondRow.hidden = true;
			instruct.innerHTML = "switching it up to the first door"
			setTimeout(() => { instruct.innerHTML =
			"what will be revealed....."; }, 1000);
			setTimeout(() => { doorImgOne.src = doorNumOneWillOpen; }, 2500);
			if (doorNumOneWillOpen === youLost) {
				setTimeout(() => { mindChangeAndLost(); }, 3500)
			} else {
				setTimeout(() => { mindChangeAndWon(); }, 3500)
			}
		}
	})
    
switchForNo.addEventListener('click', () => {
		
        secondRow.hidden = true;
        instruct.innerHTML = "your choice will stay as door number three"
        setTimeout(() => { instruct.innerHTML =
        "I wonder whats underneath door number three........."; }, 1000);
        setTimeout(() => { doorImgThree.src = doorNumThreeWillOpen; }, 2500);
        if (doorNumThreeWillOpen === youLost) {
	    setTimeout(() => { lostAndNoSwitch(); }, 3500)
        } else {  
        setTimeout(() => { wonWithoutSwitching(); }, 3500)
		}

	})
})











