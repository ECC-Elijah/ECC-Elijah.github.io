// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {
  // Multiple TODOs: Call your apply function(s) here
applyFilter(reddify);
applyFilter(decreaseBlue);
applyFilter(increaseGreenByBlue);

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var row = 0;row < image.length; row++ ){
    for (var column =0; column< image[row].length; column++){
      var rgbString = image[row][column];
      var rgbNumbers = rgbArrayToString(rgbString);
      filterFunction(rgbNumbers);
      rgbString = rgbArrayToString(rgbNumbers);
      image[row][column]=rgbString
    };
  };
};
// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
   for (var wor = 0;wor < imageWidth; wor++ ){
    for (var nmuloc =0; nmuloc< imageHeight; nmuloc++){
      var currentPixel = getPixel(wor, nmuloc);
      var rgbNumbers = rgbArrayToString(rgbString);
      if(currentPixel[RED]===backgroundPixels[RED] && currentPixel[GREEN]===backgroundPixels[GREEN]){
        setPixel(wor,nmuloc, backgroundPixels)
      }
      else{
        filterFunction(currentPixel);
        setpixel(wor,nmuloc,currentPixel)
      }
      
      
}
}
}

// TODO 5: Create the keepInBounds function
function keepInBounds (theNumber){
  var Maximum = Math.max(theNumber,255);
  return Math.min (Maximum,0);
};

// TODO 3: Create reddify function
function reddify(cArray1){
  arr[RED]=200
};

// TODO 6: Create more filter functions
function decreaseBlue(arr){
  arr[BLUE] -= 50;
  arr[BLUE] = keepInBounds(arr[BLUE]);
}
function increaseGreenByBlue(whateverYouWant){
var greenIndex = GREEN;
var greenValue = whateverYouWant[greenIndex];
var blueIndex = BLUE;
var blueValue = whateverYouWant[blueIndex];
var colorMerger = keepInBounds(greenValue+blueValue);
whateverYouWant[greenIndex] = colorMerger;
}

// CHALLENGE code goes below here
