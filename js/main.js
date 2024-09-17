$(document).ready(function(){

    // Load a random image
    loadRandomPicsumImage();

    // Add Event Handlers to buttons on the page
    $('#email-form').on('submit', function(e){
        const inputEmail = $("#email-input").val();
        e.preventDefault();
        
        storeCurrentlySelectedEmail(inputEmail);
        assignImageToEmail(inputEmail);


        //  TODO: I should check that the option does not already exist at this point!!!!
        //  Add the new option to the select list
        $("#email-list").val(new Option(inputEmail, inputEmail));
        setEmailList();


        getEmailList();
        $("#email-input").val("");
        
    });
    $("#random-image-button").on("click", function (e) {
        loadRandomPicsumImage();
    });

    $("#email-list").on("change", function (e) {
        const chosenEmail = $(this).val();
        console.log("Email list changed to: " + chosenEmail);
        storeCurrentlySelectedEmail(chosenEmail);
        retrieveCurrentlySelectedEmail();
    });

    //checkForStoredEmails();




});