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
  for (i = 0; i < 144; i++) {
    $(".row").append('<div class="col-1 grey-bg"><img></div>');
  }

  var gridArray = document.getElementsByClassName("col-1");

  //DIFFICULTY LEVEL 01
  for (j = 0; j < gridArray.length; j++) {
    
    let boxA = 13;
    let boxB = 17;
    let boxC = 61;
    let boxD = 65;
    let across = 5;
    let nextLine = 12;
    if ( //LEVEL 01 - colour A
      (j > boxA && j < boxA + across) ||
      (j > boxA + nextLine && j < boxA + nextLine + across) ||
      (j > boxA + 2 * nextLine && j < boxA + 2 * nextLine + across) ||
      (j > boxA + 3 * nextLine && j < boxA + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "red";
      gridArray[j].style.border = "none";
    } else  if (  //LEVEL 01 - colour B
      (j > boxB && j < boxB + across) ||
      (j > boxB + nextLine && j < boxB + nextLine + across) ||
      (j > boxB + 2 * nextLine && j < boxB + 2 * nextLine + across) ||
      (j > boxB + 3 * nextLine && j < boxB + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "blue";
      gridArray[j].style.border = "none";
    } else  if (  //LEVEL 01 - colour C
      (j > boxC && j < boxC + across) ||
      (j > boxC + nextLine && j < boxC + nextLine + across) ||
      (j > boxC + 2 * nextLine && j < boxC + 2 * nextLine + across) ||
      (j > boxC + 3 * nextLine && j < boxC + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "yellow";
      gridArray[j].style.border = "none";
    }else  if (  //LEVEL 01 - colour D
      (j > boxD && j < boxD + across) ||
      (j > boxD + nextLine && j < boxD + nextLine + across) ||
      (j > boxD + 2 * nextLine && j < boxD + 2 * nextLine + across) ||
      (j > boxD + 3 * nextLine && j < boxD + 3 * nextLine + across)
    ) {
      gridArray[j].style.backgroundColor = "green";
      gridArray[j].style.border = "none";
    } else if(j.style.backgroundColor=="lightgray"){
        
    }

    let gridColour = j.style.backgroundColor;
if(gridColour=="lightgray"){
    $(".col-1").toggleClass("grey-bg dark-bg");
};
  };

  
  
});
