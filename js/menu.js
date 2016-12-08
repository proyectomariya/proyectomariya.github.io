$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});

var button = document.querySelector('.menu-icon');
button.addEventListener('click', function (){
  button.classList.toggle('open');
});