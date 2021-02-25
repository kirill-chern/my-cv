$( function() {
    $( ".about-section__chronology" ).click( function() {
        $(this).toggleClass("visible");
        $( ".about-section__chronology-list" ).toggle(400);
    } );
    $("nav").on("click","a", function (event) {
        event.preventDefault();
        let id = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
} );