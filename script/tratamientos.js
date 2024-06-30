const slide = document.querySelector('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const totalItems = slide.children.length;
const itemsPerPage = 3;
let currentIndex = 0;

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlide();
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex < totalItems / itemsPerPage - 1) {
    currentIndex++;
    updateSlide();
  }
});

function updateSlide() {
  const offset = currentIndex * -100;
  slide.style.transform = `translateX(${offset}%)`;
}

function moveSlide(direction) {
  const slideInner = document.querySelector('.slide-inner');
  const totalSlides = slideInner.children.length;
  const slidesToShow = 3;
  const slideWidth = slideInner.children[0].offsetWidth + 10; // Add margin

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex > totalSlides - slidesToShow) {
    currentIndex = totalSlides - slidesToShow;
  }

  slideInner.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

