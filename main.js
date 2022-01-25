const slideItems = Array.from(document.querySelectorAll('.carousel-item'));
const slideCount = slideItems.length;
let currentSlide = 1;
slide()
const nextButton = document.getElementById('next');
const prevButton = document.getElementById('prev');
nextButton.onclick = next;
prevButton.onclick = prev;
addEventListener('load', autoSlide)

function autoSlide() {
  setInterval(() => {
    if (currentSlide >= slideCount) {
      currentSlide = 1;
      slide()
    } else {
      currentSlide++;
      slide()
    }
  }, 7000);
}
function next() {
  if (currentSlide >= slideCount) {
    currentSlide = 1;
    slide()
  } else {
    currentSlide++;
    slide()
  }

}
function prev() {
  if (currentSlide <= 1) {
    currentSlide = slideCount;
    slide()
  } else {
    currentSlide--;
    slide()
  }

}

function slide() {
  removeClasses();
  slideItems[currentSlide - 1].classList.add('active');
}

function removeClasses() {
  slideItems.map((item) => item.classList.remove('active'));
}