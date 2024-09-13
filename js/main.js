// Stuff to do once the DOM is ready.
$(document).ready(function(){
    $('.form-group').on('submit', function(e){
        e.preventDefault();
        console.log('Form submitted');
    });
});