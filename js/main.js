$(document).ready(function(){

    // Load a random image
    loadRandomPicsumImage();

    // Add Event Handlers to buttons on the page
    $('#email-form').on('submit', function(e){
        e.preventDefault();
        assignImageToEmail();
        console.log('Form submitted');
    });
    $("#random-image-button").on("click", function (e) {
        loadRandomPicsumImage();
    });


});