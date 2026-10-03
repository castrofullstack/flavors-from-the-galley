document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".print-recipe").forEach((button) => {
    button.addEventListener("click", () => window.print());
  });
});
