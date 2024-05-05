[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/xQz3oEP8)
## MDDN 242 2024 Assignment 2
# YEAR3000
## Eri Lovegrove


Each of my letters is made of:

- two C shaped curves. One is fixed in place vertically while the other can move up and down, as well as change direction. The diameters of these curves can be shrunk to 0. They are utilised in letters like B, D and S.
The parameters that control the curves are:
  * `arcdiameter1` : diameter or arc 1
  * `arcdiameter` : diameter of arc 2
  * `arcdirection` : direction of arc 2 (facing left or facing right)
  * `arc1xposition` : x position of arc 1
  * `arc2xposition` : x position of arc 2
  * `arc2yposition` : y position of arc 2


- 1 vertical line. This line can move vertically and horizontally
The parameters that control this line are:
  * `line4length` : vertical length of the line 
  * `line4yposition` : y position of the line
  * `line4x`: x position of the line

- 1 horizontal line. This line can move vertically and horizontally but can not rotate to be a vertical line. 
The parameters that control this line are:
  * `line1ylength` : y position of the line
  * `line1x` : x position of the line
  * `line1x2` : horizontal length of the line

- 2 versatile lines. These two lines can be diagonal, horizontal or vertical.
The parameters that control the curves are:
  * `line2xposition` : x position of line 2
  * `line2y` : y position of line 2
  * `line2xlength` : horizontal length of line 2
  * `line2ylength` : vertical length of line 2
  * `line3y` : y position of line 3
  * `line3length` : horizontal length of line 3
  * `line3y2` : vertical length of line 3
  * `line1x` : x position of line 3 (also shared by line 1)

- Lastly there is one parameter that translates the whole letter:
  * `translate` 


Talk about process

include screenshots

talk bout what hoad to change, including the sharing of the ine1x of both lines because of constraints. How you needed to make one more line versatile to be a diagonal. 


talk about 