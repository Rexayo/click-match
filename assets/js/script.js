
/*------------------NAV------------------*/

//LIGHT AND DARK MODE TOGGLE FOR NAV
$("#darkMode").click(function () {
  $("i", this).toggleClass("fa-toggle-off fa-toggle-on");

  if (document.getElementById("darkModeLabel").innerHTML == " dark mode") {
    document.getElementById("darkModeLabel").innerHTML = " light mode";
  } else {
    document.getElementById("darkModeLabel").innerHTML = " dark mode";
  }
  $("#hint").toggleClass("hint-light hint-dark");

  $(".game-stats").toggleClass("text-dark text-white");
  $(".game-stats").toggleClass("grey-bg dark-bg");
  $(".game-stats").toggleClass("dark-outline white-outline");

  $("#game-info").toggleClass("grey-bg dark-bg");
});

// DIFFICULTY SELECTOR & HINT
document.getElementById("level-text").innerHTML = "Level O1";
document.getElementById("hint").innerHTML =
  " HINT: Click on gamepad icon to start";

$(".difficultySetting01").click(function () {
  document.getElementById("level-text").innerHTML = "Level O1";
  document.getElementById("hint").innerHTML =
    " HINT: Click on game icon to start";
});

$(".difficultySetting02").click(function () {
  document.getElementById("level-text").innerHTML = "Level 02";
  document.getElementById("hint").innerHTML =
    " HINT: Click on game icon to start";
});

$(".difficultySetting03").click(function () {
  document.getElementById("level-text").innerHTML = "Level 03";
  document.getElementById("hint").innerHTML =
    " HINT: Click on game icon to start";
});

$(".difficultySetting04").click(function () {
  document.getElementById("level-text").innerHTML = "Level 04";
  document.getElementById("hint").innerHTML =
    " HINT: Click on game icon to start";
});

$("#play").click(function () {
  document.getElementById("hint").innerHTML =
    " HINT: Click on a box to reveal it's colour, then try to match it's pair";
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

//create colours for logo
function logoColours() {
  let saturation = randomVal(80, 100);
  let lightness = randomVal(45, 65);
  let alpha = 1.0;
  let amount = 20;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

// random colours on logo - https://stackoverflow.com/questions/20228961/how-to-make-each-letter-in-text-a-different-random-color-in-javascript
var LogoColourArray = logoColours();

var logo = $("#logo");
var letters = logo.text().split("");
document.getElementById("logo").innerHTML = "";

for (let i = 0; i < letters.length; i++) {
  shuffle(LogoColourArray);

  var span = $("<span>" + letters[i] + "</span>").css(
    "color",
    LogoColourArray[i]
  );
  logo.append(span);
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
  levelThreeColour8,
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

//game stats 
var clickCounter = 0;
var numOfClicksLeft = 0;
var currentScore = 0;
var bestGameScore = localStorage.getItem("score") || 0;

document.getElementById("bestGameScore").innerHTML = localStorage.getItem("score") || 0;


function updateNumOfClicks(level) {
  let levelClickCount1 = 6;
  let levelClickCount2 = 12;
  let levelClickCount3 = 24;
  let levelClickCount4 = 48;

  if (level == 1) {
    numOfClicksLeft += levelClickCount1;
  } else if (level == 2) {
    numOfClicksLeft += levelClickCount2;
  } else if (level == 3) {
    numOfClicksLeft += levelClickCount3;
  } else if (level == 4) {
    numOfClicksLeft += levelClickCount4;
  }

  return numOfClicksLeft;
}
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
      clickCounter++;
      currentScore+=5;
      document.getElementById("clickCounter").innerHTML = clickCounter;

      for (let i = 0; i < box.length; i++) {
        box[i].style.backgroundColor = boxObj[id];
      }
    } else {
      clickCounter++;
      
      document.getElementById("clickCounter").innerHTML = clickCounter;
      

      if (boxObj[id] == choiceOne) {
        for (let i = 0; i < box.length; i++) {
          box[i].style.backgroundColor = boxObj[id];
          choiceOne = false;
          
        }
        currentScore+=5;
      } else {
          currentScore--;
        setTimeout(function () {
          for (let i = 0; i < box.length; i++) {
            box[i].style.backgroundColor = gridBackColour;
            
          }
          
        }, 100);
      }
    }
    numOfClicksLeft--;
    document.getElementById("currentScore").innerHTML = currentScore;
    document.getElementById("bestGameScore").innerHTML = localStorage.getItem("score")||0;
    if (numOfClicksLeft < 0) {
      $("#gameOverModal").modal();
      if(currentScore > bestGameScore){
          localStorage.setItem("score", currentScore);
          document.getElementById("bestGameScore").innerHTML = localStorage.getItem("score")
      }

    } else {
      document.getElementById("numOfClicksLeft").innerHTML = numOfClicksLeft;
    }
    
  }
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

function resetClasses(defaultGrid, level) {
  for (let i = 0; i < defaultGrid.length; i++) {
    defaultGrid[i].classList.remove(level + "Box1");
    defaultGrid[i].classList.remove(level + "Box2");
    defaultGrid[i].classList.remove(level + "Box3");
    defaultGrid[i].classList.remove(level + "Box4");
    defaultGrid[i].classList.remove(level + "Box5");
    defaultGrid[i].classList.remove(level + "Box6");
    defaultGrid[i].classList.remove(level + "Box7");
    defaultGrid[i].classList.remove(level + "Box8");
    defaultGrid[i].classList.remove(level + "Box9");
    defaultGrid[i].classList.remove(level + "Box10");
    defaultGrid[i].classList.remove(level + "Box11");
    defaultGrid[i].classList.remove(level + "Box12");
    defaultGrid[i].classList.remove(level + "Box13");
    defaultGrid[i].classList.remove(level + "Box14");
    defaultGrid[i].classList.remove(level + "Box15");
    defaultGrid[i].classList.remove(level + "Box16");
    defaultGrid[i].classList.remove(level + "Box16");
    defaultGrid[i].classList.remove(level + "Box17");
    defaultGrid[i].classList.remove(level + "Box18");
    defaultGrid[i].classList.remove(level + "Box19");
    defaultGrid[i].classList.remove(level + "Box20");
    defaultGrid[i].classList.remove(level + "Box21");
    defaultGrid[i].classList.remove(level + "Box22");
    defaultGrid[i].classList.remove(level + "Box23");
    defaultGrid[i].classList.remove(level + "Box24");
    defaultGrid[i].classList.remove(level + "Box25");
    defaultGrid[i].classList.remove(level + "Box26");
    defaultGrid[i].classList.remove(level + "Box27");
    defaultGrid[i].classList.remove(level + "Box28");
    defaultGrid[i].classList.remove(level + "Box29");
    defaultGrid[i].classList.remove(level + "Box30");
    defaultGrid[i].classList.remove(level + "Box31");
    defaultGrid[i].classList.remove(level + "Box32");
  }
  return defaultGrid;
}

function flipToBack(j) {
  let boxes = document.getElementsByClassName("boxes");
  for (j = 0; j < boxes.length; j++) {
    boxes[j].style.backgroundColor = gridBackColour;
  }
}

function levelTwo() {
  choiceOne = false;
  choiceTwo = false;
  activeState = false;
  resetClasses(defaultGrid, "levelOne");
  resetClasses(defaultGrid, "levelThree");
  resetClasses(defaultGrid, "levelFour");
  document.getElementById("level-text").innerHTML = "Level 02";
  document.getElementById("hint").innerHTML =
    " HINT: Click on gamepad icon to start";

  reset();

  //assign classes to each box
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL TWO GRID - colours
    if (
      //LEVEL TWO GRID - colour 1
      levelTwoGridBox1(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox1");
    } else if (
      //LEVEL TWO GRID - colour 2
      levelTwoGridBox2(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox2");
    } else if (
      //LEVEL TWO - colour 3
      levelTwoGridBox3(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox3");
    } else if (
      //LEVEL TWO - colour 4
      levelTwoGridBox4(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox4");
    } else if (
      //LEVEL TWO - colour 5
      levelTwoGridBox5(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox5");
    } else if (
      //LEVEL TWO - colour 6
      levelTwoGridBox6(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox6");
    } else if (
      //LEVEL TWO - colour 7
      levelTwoGridBox7(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox7");
    } else if (
      //LEVEL TWO - colour 8
      levelTwoGridBox8(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox8");
    }
  }

  //ADDITIONAL STYLING FOR LEVEL TWO
  for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 15;
    let box3 = 17;
    let box4 = 19;
    let box5 = 61;
    let box6 = 63;
    let box7 = 65;
    let box8 = 67;
    let across = 3;
    let nextLine = 12;

    //LEVEL TWO - Borders
    if (
      // LEVEL TWO - Top border
      j > box1 - nextLine &&
      j < box4 + across - nextLine
    ) {
      if (j == box1 + 3 * nextLine) {
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.borderLeft = "1px solid black";
      }
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL TWO - left border
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
      //LEVEL TWO - first vertical border
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
      //LEVEL TWO - second vertical border
      j == box3 ||
      j == box3 + nextLine ||
      j == box3 + 2 * nextLine ||
      j == box3 + 3 * nextLine ||
      j == box3 + 4 * nextLine ||
      j == box3 + 5 * nextLine ||
      j == box3 + 6 * nextLine ||
      j == box3 + 7 * nextLine
    ) {
      if (j == box3 + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";

        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = "blue";
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - third vertical border
      j == box3 + 2 ||
      j == box3 + nextLine + 2 ||
      j == box3 + 2 * nextLine + 2 ||
      j == box3 + 3 * nextLine + 2 ||
      j == box3 + 4 * nextLine + 2 ||
      j == box3 + 5 * nextLine + 2 ||
      j == box3 + 6 * nextLine + 2 ||
      j == box3 + 7 * nextLine + 2
    ) {
      if (j == box3 + 3 * nextLine + 2) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";

        defaultGrid[j].style.borderBottom = "1px solid black";
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - middle horizontal border
      j > box1 + 3 * nextLine &&
      j < box4 + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - right border
      j == box4 + across ||
      j == box4 + across + nextLine ||
      j == box4 + across + 2 * nextLine ||
      j == box4 + across + 3 * nextLine ||
      j == box4 + across + 4 * nextLine ||
      j == box4 + across + 5 * nextLine ||
      j == box4 + across + 6 * nextLine ||
      j == box4 + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL TWO - bottom border
      j > box5 + 4 * nextLine &&
      j < box8 + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL TWO - back colour 1
      levelTwoGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour 2
      levelTwoGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour 3
      levelTwoGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL TWO - back colour 4
      levelTwoGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL TWO GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED

  document.getElementById("play").disabled = false;

  // on click for play button - level two
  level = 2;
  $("#play").click(function () {
    if (level == 2) {
      for (let j = 0; j < defaultGrid.length; j++) {
        //SELECTION OF COLOURS

        //LEVEL TWO GRID - colours
        if (
          //LEVEL TWO GRID - colour 1
          levelTwoGridBox1(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[0];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 2
          levelTwoGridBox2(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[1];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 3
          levelTwoGridBox3(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[2];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 4
          levelTwoGridBox4(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[3];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 5
          levelTwoGridBox5(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[4];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 6
          levelTwoGridBox6(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[5];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 7
          levelTwoGridBox7(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[6];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL TWO - colour 8
          levelTwoGridBox8(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleTwo[7];
          defaultGrid[j].classList.add("boxes");
        }
        //flip to backside after interval
        setTimeout(flipToBack, 500);
      }

      if (!activeState) {
        activeState = true;
      }

      document.getElementById("play").disabled = true;
      updateNumOfClicks("2");
      document.getElementById("numOfClicksLeft").innerHTML = numOfClicksLeft;
    }
  });

  $(".levelTwoBox1").click(function () {
    if (activeState) {
      checkColour("box1", "levelTwoBox1", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox2").click(function () {
    if (activeState) {
      checkColour("box2", "levelTwoBox2", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox3").click(function () {
    if (activeState) {
      checkColour("box3", "levelTwoBox3", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox4").click(function () {
    if (activeState) {
      checkColour("box4", "levelTwoBox4", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox5").click(function () {
    if (activeState) {
      checkColour("box5", "levelTwoBox5", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox6").click(function () {
    if (activeState) {
      checkColour("box6", "levelTwoBox6", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox7").click(function () {
    if (activeState) {
      checkColour("box7", "levelTwoBox7", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });

  $(".levelTwoBox8").click(function () {
    if (activeState) {
      checkColour("box8", "levelTwoBox8", levelTwoObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelThree();
        }, 1000);
      }
    }
  });
}

function levelThree() {
  choiceOne = false;
  choiceTwo = false;
  activeState = false;
  resetClasses(defaultGrid, "levelOne");
  resetClasses(defaultGrid, "levelTwo");
  resetClasses(defaultGrid, "levelFour");
  document.getElementById("level-text").innerHTML = "Level 03";
  document.getElementById("hint").innerHTML =
    " HINT: Click on gamepad icon to start";

  reset();

  //assign classes to each box
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL THREE GRID - colours
    if (
      //LEVEL THREE GRID - colour 1
      levelThreeGridBox1(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox1");
    } else if (
      //LEVEL THREE GRID - colour 2
      levelThreeGridBox2(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox2");
    } else if (
      //LEVEL THREE - colour 3
      levelThreeGridBox3(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox3");
    } else if (
      //LEVEL THREE - colour 4
      levelThreeGridBox4(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox4");
    } else if (
      //LEVEL THREE - colour 5
      levelThreeGridBox5(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox5");
    } else if (
      //LEVEL THREE - colour 6
      levelThreeGridBox6(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox6");
    } else if (
      //LEVEL THREE - colour 7
      levelThreeGridBox7(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox7");
    } else if (
      //LEVEL THREE - colour 8
      levelThreeGridBox8(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox8");
    } else if (
      //LEVEL THREE - colour 9
      levelThreeGridBox9(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox9");
    } else if (
      //LEVEL THREE - colour 10
      levelThreeGridBox10(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox10");
    } else if (
      //LEVEL THREE - colour 11
      levelThreeGridBox11(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox11");
    } else if (
      //LEVEL THREE - colour 12
      levelThreeGridBox12(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox12");
    } else if (
      //LEVEL THREE - colour 13
      levelThreeGridBox13(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox13");
    } else if (
      //LEVEL THREE - colour 14
      levelThreeGridBox14(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox14");
    } else if (
      //LEVEL THREE - colour 15
      levelThreeGridBox15(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox15");
    } else if (
      //LEVEL THREE - colour 16
      levelThreeGridBox16(j) == true
    ) {
      defaultGrid[j].classList.add("levelThreeBox16");
    }
  }

  //ADDITIONAL STYLING FOR LEVEL THREE

  for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 14;
    let box3 = 16;
    let box4 = 18;
    let box5 = 61;
    let box6 = 63;
    let box7 = 65;
    let box8 = 67;
    let across = 2;
    let nextLine = 12;

    //LEVEL THREE - Borders
    if (
      // LEVEL THREE - Top border
      j > box1 - nextLine &&
      j < box4 + across - nextLine
    ) {
      if (j == box1 + 3 * nextLine) {
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.borderLeft = "1px solid black";
      }
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL THREE - left border
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
      //LEVEL THREE - first vertical border
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
      } else {
        defaultGrid[j].style.borderRight = "1px solid black";

        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL THREE - second vertical border
      j == box3 ||
      j == box3 + nextLine ||
      j == box3 + 2 * nextLine ||
      j == box3 + 3 * nextLine ||
      j == box3 + 4 * nextLine ||
      j == box3 + 5 * nextLine ||
      j == box3 + 6 * nextLine ||
      j == box3 + 7 * nextLine
    ) {
      if (j == box3 + 3 * nextLine) {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else {
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL THREE - third vertical border
      j == box3 + 2 ||
      j == box3 + nextLine + 2 ||
      j == box3 + 2 * nextLine + 2 ||
      j == box3 + 3 * nextLine + 2 ||
      j == box3 + 4 * nextLine + 2 ||
      j == box3 + 5 * nextLine + 2 ||
      j == box3 + 6 * nextLine + 2 ||
      j == box3 + 7 * nextLine + 2
    ) {
      if (j == box3 + 3 * nextLine + 2) {
        defaultGrid[j].style.borderRight = "1px solid black";

        defaultGrid[j].style.borderBottom = "1px solid black";

        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = "blue";
      } else defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL THREE - middle horizontal border
      j > box1 + 3 * nextLine &&
      j < box4 + across + 3 * nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL THREE - last vertical border
      j == box4 + across ||
      j == box4 + across + nextLine ||
      j == box4 + across + 2 * nextLine ||
      j == box4 + across + 3 * nextLine ||
      j == box4 + across + 4 * nextLine ||
      j == box4 + across + 5 * nextLine ||
      j == box4 + across + 6 * nextLine ||
      j == box4 + across + 7 * nextLine
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
      defaultGrid[j].style.borderRight = "1px solid black";
    } else if (
      //LEVEL THREE - bottom border
      j > box5 + 4 * nextLine &&
      j < box8 + across + 4 * nextLine
    ) {
      defaultGrid[j].style.borderTop = "1px solid black";
    } else if (
      //LEVEL THREE - back colour 1
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL THREE - back colour 2
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL THREE - back colour 3
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL THREE - back colour 4
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL THREE GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED

  document.getElementById("play").disabled = false;

  // on click for play button - level three
  level = 3;
  $("#play").click(function () {
    if (level == 3) {
      for (let j = 0; j < defaultGrid.length; j++) {
        //SELECTION OF COLOURS

        //LEVEL THREE GRID - colours
        if (
          //LEVEL THREE GRID - colour 1
          levelThreeGridBox1(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[0];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 2
          levelThreeGridBox2(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[1];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 3
          levelThreeGridBox3(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[2];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 4
          levelThreeGridBox4(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[3];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 5
          levelThreeGridBox5(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[4];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 6
          levelThreeGridBox6(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[5];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 7
          levelThreeGridBox7(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[6];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 8
          levelThreeGridBox8(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[7];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 9
          levelThreeGridBox9(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[8];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 10
          levelThreeGridBox10(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[9];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 11
          levelThreeGridBox11(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[10];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 12
          levelThreeGridBox12(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[11];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 13
          levelThreeGridBox13(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[12];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 14
          levelThreeGridBox14(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[13];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 15
          levelThreeGridBox15(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[14];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL THREE - colour 16
          levelThreeGridBox16(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleThree[15];
          defaultGrid[j].classList.add("boxes");
        }
        //flip to backside after interval
        setTimeout(flipToBack, 2000);
      }

      if (!activeState) {
        activeState = true;
      }
      document.getElementById("play").disabled = true;
      updateNumOfClicks("3");
      document.getElementById("numOfClicksLeft").innerHTML = numOfClicksLeft;
    }
  });

  $(".levelThreeBox1").click(function () {
    if (activeState) {
      checkColour("box1", "levelThreeBox1", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox2").click(function () {
    if (activeState) {
      checkColour("box2", "levelThreeBox2", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox3").click(function () {
    if (activeState) {
      checkColour("box3", "levelThreeBox3", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox4").click(function () {
    if (activeState) {
      checkColour("box4", "levelThreeBox4", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox5").click(function () {
    if (activeState) {
      checkColour("box5", "levelThreeBox5", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox6").click(function () {
    if (activeState) {
      checkColour("box6", "levelThreeBox6", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox7").click(function () {
    if (activeState) {
      checkColour("box7", "levelThreeBox7", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox8").click(function () {
    if (activeState) {
      checkColour("box8", "levelThreeBox8", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox9").click(function () {
    if (activeState) {
      checkColour("box9", "levelThreeBox9", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox10").click(function () {
    if (activeState) {
      checkColour("box10", "levelThreeBox10", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox11").click(function () {
    if (activeState) {
      checkColour("box11", "levelThreeBox11", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox12").click(function () {
    if (activeState) {
      checkColour("box12", "levelThreeBox12", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox13").click(function () {
    if (activeState) {
      checkColour("box13", "levelThreeBox13", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox14").click(function () {
    if (activeState) {
      checkColour("box14", "levelThreeBox14", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox15").click(function () {
    if (activeState) {
      checkColour("box15", "levelThreeBox15", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });

  $(".levelThreeBox16").click(function () {
    if (activeState) {
      checkColour("box16", "levelThreeBox16", levelThreeObj);

      let boxes = $(".boxes");
      let counter = 0;

      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].style.backgroundColor != gridBackColour) {
          counter++;
        }
      }

      if (counter == boxes.length) {
        setTimeout(function () {
          levelFour();
        }, 1000);
      }
    }
  });
}

function levelFour() {
  choiceOne = false;
  choiceTwo = false;
  activeState = false;
  resetClasses(defaultGrid, "levelOne");
  resetClasses(defaultGrid, "levelTwo");
  resetClasses(defaultGrid, "levelThree");
  document.getElementById("level-text").innerHTML = "Level 04";
  document.getElementById("hint").innerHTML =
    " HINT: Click on gamepad icon to start";

  reset();

  //assign classes to each box
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL FOUR GRID - colours
    if (
      //LEVEL FOUR GRID - colour 1
      levelFourGridBox1(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox1");
    } else if (
      //LEVEL FOUR GRID - colour 2
      levelFourGridBox2(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox2");
    } else if (
      //LEVEL FOUR - colour 3
      levelFourGridBox3(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox3");
    } else if (
      //LEVEL FOUR - colour 4
      levelFourGridBox4(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox4");
    } else if (
      //LEVEL FOUR - colour 5
      levelFourGridBox5(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox5");
    } else if (
      //LEVEL FOUR - colour 6
      levelFourGridBox6(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox6");
    } else if (
      //LEVEL FOUR - colour 7
      levelFourGridBox7(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox7");
    } else if (
      //LEVEL FOUR - colour 8
      levelFourGridBox8(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox8");
    } else if (
      //LEVEL FOUR - colour 9
      levelFourGridBox9(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox9");
    } else if (
      //LEVEL FOUR - colour 10
      levelFourGridBox10(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox10");
    } else if (
      //LEVEL FOUR - colour 11
      levelFourGridBox11(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox11");
    } else if (
      //LEVEL FOUR - colour 12
      levelFourGridBox12(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox12");
    } else if (
      //LEVEL FOUR - colour 13
      levelFourGridBox13(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox13");
    } else if (
      //LEVEL FOUR - colour 14
      levelFourGridBox14(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox14");
    } else if (
      //LEVEL FOUR - colour 15
      levelFourGridBox15(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox15");
    } else if (
      //LEVEL FOUR - colour 16
      levelFourGridBox16(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox16");
    } else if (
      //LEVEL FOUR GRID - colour 17
      levelFourGridBox17(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox17");
    } else if (
      //LEVEL FOUR - colour 18
      levelFourGridBox18(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox18");
    } else if (
      //LEVEL FOUR - colour 19
      levelFourGridBox19(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox19");
    } else if (
      //LEVEL FOUR - colour 20
      levelFourGridBox20(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox20");
    } else if (
      //LEVEL FOUR - colour 21
      levelFourGridBox21(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox21");
    } else if (
      //LEVEL FOUR - colour 22
      levelFourGridBox22(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox22");
    } else if (
      //LEVEL FOUR - colour 23
      levelFourGridBox23(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox23");
    } else if (
      //LEVEL FOUR - colour 24
      levelFourGridBox24(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox24");
    } else if (
      //LEVEL FOUR - colour 25
      levelFourGridBox25(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox25");
    } else if (
      //LEVEL FOUR - colour 26
      levelFourGridBox26(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox26");
    } else if (
      //LEVEL FOUR - colour 27
      levelFourGridBox27(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox27");
    } else if (
      //LEVEL FOUR - colour 28
      levelFourGridBox28(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox28");
    } else if (
      //LEVEL FOUR - colour 29
      levelFourGridBox29(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox29");
    } else if (
      //LEVEL FOUR - colour 30
      levelFourGridBox30(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox30");
    } else if (
      //LEVEL FOUR - colour 31
      levelFourGridBox31(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox31");
    } else if (
      //LEVEL FOUR - colour 32
      levelFourGridBox32(j) == true
    ) {
      defaultGrid[j].classList.add("levelFourBox32");
    }
  }

  //ADDITIONAL STYLING FOR LEVEL FOUR
  for (let j = 0; j < defaultGrid.length; j++) {
    let box1 = 13;
    let box2 = 14;
    let box3 = 16;
    let box4 = 18;
    let box5 = 61;
    let box6 = 63;
    let box7 = 65;
    let box8 = 67;
    let across = 2;
    let nextLine = 12;

    //LEVEL FOUR - Borders
    if (
      // LEVEL FOUR - Top border
      j > box1 - nextLine &&
      j < box4 + across - nextLine
    ) {
      defaultGrid[j].style.borderBottom = "1px solid black";
    } else if (
      //LEVEL FOUR - first vertical border
      j == box2 ||
      j == box2 + nextLine ||
      j == box2 + 2 * nextLine ||
      j == box2 + 3 * nextLine ||
      j == box2 + 4 * nextLine ||
      j == box2 + 5 * nextLine ||
      j == box2 + 6 * nextLine ||
      j == box2 + 7 * nextLine
    ) {
      if (j == box2 + nextLine || j == box2 + 5 * nextLine) {
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
      } else {
        defaultGrid[j].style.borderRight = "1px solid black";
      }
    } else if (
      //LEVEL FOUR - second vertical border
      j == box2 + 2 ||
      j == box2 + nextLine + 2 ||
      j == box2 + 2 * nextLine + 2 ||
      j == box2 + 3 * nextLine + 2 ||
      j == box2 + 4 * nextLine + 2 ||
      j == box2 + 5 * nextLine + 2 ||
      j == box2 + 6 * nextLine + 2 ||
      j == box2 + 7 * nextLine + 2
    ) {
      if (j == box2 + 3 * nextLine + 2) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else if (j == box2 + nextLine + 2 || j == box2 + 5 * nextLine + 2) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL FOUR - first horizontal border
      j > box1 + nextLine &&
      j < box4 + across + nextLine + 2
    ) {
      if (j == box4 + across + nextLine) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else if (j == box4 + across + nextLine - 1) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else {
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL FOUR - middle horizontal border
      j > box1 + 3 * nextLine &&
      j < box4 + across + 3 * nextLine
    ) {
      if (j == box4 + across + 3 * nextLine - 1) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else {
        defaultGrid[j].style.borderBottom = "1px solid black";
        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL FOUR - third horizontal border
      j > box1 + 5 * nextLine &&
      j < box4 + across + 5 * nextLine + 2
    ) {
      if (j == box4 + across + 5 * nextLine) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else if (j == box4 + across + 5 * nextLine - 1) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      } else {
        defaultGrid[j].style.borderBottom = "1px solid black";

        defaultGrid[j].style.backgroundColor = gridBackColour;
      }
    } else if (
      //LEVEL FOUR - fifth vertical border
      j == box3 + across + 1 ||
      j == box3 + across + nextLine + 1 ||
      j == box3 + across + 2 * nextLine + 1 ||
      j == box3 + across + 3 * nextLine + 1 ||
      j == box3 + across + 4 * nextLine + 1 ||
      j == box3 + across + 5 * nextLine + 1 ||
      j == box3 + across + 6 * nextLine + 1 ||
      j == box3 + across + 7 * nextLine + 1
    ) {
      defaultGrid[j].style.borderLeft = "1px solid black";
    } else if (
      //LEVEL FOUR - last vertical border
      j == box4 + across ||
      j == box4 + across + nextLine ||
      j == box4 + across + 2 * nextLine ||
      j == box4 + across + 3 * nextLine ||
      j == box4 + across + 4 * nextLine ||
      j == box4 + across + 5 * nextLine ||
      j == box4 + across + 6 * nextLine ||
      j == box4 + across + 7 * nextLine
    ) {
      if (j == box4 + across + nextLine) {
        defaultGrid[j].style.borderLeft = "1px solid black";
        defaultGrid[j].style.borderRight = "1px solid black";
        defaultGrid[j].style.borderBottom = "1px solid black";
      }
      defaultGrid[j].style.borderLeft = "1px solid black";
      defaultGrid[j].style.borderRight = "1px solid black";
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL FOUR - back colour 1
      levelOneGridBox1(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL FOUR - back colour 2
      levelOneGridBox2(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL FOUR - back colour 3
      levelOneGridBox3(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else if (
      //LEVEL FOUR - back colour 4
      levelOneGridBox4(j) == true
    ) {
      defaultGrid[j].style.backgroundColor = gridBackColour;
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }

  //LEVEL FOUR GRID STRUCTURE - AFTER PLAY BUTTON IS CLICKED
  document.getElementById("play").disabled = false;

  // on click for play button - level four
  level = 4;
  $("#play").click(function () {
    if (level == 4) {
      for (let j = 0; j < defaultGrid.length; j++) {
        //SELECTION OF COLOURS

        //LEVEL FOUR GRID - colours
        if (
          //LEVEL FOUR GRID - colour 1
          levelFourGridBox1(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[0];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 2
          levelFourGridBox2(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[1];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 3
          levelFourGridBox3(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[2];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 4
          levelFourGridBox4(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[3];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 5
          levelFourGridBox5(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[4];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 6
          levelFourGridBox6(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[5];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 7
          levelFourGridBox7(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[6];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 8
          levelFourGridBox8(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[7];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 9
          levelFourGridBox9(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[8];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 10
          levelFourGridBox10(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[9];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 11
          levelFourGridBox11(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[10];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 12
          levelFourGridBox12(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[11];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 13
          levelFourGridBox13(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[12];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 14
          levelFourGridBox14(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[13];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 15
          levelFourGridBox15(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[14];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 16
          levelFourGridBox16(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[15];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR GRID - colour 17
          levelFourGridBox17(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[16];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 18
          levelFourGridBox18(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[17];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 19
          levelFourGridBox19(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[18];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 20
          levelFourGridBox20(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[19];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 21
          levelFourGridBox21(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[20];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 22
          levelFourGridBox22(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[21];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 23
          levelFourGridBox23(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[22];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 24
          levelFourGridBox24(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[23];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 25
          levelFourGridBox25(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[24];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 26
          levelFourGridBox26(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[25];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 27
          levelFourGridBox27(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[26];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 28
          levelFourGridBox28(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[27];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 29
          levelFourGridBox29(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[28];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 30
          levelFourGridBox30(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[29];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 31
          levelFourGridBox31(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[30];
          defaultGrid[j].classList.add("boxes");
        } else if (
          //LEVEL FOUR - colour 32
          levelFourGridBox32(j) == true
        ) {
          defaultGrid[j].style.backgroundColor = colourArrayShuffleFour[31];
          defaultGrid[j].classList.add("boxes");
        }
        //flip to backside after interval
        setTimeout(flipToBack, 7000);
      }
      if (!activeState) {
        activeState = true;
      }
      document.getElementById("play").disabled = true;
      updateNumOfClicks("4");
      document.getElementById("numOfClicksLeft").innerHTML = numOfClicksLeft;
    }
  });

  $(".levelFourBox1").click(function () {
    if (activeState) {
      checkColour("box1", "levelFourBox1", levelFourObj);
    }
  });

  $(".levelFourBox2").click(function () {
    if (activeState) {
      checkColour("box2", "levelFourBox2", levelFourObj);
    }
  });

  $(".levelFourBox3").click(function () {
    if (activeState) {
      checkColour("box3", "levelFourBox3", levelFourObj);
    }
  });

  $(".levelFourBox4").click(function () {
    if (activeState) {
      checkColour("box4", "levelFourBox4", levelFourObj);
    }
  });

  $(".levelFourBox5").click(function () {
    if (activeState) {
      checkColour("box5", "levelFourBox5", levelFourObj);
    }
  });

  $(".levelFourBox6").click(function () {
    if (activeState) {
      checkColour("box6", "levelFourBox6", levelFourObj);
    }
  });

  $(".levelFourBox7").click(function () {
    if (activeState) {
      checkColour("box7", "levelFourBox7", levelFourObj);
    }
  });

  $(".levelFourBox8").click(function () {
    if (activeState) {
      checkColour("box8", "levelFourBox8", levelFourObj);
    }
  });

  $(".levelFourBox9").click(function () {
    if (activeState) {
      checkColour("box9", "levelFourBox9", levelFourObj);
    }
  });

  $(".levelFourBox10").click(function () {
    if (activeState) {
      checkColour("box10", "levelFourBox10", levelFourObj);
    }
  });

  $(".levelFourBox11").click(function () {
    if (activeState) {
      checkColour("box11", "levelFourBox11", levelFourObj);
    }
  });

  $(".levelFourBox12").click(function () {
    if (activeState) {
      checkColour("box12", "levelFourBox12", levelFourObj);
    }
  });

  $(".levelFourBox13").click(function () {
    if (activeState) {
      checkColour("box13", "levelFourBox13", levelFourObj);
    }
  });

  $(".levelFourBox14").click(function () {
    if (activeState) {
      checkColour("box14", "levelFourBox14", levelFourObj);
    }
  });

  $(".levelFourBox15").click(function () {
    if (activeState) {
      checkColour("box15", "levelFourBox15", levelFourObj);
    }
  });

  $(".levelFourBox16").click(function () {
    if (activeState) {
      checkColour("box16", "levelFourBox16", levelFourObj);
    }
  });

  $(".levelFourBox17").click(function () {
    if (activeState) {
      checkColour("box17", "levelFourBox17", levelFourObj);
    }
  });

  $(".levelFourBox18").click(function () {
    if (activeState) {
      checkColour("box18", "levelFourBox18", levelFourObj);
    }
  });

  $(".levelFourBox19").click(function () {
    if (activeState) {
      checkColour("box19", "levelFourBox19", levelFourObj);
    }
  });

  $(".levelFourBox20").click(function () {
    if (activeState) {
      checkColour("box20", "levelFourBox20", levelFourObj);
    }
  });

  $(".levelFourBox21").click(function () {
    if (activeState) {
      checkColour("box21", "levelFourBox21", levelFourObj);
    }
  });

  $(".levelFourBox22").click(function () {
    if (activeState) {
      checkColour("box22", "levelFourBox22", levelFourObj);
    }
  });

  $(".levelFourBox23").click(function () {
    if (activeState) {
      checkColour("box23", "levelFourBox23", levelFourObj);
    }
  });

  $(".levelFourBox24").click(function () {
    if (activeState) {
      checkColour("box24", "levelFourBox24", levelFourObj);
    }
  });

  $(".levelFourBox25").click(function () {
    if (activeState) {
      checkColour("box25", "levelFourBox25", levelFourObj);
    }
  });

  $(".levelFourBox26").click(function () {
    if (activeState) {
      checkColour("box26", "levelFourBox26", levelFourObj);
    }
  });

  $(".levelFourBox27").click(function () {
    if (activeState) {
      checkColour("box27", "levelFourBox27", levelFourObj);
    }
  });

  $(".levelFourBox28").click(function () {
    if (activeState) {
      checkColour("box28", "levelFourBox28", levelFourObj);
    }
  });

  $(".levelFourBox29").click(function () {
    if (activeState) {
      checkColour("box29", "levelFourBox29", levelFourObj);
    }
  });

  $(".levelFourBox30").click(function () {
    if (activeState) {
      checkColour("box30", "levelFourBox30", levelFourObj);
    }
  });

  $(".levelFourBox31").click(function () {
    if (activeState) {
      checkColour("box31", "levelFourBox31", levelFourObj);
    }
  });

  $(".levelFourBox32").click(function () {
    if (activeState) {
      checkColour("box32", "levelFourBox32", levelFourObj);
    }
  });
}
