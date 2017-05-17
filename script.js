/* Declare variables */
var slides = document.getElementsByClassName('slide'),
    slider = document.getElementById('slider'),
    cursor = 0,
    slideWidth = 0,
    topHeight = 0,
    slideCount = slides.length;

if (slideCount > 0) {
  // Get the slide width
  slideWidth = slides[0].offsetWidth;

  // Set the proper left value for each slide
  for (var i = 0; i < slideCount; i++) {
    slides[i].style.left = slideWidth * i + "px";
  }

  // Calculate tallest slide
  calculateTallestSlide();

  // Add the animated class to each slide
  for (i = 0; i < slideCount; i++) {
    slides[i].classList.add('animated');
  }
}

// Declare a function that calculates the tallest slide
function calculateTallestSlide() {
  for (var i = 0; i < slideCount; i++) {
    if (slides[i].offsetHeight > topHeight) {
      topHeight = slides[i].offsetHeight;
    }
  }

  slider.style.height = topHeight + "px";
}
