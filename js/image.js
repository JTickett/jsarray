const apiUrl = 'https://picsum.photos/600';
//const defaultImageUrl = 'https://picsum.photos/id/237/400/400'; // Default fallback image

$(document).ready(function(){

    $('#newImageButton').on('click', function(e){
        loadRandomImage();
    });

});

// Load a new random image
function loadRandomImage() {
  const newImageUrl = apiUrl + "?random=" + new Date().getTime();
  $("#random-image").attr("src", newImageUrl);
  localStorage.setItem("currentImage", newImageUrl);
}
