const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const customValidityMessage = "Your email domain must contain a '.' for some reason!";

$(document).ready(function () {
  // Load a random image
  loadRandomPicsumImage();

  // Add Event Handler to the form submission (so that it will also validate email address!)
  $("#email-form").on("submit", function (e) {
    e.preventDefault();
    const inputEmail = $("#email-input").val();
    const emailInput = document.getElementById("email-input");
    const currentImageSourceURL = $("#random-image").attr("src");

    if (emailRegex.test(inputEmail)) {
      emailInput.setCustomValidity("");
      assignImageToEmail(inputEmail, currentImageSourceURL);
    } else {
      console.log("Invalid email address");
      emailInput.setCustomValidity(customValidityMessage);
      emailInput.reportValidity();
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
