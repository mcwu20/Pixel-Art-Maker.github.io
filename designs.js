// constants
const colorPicker = $("#colorPicker"),
  sizePicker = $("#sizePicker"),
  pixelCanvas = $("#pixelCanvas"),
  gridHeight = $("#inputHeight"),
  gridWidth = $("#inputWeight");

// makeGrid function based on size input
function makeGrid() {

  let gridSize = "";
  for (let h = 0; h < gridHeight.val(); h++) {
    gridSize += "<tr>";  // adds table row to grid
    for (let w = 0; w < gridWidth.val(); w++) {
      gridSize += "<td></td>";  // adds table column to grid
    }
    gridSize += "</tr>";  // close table row
  }
  pixelCanvas.html(gridSize); // get html version of function makeGrid
  // pixelCanvas.append(gridSize); // add the tr/td of function makeGrid
  colorGrid();  // call function colorGrid

};

// When size is submitted by the user, call makeGrid()
sizePicker.submit(function(evt) {
  pixelCanvas.empty(); // Removes all children elements from table
  event.preventDefault(); // Prevents the default action of resetting everything with clicking submit button
  makeGrid();
});

// changes grids to color picked
function colorGrid() {

  const td = $("#pixelCanvas td");

  // color when drag mouse
  td.on("mousedown", function () {
    isPainting = true;
  });
  $(document).mouseup(function() {
    isPainting = false;
  });
  td.on("mousemove", function() {
    if(isPainting) {
      $(this).css("background-color", colorPicker.val())
    }
  });

  // color on click
  td.click(function() {
    $(this).css("background-color", colorPicker.val());
  });

  // erase when double click
  td.dblclick(function() {
    $(this).css("background-color", "rgba(0,0,0,0)");
  });

};


// // save button
// $("#save").click(function(evt) {
//   $(this).href = pixelCanvas.toDataUrl("image/png");
// })


//audio opacity
$("audio").hover(function() { // full opacity on hover
  $(this).css({opacity: 1});
  $(this).on("mouseleave", function() {
    $(this).css({opacity: 0.5});  // change back to transparent
  });
});

//toggle rainbow & normal heading
$(".switch").click(function() {
  $("h1").toggle();
  $("button").toggle();
});


/* alternate codes

//makeGrid function:
  for (let h = 0; h < gridHeight.val(); h++) {
    pixelCanvas.append("<tr></tr>");  // adds table row to grid
    for (let w = 0; w < gridWidth.val(); w++) {
      pixelCanvas.find($("tr:last")).append("<td></td>");  // adds table column to the last row of the grid
    };
  };
};

//Drag mouse to color:
pixelCanvas.on("mousedown", "td", function () {
  isPainting = true;
});
$(document).mouseup(function() {
  isPainting = false;
});
pixelCanvas.on("mousemove", "td", function() {
  if(isPainting) {
    $(this).css("background-color", colorPicker.val())
  }
});

*/
