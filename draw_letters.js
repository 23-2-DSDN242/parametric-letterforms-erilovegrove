/* these are optional special variables which will change the system */
var systemBackgroundColor = "#0c0c1c";
var systemLineColor = 0;
var systemBoxColor = "#C73869";

/* internal constants */
const darkGreen  = "#26b29d";
const lightGreen  = "#30dfc4";
const strokeColor =  "#b9faf7"



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


  
    drawingContext.shadowColor = color("#99e0dd");
    drawingContext.shadowBlur = 32;

  
  

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
  let line3ychange = letterData ["line3y"];
  let line1xchange = letterData ["line1x"];
  let translatechange = letterData ["translate"];
  let line1x2change = letterData ["line1x2"];
  let line3ychange2 = letterData ["line3y2"];
  let line4xchange = letterData ["line4x"];

  
translate (translatechange, 0);

  strokeWeight (10);
  line (line1xchange, line1y, line1x2change, line1y);
  line (line2x, line2ychange, line2xchange, line2y);
  line (line1xchange, line3ychange, line3x, line3ychange2);

  line (line4xchange, line4ychange, line4xchange, line4y);
 

  noFill();
 
  arc(arc1x, 110, diameterchange1, diameterchange1, -PI / 2, PI / 2, OPEN)
  arc(arc2x, arc2y, diameterchange, diameterchange, negativechange * -PI / 2, negativechange * PI / 2, OPEN);
  



}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  if(percent < 50){
    new_letter["arcdiameter"] = map(percent, 0, 50, oldObj["arcdiameter"], 0);

  }else {
    new_letter ["arcdiameter"] = map(percent, 50, 100, 0, newObj ["arcdiameter"]);
  }

  if(percent < 50){
    new_letter["arcdiameter1"] = map(percent, 0, 50, oldObj["arcdiameter1"], 0);

  }else {
    new_letter ["arcdiameter1"] = map(percent, 50, 100, 0, newObj ["arcdiameter1"]);
  } 

  if(percent < 50){
    new_letter["line4length"] = map(percent, 0, 50, oldObj["line4length"], 100);

  }else {
    new_letter ["line4length"] = map(percent, 50, 100, 100, newObj ["line4length"]);
  } 

  if(percent < 50){
    new_letter["line4yposition"] = map(percent, 0, 50, oldObj["line4yposition"], 100);

  }else {
    new_letter ["line4yposition"] = map(percent, 50, 100, 100, newObj ["line4yposition"]);
  } 

  if(percent < 50){
    new_letter["line4yposition"] = map(percent, 0, 50, oldObj["line4yposition"], 100);

  }else {
    new_letter ["line4yposition"] = map(percent, 50, 100, 100, newObj ["line4yposition"]);
  } 


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
  new_letter["translate"] = map(percent, 0, 100, oldObj["translate"], newObj["translate"]);
  new_letter["line1x2"] = map(percent, 0, 100, oldObj["line1x2"], newObj["line1x2"]);
  new_letter["line4x"] = map(percent, 0, 100, oldObj["line4x"], newObj["line4x"]);
  return new_letter;
}

var swapWords = [
  "YEAR3000",
  "SPACEAGE",
  "GALACTIA",
  "HOLOGRAM"
]
