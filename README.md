# the-monty-hall-problem :door: 🐐 🚗

###### creating an intepretation of The Monty Hall problem which was tasked by Zaizi, this is a probability puzzle that catches many people out when first encountered. Vos Savant presented a solution that was, initially, rejected in the popular media of the day.

###### Writing a program that demonstrates that Vos Savant is correct. You will use the output of your program to convince your interviewer that, after the host opens a door, switching doors is always the correct choice.

![openDoor](https://user-images.githubusercontent.com/45575016/160248639-d237f3ac-379e-4ea7-9cdd-02005e75ab97.gif)


# User Story:

- ###### There will be three closed doors and the user will be given a choice to choose one of them. there is a car behind one of the doors, the other doors contain goats. it will function as the computer knows about the placement of the car and goats.
- ###### After the user chooses a door, the game itself will open one of the other two doors that will carry a goat.
- ###### The user may wish to stick with there original choice or switch the door.

# I need to complete these requirements:

- [x] Gain an understanding of the problem - perhaps see how your friends react if you play the part of the host.
- [x] Convince yourself that Vos Savant was correct.
- [x] Design and write software that will run sample games employing either the stick or switch strategy.
- [x] Put the code in a public GitHub repository
- [x] Use your software to show that switching doors is statistically the best option.
- [x] The elegance of the output is not important so long as the program can be used to prove the point.

![car](https://user-images.githubusercontent.com/45575016/160248676-f5b473fb-ab45-4eb5-ae05-ef9fbcdeb569.gif)

# Logic:

- ###### The whole point to the Monty Hall logic is that the host gives you a chance to pick which one is the car.
- ###### Then host reveals one of the doors that has a goat.
- ###### Offers the user to change there mind. However you will always change your mind as a user.
- ###### User has 1 in 3 chance of picking the car.
- ###### However when the host eliminates one with a goat and offers you the chance to change your mind, then the user will have 1 in 2 chance of picking the right door. So the key is for the user to always change there mind.

# In Steps:

- ###### 1.) Ask what door you'd like plus the user picks door.
- ###### 2.) Eliminate door.
- ###### 3.) Ask if user wants to change mind.
- ###### 4.) Car or Goat.

![goat](https://user-images.githubusercontent.com/45575016/160248710-9f8f1f53-ae58-4be4-b992-7c1620e27a6f.gif)


### ✨ See the Monty Hall Problem [live here](https://pjsalter.github.io/the-monty-hall-problem) 🚪 🐐 🚙


