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

// colour functions
//random number generator - https:// codepen.io / meowwwls / pen / jbEJRp;
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

//create colours
function GridColours() {
  let saturation = randomVal(80, 90);
  let lightness = randomVal(50, 60);
  let alpha = 1.0;
  let amount = 32;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

// universal colour array
var GridColourArray = GridColours();

// level one colours

shuffle(GridColourArray);
var levelOneColour1 = GridColourArray[0];
var levelOneColour2 = GridColourArray[1];
var colourArrayShuffleOne = shuffle([
  levelOneColour1,
  levelOneColour2,
  levelOneColour1,
  levelOneColour2,
]);

//level two colours
shuffle(GridColourArray);
var levelTwoColour1 = GridColourArray[0];
var levelTwoColour2 = GridColourArray[1];
var levelTwoColour3 = GridColourArray[2];
var levelTwoColour4 = GridColourArray[3];

var colourArrayShuffleTwo = shuffle([
  levelTwoColour1,
  levelTwoColour2,
  levelTwoColour3,
  levelTwoColour4,
  levelTwoColour1,
  levelTwoColour2,
  levelTwoColour3,
  levelTwoColour4,
]);

//level three colours
shuffle(GridColourArray);
var levelThreeColour1 = GridColourArray[0];
var levelThreeColour2 = GridColourArray[1];
var levelThreeColour3 = GridColourArray[2];
var levelThreeColour4 = GridColourArray[3];
var levelThreeColour5 = GridColourArray[4];
var levelThreeColour6 = GridColourArray[5];
var levelThreeColour7 = GridColourArray[6];
var levelThreeColour8 = GridColourArray[7];

var colourArrayShuffleThree = shuffle([
  levelThreeColour1,
  levelThreeColour2,
  levelThreeColour3,
  levelThreeColour4,
  levelThreeColour5,
  levelThreeColour6,
  levelThreeColour7,
  levelThreeColour8,
  levelThreeColour1,
  levelThreeColour2,
  levelThreeColour3,
  levelThreeColour4,
  levelThreeColour5,
  levelThreeColour6,
  levelThreeColour7,
  levelThreeColour8
]);

// level four colours

var levelFourColour1 = GridColourArray[0];
var levelFourColour2 = GridColourArray[1];
var levelFourColour3 = GridColourArray[2];
var levelFourColour4 = GridColourArray[3];
var levelFourColour5 = GridColourArray[4];
var levelFourColour6 = GridColourArray[5];
var levelFourColour7 = GridColourArray[6];
var levelFourColour8 = GridColourArray[7];
var levelFourColour9 = GridColourArray[8];
var levelFourColour10 = GridColourArray[9];
var levelFourColour11 = GridColourArray[10];
var levelFourColour12 = GridColourArray[11];
var levelFourColour13 = GridColourArray[12];
var levelFourColour14 = GridColourArray[13];
var levelFourColour15 = GridColourArray[14];
var levelFourColour16 = GridColourArray[15];

var colourArrayShuffleFour = shuffle([
  levelFourColour1,
  levelFourColour2,
  levelFourColour3,
  levelFourColour4,
  levelFourColour5,
  levelFourColour6,
  levelFourColour7,
  levelFourColour8,
  levelFourColour9,
  levelFourColour10,
  levelFourColour11,
  levelFourColour12,
  levelFourColour13,
  levelFourColour14,
  levelFourColour15,
  levelFourColour16,
  levelFourColour1,
  levelFourColour2,
  levelFourColour3,
  levelFourColour4,
  levelFourColour5,
  levelFourColour6,
  levelFourColour7,
  levelFourColour8,
  levelFourColour9,
  levelFourColour10,
  levelFourColour11,
  levelFourColour12,
  levelFourColour13,
  levelFourColour14,
  levelFourColour15,
  levelFourColour16,
]);

// create objects to store all colours
var levelOneObj = {
  box1: colourArrayShuffleOne[0],
  box2: colourArrayShuffleOne[1],
  box3: colourArrayShuffleOne[2],
  box4: colourArrayShuffleOne[3],
};

var levelTwoObj = {
  box1: colourArrayShuffleTwo[0],
  box2: colourArrayShuffleTwo[1],
  box3: colourArrayShuffleTwo[2],
  box4: colourArrayShuffleTwo[3],
  box5: colourArrayShuffleTwo[4],
  box6: colourArrayShuffleTwo[5],
  box7: colourArrayShuffleTwo[6],
  box8: colourArrayShuffleTwo[7],
};

var levelThreeObj = {
  box1: colourArrayShuffleThree[0],
  box2: colourArrayShuffleThree[1],
  box3: colourArrayShuffleThree[2],
  box4: colourArrayShuffleThree[3],
  box5: colourArrayShuffleThree[4],
  box6: colourArrayShuffleThree[5],
  box7: colourArrayShuffleThree[6],
  box8: colourArrayShuffleThree[7],
  box9: colourArrayShuffleThree[8],
  box10: colourArrayShuffleThree[9],
  box11: colourArrayShuffleThree[10],
  box12: colourArrayShuffleThree[11],
  box13: colourArrayShuffleThree[12],
  box14: colourArrayShuffleThree[13],
  box15: colourArrayShuffleThree[14],
  box16: colourArrayShuffleThree[15],
};

var levelFourObj = {
  box1: colourArrayShuffleFour[0],
  box2: colourArrayShuffleFour[1],
  box3: colourArrayShuffleFour[2],
  box4: colourArrayShuffleFour[3],
  box5: colourArrayShuffleFour[4],
  box6: colourArrayShuffleFour[5],
  box7: colourArrayShuffleFour[6],
  box8: colourArrayShuffleFour[7],
  box9: colourArrayShuffleFour[8],
  box10: colourArrayShuffleFour[9],
  box11: colourArrayShuffleFour[10],
  box12: colourArrayShuffleFour[11],
  box13: colourArrayShuffleFour[12],
  box14: colourArrayShuffleFour[13],
  box15: colourArrayShuffleFour[14],
  box16: colourArrayShuffleFour[15],
  box17: colourArrayShuffleFour[16],
  box18: colourArrayShuffleFour[17],
  box19: colourArrayShuffleFour[18],
  box20: colourArrayShuffleFour[19],
  box21: colourArrayShuffleFour[20],
  box22: colourArrayShuffleFour[21],
  box23: colourArrayShuffleFour[22],
  box24: colourArrayShuffleFour[23],
  box25: colourArrayShuffleFour[24],
  box26: colourArrayShuffleFour[25],
  box27: colourArrayShuffleFour[26],
  box28: colourArrayShuffleFour[27],
  box29: colourArrayShuffleFour[28],
  box30: colourArrayShuffleFour[29],
  box31: colourArrayShuffleFour[30],
  box32: colourArrayShuffleFour[31],
};

var choiceOne = false;
var choiceTwo = false;



function checkColour(id, boxClass, boxObj) {
  let box = document.getElementsByClassName(boxClass);

  function sameColour() {
    for (let j = 0; j < box.length; j++) {
      if (box[j].style.backgroundColor == gridBackColour) {
        return true;
      } else {
        return false;
      }
    }
  }

  if (sameColour()) {
    for (let i = 0; i < box.length; i++) {
      box[i].style.backgroundColor = boxObj[id];
    }

    if (!choiceOne) {
      choiceOne = boxObj[id];

      for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = boxObj[id];
      }
    } else {
      if (boxObj[id] == choiceOne) {
        for (let i = 0; i < box.length; i++) {
          box[i].style.backgroundColor = boxObj[id];

          choiceOne = false;
        }
      } else {
        setTimeout(function () {
          for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = gridBackColour;
          }
        }, 100);
      }
    }
  }
  console.log(choiceOne, choiceTwo);
}

function reset() {
  //RESET STARTS HERE

  for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 17;
    let box3 = 61;
    let box4 = 65;
    let across = 5;
    let nextLine = 12;
    defaultGrid[j].style.border = "none";
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

  //RESET ENDS HERE
}

function resetClasses(defaultGrid,level) {
  for (let i = 0; i < defaultGrid.length; i++) {
    defaultGrid[i].classList.remove(level+"Box1");
    defaultGrid[i].classList.remove(level+"Box2");
    defaultGrid[i].classList.remove(level+"Box3");
    defaultGrid[i].classList.remove(level+"Box4");
    defaultGrid[i].classList.remove(level+"Box5");
    defaultGrid[i].classList.remove(level+"Box6");
    defaultGrid[i].classList.remove(level+"Box7");
    defaultGrid[i].classList.remove(level+"Box8");
    defaultGrid[i].classList.remove(level+"Box9");
    defaultGrid[i].classList.remove(level+"Box10");
    defaultGrid[i].classList.remove(level+"Box11");
    defaultGrid[i].classList.remove(level+"Box12");
    defaultGrid[i].classList.remove(level+"Box13");
    defaultGrid[i].classList.remove(level+"Box14");
    defaultGrid[i].classList.remove(level+"Box15");
    defaultGrid[i].classList.remove(level+"Box16");
    defaultGrid[i].classList.remove(level+"Box16");
    defaultGrid[i].classList.remove(level+"Box17");
    defaultGrid[i].classList.remove(level+"Box18");
    defaultGrid[i].classList.remove(level+"Box19");
    defaultGrid[i].classList.remove(level+"Box20");
    defaultGrid[i].classList.remove(level+"Box21");
    defaultGrid[i].classList.remove(level+"Box22");
    defaultGrid[i].classList.remove(level+"Box23");
    defaultGrid[i].classList.remove(level+"Box24");
    defaultGrid[i].classList.remove(level+"Box25");
    defaultGrid[i].classList.remove(level+"Box26");
    defaultGrid[i].classList.remove(level+"Box27");
    defaultGrid[i].classList.remove(level+"Box28");
    defaultGrid[i].classList.remove(level+"Box29");
    defaultGrid[i].classList.remove(level+"Box30");
    defaultGrid[i].classList.remove(level+"Box31");
    defaultGrid[i].classList.remove(level+"Box32");
  }
  return defaultGrid;
}

function flipToBack(j) {
  let boxes = document.getElementsByClassName("boxes");
  for (j = 0; j < boxes.length; j++) {
    boxes[j].style.backgroundColor = gridBackColour;
  }
}
