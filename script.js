$( function() {
    $( ".about-section__chronology" ).click( function() {
        $(this).toggleClass("visible");
        $( ".about-section__chronology-list" ).toggle(400);
    } );
} );