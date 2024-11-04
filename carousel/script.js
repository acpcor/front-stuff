const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftButton = document.getElementById("left");
const rightButton = document.getElementById("right");
const dots = document.querySelectorAll(".dot");

let activeSlide = 0;

rightButton.addEventListener("click", () => {
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  setBackgroundImgToBody();
  setActiveSlide();
});

leftButton.addEventListener("click", () => {
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBackgroundImgToBody();
  setActiveSlide();
});

dots.forEach((dot, index) => {
  dot.addEventListener("click", function (e) {
    const _this = e.currentTarget;

    if (!_this.classList.contains("active")) {
      activeSlide = index;

      setBackgroundImgToBody();
      setActiveSlide();
    }
  });
});

setBackgroundImgToBody();

function setBackgroundImgToBody() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}

function setActiveSlide() {
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[activeSlide].classList.add("active");
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[activeSlide].classList.add("active");
}
