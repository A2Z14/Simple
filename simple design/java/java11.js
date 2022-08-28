let elevenL = 0;
const fatherE = document.querySelector(".slider-list11");

document.querySelector(".next-slide11").addEventListener("click", function () {
  elevenL = elevenL + 300;
  if (elevenL > 600) {
    elevenL = 0;
  }
  fatherE.style.left = -elevenL + "px";
});
