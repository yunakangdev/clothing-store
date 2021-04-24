$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  $(".couple").css({
    transform: "translate(0px, -" + wScroll / 15 + "%)",
  });

  $(".logo").css({
    transform: "translate(0px, " + wScroll / 100 + "%)",
  });

  if (wScroll > -1) {
    setTimeout(function() {
      $(".pics figure")
        .eq(0)
        .addClass("is-showing");
    }, 200);

    setTimeout(function() {
      $(".pics figure")
        .eq(7)
        .addClass("is-showing");
    }, 600);

    setTimeout(function() {
      $(".pics figure")
        .eq(2)
        .addClass("is-showing");
    }, 800);

    setTimeout(function() {
      $(".pics figure")
        .eq(3)
        .addClass("is-showing");
    }, 830);

    setTimeout(function() {
      $(".pics figure")
        .eq(5)
        .addClass("is-showing");
    }, 1000);

    setTimeout(function() {
      $(".pics figure")
        .eq(1)
        .addClass("is-showing");
    }, 1400);

    setTimeout(function() {
      $(".pics figure")
        .eq(4)
        .addClass("is-showing");
    }, 1430);

    setTimeout(function() {
      $(".pics figure")
        .eq(6)
        .addClass("is-showing");
    }, 2200);

    setTimeout(function() {
      $(".pics figure")
        .eq(8)
        .addClass("is-showing");
    }, 1200);

    setTimeout(function() {
      $(".pics figure")
        .eq(9)
        .addClass("is-showing");
    }, 2200);

    setTimeout(function() {
      $(".pics figure")
        .eq(10)
        .addClass("is-showing");
    }, 4300);

    setTimeout(function() {
      $(".pics figure")
        .eq(11)
        .addClass("is-showing");
    }, 3000);

    setTimeout(function() {
      $(".pics figure")
        .eq(12)
        .addClass("is-showing");
    }, 2800);

    setTimeout(function() {
      $(".pics figure")
        .eq(13)
        .addClass("is-showing");
    }, 2830);

    setTimeout(function() {
      $(".pics figure")
        .eq(14)
        .addClass("is-showing");
    }, 3600);

    setTimeout(function() {
      $(".pics figure")
        .eq(15)
        .addClass("is-showing");
    }, 3400);

    setTimeout(function() {
      $(".pics figure")
        .eq(16)
        .addClass("is-showing");
    }, 3800);

    setTimeout(function() {
      $(".pics figure")
        .eq(17)
        .addClass("is-showing");
    }, 4200);

    setTimeout(function() {
      $(".pics figure")
        .eq(18)
        .addClass("is-showing");
    }, 5800);

    setTimeout(function() {
      $(".pics figure")
        .eq(19)
        .addClass("is-showing");
    }, 5200);
  }
});
