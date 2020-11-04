/*------------------NAV------------------*/

//LIGHT AND DARK MODE TOGGLE FOR NAV
$(".light").click(function () {
  $("i", this).toggleClass("fa-toggle-on fa-toggle-off");
  $("i", this).toggleClass("text-dark text-white");
  $(".navbar").toggleClass("navbar-light navbar-dark");
  $(".navbar").toggleClass("bg-light bg-dark");
  $(".navbar-brand").toggleClass("text-dark text-white");
  $(".menu-icon").toggleClass("text-dark text-light");
  $("#level-text").toggleClass("text-dark text-light");
});

// DIFFICULTY SELECTOR
document.getElementById("level-text").innerHTML = "Level One";

$(".difficultySetting01").click(function () {
  document.getElementById("level-text").innerHTML = "Level One";
});

$(".difficultySetting02").click(function () {
  document.getElementById("level-text").innerHTML = "Level Two";
});

$(".difficultySetting03").click(function () {
  document.getElementById("level-text").innerHTML = "Level Three";
});

$(".difficultySetting04").click(function () {
  document.getElementById("level-text").innerHTML = "Level Four";
});

$(".difficultySetting05").click(function () {
  document.getElementById("level-text").innerHTML = "Level Five";
});

//SWITCH MENU ICON
$(".menu-icon").click(function () {
  $("i", this).toggleClass("fa-hand-o-down fa-hand-o-up");
});

/*----------------------DEFAULT GRID--------------------------*/
for (let i = 0; i < 120; i++) {
  $(".level-one").append('<div class="col-1 grey-bg"><img></div>');
  function switchToDark() {
    $(".col-1").toggleClass("grey-bg dark-bg");
  }
}

var defaultGrid = document.getElementsByClassName("col-1");

/*----------------------LEVEL ONE GRID-----------------------*/

/*---------LEVEL ONE FUNCTIONS START HERE------------*/
//isolate first box in level one
function levelOneGridBoxA(j) {
  let boxA = 13;
  let across = 5;
  let nextLine = 12;
  if (
    (j > boxA && j < boxA + across) ||
    (j > boxA + nextLine && j < boxA + nextLine + across) ||
    (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
    (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate second box in level one
function levelOneGridBoxB(j) {
  let boxB = 17;
  let across = 5;
  let nextLine = 12;
  if (
    (j > boxB && j < boxB + across) ||
    (j > boxB + nextLine && j < boxB + nextLine + across) ||
    (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
    (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate third box in level one
function levelOneGridBoxC(j) {
  let boxC = 61;
  let across = 5;
  let nextLine = 12;
  if (
    (j > boxC && j < boxC + across) ||
    (j > boxC + nextLine && j < boxC + nextLine + across) ||
    (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
    (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate fourth box in level one
function levelOneGridBoxD(j) {
  let boxD = 65;
  let across = 5;
  let nextLine = 12;
  if (
    (j > boxD && j < boxD + across) ||
    (j > boxD + nextLine && j < boxD + nextLine + across) ||
    (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
    (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//random number generator - https://codepen.io/meowwwls/pen/jbEJRp
// generates a value while allowing the customization of the minimum and maximum values
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

// https://mika-s.github.io/javascript/colors/hsl/2017/12/05/generating-random-colors-in-javascript.html
function generateHslaColours(saturation, lightness, alpha, amount) {
  let colours = [];
  let huedelta = Math.trunc(360 / amount);

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta;
    colours.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`);
  }

  return colours;
}

//Fisher-Yates (aka Knuth) Shuffle - https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function levelOneGridColours() {
  let saturation = randomVal(40, 100);
  let lightness = randomVal(20, 90);
  let alpha = 1.0;
  let amount = 6;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

/*---------LEVEL ONE FUNCTIONS END HERE------------*/

/*--------------------------------LEVEL ONE---------------------------------*/
$(document).ready(function () {
  //LEVEL ONE GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
  var gridBackColour = "rgba(128, 128, 128, 0.7)";

  for (let j = 0; j < defaultGrid.length; j++) {
    let boxA = 13;
    let boxB = 17;
    let boxC = 61;
    let boxD = 65;
    let across = 5;
    let nextLine = 12;

    //LEVEL ONE - Borders
    if (
      // LEVEL ONE - Top border
      j > boxA - nextLine &&
      j < boxB + across - nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL ONE - left border
      j == boxA ||
      j == boxA + nextLine ||
      j == boxA + 2 * nextLine ||
      j == boxA + 3 * nextLine ||
      j == boxA + 4 * nextLine ||
      j == boxA + 5 * nextLine ||
      j == boxA + 6 * nextLine ||
      j == boxA + 7 * nextLine
    ) {
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL ONE - middle vertical border
      j == boxB ||
      j == boxB + nextLine ||
      j == boxB + 2 * nextLine ||
      j == boxB + 3 * nextLine ||
      j == boxB + 4 * nextLine ||
      j == boxB + 5 * nextLine ||
      j == boxB + 6 * nextLine ||
      j == boxB + 7 * nextLine
    ) {
      if (j == boxB + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - middle horizontal border
      j > boxA + 3 * nextLine &&
      j < boxB + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - right border
      j == boxB + across ||
      j == boxB + across + nextLine ||
      j == boxB + across + 2 * nextLine ||
      j == boxB + across + 3 * nextLine ||
      j == boxB + across + 4 * nextLine ||
      j == boxB + across + 5 * nextLine ||
      j == boxB + across + 6 * nextLine ||
      j == boxB + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL ONE - bottom border
      j > boxC + 4 * nextLine &&
      j < boxD + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL ONE - back colour A A
      levelOneGridBoxA(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour B
      levelOneGridBoxB(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour C
      levelOneGridBoxC(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour D
      levelOneGridBoxD(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL ONE GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED
  var levelOneGridColourArray = levelOneGridColours();

  $("#play").click(function () {
    shuffle(levelOneGridColourArray);
    let colourA = levelOneGridColourArray[0];

    let colourB = levelOneGridColourArray[1];

    var colourArrayShuffle = shuffle([colourA, colourB, colourA, colourB]);
    for (let j = 0; j < defaultGrid.length; j++) {
      let boxA = 13;
      let boxB = 17;
      let boxC = 61;
      let boxD = 65;
      let across = 5;
      let nextLine = 12;

      //SELECTION OF COLOURS

      //LEVEL ONE GRID - colours
      if (
        //LEVEL ONE GRID - colour A
        levelOneGridBoxA(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = defaultGrid[
          j
        ].style.backgroundColor = colourArrayShuffle[0];
      } else if (
        //LEVEL ONE GRID - colour B
        levelOneGridBoxB(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
      } else if (
        //LEVEL ONE - colour C
        levelOneGridBoxC(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
      } else if (
        //LEVEL ONE - colour D
        levelOneGridBoxD(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
      }
    }
  });
});

$(".difficultySetting01").click(function () {
    document.getElementsByClassName("col-1").style.backgroundColor = gridBackColour;
document.getElementsByClassName("col-1").style.border = "none"
  //LEVEL ONE GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
  var gridBackColour = "rgba(128, 128, 128, 0.7)";

  for (let j = 0; j < defaultGrid.length; j++) {
    let boxA = 13;
    let boxB = 17;
    let boxC = 61;
    let boxD = 65;
    let across = 5;
    let nextLine = 12;

    //LEVEL ONE - Borders
    if (
      // LEVEL ONE - Top border
      j > boxA - nextLine &&
      j < boxB + across - nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL ONE - left border
      j == boxA ||
      j == boxA + nextLine ||
      j == boxA + 2 * nextLine ||
      j == boxA + 3 * nextLine ||
      j == boxA + 4 * nextLine ||
      j == boxA + 5 * nextLine ||
      j == boxA + 6 * nextLine ||
      j == boxA + 7 * nextLine
    ) {
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL ONE - middle vertical border
      j == boxB ||
      j == boxB + nextLine ||
      j == boxB + 2 * nextLine ||
      j == boxB + 3 * nextLine ||
      j == boxB + 4 * nextLine ||
      j == boxB + 5 * nextLine ||
      j == boxB + 6 * nextLine ||
      j == boxB + 7 * nextLine
    ) {
      if (j == boxB + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - middle horizontal border
      j > boxA + 3 * nextLine &&
      j < boxB + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - right border
      j == boxB + across ||
      j == boxB + across + nextLine ||
      j == boxB + across + 2 * nextLine ||
      j == boxB + across + 3 * nextLine ||
      j == boxB + across + 4 * nextLine ||
      j == boxB + across + 5 * nextLine ||
      j == boxB + across + 6 * nextLine ||
      j == boxB + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL ONE - bottom border
      j > boxC + 4 * nextLine &&
      j < boxD + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL ONE - back colour A A
      levelOneGridBoxA(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour B
      levelOneGridBoxB(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour C
      levelOneGridBoxC(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour D
      levelOneGridBoxD(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL ONE GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED
  var levelOneGridColourArray = levelOneGridColours();

  $("#play").click(function () {
    shuffle(levelOneGridColourArray);
    let colourA = levelOneGridColourArray[0];

    let colourB = levelOneGridColourArray[1];

    var colourArrayShuffle = shuffle([colourA, colourB, colourA, colourB]);
    for (let j = 0; j < defaultGrid.length; j++) {
      let boxA = 13;
      let boxB = 17;
      let boxC = 61;
      let boxD = 65;
      let across = 5;
      let nextLine = 12;

      //SELECTION OF COLOURS

      //LEVEL ONE GRID - colours
      if (
        //LEVEL ONE GRID - colour A
        levelOneGridBoxA(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = defaultGrid[
          j
        ].style.backgroundColor = colourArrayShuffle[0];
      } else if (
        //LEVEL ONE - colour B
        levelOneGridBoxB(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
      } else if (
        //LEVEL ONE - colour C
        levelOneGridBoxC(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
      } else if (
        //LEVEL ONE - colour D
        levelOneGridBoxD(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
      }
    }
  });
});

/*----------------------LEVEL TWO GRID-----------------------*/

/*---------LEVEL TWO FUNCTIONS START HERE------------*/
//isolate first box in level one
function levelTwoGridBoxA(j) {
  let boxA = 13;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxA && j < boxA + across) ||
    (j > boxA + nextLine && j < boxA + nextLine + across) ||
    (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
    (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate second box in level one
function levelTwoGridBoxB(j) {
   let boxB = 15;
   let across = 3;
    let nextLine = 12;
  if (
    (j > boxB && j < boxB + across) ||
    (j > boxB + nextLine && j < boxB + nextLine + across) ||
    (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
    (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate third box in level one
function levelTwoGridBoxC(j) {
   let boxC = 17;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxC && j < boxC + across) ||
    (j > boxC + nextLine && j < boxC + nextLine + across) ||
    (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
    (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate fourth box in level one
function levelTwoGridBoxD(j) {
  let boxD = 19;
  let across = 3;
    let nextLine = 12;
  if (
    (j > boxD && j < boxD + across) ||
    (j > boxD + nextLine && j < boxD + nextLine + across) ||
    (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
    (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate fifth box in level one
function levelTwoGridBoxE(j) {
  let boxE = 61;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxE && j < boxE + across) ||
    (j > boxE + nextLine && j < boxE + nextLine + across) ||
    (j > boxE + 2 * nextLine && j < boxE + 2 * nextLine + across) ||
    (j > boxE + 3 * nextLine && j < boxE + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate sixth box in level one
function levelTwoGridBoxF(j) {
  let boxF = 63;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxF && j < boxF + across) ||
    (j > boxF + nextLine && j < boxF + nextLine + across) ||
    (j > boxF + 2 * nextLine && j < boxF + 2 * nextLine + across) ||
    (j > boxF + 3 * nextLine && j < boxF + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate seventh box in level one
function levelTwoGridBoxG(j) {
  let boxG = 65;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxG && j < boxG + across) ||
    (j > boxG + nextLine && j < boxG + nextLine + across) ||
    (j > boxG + 2 * nextLine && j < boxG + 2 * nextLine + across) ||
    (j > boxG + 3 * nextLine && j < boxG + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate eight box in level one
function levelTwoGridBoxH(j) {
  let boxH = 67;
  let across = 3;
  let nextLine = 12;
  if (
    (j > boxH && j < boxH + across) ||
    (j > boxH + nextLine && j < boxH + nextLine + across) ||
    (j > boxH + 2 * nextLine && j < boxH + 2 * nextLine + across) ||
    (j > boxH + 3 * nextLine && j < boxH + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}



function levelTwoGridColours() {
  let saturation = randomVal(40, 100);
  let lightness = randomVal(50, 90);
  let alpha = 1.0;
  let amount = 7;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

/*---------LEVEL TWO FUNCTIONS END HERE------------*/


/*--------------------------------LEVEL TWO---------------------------------*/

$(".difficultySetting02").click(function () {
  //LEVEL TWO GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
  var gridBackColour = "rgba(128, 128, 128, 0.7)";

  for (let j = 0; j < defaultGrid.length; j++) {
    let boxA = 13;
    let boxB = 15;
    let boxC = 17;
    let boxD = 19;
    let boxE = 61;
    let boxF = 63;
    let boxG = 65;
    let boxH = 67;
    let across = 3;
    let nextLine = 12;

    //LEVEL TWO - Borders
    if (
      // LEVEL TWO - Top border
      j > boxA - nextLine &&
      j < boxD + across - nextLine
    ) {
        if(j== boxA+3*nextLine){
        defaultGrid[j].style.borderBottom = "1px solid black"; 
        defaultGrid[j].style.borderLeft = "1px solid black"; 

        }
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL TWO - left border
      j == boxA ||
      j == boxA + nextLine ||
      j == boxA + 2 * nextLine ||
      j == boxA + 3 * nextLine ||
      j == boxA + 4 * nextLine ||
      j == boxA + 5 * nextLine ||
      j == boxA + 6 * nextLine ||
      j == boxA + 7 * nextLine
    ) {
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL TWO - first vertical border
      j == boxB ||
      j == boxB + nextLine ||
      j == boxB + 2 * nextLine ||
      j == boxB + 3 * nextLine ||
      j == boxB + 4 * nextLine ||
      j == boxB + 5 * nextLine ||
      j == boxB + 6 * nextLine ||
      j == boxB + 7 * nextLine
    ) {
      if (j == boxB + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } 
    else if (
      //LEVEL TWO - second vertical border
      j == boxC ||
      j == boxC + nextLine ||
      j == boxC + 2 * nextLine ||
      j == boxC + 3 * nextLine ||
      j == boxC + 4 * nextLine ||
      j == boxC + 5 * nextLine ||
      j == boxC + 6 * nextLine ||
      j == boxC + 7 * nextLine
    ) {
      if (j == boxC + 3 * nextLine) {
            defaultGrid[j].style.borderRight = "1px solid black";
            defaultGrid[j].style.borderBottom= "1px solid black";
        
  
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = "blue";
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - third vertical border
      j == boxC + 2 ||
      j == boxC + nextLine + 2 ||
      j == boxC + 2 * nextLine + 2 ||
      j == boxC + 3 * nextLine + 2 ||
      j == boxC + 4 * nextLine + 2 ||
      j == boxC + 5 * nextLine + 2 ||
      j == boxC + 6 * nextLine + 2 ||
      j == boxC + 7 * nextLine + 2
    ) {
      if (j == boxC + 3 * nextLine + 2) {
            defaultGrid[j].style.borderRight = "1px solid black";
            defaultGrid[j].style.borderBottom= "1px solid black";
        
  
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = "blue";
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } 
    else if (
      //LEVEL TWO - middle horizontal border
      j > boxA + 3 * nextLine &&
      j < boxD + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - right border
      j == boxD + across ||
      j == boxD + across + nextLine ||
      j == boxD + across + 2 * nextLine ||
      j == boxD + across + 3 * nextLine ||
      j == boxD + across + 4 * nextLine ||
      j == boxD + across + 5 * nextLine ||
      j == boxD + across + 6 * nextLine ||
      j == boxD + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL TWO - bottom border
      j > boxE + 4 * nextLine &&
      j < boxH  +across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL TWO - back colour A
      levelOneGridBoxA(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour B
      levelOneGridBoxB(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour C
      levelOneGridBoxC(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour D
      levelOneGridBoxD(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL TWO GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED
  var levelTwoGridColourArray = levelTwoGridColours();

  $("#play").click(function () {
    shuffle(levelTwoGridColourArray);
    let colourA = levelTwoGridColourArray[0];

    let colourB = levelTwoGridColourArray[1];

    let colourC = levelTwoGridColourArray[2];

    let colourD = levelTwoGridColourArray[3];

    var colourArrayShuffle = shuffle([colourA, colourB, colourC, colourD, colourA, colourB, colourC, colourD]);
    for (let j = 0; j < defaultGrid.length; j++) {
     
      //SELECTION OF COLOURS

      //LEVEL TWO GRID - colours
      if (
        //LEVEL TWO GRID - colour A
        levelTwoGridBoxA(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = defaultGrid[
          j
        ].style.backgroundColor = colourArrayShuffle[0];
      } else if (
        //LEVEL TWO - colour B
        levelTwoGridBoxB(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
      } else if (
        //LEVEL TWO - colour C
        levelTwoGridBoxC(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
      } else if (
        //LEVEL TWO - colour D
        levelTwoGridBoxD(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
      }else if (
        //LEVEL TWO - colour E
        levelTwoGridBoxE(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[4];
      }
      else if (
        //LEVEL TWO - colour F
        levelTwoGridBoxF(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[5];
      }
        else if (
        //LEVEL TWO - colour G
        levelTwoGridBoxG(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[6];
      }else if (
        //LEVEL TWO - colour H
        levelTwoGridBoxH(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[7];
      }

    }
  });
});

