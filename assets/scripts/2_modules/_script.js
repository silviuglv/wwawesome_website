$(document).ready(function() {


  // Lead header type effect

  var typed = new Typed('#lead-title', {
    strings: ['We bring the <span class="focus">world</span> to <br /> your business', 'We offer a <span class="focus">wide</span> range <br /> of services', 'We create <span class="focus">awesome</span> <br/ > websites'],
    typeSpeed: 60,
    backSpeed: 80,
    fadeOut: true,
    loop: true,
    showCursor: false
  });

  // Animations
  AOS.init({
    duration: 600,
    easing: 'ease-in-out',
  });

  // Scroll effect

  $('a.page-scroll').bind('click', function(event) {
    var $anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
    event.preventDefault();
  });

  // Form validation


})
