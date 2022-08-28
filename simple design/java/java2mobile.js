let mobileA = 0;
const sliderA = document.querySelector(".slider6");

document
  .querySelector(".next-slider-mobile")
  .addEventListener("click", function () {
    mobileA = mobileA + 250;
    if (mobileA > 500) {
      mobileA = 0;
    }
    sliderA.style.left = -lefta + "px";
  });
