function openWin() {
  window.open("https://www.w3schools.com");
}
$(document).ready(function() {
  $('.menu-item').hover(function(){
  $('.image-caption',this).slideToggle('slow');
}, function(){
  $('.image-caption',this).slideToggle('slow');
  });








  // Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = $('.modalTrigger');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
$('.modalTrigger').on('click',function(){

  modal.style.display = "block";
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}






});



