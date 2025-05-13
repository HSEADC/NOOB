import { getPostTeasers } from "./search-data";

let content = [];

document.addEventListener("DOMContentLoaded", () => {
  getPostTeasers().then((data) => {
    content = data;

    initSearch();
  });
});

function createCard(contentItemData) {
  const container = document.querySelector(".S_Content");

  const contentItem = document.createElement("a");
  contentItem.classList.add("O_ContentItem");
  contentItem.classList.add(`${contentItemData.class}`);
  contentItem.href = contentItemData.url;

  const contentItemCover = document.createElement("img");
  contentItemCover.classList.add("A_ContentItemCover");
  contentItemCover.src = contentItemData.image;

  const contentItemTitle = document.createElement("h3");
  contentItemTitle.classList.add("A_ContentItemTitle");
  contentItemTitle.innerText = contentItemData.title;

  const contentItemTags = document.createElement("div");
  contentItemTags.classList.add("C_ContentItemTags");

  contentItemData.tags.forEach((tag) => {
    const contentItemTag = document.createElement("div");
    contentItemTag.classList.add("A_ContentItemTag");
    contentItemTag.innerText = tag;
    contentItemTags.appendChild(contentItemTag);
  });

  contentItem.appendChild(contentItemCover);
  contentItem.appendChild(contentItemTags);
  contentItem.appendChild(contentItemTitle);

  return contentItem;
}
