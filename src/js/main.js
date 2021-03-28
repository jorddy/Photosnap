const mobileMenuButton = document.querySelector("#mob-menu-btn");
const mobileMenuIcon = document.querySelector("#mob-menu-img");

mobileMenuButton.addEventListener("click", () => {
  let isClicked = false;
  isClicked = !isClicked;

  if (isClicked) {
    mobileMenuIcon.innerHTML = `SVG goes here`;
  } else {
    mobileMenuIcon.innerHTML = `SVG goes here`;
  }
});
