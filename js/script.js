function openWin() {
  window.open("https://www.w3schools.com");
}
$(document).ready(function() {
  $('.menu-item').hover(function(){
  $('.image-caption',this).slideToggle('slow');
}, function(){
  $('.image-caption',this).slideToggle('slow');
  });








var modal = document.getElementById("myModal");

var btn = $('.modalTrigger');


var span = document.getElementsByClassName("close")[0];

$('.modalTrigger').on('click',function(){

  modal.style.display = "block";
});

// When user clicks  close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



$( "#size" ).change(function() {
  var number_pizza = $('#number_pizza').val();
  var size = $('#size').val();
  var total = number_pizza*size;
  $('#total_amount').html(total);
});

$( "#number_pizza" ).keyup(function() {
  var number_pizza = $('#number_pizza').val();
  var size = $('#size').val();
  var total = number_pizza*size;
  $('#total_amount').html(total);
});


});



