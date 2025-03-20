import "../index.css";

console.clear();
document.addEventListener("DOMContentLoaded", () => {
  initFilter();
});

function initFilter() {
  const tags = document.querySelectorAll(".A_Tegs");
  const a = document.querySelector(".all");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      if (tag != a) {
        a.classList.remove("active");
        tag.classList.toggle("active");

        console.log("здесь будет функция фильтрации по тегу");
        filterByTag();
      }

      let b = document.querySelectorAll(".active");
      if (tag == a && !tag.classList.contains("active")) {
        b.forEach((tag) => {
          tag.classList.remove("active");
        });
        console.log("здесь будет функция вывода всех карточек");
        filterAll();
        tag.classList.add("active");
      }
      if (tags.length - 1 == b.length) {
        b.forEach((tag) => {
          tag.classList.remove("active");
        });
        a.classList.add("active");
        console.log("здесь будет функция вывода всех карточек");
        filterAll();
      }
    });
  });
}

function filterAll() {
  const cards = document.querySelectorAll(".O_CardArticles");

  cards.forEach((card) => {
    card.style.opacity = "0"; // Исчезновение
    setTimeout(() => {
      card.style.display = "block";
      card.style.opacity = "1";
    }, 200);
  });
}

function filterByTag() {
  const cards = document.querySelectorAll(".O_CardArticles");
  const activeTags = document.querySelectorAll(".active");
  let tagList = [];

  // Сначала скрываем все карточки с плавностью
  cards.forEach((card) => {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.display = "none";
    }, 200);
  });

  // Получаем список активных тегов
  activeTags.forEach((tag) => {
    const classList = [...tag.classList].filter(
      (c) => c !== "active" && c !== "all"
    );
    tagList.push(...classList);
  });

  // Показываем карточки, которые соответствуют активным тегам
  setTimeout(() => {
    tagList.forEach((tagName) => {
      cards.forEach((card) => {
        if (card.classList.contains(tagName)) {
          card.style.display = "block";
          setTimeout(() => {
            card.style.opacity = "1";
          }, 50);
        }
      });
    });
  }, 200);
}
