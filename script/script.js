$('.light').click(function() {
    $("i", this).toggleClass("fa-toggle-on fa-toggle-off");
     $(".navbar").toggleClass("navbar-light navbar-dark");
      $(".navbar").toggleClass("bg-light bg-primary");
      $(".navbar-brand").toggleClass("text-primary text-white");
    //   $(".navbar-toggler").toggleClass("blue-bg no-bg ");

});
