// Array to store unique email addresses
const uniqueEmailAddresses = [];

// Function to find a list item by its value attribute
function findListItemByValue(email) {
  return $('li[value="' + email + '"]');
}

// Scroll to latest image (when adding a new image)
function scrollToLatestImageListItem(email) {
  $emailList = findListItemByValue(email);
  const $latestImageListItem = $emailList.find('.image-list li:last-child');
  $latestImageListItem.get(0).scrollIntoView({ behavior: "smooth" });
}

// Assign image to email
function assignImageToEmail(email, imageURL) {
  const emailInput = document.getElementById("email-input");
  emailInput.setCustomValidity("");
  // If the email is not in the list, add it, otherwise do nothing
  if (!isEmailInList(email)) {
    log("New Email: " + email);
    addEmailToList(email);
  } else {
    log("Email already exists: " + email);
  }

  // AT THIS POINT, THE EMAIL LIST ITEM EXISTS
  // If the image is not in the list, add it, otherwise do nothing
  if (!isImageInList(email, imageURL)) {
    log("Adding new Image for this email: " + imageURL);
    addImageToList(email, imageURL);
    log("Success!");
  } else {
    log("Image already exists for this Email: " + imageURL);
    log("dupe!");
    emailInput.setCustomValidity(
      "This image is already assigned to this email address!"
    );
    emailInput.reportValidity();
    // Timeout needed to avoid problematic clashing with the previous validity message.
    // I also clear the custom validity message in two other places (when random image assigned, and when email title is clicked)
    setTimeout(() => {
      emailInput.setCustomValidity("");
    }, 2000);
  }
}

// Check if the image is in the list, and return a value of true or false
function isImageInList(email, imageURL) {
  const $imageListItem = findImageListItem(email, imageURL);
  if ($imageListItem.length > 0) {
    log("Matching Image Found: " + $imageListItem.attr("src"));
    return true;
  } else {
    log("No matching image found: " + imageURL);
    return false;
  }
}

// Find the image list item and return it if it exists
function findImageListItem(email, imageURL) {
  // Find the email list item
  const $emailListItem = findEmailListItem(email);
  // Find the image list
  const $imageList = $emailListItem.find(".image-list");
  // Find the image list item
  const $imageListItem = $imageList.find(
    "img.collection-image[src='" + imageURL + "']"
  );
  // Return the image list item
  return $imageListItem;
}

function addImageToList(email, imageURL) {
  // Find the email list item
  const $emailListItem = findEmailListItem(email);
  // Find the image list
  const $imageList = $emailListItem.find(".image-list");
  // Add the image list item
  $imageList.append(
    "<li class='image-list-item'>" +
      "<div class='image-container'>" +
      "<img class='collection-image' src='" +
      imageURL +
      "' alt='Assigned Image'>" +
      "<div class='delete-button'>X</div>" +
      "</div>" +
      "</li>"
  );

  // Add event listener to the newly img
  $imageList
    .find(".image-container")
    .last()
    .on("click", function () {
      // This would make the main image match the clicked image
      $("#random-image").attr("src", imageURL);

      // Remove any existing event listeners
      $("#random-image").off("click");
      // Add a new event listener
      $("#random-image").on("click", function () {
        // This would open a new tab to the URL of the clicked image but as a larger resolution
        const newLargerImageURL = imageURL.replace(
          imageResolution,
          imageResolutionLarge
        );
        window.open(newLargerImageURL, "_blank");
      });
    });

  // Add event listener to the delete button
  $imageList
    .find(".delete-button")
    .last()
    .on("click", function () {
      // Remove the image list item
      $(this).closest(".image-list-item").remove();
    });

  // Scroll the email list item into view after a short delay
  findListItemByValue(email).get(0).scrollIntoView({ behavior: "smooth" });
  setTimeout(() => {
    scrollToLatestImageListItem(email);
  }, 500);
}

// Check if the email is in the list, and return a value of true or false
function isEmailInList(email) {
  const $emailListItem = findEmailListItem(email);
  if ($emailListItem.length > 0) {
    log("Matching Email Found: " + $emailListItem.attr("value"));
    return true;
  } else {
    log("No matching email found: " + email);
    return false;
  }
}

// Find the email list item and return it
function findEmailListItem(email) {
  let $emailListItem = $("li").filter(function () {
    return $(this).attr("value") === email;
  });
  return $emailListItem;
}

// Add the HTML for the email list item
function addEmailToList(email) {
  const $emailList = $("#email-list");
  $emailList.append(
    "<li class='email-list-item' value='" +
      email +
      "'>" +
      "<h2 class='email-list-item-title'>" +
      email +
      "</h2>" +
      "<div class='remove-email'>X</div>" +
      "<ul class='image-list'>" +
      "</ul>" +
      "</li>"
  );

  // Add event listener to the newly created h2 tag, so that when it is clicked, the email input field is populated with the email address
  $emailList
    .find(".email-list-item-title")
    .last()
    .on("click", function () {
      $("#email-input").val(email);
      const nativeEmailInput = document.getElementById("email-input");
      nativeEmailInput.setCustomValidity(""); // Clear the custom validity message so that when a new email is selected, the "dupe image" message is not shown as lingering from before
      scrollListIntoView(email);
    });

  // Add event listener to the remove email div
  const $emailListItem = $emailList.find(".email-list-item").last();
  const $emailListItemTitle = $emailListItem.find(".email-list-item-title");
  const $removeEmail = $emailListItem.find(".remove-email");

  // Add event listener to the remove email div
  $removeEmail.on("click", function () {
    $emailListItem.remove();
  });

  // Add event listener to the email list item
  $emailListItem.on("mouseenter", function () {
    $removeEmail.css("display", "inline-block");
  });
  $emailListItem.on("mouseleave", function () {
    $removeEmail.css("display", "none");
  });
}
