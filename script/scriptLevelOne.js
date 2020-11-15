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

//on click for play button - level 1
var activeState = false;
var level = 1;

$("#play").click(function () {
  if (level == 1) {
    GridColourArray = GridColours();
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
    if (!activeState) {
      activeState = true;
    }
  document.getElementById("play").disabled = true;
    updateNumOfClicks("1");
    document.getElementById("numOfClicksLeft").innerHTML = numOfClicksLeft;
  }
});

$(".levelOneBox1").click(function () {
  if (activeState) {
    checkColour("box1", "levelOneBox1", levelOneObj);

    let boxes = $(".boxes");
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].style.backgroundColor != gridBackColour) {
        counter++;
      }
    }

    if (counter == boxes.length) {
      setTimeout(function () {
        levelTwo();
      }, 1000);
    }
  }
});

$(".levelOneBox2").click(function () {
  if (activeState) {
    checkColour("box2", "levelOneBox2", levelOneObj);

    let boxes = $(".boxes");
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].style.backgroundColor != gridBackColour) {
        counter++;
      }
    }

    if (counter == boxes.length) {
      setTimeout(function () {
        levelTwo();
      }, 1000);
    }
  }
});

$(".levelOneBox3").click(function () {
  if (activeState) {
    checkColour("box3", "levelOneBox3", levelOneObj);

    let boxes = $(".boxes");
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].style.backgroundColor != gridBackColour) {
        counter++;
      }
    }

    if (counter == boxes.length) {
      setTimeout(function () {
        levelTwo();
      }, 1000);
    }
  }
});

$(".levelOneBox4").click(function () {
  if (activeState) {
    checkColour("box4", "levelOneBox4", levelOneObj);

    let boxes = $(".boxes");
    let counter = 0;

    for (let i = 0; i < boxes.length; i++) {
      if (boxes[i].style.backgroundColor != gridBackColour) {
        counter++;
      }
    }

    if (counter == boxes.length) {
      setTimeout(function () {
        levelTwo();
      }, 1000);
    }
  }
});

//ON-CLICK FOR DIFFICULTY SELECTOR STARTS HERE
$(".difficultySetting01").click(function () {
  location.reload();
  choiceOne = false;
  choiceTwo = false;
  activeState = false;
  reset();
 document.getElementById("play").disabled = false;
});
