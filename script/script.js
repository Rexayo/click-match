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

