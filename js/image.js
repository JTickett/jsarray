$(document).ready(function () {
  


});

// Variables
const apiUrl = "https://picsum.photos/600";
const apiUrlSeed = "https://picsum.photos/seed/";
const defaultImageUrl = 'https://picsum.photos/id/40/600/600';


// Load a new random image
function loadRandomImage() {
  
  // Variables
const apiUrl = "https://picsum.photos/600";
const apiUrlSeed = "https://picsum.photos/seed/";
const defaultImageUrl = 'https://picsum.photos/id/40/600/600';

  //  Generate a random seed (two options)
  const randomSeed1 = Math.floor(Math.random() * 10000);
  const randomSeed2 = new Date().getTime();


  const newImageUrl2 = apiUrlSeed + randomSeed1 + "/600/600";



  $("#random-image").attr("src", newImageUrl2);
  localStorage.setItem("currentImage", newImageUrl2);
}
