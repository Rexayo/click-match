$(".light").click(function () {
  $("i", this).toggleClass("fa-toggle-on fa-toggle-off");
  $("i", this).toggleClass("text-primary text-white");
  $(".navbar").toggleClass("navbar-light navbar-dark");
  $(".navbar").toggleClass("bg-light bg-primary");
  $(".navbar-brand").toggleClass("text-primary text-white");
  $(".menu-icon").toggleClass("text-primary text-light");
});

$(".menu-icon").click(function () {
  $("i", this).toggleClass("fa-hand-o-down fa-hand-o-up");
});

$(document).ready(function () {
  for (i = 0; i < 20; i++) {
    $(".row").append('<div class="col grey-bg"><img></div>');
  };
  document.getElementByClass("grey-bg").style.width = viewWidth / 20;
  document.getElementByClass("grey-bg").style.height = viewWidth / 20;
});
