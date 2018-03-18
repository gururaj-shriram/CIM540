# Mind Flow

Mind Flow is a Processing sketch set in a still life image of a river. The sketch starts out with an image of a river followed by particles flowing in to occupy the river area, creating a synthetic river flow on top of the real river.

## Motivation
I decided to make this project as a means of exploring the Processing environment and learning more advanced topics of processing. I wanted to learn more about using particle physics in sketches as well as being able to create an interactive environment for the user. I also wanted to create an environment that adapts to the user's emotions and current state of mind; for this reason, I am using an EEG sensor to record a user's current state and change the environment to reflect this state.

## Inputs
There are several inputs to Mind Flow:

* The MindWave EEG Sensor allows the sketch to receive the user's current meditation level
* For those who do not have this sensor, a slider exists to manually change the user's current meditation level
* Clicking or dragging the mouse on a part of the river will create a rippling effect that makes particles near the mouse travel in different directions
* Pressing various keyboard keys performs different actions ((P)ause and (R)eset)

## Outputs
* A change in the user's meditation level, whether detected by a change in the slider or from the MindWave EEG Sensor, adjusts the color of the flowing particles. A calm state (with a high meditation level) is more blue and an anxious state (low meditation level) is more red.
* A mouse click or drag creates a rippling effect with the particles near the mouse which sends particles flying in different directions (akin to a large object "splashing" near the particles).
* Pressing "p or P" pauses the sketch
* Pressing "r or R" resets the sketch

## Sketch Interactions
* MindWave EEG Sensor readings
* Changes in the Slider
* Clicking the mouse (with mouseX and mouseY)
* Dragging the mouse (with mouseX and mouseY)
* (P)ause
* (R)eset

## Target Audience
The target audience is adults who are interested in visualizing their states of mind and/or are interested in having an interactive medium to interface with their states of mind. The target audience also includes people who enjoy computer generated imagery.

## Displaying the Project
This project may be displayed on online art galleries, such as OpenProcessing. It could possibly also be displayed at a neuroscience or technological conference to demonstrate a relatively fun way of using human computer interactions to create an interactive environment.
