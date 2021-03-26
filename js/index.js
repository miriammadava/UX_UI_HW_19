console.log("index.js file")

var name = "project1";{
    $('.project1') .on("hover", function () {
        odd()
          .hide()
        .end()
        .even()
          .hover(function() {
            $( this )
              .toggleClass( "active" )
              .next()
                .stop( true, true )
                .slideToggle();
          });
        )};
}


