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

//LEVEL ONE GRID STRUCTURE ON PAGE LOAD
var gridBackColour = "rgba(128, 128, 128, 0.7)";

// DEFAULT GRID STRUCTURE
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
    //LEVEL ONE - back colour A
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

var levelOneGridColourArray = levelOneGridColours();
shuffle(levelOneGridColourArray);
var colour1 = levelOneGridColourArray[0];

var colour2 = levelOneGridColourArray[1];

var colourArrayShuffleOne = shuffle([colour1, colour2, colour1, colour2]);

//assign classes to each box
for (let j = 0; j < defaultGrid.length; j++) {
  //SELECTION OF COLOURS

  //LEVEL ONE GRID - colours
  if (
    //LEVEL ONE GRID - colour A
    levelOneGridBox1(j) == true
  ) {
    defaultGrid[j].classList.add("levelOneBox1");
  } else if (
    //LEVEL ONE GRID - colour B
    levelOneGridBox2(j) == true
  ) {
    defaultGrid[j].classList.add("levelOneBox2");
  } else if (
    //LEVEL ONE - colour C
    levelOneGridBox3(j) == true
  ) {
    defaultGrid[j].classList.add("levelOneBox3");
  } else if (
    //LEVEL ONE - colour D
    levelOneGridBox4(j) == true
  ) {
    defaultGrid[j].classList.add("levelOneBox4");
  }
}

var playCounter = 0;
var clickCounter = 0;
var flippedCards = 0;


$("#play").click(function () {
  clickCounter = 0;
  flippedCards = 0;
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL ONE GRID - colours
    if (
      //LEVEL ONE GRID - colour A
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffleOne[0];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE GRID - colour B
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffleOne[1];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE - colour C
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffleOne[2];
      defaultGrid[j].classList.add("boxes");
    } else if (
      //LEVEL ONE - colour D
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffleOne[3];
      defaultGrid[j].classList.add("boxes");
    }

    //flip to backside after interval
    setTimeout(flipToBack, 100);
  }
  playCounter++;
 
  $("#play").fadeOut();
});

$(".levelOneBox1").click(function () {
    
  let levelOneBox1 = $(".levelOneBox1");
  let levelOneBox2 = $(".levelOneBox2");
  let levelOneBox3 = $(".levelOneBox3");
  let levelOneBox4 = $(".levelOneBox4");

  function checkColour() {
    for (let j = 0; j < levelOneBox1.length; j++) {
      if (levelOneBox1[j].style.backgroundColor == gridBackColour) {
        return true;
      } else {
        return false;
      }
    }
  }

  if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
    for (let i = 0; i < levelOneBox1.length; i++) {
      levelOneBox1[i].style.backgroundColor = colourArrayShuffleOne[0];
      if (clickCounter > 0 && flippedCards % 2 == 0) {
        if (
          levelOneBox1[i].style.backgroundColor ==
            levelOneBox2[i].style.backgroundColor ||
          levelOneBox1[i].style.backgroundColor ==
            levelOneBox3[i].style.backgroundColor ||
          levelOneBox1[i].style.backgroundColor ==
            levelOneBox4[i].style.backgroundColor
        ) {
          levelOneBox1[i].style.backgroundColor = colourArrayShuffleOne[0];
          flippedCards++;
        } else if (
            levelOneBox1[i].style.backgroundColor == colourArrayShuffleOne[0]
          ) {
            levelOneBox1[i].style.backgroundColor = colourArrayShuffleOne[0];
          }else {
          setTimeout(function () {
            levelOneBox1[i].style.backgroundColor = gridBackColour;
          }, 500);
        }
      }
    }
  }
  clickCounter++;

});

$(".levelOneBox2").click(function () {
  
  let levelOneBox1 = $(".levelOneBox1");
  let levelOneBox2 = $(".levelOneBox2");
  let levelOneBox3 = $(".levelOneBox3");
  let levelOneBox4 = $(".levelOneBox4");

  function checkColour() {
    for (let j = 0; j < levelOneBox2.length; j++) {
      if (levelOneBox2[j].style.backgroundColor == gridBackColour) {
        return true;
      } else {
        return false;
      }
    }
  }

  if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
    for (let i = 0; i < levelOneBox2.length; i++) {
      levelOneBox2[i].style.backgroundColor = colourArrayShuffleOne[1];
      if (clickCounter > 0 && flippedCards % 2 == 0) {
        if (
          levelOneBox2[i].style.backgroundColor ==
            levelOneBox1[i].style.backgroundColor ||
          levelOneBox2[i].style.backgroundColor ==
            levelOneBox3[i].style.backgroundColor ||
          levelOneBox2[i].style.backgroundColor ==
            levelOneBox4[i].style.backgroundColor
        ) {
          levelOneBox2[i].style.backgroundColor = colourArrayShuffleOne[1];
          flippedCards++;
        } else if (
          levelOneBox2[i].style.backgroundColor == colourArrayShuffleOne[1]
        ) {
          levelOneBox2[i].style.backgroundColor = colourArrayShuffleOne[1];
        } else {
          setTimeout(function () {
            levelOneBox2[i].style.backgroundColor = gridBackColour;
          }, 500);
        }
      }
    }
  }
  clickCounter++;

});

$(".levelOneBox3").click(function () {
  
  let levelOneBox1 = $(".levelOneBox1");
  let levelOneBox2 = $(".levelOneBox2");
  let levelOneBox3 = $(".levelOneBox3");
  let levelOneBox4 = $(".levelOneBox4");

  function checkColour() {
    for (let j = 0; j < levelOneBox3.length; j++) {
      if (levelOneBox3[j].style.backgroundColor == gridBackColour) {
        return true;
      } else {
        return false;
      }
    }
  }

  if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
    for (let i = 0; i < levelOneBox3.length; i++) {
      levelOneBox3[i].style.backgroundColor = colourArrayShuffleOne[2];
      if (clickCounter > 0 && flippedCards % 2 == 0) {
        if (
          levelOneBox3[i].style.backgroundColor ==
            levelOneBox2[i].style.backgroundColor ||
          levelOneBox3[i].style.backgroundColor ==
            levelOneBox1[i].style.backgroundColor ||
          levelOneBox3[i].style.backgroundColor ==
            levelOneBox4[i].style.backgroundColor
        ) {
          levelOneBox3[i].style.backgroundColor = colourArrayShuffleOne[2];
          flippedCards++;
        } else if (
          levelOneBox3[i].style.backgroundColor == colourArrayShuffleOne[2]
        ) {
          levelOneBox3[i].style.backgroundColor = colourArrayShuffleOne[2];
        } else {
          setTimeout(function () {
            levelOneBox3[i].style.backgroundColor = gridBackColour;
          }, 500);
        }
      }
    }
  }
  clickCounter++;

});

$(".levelOneBox4").click(function () {
    
  let levelOneBox1 = $(".levelOneBox1");
  let levelOneBox2 = $(".levelOneBox2");
  let levelOneBox3 = $(".levelOneBox3");
  let levelOneBox4 = $(".levelOneBox4");

  function checkColour() {
    for (let j = 0; j < levelOneBox4.length; j++) {
      if (levelOneBox4[j].style.backgroundColor == gridBackColour) {
        return true;
      } else {
        return false;
      }
    }
  }

  if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
    for (let i = 0; i < levelOneBox4.length; i++) {
      levelOneBox4[i].style.backgroundColor = colourArrayShuffleOne[3];
      if (clickCounter > 0 && flippedCards % 2 == 0) {
        if (
          levelOneBox4[i].style.backgroundColor ==
            levelOneBox2[i].style.backgroundColor ||
          levelOneBox4[i].style.backgroundColor ==
            levelOneBox3[i].style.backgroundColor ||
          levelOneBox4[i].style.backgroundColor ==
            levelOneBox1[i].style.backgroundColor
        ) {
          levelOneBox4[i].style.backgroundColor = colourArrayShuffleOne[3];
          flippedCards++;
        } else if (
          levelOneBox4[i].style.backgroundColor == colourArrayShuffleOne[3]
        ) {
          levelOneBox4[i].style.backgroundColor = colourArrayShuffleOne[3];
        } else {
          setTimeout(function () {
            levelOneBox4[i].style.backgroundColor = gridBackColour;
          }, 500);
        }
      }
    }
  }
  clickCounter++;

});

//ON-CLICK FOR DIFFICULTY SELECTOR STARTS HERE
$(".difficultySetting01").click(function () {

    reset();
  
  levelOneGridColourArray = [];
  levelOneGridColourArray = levelOneGridColours();
  shuffle(levelOneGridColourArray);
  $("#play").fadeIn();

  colour1 = levelOneGridColourArray[0];
  colour2 = levelOneGridColourArray[1];
  colourArrayShuffleOne = shuffle([colour1, colour2, colour1, colour2]);

  playCounter = 0;
  clickCounter = 0;
  flippedCards = 0;

});
