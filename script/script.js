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
$(window).on("load", function () {
  function switchToDark() {
    $(".col-1").toggleClass("grey-bg dark-bg");
  }

  for (i = 0; i < 120; i++) {
    $(".level-one").append('<div class="col-1 grey-bg"><img></div>');
  }

  var gridArray = document.getElementsByClassName("col-1");

  //DIFFICULTY LEVEL 01 - colour blocks
  for (j = 0; j < gridArray.length; j++) {
    let boxA = 13;
    let boxB = 17;
    let boxC = 61;
    let boxD = 65;
    let across = 5;
    let nextLine = 12;
    if (
      //LEVEL 01 - colour A
      (j > boxA && j < boxA + across) ||
      (j > boxA + nextLine && j < boxA + nextLine + across) ||
      (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
      (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "rgba(128, 128, 128, 0.781)";
      gridArray[j].style.border = "none";
    } else if (
      //LEVEL 01 - colour B
      (j > boxB && j < boxB + across) ||
      (j > boxB + nextLine && j < boxB + nextLine + across) ||
      (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
      (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "rgba(128, 128, 128, 0.781)";
      gridArray[j].style.border = "none";
    } else if (
      //LEVEL 01 - colour C
      (j > boxC && j < boxC + across) ||
      (j > boxC + nextLine && j < boxC + nextLine + across) ||
      (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
      (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "rgba(128, 128, 128, 0.781)";
      gridArray[j].style.border = "none";
    } else if (
      //LEVEL 01 - colour D
      (j > boxD && j < boxD + across) ||
      (j > boxD + nextLine && j < boxD + nextLine + across) ||
      (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
      (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "rgba(128, 128, 128, 0.781)";
      gridArray[j].style.border = "none";
    } //LEVEL 01 - border colours
    else if (
      //LEVEL 01 - top border
      j > boxA - nextLine &&
      j < boxB + across - nextLine
    ) {
      gridArray[j].style.borderBottom = "3px solid black";
    } else if (
      //LEVEL 01 - left border
      j == boxA ||
      j == boxA + nextLine ||
      j == boxA + 2 * nextLine ||
      j == boxA + 3 * nextLine ||
      j == boxA + 4 * nextLine ||
      j == boxA + 5 * nextLine ||
      j == boxA + 6 * nextLine ||
      j == boxA + 7 * nextLine ||
      j == boxB ||
      j == boxB + nextLine ||
      j == boxB + 2 * nextLine ||
      j == boxB + 3 * nextLine ||
      j == boxB + 4 * nextLine ||
      j == boxB + 5 * nextLine ||
      j == boxB + 6 * nextLine ||
      j == boxB + 7 * nextLine
    ) {
      gridArray[j].style.borderRight = "3px solid black";
    } else if (
      //LEVEL 01 - right border
      j == boxB + across ||
      j == boxB + across + nextLine ||
      j == boxB + +across + 2 * nextLine ||
      j == boxB + across + 3 * nextLine ||
      j == boxB + across + 4 * nextLine ||
      j == boxB + across + 5 * nextLine ||
      j == boxB + across + 6 * nextLine ||
      j == boxB + across + 7 * nextLine
    ) {
      gridArray[j].style.borderLeft = "3px solid black";
    } else if (
      //LEVEL 01 - bottom border
      j > boxC + 4 * nextLine &&
      j < boxD + across + 4 * nextLine
    ) {
      gridArray[j].style.borderTop = "3px solid black";
    } else {
      document
        .getElementById("darkMode")
        .addEventListener("click", switchToDark);
    }
  }
});
