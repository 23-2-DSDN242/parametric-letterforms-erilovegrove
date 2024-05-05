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
  "size": 72,
  "offsetx": -16.5,
  "offsety": -50,
  "lerpColourAmt" : 1,
  "lineHeight": 150,
  "rotation": -25,
  "rectwidth": 40,
  "rectlength": 250,
  "translatex": canvasWidth / 2 - 200,
  "translatey": canvasHeight / 1.6,
  "rotateline": 25,
  "circle1x": canvasWidth / 2 - 310,
  "circle1y": 200,
  "circle1size": 50,
  "circle1colour": 0,
  "rectoffsetx": 0,
  "rectoffsety": 0 -200,
  "liney": 80,
  "x1change": 300,
  "y1change": 300,
  "x2change":34,
  "y2change": 180,
  "x3change": 85,
  "y3change": 110,
  "rectanglefill": 0
}

const letterB = {
  "size": 100,
  "offsetx": 0,
  "offsety": -140,
  "lerpColourAmt": 0,
  "lineHeight": 200,
  "rotation": 0,
  "rectwidth": 150,
  "rectlength": 140,
  "translatex": canvasWidth / 2,
  "translatey": canvasHeight / 1.6,
  "rotateline": 0,
  "circle1x": canvasWidth / 2,
  "circle1y": 280,
  "circle1size": 100,
  "circle1colour": "#acf2e7",
  "rectoffsetx": 0-75,
  "rectoffsety": 0 - 90,
  "liney": 50,
  "x1change": -100,
  "y1change": -300,
  "x2change":-50,
  "y2change": 140,
  "x3change": 75,
  "y3change": 200,
  "rectanglefill": 0
}

const letterC = {
  "size": 140,
  "offsetx": 0,
  "offsety": -80,
  "lerpColourAmt": 0.5,
  "lineHeight": 0,
  "rotation": 0,
  "rectwidth": 0,
  "rectlength": 0,
  "translatex": canvasWidth / 2 + 175,
  "translatey": canvasHeight / 1.6,
  "rotateline": 0,
  "circle1x": canvasWidth / 2 + 250 + 30,
  "circle1y": canvasHeight / 1.6 - 80,
  "circle1size": 90,
  "circle1colour": "#acf2e7",
  "rectoffsetx": 0,
  "rectoffsety": 0 - 200,
  "liney": 0,
  "x1change": 0,
  "y1change": 0,
  "x2change":0,
  "y2change": 0,
  "x3change": 0,
  "y3change": 0,
  "rectanglefill": 0

  
}

const backgroundColor  = "#acf2e7";


const lightGreen  = 0;
const strokeColor  = 0;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(3);

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
  let lineYChange = letterData ["lineHeight"]
  let rotatedegree = letterData ["rotation"]
  let rectwidthchange = letterData ["rectwidth"]
  let rectlengthchange = letterData ["rectlength"]
  let translatexchange = letterData ["translatex"]
  let translateychange = letterData ["translatey"]
  let rotatedline = letterData ["rotateline"]
  let fillSecondary = 0
  let circle1xchange = letterData ["circle1x"]
  let circle1ychange = letterData ["circle1y"]
  let circle1sizechange = letterData ["circle1size"]
  let circle1colourchange = letterData ["circle1colour"]
  let rectoffsetxchange = letterData ["rectoffsetx"]
  let rectoffsetychange = letterData ["rectoffsety"]
  let x1 = posx+ letterData ["x1change"];
  let y1 = posy - letterData ["y1change"];
  let x2 = posx- letterData ["x2change"];
  let y2 = posy- letterData ["y2change"];
  let x3 = posx - letterData ["x3change"];
  let y3 = posy - letterData ["y3change"];
  let lineychange = letterData ["liney"];
  let fillrectanglechange = letterData ["rectanglefill"]

  
  // Draw curve
  noFill();
  stroke(0); // Black
  curve(x1, y1, x2, y2, x3, y3, x3, y3); // Start and end points are repeate
  // draw two circles
  
  angleMode(DEGREES)
  
  fill(fillSecondary);
  ellipse(pos2x, pos2y, size2, size2);

  push ()
  translate (posx, posy);
  rotate (rotatedline);
  line (0 - 150/2, 0 + lineychange, 0 - 150/2, 0 -lineYChange);
  pop()

  push ();
  fill (fillrectanglechange);
  translate (translatexchange, translateychange);
  rotate(rotatedegree);
  rect (rectoffsetxchange, rectoffsetychange, rectwidthchange, rectlengthchange);
  pop();

  push()
  noStroke(); 
  fill(circle1colourchange);
  ellipse(circle1xchange, circle1ychange, circle1sizechange, circle1sizechange);
  fill(255, 0, 0); // Red
  // ellipse(x1, y1, 10, 10);
  pop()
 
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
