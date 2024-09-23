$(document).ready(function(){

    


});

function assignImageToEmail(inputEmail) {
    const email = inputEmail;
    const image = $("#random-image").attr("src");
    localStorage.setItem(email, image);

    //  HERE IT SHOULD ALSO CREATE AN IMAGE IN THE UNORDERED LIST FOR THE SELECTED EMAIL

}

function storeCurrentlySelectedEmail(selection) {
    localStorage.setItem("currentlySelectedEmail", selection);

}

function retrieveCurrentlySelectedEmail() {
    const testRetrieve = localStorage.getItem("currentlySelectedEmail");
    console.log(testRetrieve);
    if (testRetrieve) {
        console.log("testRetrieve is not null");
        $("#email-input").val(testRetrieve);
    }
}



