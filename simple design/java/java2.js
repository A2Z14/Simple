let lefta = 0;
const sliderLine = document.querySelector(".slider6");

document.querySelector(".next-slider").addEventListener("click", function () {
  lefta = lefta + 300;
  if (lefta > 600) {
    lefta = 0;
  }
  sliderLine.style.left = -lefta + "px";
});
document.querySelector(".prev-slider").addEventListener("click", function () {
  lefta = lefta - 300;
  if (lefta < 0) {
    lefta = 600;
  }
  sliderLine.style.left = -lefta + "px";
});
//..............................//
