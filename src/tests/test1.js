import { initTest, chooseAnswer } from "./forAllTests.js";
//база данных вопросы и ответы
const stages = [
  //этап 1
  {
    question: ["Что поможет дизайнеру избежать выгорания?"],
    //каждый ответ содержит текст и колво баллов
    answers: [
      {
        text: "Работать без перерывов, чтобы быстрее завершить проекты",
        count: 1,
      },
      {
        text: "Чередовать задачи, ставить границы и находить баланс",
        count: 0,
      },
      {
        text: "Игнорировать усталость и брать еще больше заказов",
        count: 0,
      },
      {
        text: "Уходить в полное уединение и избегать общения с коллегами",
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
];

const resultTable = [
  {
    header: "В следующий раз повезет [ ± _ ± ]",
    paragraph: "Побольше практикуйся и у тебя все получится!",
  },
  {
    header: "Кажется, надо еще раз повторить (づ ◕‿◕ )づ",
    paragraph: "Ты уже близок к правде",
  },
  {
    header: "Ты молодец, так держать ヽ(・∀・)ﾉ",
    paragraph: "Я в тебя верю, иди к своим целям",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  initTest(stages);
  chooseAnswer(stages, resultTable);
});
