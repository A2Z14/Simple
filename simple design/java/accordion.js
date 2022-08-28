document.querySelectorAll(".accordion").forEach((el) => {
  el.addEventListener("click", () => {
    let content = el.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      document
        .querySelectorAll(".panel")
        .forEach((el) => (el.style.maxHeight = null));
    } else {
      document
        .querySelectorAll(".panel")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});
