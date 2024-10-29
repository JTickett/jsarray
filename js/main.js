const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const customValidityMessage = "Your email domain must contain a '.' for some reason!";


$(document).ready(function () {
  // Load a random image
  loadRandomPicsumImage();

  const nativeEmailInput = document.getElementById("email-input");

  // Add Event Handler to the form submission (so that it will also validate email address!)
  $("#email-form").on("submit", function (e) {
    e.preventDefault();

    // I realise this is unneccesarily complicated, but it's helping me understand manipulating native vs jQuery objects better.
    const $inputEmail = $("#email-input");
    const inputEmailValue = $inputEmail.val();
    const currentImageSourceURL = $("#random-image").attr("src");

    if (emailRegex.test(inputEmailValue)) {
      log("Valid email address");
      nativeEmailInput.setCustomValidity("");
      assignImageToEmail(inputEmailValue, currentImageSourceURL);
    } else {
      log("Invalid email address");
      nativeEmailInput.setCustomValidity(customValidityMessage);
      nativeEmailInput.reportValidity();
    }
  });

  // Add Event Handler to the Random Image Button
  $("#random-image-button").on("click", function (e) {
    loadRandomPicsumImage();
  });

  // Add this after your form submit handler
  $("#email-input").on("input", function() {
    this.setCustomValidity("");
  });
});
