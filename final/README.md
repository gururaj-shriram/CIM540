# Word Jam

This was a collaborative project with @jerrybonnell. My role in Word Jam was to create the Arduino controller, integrate it with the Word Jam's front end, and implement sound functionality. This folder will include details about how data from the physical Arduino controller is used in Word Jam's front end, as well as how sound effects are played when certain actions are performed. 

See the source code and setup instructions [here](https://github.com/gururaj-shriram/WordJam)!

For an in-depth explanation of the physical controller, go [here](https://github.com/gururaj-shriram/physical-computing/tree/master/final)

For notes on how the front end of the game works, see [my partner's repository](https://github.com/jerrybonnell/CIM540/tree/master/final)

Word Jam is a game that lets the player create stories from randomly generated words. Players can add random words, delete random words, and move words from one position to another in order to try to create a story. Word Jam is best played as a projection on a screen with its physical controller, which uses a joystick that controls a laser to move around the screen; it can also be played on a computer screen using the mouse and keyboard as a controller.

## Motivation
I wanted to create a fun project that combines the physical and digital world. Often times, we are limited to exploring only one of the two worlds; this project aims to combine the best of both worlds! Word Jam is a game, wherein the player controls a movable laser pointer with a joystick with the option of pressing buttons to add or remove words. Words are chosen at random, and it is up to the player to add/delete/reposition words to try to create a story! Another reason I chose to make this project is because it uses a laser -- no explanation is required. :laughing:

## Inputs
There are several possible inputs to Word Jam:

* The Arduino controller returns, via serial output, the current position of the laser (with X and Y coordinates) as well as the states of the joystick's select button (to move words), add button (to add a random word), and remove button (to delete a grabbed word); these states, if in the "on" postion, triggers the corresponding functionality. 
* If the physical controller is not used, Word Jam works with mouse movements acting as the cursor, mouse clicks used to move words, the "p" button to push a new word, and the "r" button to remove a word.

## Outputs
* A laser/mouse movement moves the cursor
* Pressing the joystick's select button/clicking the mouse is used to grab and move words
* Pressing the add button/"p" on the keyboard adds a random word to the canvas
* Pressing the remove button/"r" on the keyboard removes a currently grabbed word or sentence
* Moving two words close to each other causes them to "snap" together into a sentence
* Adding, removing, or snapping words plays a corresponding sound effect

## Libraries 
* `RiTa.js`
* `p5 Serial`
* `p5 Sound`

## Target Audience
The target audience includes people of all ages who enjoy gaming and creating their own stories... and lasers, of course! Children may enjoy playing with the laser, viewing the visual effects of the game (e.g. color changes), and hearing the retro, arcade-style sound effects. Adults may be more interested in the challenge of creating stories from randomly generated words. Overall, I believe this project appeals to most.

## Displaying the Project
This project is best displayed in some sort of art gallery, studio, or show wherein people can physically interact with the piece. When projecting the game onto a screen or medium, using the physical controller is much more fun and intuitive. This project could also be deplayed in an online gallery, such as OpenProcessing, to be used as a computer game without the physical controller. It's necessary to view the project using a computer capable of communicating with the Arduino.
