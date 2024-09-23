$(document).ready(function(){

    // Load a random image
    loadRandomPicsumImage();

    // Add Event Handlers to buttons on the page
    $('#email-form').on('submit', function(e){
        e.preventDefault();
        const inputEmail = $("#email-input").val();
        const currentImageSourceURL = $("#random-image").attr("src");
        assignImageToEmail(inputEmail, currentImageSourceURL);
    });


    $("#random-image-button").on("click", function (e) {
        loadRandomPicsumImage();
    });


});