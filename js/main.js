$(document).ready(function () {
  // Load a random image
  loadRandomPicsumImage();

  // Add Event Handler to the form submission (so that it will also validate email address!)
  $("#email-form").on("submit", function (e) {
    e.preventDefault();
    const inputEmail = $("#email-input").val();
    const currentImageSourceURL = $("#random-image").attr("src");
    assignImageToEmail(inputEmail, currentImageSourceURL);
  });

  // Add Event Handler to the Random Image Button
  $("#random-image-button").on("click", function (e) {
    loadRandomPicsumImage();
  });
});
