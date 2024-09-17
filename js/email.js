$(document).ready(function(){





});

function assignImageToEmail() {
    const email = $("#email-input").val();
    const image = $("#random-image").attr("src");
    localStorage.setItem(email, image);
}