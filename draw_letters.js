/* these are optional special variables which will change the system */
var systemBackgroundColor = "#acf2e7";
var systemLineColor = "#000090";
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor  = "#0a2d27";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(4);

  // determine parameters for second circle
  let diameterchange = letterData ["arcdiameter"];
  let negativechange = letterData ["arcdirection"];
  let line2ychange = letterData ["line2y"];
  let line3y = letterData ["line3length"];
  let arc1x = letterData ["arc1xposition"];
  let arc2x = letterData ["arc2xposition"];
  let arc2y = letterData ["arc2yposition"];
  let line2xchange = letterData ["line2xlength"];
  let line2x = letterData ["line2xposition"];
  let line2y = letterData ["line2ylength"]

  
  strokeWeight (10);
  line (30, 80, 85, 80);
  line (line2x, line2ychange, line2xchange, line2y);
  line (30, 120, 85, 120);

  line (30, 80, 30, line3y);
 

  noFill();
 
  arc(arc1x, 90, 20, 20, -PI / 2, PI / 2, OPEN)
  // arc(arc1x, 110, 20, 20, -PI / 2, PI / 2, OPEN)
  arc(arc2x, arc2y, diameterchange, diameterchange, negativechange * -PI / 2, negativechange * PI / 2, OPEN);

  // arc(arc2x, arc2y, diameterchange, diameterchange, negativechange * PI / 2, negativechange * -PI / 2);
  // arc(arc1x, 110, diameterchange, diameterchange, negativechange * PI / 2, negativechange * -PI / 2);

  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
