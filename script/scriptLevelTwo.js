/*----------------------LEVEL TWO GRID-----------------------*/

/*---------LEVEL TWO FUNCTIONS START HERE------------*/
//isolate first box in level two
function levelTwoGridBox1(j) {
  let box1 = 13;
  let across = 3;
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

//isolate second box in level two
function levelTwoGridBox2(j) {
  let box2 = 15;
  let across = 3;
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

//isolate third box in level two
function levelTwoGridBox3(j) {
  let box3 = 17;
  let across = 3;
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

//isolate fourth box in level two
function levelTwoGridBox4(j) {
  let box4 = 19;
  let across = 3;
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

//isolate fifth box in level two
function levelTwoGridBox5(j) {
  let box5 = 61;
  let across = 3;
  let nextLine = 12;
  if (
    (j > box5 && j < box5 + across) ||
    (j > box5 + nextLine && j < box5 + nextLine + across) ||
    (j > box5 + 2 * nextLine && j < box5 + 2 * nextLine + across) ||
    (j > box5 + 3 * nextLine && j < box5 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate sixth box in level two
function levelTwoGridBox6(j) {
  let box6 = 63;
  let across = 3;
  let nextLine = 12;
  if (
    (j > box6 && j < box6 + across) ||
    (j > box6 + nextLine && j < box6 + nextLine + across) ||
    (j > box6 + 2 * nextLine && j < box6 + 2 * nextLine + across) ||
    (j > box6 + 3 * nextLine && j < box6 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate seventh box in level two
function levelTwoGridBox7(j) {
  let box7 = 65;
  let across = 3;
  let nextLine = 12;
  if (
    (j > box7 && j < box7 + across) ||
    (j > box7 + nextLine && j < box7 + nextLine + across) ||
    (j > box7 + 2 * nextLine && j < box7 + 2 * nextLine + across) ||
    (j > box7 + 3 * nextLine && j < box7 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

//isolate eight box in level two
function levelTwoGridBox8(j) {
  let box8 = 67;
  let across = 3;
  let nextLine = 12;
  if (
    (j > box8 && j < box8 + across) ||
    (j > box8 + nextLine && j < box8 + nextLine + across) ||
    (j > box8 + 2 * nextLine && j < box8 + 2 * nextLine + across) ||
    (j > box8 + 3 * nextLine && j < box8 + 3 * nextLine + across)
  ) {
    return true;
  } else {
    return false;
  }
}

function levelTwoGridColours() {
  let saturation = randomVal(80, 100);
  let lightness = randomVal(50, 60);
  let alpha = 1.0;
  let amount = 7;

  return generateHslaColours(saturation, lightness, alpha, amount);
}

/*---------LEVEL TWO FUNCTIONS END HERE------------*/

/*--------------------------------LEVEL TWO---------------------------------*/

$(".difficultySetting02").click(function () {
  resetClasses(defaultGrid);
  reset();

  clickCounterTwo = 0;
  playCounter = 0;
  flippedCards = 0;

  //assign classes to each box
  for (let j = 0; j < defaultGrid.length; j++) {
    //SELECTION OF COLOURS

    //LEVEL TWO GRID - colours
    if (
      //LEVEL TWO GRID - colour A
      levelTwoGridBox1(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox1");
      defaultGrid[j].style.backgroundColor = "blue";
    } else if (
      //LEVEL TWO GRID - colour B
      levelTwoGridBox2(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox2");
    } else if (
      //LEVEL TWO - colour C
      levelTwoGridBox3(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox3");
    } else if (
      //LEVEL TWO - colour D
      levelTwoGridBox4(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox4");
    } else if (
      //LEVEL TWO - colour D
      levelTwoGridBox5(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox5");
    } else if (
      //LEVEL TWO - colour D
      levelTwoGridBox6(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox6");
    } else if (
      //LEVEL TWO - colour D
      levelTwoGridBox7(j) == true
    ) {
      defaultGrid[j].classList.add("levelTwoBox7");
    } else if (
      //LEVEL TWO - colour D
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
  levelTwoGridColourArray = [];
  levelTwoGridColourArray = levelTwoGridColours();
  shuffle(levelTwoGridColourArray);

  let colour1 = levelTwoGridColourArray[0];

  let colour2 = levelTwoGridColourArray[1];

  let colour3 = levelTwoGridColourArray[2];

  let colour4 = levelTwoGridColourArray[3];

  var colourArrayShuffleTwo = shuffle([
    colour1,
    colour2,
    colour3,
    colour4,
    colour1,
    colour2,
    colour3,
    colour4,
  ]);
  $("#play").fadeIn();

  $("#play").click(function () {
    playCounter = 0;
    clickCounterTwo = 0;
    flippedCards = 0;

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
      setTimeout(flipToBack, 100);
    }

    playCounter++;

    $("#play").fadeOut();
  });

  $(".levelTwoBox1").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox1.length; j++) {
        if (levelTwoBox1[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox1.length; i++) {
        levelTwoBox1[i].style.backgroundColor = colourArrayShuffleTwo[0];

        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox1[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox1[i].style.backgroundColor = colourArrayShuffleTwo[0];
            flippedCards++;
          } else if (
            levelTwoBox1[i].style.backgroundColor == colourArrayShuffleTwo[0]
          ) {
            levelTwoBox2[i].style.backgroundColor = colourArrayShuffleTwo[0];
          } else {
            setTimeout(function () {
              levelTwoBox1[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }

    clickCounterTwo++;
  });

  $(".levelTwoBox2").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox2.length; j++) {
        if (levelTwoBox2[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox2.length; i++) {
        levelTwoBox2[i].style.backgroundColor = colourArrayShuffleTwo[1];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox2[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox2[i].style.backgroundColor = colourArrayShuffleTwo[1];
            flippedCards++;
          } else if (
            levelTwoBox2[i].style.backgroundColor == colourArrayShuffleTwo[1]
          ) {
            levelTwoBox2[i].style.backgroundColor = colourArrayShuffleTwo[1];
          } else {
            setTimeout(function () {
              levelTwoBox2[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox3").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox3.length; j++) {
        if (levelTwoBox3[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox3.length; i++) {
        levelTwoBox3[i].style.backgroundColor = colourArrayShuffleTwo[2];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox3[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox3[i].style.backgroundColor = colourArrayShuffleTwo[2];
            flippedCards++;
          } else if (
            levelTwoBox3[i].style.backgroundColor == colourArrayShuffleTwo[2]
          ) {
            levelTwoBox3[i].style.backgroundColor = colourArrayShuffleTwo[2];
          } else {
            setTimeout(function () {
              levelTwoBox3[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox4").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox4.length; j++) {
        if (levelTwoBox4[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox4.length; i++) {
        levelTwoBox4[i].style.backgroundColor = colourArrayShuffleTwo[3];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox4[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox4[i].style.backgroundColor = colourArrayShuffleTwo[3];
            flippedCards++;
          } else if (
            levelTwoBox4[i].style.backgroundColor == colourArrayShuffleTwo[3]
          ) {
            levelTwoBox4[i].style.backgroundColor = colourArrayShuffleTwo[3];
          } else {
            setTimeout(function () {
              levelTwoBox4[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox5").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox5.length; j++) {
        if (levelTwoBox5[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox5.length; i++) {
        levelTwoBox5[i].style.backgroundColor = colourArrayShuffleTwo[4];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox5[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox5[i].style.backgroundColor = colourArrayShuffleTwo[4];
            flippedCards++;
          } else if (
            levelTwoBox5[i].style.backgroundColor == colourArrayShuffleTwo[4]
          ) {
            levelTwoBox5[i].style.backgroundColor = colourArrayShuffleTwo[4];
          } else {
            setTimeout(function () {
              levelTwoBox5[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox6").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox6.length; j++) {
        if (levelTwoBox6[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox6.length; i++) {
        levelTwoBox6[i].style.backgroundColor = colourArrayShuffleTwo[5];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox7[i].style.backgroundColor ||
            levelTwoBox6[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox6[i].style.backgroundColor = colourArrayShuffleTwo[5];
            flippedCards++;
          } else if (
            levelTwoBox6[i].style.backgroundColor == colourArrayShuffleTwo[5]
          ) {
            levelTwoBox6[i].style.backgroundColor = colourArrayShuffleTwo[5];
          } else {
            setTimeout(function () {
              levelTwoBox6[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox7").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox7.length; j++) {
        if (levelTwoBox7[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox7.length; i++) {
        levelTwoBox7[i].style.backgroundColor = colourArrayShuffleTwo[6];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox7[i].style.backgroundColor = colourArrayShuffleTwo[6];
            flippedCards++;
          } else if (
            levelTwoBox7[i].style.backgroundColor == colourArrayShuffleTwo[6]
          ) {
            levelTwoBox7[i].style.backgroundColor = colourArrayShuffleTwo[6];
          } else {
            setTimeout(function () {
              levelTwoBox7[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });

  $(".levelTwoBox8").click(function () {
    let levelTwoBox1 = $(".levelTwoBox1");
    let levelTwoBox2 = $(".levelTwoBox2");
    let levelTwoBox3 = $(".levelTwoBox3");
    let levelTwoBox4 = $(".levelTwoBox4");
    let levelTwoBox5 = $(".levelTwoBox5");
    let levelTwoBox6 = $(".levelTwoBox6");
    let levelTwoBox7 = $(".levelTwoBox7");
    let levelTwoBox8 = $(".levelTwoBox8");

    function checkColour() {
      for (let j = 0; j < levelTwoBox8.length; j++) {
        if (levelTwoBox8[j].style.backgroundColor == gridBackColour) {
          return true;
        } else {
          return false;
        }
      }
    }

    if ((playCounter > 0 || flippedCards % 2 == 1) && checkColour() == true) {
      for (let i = 0; i < levelTwoBox8.length; i++) {
        levelTwoBox8[i].style.backgroundColor = colourArrayShuffleTwo[7];
        if (clickCounterTwo > 0 && flippedCards % 2 == 0) {
          if (
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox2[i].style.backgroundColor ||
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox3[i].style.backgroundColor ||
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox1[i].style.backgroundColor ||
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox4[i].style.backgroundColor ||
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox5[i].style.backgroundColor ||
            levelTwoBox8[i].style.backgroundColor ==
              levelTwoBox6[i].style.backgroundColor ||
            levelTwoBox7[i].style.backgroundColor ==
              levelTwoBox8[i].style.backgroundColor
          ) {
            levelTwoBox8[i].style.backgroundColor = colourArrayShuffleTwo[7];
            flippedCards++;
          } else if (
            levelTwoBox8[i].style.backgroundColor == colourArrayShuffleTwo[7]
          ) {
            levelTwoBox8[i].style.backgroundColor = colourArrayShuffleTwo[7];
          } else {
            setTimeout(function () {
              levelTwoBox8[i].style.backgroundColor = gridBackColour;
            }, 500);
          }
        }
      }
    }
    clickCounterTwo++;
  });
});
