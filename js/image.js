// Load a new random image from Picsum
function loadRandomPicsumImage() {
  // API URL Variables
  const apiUrl = "https://picsum.photos/600";
  const apiUrlSeed = "https://picsum.photos/seed/";

  //  Generate random seeds
  const randomSeed1 = Math.floor(Math.random() * 1000000);
  const randomSeed2 = new Date().getTime();

  //  Generate the new image URL using the random seeds
  const newImageUrl =
    apiUrlSeed + randomSeed1 + "/600/600" + "?random=" + randomSeed2;

  //  Set the new image URL as the source of the image
  $("#random-image").attr("src", newImageUrl);

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
