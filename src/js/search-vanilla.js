import { getPostTeasers } from "./search-data";

let content = [];

document.addEventListener("DOMContentLoaded", () => {
  getPostTeasers().then((data) => {
    content = data;

    initSearch();
  });
});

function initSearch() {
  const O_Search = document.querySelector(".O_Search");
  const A_SearchInput = O_Search.querySelector(".A_SearchInput");
  const A_SearchButton = O_Search.querySelector(".A_SearchButton");

  let requestText = getSearchRequest();

  if (requestText != undefined) {
    A_SearchInput.value = requestText;

    if (content) {
      SearchContent(requestText);
    }
  } else {
    A_SearchInput.value = "";
  }

  A_SearchInput.addEventListener("input", (e) => {
    requestText = e.target.value;

    if (requestText.length >= 3) {
      A_SearchButton.classList.remove("disable");
    } else {
      A_SearchButton.classList.add("disable");
    }
  });

  A_SearchInput.addEventListener("keydown", (e) => {
    requestText = e.target.value;

    if (e.key == "Enter") {
      setSearchRequest(requestText);
      SearchContent(requestText);
    }
  });

  A_SearchButton.addEventListener("click", (e) => {
    if (!e.target.classList.contains("disable")) {
      requestText = A_SearchInput.value;

      setSearchRequest(requestText);
      SearchContent(requestText);
    }
  });
}

function getSearchRequest() {
  const url = new URL(window.location.href);
  const searchParams = new URLSearchParams(url.search);

  if (searchParams.has("request")) {
    return searchParams.get("request");
  }
}

function setSearchRequest(requestText) {
  const url = window.location.href.split("?")[0];

  window.location.href = url + "?request=" + requestText;
}

function SearchContent(requestText) {
  const container = document.querySelector(".S_Content");
  container.innerHTML = "";

  let contentItemIds = [];

  console.log(content);

  content.forEach((contentItem) => {
    const nbspRegEx = /[\u202F\u00A0]/gm;
    const punctuationRegEx = /[.,\/#!$%\^&\*;:{}=\-_`()]/gm;

    let { title, description, id } = contentItem;

    if (requestText.length >= 3) {
      if (title.includes(requestText)) {
        contentItemIds.push(id);
      } else {
        console.log("ids");
      }
    }

    if (contentItemIds.length > 0) {
      document.querySelector(".S_Content").innerText = "";
      renderCardsbyIds(container, contentItemIds);
    } else {
      document.querySelector(".S_Content").innerText = "";
      renderNothingFounded();
    }
  });
}

function renderNothingFounded() {
  document.querySelector(".S_Content").innerText = "Ничего не найдено";
}

function renderCardsbyIds(container, ids) {
  ids = [...new Set(ids)];

  ids.forEach((id) => {
    content.forEach((item) => {
      if (item.id === id) {
        container.appendChild(createCard(item));
      }
    });
  });
}

function createCard(contentItemData) {
  const container = document.querySelector(".S_Content");

  const contentItem = document.createElement("a");
  contentItem.classList.add("O_ContentItem");
  contentItem.classList.add(`${contentItemData.class}`);
  contentItem.href = contentItemData.url;

  const contentItemCover = document.createElement("img");
  contentItemCover.classList.add("A_ContentItemCover");
  contentItemCover.src = contentItemData.image;

  const contentItemM = document.createElement("div");
  contentItemM.classList.add("M_ContentM");

  const contentItemTitle = document.createElement("h3");
  contentItemTitle.classList.add("A_ContentItemTitle");
  contentItemTitle.innerText = contentItemData.title;

  const contentItemTags = document.createElement("div");
  contentItemTags.classList.add("C_ContentItemTags");

  contentItemData.tags.forEach((tag, index) => {
    const contentItemTag = document.createElement("div");
    contentItemTag.classList.add("A_ContentItemTag");

    // Добавляем класс в зависимости от позиции
    if (index === 0) {
      contentItemTag.classList.add("is-black"); // например, чёрный
    } else if (index === 1) {
      contentItemTag.classList.add("is-white"); // белый
    }

    contentItemTag.innerText = tag;
    contentItemTags.appendChild(contentItemTag);
  });

  contentItem.appendChild(contentItemCover);
  contentItem.appendChild(contentItemM);

  contentItemM.appendChild(contentItemTitle);
  contentItemM.appendChild(contentItemTags);

  return contentItem;
}
