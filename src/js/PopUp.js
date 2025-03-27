document.addEventListener("DOMContentLoaded", () => {
  initModal();
});

function initModal() {
  const cards = document.querySelectorAll(".A_PopUp");
  const popup = document.querySelector(".O_PopUpContainer");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      popup.classList.add("visible");
    });
  });

  popup.addEventListener("click", () => {
    popup.classList.remove("visible");
  });
}
