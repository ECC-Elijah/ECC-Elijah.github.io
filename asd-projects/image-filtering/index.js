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
applyFilter();
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here

function applyFilter(filterFunction) {
  for (var row = 0;row < image.length; row++ ){
    for (var colors =0; colors< image[row].length; colors++){
reddify
    };
  };
};
// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds (theNumber){
  var Maximum = Math.max(theNumber,255);
  return Math.min (Maximum,0);
};

// TODO 3: Create reddify function
function reddify(cArray1){};

// TODO 6: Create more filter functions


// CHALLENGE code goes below here