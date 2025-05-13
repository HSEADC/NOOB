import "../index.css";
import { words } from "./words.js";

document.addEventListener("DOMContentLoaded", function () {
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let wordsGrid = document.getElementsByClassName("C_Cards")[0];
  let M_color = "";
  let A_ageTag = "";
  let A_ageTagText = "";
  let A_nameCard = "";
  let A_descCard = "";
  let tag = "";

  function loadCards() {
    shuffleArray(words);

    if ((window.innerWidth > 361) & (window.innerWidth < 1024)) {
      words.slice(0, 8).forEach((card, index) => {
        if (card["sub"] === "20-е") {
          M_color = "M_20";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "зумерский слэнг";
        } else if (card["sub"] === "10-е") {
          M_color = "M_10";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "зумерский слэнг";
        } else if (card["sub"] === "90-е") {
          M_color = "M_90";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "сленг 90-х";
        } else if (card["sub"] === "80-е") {
          M_color = "M_80";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 80-х";
        } else if (card["sub"] === "70-е") {
          M_color = "M_60";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 70-х";
        } else {
          M_color = "M_60";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 60-х";
        }
        wordsGrid.innerHTML += `<div class="M_Card ${M_color}" data-index="${index}">
          <div class="W_ageTitle">
            <div class="A_ageTag ${A_ageTag}"><p class='A_ageTagText ${A_ageTagText}'>${card.sub}</p></div>  
            <h4 lang="ru" class='A_nameCard ${A_nameCard}'>${card.word}</h4>
          </div>
          <p class='A_descCard ${A_descCard}'>${card.desc}</p>
      </div>`;
      });
    } else {
      words.slice(0, 12).forEach((card, index) => {
        if (card["sub"] === "20-е") {
          M_color = "M_20";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "зумерский слэнг";
        } else if (card["sub"] === "10-е") {
          M_color = "M_10";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "зумерский слэнг";
        } else if (card["sub"] === "90-е") {
          M_color = "M_90";
          A_ageTag = "A_ageTagBlack";
          A_ageTagText = "A_ageTagTextBlack";
          A_nameCard = "A_ageTagTextBlack";
          A_descCard = "A_ageTagTextBlack";
          tag = "сленг 90-х";
        } else if (card["sub"] === "80-е") {
          M_color = "M_80";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 80-х";
        } else if (card["sub"] === "70-е") {
          M_color = "M_60";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 70-х";
        } else {
          M_color = "M_60";
          A_ageTag = "A_ageTagWhite";
          A_ageTagText = "A_ageTagTextWhite";
          A_nameCard = "A_ageTagTextWhite";
          A_descCard = "A_ageTagTextWhite";
          tag = "сленг 60-х";
        }
        wordsGrid.innerHTML += `<div class="M_Card ${M_color}" data-index="${index}">
        <div class="W_ageTitle">
          <div class="A_ageTag ${A_ageTag}"><p class='A_ageTagText ${A_ageTagText}'>${card.sub}</p></div>  
          <h4 lang="ru" class='A_nameCard ${A_nameCard}'>${card.word}</h4>
        </div>
        <p class='A_descCard ${A_descCard}'>${card.desc}</p>
    </div>`;
      });
    }
  }

  loadCards();
});
