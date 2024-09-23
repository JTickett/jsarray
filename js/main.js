$(document).ready(function(){

    // Load a random image
    loadRandomPicsumImage();

    // Add Event Handlers to buttons on the page
    $('#email-form').on('submit', function(e){
        const inputEmail = $("#email-input").val();
        e.preventDefault();
        
        storeCurrentlySelectedEmail(inputEmail);
        assignImageToEmail(inputEmail);

    });
    $("#random-image-button").on("click", function (e) {
        loadRandomPicsumImage();
    });


});