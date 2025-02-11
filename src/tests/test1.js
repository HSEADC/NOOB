import { initTest, chooseAnswer } from "./forAllTests.js";
//база данных вопросы и ответы
const stages = [
  //этап 1
  {
    question: ["Начнём с простого. Что можно делать с дайсами?"],
    //каждый ответ содержит текст и колво баллов
    answers: [
      {
        text: "кидать",
        count: 1,
      },
      {
        text: "коптить",
        count: 0,
      },
      {
        text: "курить",
        count: 0,
      },
      {
        text: "колоть",
        count: 0,
      },
    ],
  },

  //этап 2
  {
    question: ["Что такое казуалка?"],
    answers: [
      {
        text: "стиль",
        count: 0,
      },
      {
        text: "настолка",
        count: 0,
      },
      {
        text: "пальцы",
        count: 0,
      },
      {
        text: "мурка",
        count: 1,
      },
    ],
  },

  //этап 3
  {
    question: ["А что такое америтеш?"],
    answers: [
      {
        text: "треш",
        count: 1,
      },
      {
        text: "гог",
        count: 0,
      },
      {
        text: "мяу",
        count: 1,
      },
      {
        text: "гавгав",
        count: 0,
      },
    ],
  },
  //этап 4
  {
    question: ["Кто круче всех?"],
    answers: [
      {
        text: "я",
        count: 1,
      },
      {
        text: "ты",
        count: 0,
      },
      {
        text: "барсик",
        count: 1,
      },
      {
        text: "никто",
        count: 0,
      },
    ],
  },
];

const resultTable = [
  {
    header: "Кажется, ты лузер",
    paragraph: "Учи лучше. Жопа",
  },
  {
    header: "Кажется, ты крутой",
    paragraph: "Учи лучше. Жопа",
  },
  {
    header: "Кажется, ты нормис",
    paragraph: "Учи лучше. Жопа",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initTest(stages);
  chooseAnswer(stages, resultTable);
});
