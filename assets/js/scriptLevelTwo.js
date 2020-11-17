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

/*---------LEVEL TWO FUNCTIONS END HERE------------*/

/*--------------------------------LEVEL TWO---------------------------------*/

$(".difficultySetting02").click(function () {
  choiceOne = false;
  choiceTwo = false;
  activeState = false;
  resetClasses(defaultGrid, "levelOne");
  resetClasses(defaultGrid, "levelThree");
  resetClasses(defaultGrid, "levelFour");

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
    updatebestGameScore("1");
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
});
