import cancelButton from "../images/dictionary/img1.png";
import { words } from "./words.js";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

let wordsGrid = document.getElementsByClassName("C_Cards")[0];
let tag = "";

function getCardStylesAndTag(card) {
  let styles = {
    M_color: "M_60",
    A_ageTag: "A_ageTagWhite",
    A_ageTagText: "A_ageTagTextWhite",
    A_nameCard: "A_ageTagTextWhite",
    A_descCard: "A_ageTagTextWhite",
    tag: "сленг 60-х",
  };

  switch (card.sub) {
    case "20-е":
    case "10-е":
      styles.M_color = `M_${card.sub.split("-")[0]}`;
      styles.A_ageTag = "A_ageTagBlack";
      styles.A_ageTagText = "A_ageTagTextBlack";
      styles.A_nameCard = "A_ageTagTextBlack";
      styles.A_descCard = "A_ageTagTextBlack";
      styles.tag = "зумерский слэнг";
      break;
    case "90-е":
      styles.M_color = "M_90";
      styles.tag = "сленг 90-х";
      break;
    case "80-е":
      styles.M_color = "M_80";
      styles.tag = "сленг 80-х";
      break;
    case "70-е":
      styles.M_color = "M_60";
      styles.tag = "сленг 70-х";
      break;
  }

  return styles;
}
const A_buttonFollowMain = document.getElementById("A_buttonFollowMain");
