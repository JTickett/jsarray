$(document).ready(function(){



});

function assignImageToEmail(inputEmail) {
    const email = inputEmail;
    const image = $("#random-image").attr("src");
    localStorage.setItem(email, image);
}

function storeCurrentlySelectedEmail(selection) {
    localStorage.setItem("currentlySelectedEmail", selection);

}

function retrieveCurrentlySelectedEmail() {
    const testRetrieve = localStorage.getItem("currentlySelectedEmail");
    console.log(testRetrieve);
    if (testRetrieve) {
        console.log("testRetrieve is not null");
        $("#email-list").val(testRetrieve);
        $("#email-input").val(testRetrieve);
    }
}





//  This should look for a list of emails being stored in cookies, and then repopulate the selection box with this list.
function getEmailList() {
    const emailListJSON = localStorage.getItem("emailCollection");
    if (emailListJSON) {

        //  Parse the JSON into an array
        const emailArray = JSON.parse(emailListJSON);

        //  Check the length of the array, and spit out to console
        const length = emailArray.length;
        console.log("Number of stored emails: ", length);

        //  If there's more than one in the array
        if (length > 0) {

            //  Since the email list does contain at least one option, we should now display the select box.
            $("#email-list").addClass("visible");
            $("#email-list").removeClass("invisible");

            //  Check currently Selected email from the cookie.
            const currentlySelectedEmail = localStorage.getItem("currentlySelectedEmail");

            //  Loop through array, printing each value with it's index,
            emailArray.forEach((email, index) => {
                console.log(`Email ${index + 1}:`, email);

                $("#email-list").val(new Option(email, email))
                $("#email-list").append(`<option value="${email}">${email}</option>`)

                //  Set the select option to the currently chosen one.
                if (email === currentlySelectedEmail) {
                    $('#email-list').children().get(index).selected = true;
                }
            });

            // Set the option to currently chosen email
            // $('#email-list option[value="SEL1"]').prop(selected,true);

        } else {
            console.log("Unexpected: Array was EMPTY!?");
            // Perhaps hide the dropdown box again?
            $("#email-list").addClass("invisible");
            $("#email-list").removeClass("visible");
        }


    } else {
        console.log("There are no stored emails");
        // Perhaps hide the dropdown box again?
        $("#email-list").addClass("invisible");
        $("#email-list").removeClass("visible");
    }
}




function setEmailList() {

    //  Blank array
    let emailArray = [];
    
    //  Loop through each select box option, and then populate the array with those values.
    $("#email-list option").each(function (e){
        emailArray.push($(this).val());
    });

    //  If the array is empty then create new option for the currently selected email
    if (emailArray.length == 0) {
        const currentlySelectedEmail = localStorage.getItem("currentlySelectedEmail");
        $("#email-list").val(new Option(currentlySelectedEmail, currentlySelectedEmail))
        emailArray.push(currentlySelectedEmail);
    }

    //  Turn the array into JSON, and then store this in the cookie.
    const emailListJSON = JSON.stringify(emailArray);
    localStorage.setItem("emailCollection", emailListJSON);
}