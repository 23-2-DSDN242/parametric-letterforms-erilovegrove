const canvasWidth = 960;
const canvasHeight = 500;

/*
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
  "size": 80,
  "offsetx": 0,
  "offsety": 35,
  "lerpColourAmt" : 1,
  "lineHeight": 70,
  "rotation": 45,
  "rectwidth": 40,
  "rectlength": 200
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145,
  "lerpColourAmt": 0,
  "lineHeight": 220,
  "rotation": 0,
  "rectwidth": 50,
  "rectlength": 50
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0,
  "lerpColourAmt": 0.5,
  "lineHeight": 0,
  "rotation": 0,
  "rectwidth": 50,
  "rectlength": 50
}

const backgroundColor  = "#acf2e7";

const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 1.6;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let colorVariability = letterData ["lerpColourAmt"]
  let lineYChange = letterData ["lineHeight"]
  let rotatedegree = letterData ["rotation"]
  let myGreen = color("#72ab91");
  let myPurple = color ("#b388c2");
  let rectwidthchange = letterData ["rectwidth"]
  let rectlengthchange = letterData ["rectlength"]

  let fillSecondary = lerpColor (myGreen, myPurple, colorVariability);
 
 


  // draw two circles
  fill(darkGreen);
  ellipse(posx, posy, 150, 150);
  angleMode(DEGREES)
  
  fill(fillSecondary);
  ellipse(pos2x, pos2y, size2, size2);
  line (posx - 150/2, posy, posx - 150/2, posy -lineYChange);
  push ();
  rotate(rotatedegree);
  rect (posx, posy - 200, rectwidthchange, rectlengthchange);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
