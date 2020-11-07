/*----------------------LEVEL ONE GRID-----------------------*/

/*---------LEVEL ONE FUNCTIONS START HERE------------*/
//isolate first box in level one
function levelOneGridBox1(j) {
  let box1 = 13;
  let across = 5;
  let nextLine = 12;
  if (
    (j > box1 && j < box1 + across) ||
    (j > box1 + nextLine && j < box1 + nextLine + across) ||
    (j > box1 + 2 * nextLine && j < box1 + 2 * nextLine + across) ||
    (j > box1 + 3 * nextLine && j < box1 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate second box in level one
function levelOneGridBox2(j) {
  let box2 = 17;
  let across = 5;
  let nextLine = 12;
  if (
    (j > box2 && j < box2 + across) ||
    (j > box2 + nextLine && j < box2 + nextLine + across) ||
    (j > box2 + 2 * nextLine && j < box2 + 2 * nextLine + across) ||
    (j > box2 + 3 * nextLine && j < box2 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate third box in level one
function levelOneGridBox3(j) {
  let box3 = 61;
  let across = 5;
  let nextLine = 12;
  if (
    (j > box3 && j < box3 + across) ||
    (j > box3 + nextLine && j < box3 + nextLine + across) ||
    (j > box3 + 2 * nextLine && j < box3 + 2 * nextLine + across) ||
    (j > box3 + 3 * nextLine && j < box3 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate fourth box in level one
function levelOneGridBox4(j) {
  let box4 = 65;
  let across = 5;
  let nextLine = 12;
  if (
    (j > box4 && j < box4 + across) ||
    (j > box4 + nextLine && j < box4 + nextLine + across) ||
    (j > box4 + 2 * nextLine && j < box4 + 2 * nextLine + across) ||
    (j > box4 + 3 * nextLine && j < box4 + 3 * nextLine + across)
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
  let saturation = randomVal(80, 90);
  let lightness = randomVal(50, 60);
  let alpha = 1.0;
  let amount = 6;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

/*---------LEVEL ONE FUNCTIONS END HERE------------*/

/*--------------------------------LEVEL ONE---------------------------------*/

//LEVEL ONE GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
var gridBackColour = "rgba(128, 128, 128, 0.7)";

for (let j = 0; j < defaultGrid.length; j++) {
  let box1 = 13;
  let box2 = 17;
  let box3 = 61;
  let box4 = 65;
  let across = 5;
  let nextLine = 12;

  //LEVEL ONE - Borders
  if (
    // LEVEL ONE - Top border
    j > box1 - nextLine &&
    j < box2 + across - nextLine
  ) {
    defaultGrid[j].style.borderBottom = "1px solid black";
  } else if (
    //LEVEL ONE - left border
    j == box1 ||
    j == box1 + nextLine ||
    j == box1 + 2 * nextLine ||
    j == box1 + 3 * nextLine ||
    j == box1 + 4 * nextLine ||
    j == box1 + 5 * nextLine ||
    j == box1 + 6 * nextLine ||
    j == box1 + 7 * nextLine
  ) {
    defaultGrid[j].style.borderRight = "1px solid black";
  } else if (
    //LEVEL ONE - middle vertical border
    j == box2 ||
    j == box2 + nextLine ||
    j == box2 + 2 * nextLine ||
    j == box2 + 3 * nextLine ||
    j == box2 + 4 * nextLine ||
    j == box2 + 5 * nextLine ||
    j == box2 + 6 * nextLine ||
    j == box2 + 7 * nextLine
  ) {
    if (j == box2 + 3 * nextLine) {
      defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else defaultGrid[j].style.borderRight = "1px solid black";
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - middle horizontal border
    j > box1 + 3 * nextLine &&
    j < box2 + across + 3 * nextLine
  ) {
    defaultGrid[j].style.borderBottom = "1px solid black";
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - right border
    j == box2 + across ||
    j == box2 + across + nextLine ||
    j == box2 + across + 2 * nextLine ||
    j == box2 + across + 3 * nextLine ||
    j == box2 + across + 4 * nextLine ||
    j == box2 + across + 5 * nextLine ||
    j == box2 + across + 6 * nextLine ||
    j == box2 + across + 7 * nextLine
  ) {
    defaultGrid[j].style.borderLeft = "1px solid black";
  } else if (
    //LEVEL ONE - bottom border
    j > box3 + 4 * nextLine &&
    j < box4 + across + 4 * nextLine
  ) {
    defaultGrid[j].style.borderTop = "1px solid black";
  } else if (
    //LEVEL ONE - back colour A A
    levelOneGridBox1(j) == true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - back colour B
    levelOneGridBox2(j) == true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - back colour C
    levelOneGridBox3(j) == true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - back colour D
    levelOneGridBox4(j) == true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else {
    document.getElementById("darkMode").addEventListener("click", switchToDark);
  }
}

//LEVEL ONE GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED
var levelOneGridColourArray = levelOneGridColours();

$("#play").click(function () {
  shuffle(levelOneGridColourArray);
  let colour1 = levelOneGridColourArray[0];

  let colour2 = levelOneGridColourArray[1];

  var colourArrayShuffle = shuffle([colour1, colour2, colour1, colour2]);
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL ONE GRID - colours
    if (
      //LEVEL ONE GRID - colour A
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[0];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE GRID - colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE - colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE - colour D
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
      defaultGrid[j].classList.add("boxes");
    }
    //flip to backside after interval
    setTimeout(flipToBack, 2000);

    console.log(colourArrayShuffle);

    //re-assign colour to boxes on click

    //LEVEL ONE GRID - colours

    //LEVEL ONE GRID - colour A
    if (
      document.getElementsByClassName(".col-1").clicked == true &&
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[0];
    } else if (
      //LEVEL ONE - colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
    } else if (
      //LEVEL ONE - colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
    } else if (
      //LEVEL ONE - colour D
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
    }
  }
});

$(".difficultySetting01").click(function () {
  reset();

  //LEVEL ONE GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
  var gridBackColour = "rgba(128, 128, 128, 0.7)";

  for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 17;
    let box3 = 61;
    let box4 = 65;
    let across = 5;
    let nextLine = 12;

    //LEVEL ONE - Borders
    if (
      // LEVEL ONE - Top border
      j > box1 - nextLine &&
      j < box2 + across - nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL ONE - left border
      j == box1 ||
      j == box1 + nextLine ||
      j == box1 + 2 * nextLine ||
      j == box1 + 3 * nextLine ||
      j == box1 + 4 * nextLine ||
      j == box1 + 5 * nextLine ||
      j == box1 + 6 * nextLine ||
      j == box1 + 7 * nextLine
    ) {
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL ONE - middle vertical border
      j == box2 ||
      j == box2 + nextLine ||
      j == box2 + 2 * nextLine ||
      j == box2 + 3 * nextLine ||
      j == box2 + 4 * nextLine ||
      j == box2 + 5 * nextLine ||
      j == box2 + 6 * nextLine ||
      j == box2 + 7 * nextLine
    ) {
      if (j == box2 + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - middle horizontal border
      j > box1 + 3 * nextLine &&
      j < box2 + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - right border
      j == box2 + across ||
      j == box2 + across + nextLine ||
      j == box2 + across + 2 * nextLine ||
      j == box2 + across + 3 * nextLine ||
      j == box2 + across + 4 * nextLine ||
      j == box2 + across + 5 * nextLine ||
      j == box2 + across + 6 * nextLine ||
      j == box2 + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL ONE - bottom border
      j > box3 + 4 * nextLine &&
      j < box4 + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL ONE - back colour A A
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL ONE - back colour D
      levelOneGridBox4(j) == true
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
    let colour1 = levelOneGridColourArray[0];

    let colour2 = levelOneGridColourArray[1];

    var colourArrayShuffle = shuffle([colour1, colour2, colour1, colour2]);
    for (let j = 0; j < defaultGrid.length; j++) {
      //SELECTION OF COLOURS

      //LEVEL ONE GRID - colours
      if (
        //LEVEL ONE GRID - colour A
        levelOneGridBox1(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[0];
      } else if (
        //LEVEL ONE - colour B
        levelOneGridBox2(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
      } else if (
        //LEVEL ONE - colour C
        levelOneGridBox3(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
      } else if (
        //LEVEL ONE - colour D
        levelOneGridBox4(j) == true
      ) {
        defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
      }
    }

    //flip to backside after interval
    setTimeout(flipToBack, 2000);

    //re-assign colour to boxes on click

    //LEVEL ONE GRID - colours

    //LEVEL ONE GRID - colour A
    if (levelOneGridBox1(j).clicked == true && levelOneGridBox1(j) == true) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[0];
    } else if (
      //LEVEL ONE - colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
    } else if (
      //LEVEL ONE - colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[2];
    } else if (
      //LEVEL ONE - colour D
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[3];
    }
  });
});
