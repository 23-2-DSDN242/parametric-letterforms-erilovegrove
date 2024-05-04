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
  let line4y = letterData ["line4length"];
  let arc1x = letterData ["arc1xposition"];
  let arc2x = letterData ["arc2xposition"];
  let arc2y = letterData ["arc2yposition"];
  let line2xchange = letterData ["line2xlength"];
  let line2x = letterData ["line2xposition"];
  let line2y = letterData ["line2ylength"];
  let diameterchange1 = letterData ["arcdiameter1"];
  let line3x = letterData ["line3length"];
  let line1y = letterData ["line1ylength"];
  let line4ychange = letterData ["line4yposition"];
  let smalldiameterchange = letterData ["smallarcdiameter"];
  let line3ychange = letterData ["line3y"];
  let line1xchange = letterData ["line1x"];
  let translatechange = letterData ["translate"];
  let line1x2change = letterData ["line1x2"];
  let line3ychange2 = letterData ["line3y2"]

  
translate (translatechange, 0);

  strokeWeight (10);
  line (line1xchange, line1y, line1x2change, line1y);
  line (line2x, line2ychange, line2xchange, line2y);
  line (line1xchange, line3ychange, line3x, line3ychange2);

  line (20, line4ychange, 20, line4y);
 

  noFill();
 
  arc(arc1x, 110, diameterchange1, diameterchange1, -PI / 2, PI / 2, OPEN)
  arc(arc2x, arc2y, diameterchange, diameterchange, negativechange * -PI / 2, negativechange * PI / 2, OPEN);
  
  arc(85, 90, smalldiameterchange, smalldiameterchange, -HALF_PI, 0);
  arc(30,90, smalldiameterchange, smalldiameterchange, -PI, -HALF_PI);
  
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 50){
    new_letter["arcdiameter"] = map(percent, 0, 50, oldObj["arcdiameter"], 100);

  }else {
    new_letter ["size"] = map(percent, 50, 100, 100, newObj ["arcdiameter"]);
  }

  new_letter["arcdiameter1"]    = map(percent, 0, 100, oldObj["arcdiameter1"], newObj["arcdiameter1"]);
  new_letter["arcdiameter"] = map(percent, 0, 100, oldObj["arcdiameter"], newObj["arcdiameter"]);
  new_letter["arcdirection"] = map(percent, 0, 100, oldObj["arcdirection"], newObj["arcdirection"]);
  new_letter["arc1xposition"] = map(percent, 0, 100, oldObj["arc1xposition"], newObj["arc1xposition"]);
  new_letter["arc2xposition"] = map(percent, 0, 100, oldObj["arc2xposition"], newObj["arc2xposition"]);
  new_letter["arc2yposition"] = map(percent, 0, 100, oldObj["arc2yposition"], newObj["arc2yposition"]);
  new_letter["line1x"] = map(percent, 0, 100, oldObj["line1x"], newObj["line1x"]);
  new_letter["line1ylength"] = map(percent, 0, 100, oldObj["line1ylength"], newObj["line1ylength"]);
  new_letter["line2xlength"] = map(percent, 0, 100, oldObj["line2xlength"], newObj["line2xlength"]);
  new_letter["line2xposition"] = map(percent, 0, 100, oldObj["line2xposition"], newObj["line2xposition"]);
  new_letter["line2ylength"] = map(percent, 0, 100, oldObj["line2ylength"], newObj["line2ylength"]);
  new_letter["line2y"] = map(percent, 0, 100, oldObj["line2y"], newObj["line2y"]);
  new_letter["line3length"] = map(percent, 0, 100, oldObj["line3length"], newObj["line3length"]);
  new_letter["line3y"] = map(percent, 0, 100, oldObj["line3y"], newObj["line3y"]);
  new_letter["line3y2"] = map(percent, 0, 100, oldObj["line3y2"], newObj["line3y2"]);
  new_letter["line4length"] = map(percent, 0, 100, oldObj["line4length"], newObj["line4length"]);
  new_letter["line4yposition"] = map(percent, 0, 100, oldObj["line4yposition"], newObj["line4yposition"]);
  new_letter["smallarcdiameter"] = map(percent, 0, 100, oldObj["smallarcdiameter"], newObj["smallarcdiameter"]);
  new_letter["translate"] = map(percent, 0, 100, oldObj["translate"], newObj["translate"]);
  new_letter["line1x2"] = map(percent, 0, 100, oldObj["line1x2"], newObj["line1x2"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
