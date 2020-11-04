


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
function levelOneGridBoxA(j){
    let boxA = 13;
    let across = 5;
    let nextLine = 12;
  if( (j > boxA && j < boxA + across) ||
      (j > boxA + nextLine && j < boxA + nextLine + across) ||
      (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
      (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
  ){
      return true;
  }else{
      return false
  }
}


//isolate second box in level one
function levelOneGridBoxB(j){
    let boxB = 17;
    let across = 5;
    let nextLine = 12;
    if(
        (j > boxB && j < boxB + across) ||
      (j > boxB + nextLine && j < boxB + nextLine + across) ||
      (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
      (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
    ){
        return true;
    }else{
        return false;
    };
};


//isolate third box in level one
function levelOneGridBoxC(j){
    let boxC = 61;
    let across = 5;
    let nextLine = 12;
    if((j > boxC && j < boxC + across) ||
      (j > boxC + nextLine && j < boxC + nextLine + across) ||
      (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
      (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
    ){
        return true;
    }else{
        return false;
    };
};


//isolate fourth box in level one
function levelOneGridBoxD(j){
    let boxD = 65;
    let across = 5;
    let nextLine = 12;
    if( (j > boxD && j < boxD + across) ||
      (j > boxD + nextLine && j < boxD + nextLine + across) ||
      (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
      (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
    ){
        return true;
    }else{
        return false;
    };
};

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
  let amount = 2;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

/*---------LEVEL ONE FUNCTIONS END HERE------------*/




//LEVEL ONE GRID STRUCTURE - BEFORE PLAY BUTTON IS CLICKED
if(document.getElementById("level-text").innerHTML == "Level One"){
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
    levelOneGridBoxA(j)==true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - back colour B
    levelOneGridBoxB(j)==true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //LEVEL ONE - back colour C
    levelOneGridBoxC(j)==true
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //DEFAULT GRID - back colour D
    levelOneGridBoxD(j)==true
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
      //DEFAULT GRID - colour B
      levelOneGridBoxB(j) ==  true
    ) {
      defaultGrid[j].style.backgroundColor = colourArrayShuffle[1];
     
    } else if (
      //LEVEL ONE - colour C
      levelOneGridBoxC(j) ==  true
    ) {
      defaultGrid[j].style.backgroundColor  = colourArrayShuffle[2];
     
    } else if (
      //LEVEL ONE - colour D
      levelOneGridBoxD(j) == true
    ) {
      defaultGrid[j].style.backgroundColor  = colourArrayShuffle[3];
     
    }
  }
});
  };   

