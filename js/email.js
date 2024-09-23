
// Assign image to email
function assignImageToEmail(inputEmail) {
    const email = inputEmail;
    const image = $("#random-image").attr("src");
    localStorage.setItem(email, image);
    addImageToCollection(email, image);
}


// Add image to collection (rendered on screen)
function addImageToCollection(email, image) {
    localStorage.setItem(email, image);
}


