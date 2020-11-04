const gridBackColour = "rgba(128, 128, 128, 0.7)";

//light and dark mode toggle for nav
$(".light").click(function () {
  $("i", this).toggleClass("fa-toggle-on fa-toggle-off");
  $("i", this).toggleClass("text-dark text-white");
  $(".navbar").toggleClass("navbar-light navbar-dark");
  $(".navbar").toggleClass("bg-light bg-dark");
  $(".navbar-brand").toggleClass("text-dark text-white");
  $(".menu-icon").toggleClass("text-dark text-light");
});

//switch menu icon
$(".menu-icon").click(function () {
  $("i", this).toggleClass("fa-hand-o-down fa-hand-o-up");
});

//create base grid on page load

for (let i = 0; i < 120; i++) {
  $(".level-one").append('<div class="col-1 grey-bg"><img></div>');
  function switchToDark() {
    $(".col-1").toggleClass("grey-bg dark-bg");
  }
}

var defaultGrid = document.getElementsByClassName("col-1");

//DEFAULT GRID STRUCTURE

for (let j = 0; j < defaultGrid.length; j++) {
  let boxA = 13;
  let boxB = 17;
  let boxC = 61;
  let boxD = 65;
  let across = 5;
  let nextLine = 12;

  //DEFAULT GRID - border colours
  if (
    //DEFAULT GRID - top border
    j > boxA - nextLine &&
    j < boxB + across - nextLine
  ) {
    defaultGrid[j].style.borderBottom = "1px solid black";
  } else if (
    //DEFAULT GRID - left border
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
    //DEFAULT GRID - middle vertical border
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
    //DEFAULT GRID - middle horizontal border
    j > boxA + 3 * nextLine &&
    j < boxB + across + 3 * nextLine
  ) {
    defaultGrid[j].style.borderBottom = "1px solid black";
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //DEFAULT GRID - right border
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
    //DEFAULT GRID - bottom border
    j > boxC + 4 * nextLine &&
    j < boxD + across + 4 * nextLine
  ) {
    defaultGrid[j].style.borderTop = "1px solid black";
  } else if (
    //DEFAULT GRID - colour A
    (j > boxA && j < boxA + across) ||
    (j > boxA + nextLine && j < boxA + nextLine + across) ||
    (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
    (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //DEFAULT GRID - colour B
    (j > boxB && j < boxB + across) ||
    (j > boxB + nextLine && j < boxB + nextLine + across) ||
    (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
    (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //DEFAULT GRID - colour C
    (j > boxC && j < boxC + across) ||
    (j > boxC + nextLine && j < boxC + nextLine + across) ||
    (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
    (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else if (
    //DEFAULT GRID - colour D
    (j > boxD && j < boxD + across) ||
    (j > boxD + nextLine && j < boxD + nextLine + across) ||
    (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
    (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
  ) {
    defaultGrid[j].style.backgroundColor = gridBackColour;
  } else {
    document.getElementById("darkMode").addEventListener("click", switchToDark);
  }
}

//random number generator

/* generates a value while allowing the customization of the minimum and maximum values*/
function randomVal(min, max) {
  return Math.floor(Math.random() * (max - min) + 1) + min;
}

function generateHslaColours(saturation, lightness, alpha, amount) {
  let colours = [];
  let huedelta = Math.trunc(360 / amount);

  for (let i = 0; i < amount; i++) {
    let hue = i * huedelta;
    colours.push(`hsla(${hue},${saturation}%,${lightness}%,${alpha})`);
  }

  return colours;
}

function levelOneGridColours() {
  let saturation = randomVal(40, 100);
  let lightness = randomVal(20, 90);
  let alpha = 1.0;
  let amount = 30;

  return generateHslaColours(saturation, lightness, alpha, amount);
}
var levelOneGridColourArray = levelOneGridColours();

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

var colourSeed = 0;
$("#play").click(function () {
  colourSeed += 1;
  shuffle(levelOneGridColourArray);

  //LEVEL ONE GRID STRUCTURE

  for (let j = 0; j < defaultGrid.length; j++) {
    let boxA = 13;
    let boxB = 17;
    let boxC = 61;
    let boxD = 65;
    let across = 5;
    let nextLine = 12;

    // random colour generator - https://codepen.io/meowwwls/pen/jbEJRp
    let colourA = levelOneGridColourArray[0];

    let colourB = levelOneGridColourArray[1];

    var colourArrayShuffle = [colourA, colourB, colourA, colourB];

    // for (let k = 0; k < colourArrayShuffle.length; k++) {
    //   let colourArrayPermuted = permutator(colourArrayShuffle);
    //   for (let p = 0; p < colourArrayPermuted.length; p++) {
    //     colourArrayShuffle = colourArrayPermuted[k][p];
    //   }
    // }
    console.log(colourArrayShuffle);

    //SELECTION OF COLOURS

    //LEVEL ONE GRID - colours
    if (
      //LEVEL ONE GRID - colour A
      (j > boxA && j < boxA + across) ||
      (j > boxA + nextLine && j < boxA + nextLine + across) ||
      (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
      (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
    ) {
      defaultGrid[j].style.backgroundColor = defaultGrid[
        j
      ].style.backgroundColor = colourArrayShuffle[0];
    } else if (
      //DEFAULT GRID - colour B
      (j > boxB && j < boxB + across) ||
      (j > boxB + nextLine && j < boxB + nextLine + across) ||
      (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
      (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
    ) {
      defaultGrid[j].style.backgroundColor = defaultGrid[
        j
      ].style.backgroundColor = colourArrayShuffle[1];
      shuffle(colourArrayShuffle);
    } else if (
      //DEFAULT GRID - colour C
      (j > boxC && j < boxC + across) ||
      (j > boxC + nextLine && j < boxC + nextLine + across) ||
      (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
      (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
    ) {
      defaultGrid[j].style.backgroundColor = defaultGrid[
        j
      ].style.backgroundColor = colourArrayShuffle[2];
      shuffle(colourArrayShuffle);
    } else if (
      //DEFAULT GRID - colour D
      (j > boxD && j < boxD + across) ||
      (j > boxD + nextLine && j < boxD + nextLine + across) ||
      (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
      (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
    ) {
      defaultGrid[j].style.backgroundColor = defaultGrid[
        j
      ].style.backgroundColor = colourArrayShuffle[3];
      shuffle(colourArrayShuffle);
    }
  }
});

function permutator(inputArr) {
  var results = [];

  function permute(arr, memo) {
    var cur,
      memo = memo || [];

    for (var i = 0; i < arr.length; i++) {
      cur = arr.splice(i, 1);
      if (arr.length === 0) {
        results.push(memo.concat(cur));
      }
      permute(arr.slice(), memo.concat(cur));
      arr.splice(i, 0, cur[0]);
    }

    return results;
  }

  return permute(inputArr);
}



let colourA = levelOneGridColourArray[0];

    let colourB = levelOneGridColourArray[1];

    var colourArrayShuffle = [colourA, colourB, colourA, colourB];

    for (let k = 0; k < colourArrayShuffle.length; k++) {
      let colourArrayPermuted = permutator(colourArrayShuffle);
      for (let p = 0; p < colourArrayPermuted.length; p++) {
        colourArrayShuffle = colourArrayPermuted[k][p];
      }
    }
    console.log(colourArrayPermuted);