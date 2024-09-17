$(document).ready(function(){

    // Add Event Handlers to buttons on the page
    $('#email-form').on('submit', function(e){
        e.preventDefault();
        console.log('Form submitted');
    });
    $("#random-image-button").on("click", function (e) {
        loadRandomImage();
      });

});