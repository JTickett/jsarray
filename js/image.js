// Global Variables
const picsumUrl = "https://picsum.photos/600";
const picsumSeedUrl = "https://picsum.photos/seed/";
const imageResolution = "/600/600";

// Load a new random image from Picsum
function loadRandomPicsumImage() {

  //  Generate random seeds
  const randomSeed1 = Math.floor(Math.random() * 1000000);
  const randomSeed2 = new Date().getTime();

  //  Generate the new image URL using the random seeds
  const newImageUrl =
    picsumSeedUrl + randomSeed1 + imageResolution + "?random=" + randomSeed2;

  //  Set the new image URL as the source of the image
  $("#random-image").attr("src", newImageUrl);

  // Remove any existing event listeners
  $("#random-image").off("click");

  // Add a new event listener
  $("#random-image").on("click", function() {
    // This would open a new tab to the URL of the clicked image but as a larger resolution
    const newLargerImageURL = newImageUrl.replace(imageResolution, "/1200/1200");
    window.open(newLargerImageURL, '_blank');
  });

  //  Save the new image URL to localStorage
  localStorage.setItem("currentImage", newImageUrl);
}

// Load a new random image from Unsplash (This is a WIP!)
function loadRandomUnsplashImage() {
  // API URL Variables
  const accessKey = "B75ND5dB45bpRsgNSq8ilB_9_Nnx2PrJZfmRep88Fns";
  const unsplashURL =
    "https://api.unsplash.com/photos/random/?client_id=" +
    accessKey +
    "&orientation=squarish";

  //  Set the new image URL as the source of the image
  $("#random-image").attr("src", unsplashURL);
}
