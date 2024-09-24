// Array to store unique email addresses
const uniqueEmailAddresses = [];

// Assign image to email
function assignImageToEmail(email, imageURL) {
  let $emailListItem = findEmailListItem(email);

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
      "<img class='collection-image' src='" +
      imageURL +
      "' alt='Assigned Image'>" +
      "</li>"
  );

  // Add event listener to the newly img
  $imageList.find(".collection-image").last().on("click", function() {

    // This would make the main image match the clicked image
    $('#random-image').attr('src', imageURL);

  });


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
      "<ul class='image-list'>" +
      "</ul>" +
      "</li>"
  );

  // Add event listener to the newly created h2 tag
  $emailList.find(".email-list-item-title").last().on("click", function() {
    $('#email-input').val(email);
  });

  
}
