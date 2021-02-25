$(function () {
  $(".about-section__chronology").click(function () {
    $(this).toggleClass("visible");
    $(".about-section__chronology-list").toggle(400);
  });
  $("nav").on("click", "a", function (event) {
    event.preventDefault();
    let id = $(this).attr("href"),
      top = $(id).offset().top;
    $("body,html").animate({ scrollTop: top }, 1000);
  });
  let sections = $("section"),
    nav = $("nav");
  $(window).on("scroll", function () {
    let cur_pos = $(this).scrollTop();

    sections.each(function () {
      let top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        nav.find("a").removeClass("active");
        nav.find('a[href="#' + $(this).attr("id") + '"]').addClass("active");
      }
    });
  });
});
