console.clear();
document.addEventListener("DOMContentLoaded", () => {
  initFilter1();
});

function initFilter1() {
  const tags = document.querySelectorAll(".A_Tegs");
  const a = document.querySelector(".all");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      if (tag !== a) {
        a.classList.remove("active");
        tag.classList.toggle("active");

        console.log("здесь будет функция фильтрации по тегу");
        filterByTag1(); // Исправлено название функции
      }

      let b = document.querySelectorAll(".active");
      if (tag === a && !tag.classList.contains("active")) {
        b.forEach((tag) => {
          tag.classList.remove("active");
        });
        console.log("здесь будет функция вывода всех карточек");
        filterAll1(); // Исправлено название функции
        tag.classList.add("active");
      }
      if (tags.length - 1 === b.length) {
        b.forEach((tag) => {
          tag.classList.remove("active");
        });
        a.classList.add("active");
        console.log("здесь будет функция вывода всех карточек");
        filterAll1(); // Исправлено название функции
      }
    });
  });
}

function filterAll1() {
  const cards = document.querySelectorAll(".O_CardGuide");
  cards.forEach((card) => {
    card.classList.remove("hidden");
  });
}

function filterByTag1() {
  const cards = document.querySelectorAll(".O_CardGuide");
  const activeTags = Array.from(document.querySelectorAll(".active"));
  const isAllActive = activeTags.some((tag) => tag.classList.contains("all"));
  const tagList = new Set();

  if (isAllActive || activeTags.length === 0) {
    // Показать все карточки
    cards.forEach((card) => {
      card.classList.remove("hidden");
    });
    return;
  }

  // Сбор всех тегов из активных элементов
  activeTags.forEach((tag) => {
    tag.classList.forEach((cls) => {
      if (cls !== "active") {
        tagList.add(cls);
      }
    });
  });

  // Фильтрация карточек на основе тегов
  cards.forEach((card) => {
    const cardTags = Array.from(card.classList);
    const hasMatchingTag = cardTags.some((tag) => tagList.has(tag));
    if (hasMatchingTag) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}
