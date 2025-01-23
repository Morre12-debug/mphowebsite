// scripts/animations.js
document.addEventListener("DOMContentLoaded", () => {
  const loadingScreen = document.getElementById("loading-screen");
  setTimeout(() => {
    loadingScreen.style.display = "none";
  }, 2000);

  const elements = document.querySelectorAll("section");
  elements.forEach((el) => {
    el.style.opacity = 0;
    el.style.transition = "opacity 1s ease-in-out";
    setTimeout(() => (el.style.opacity = 1), 500);
  });
});
