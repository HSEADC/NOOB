let currentStage = 0;
let resultCount = 0;
const checkboxes = document.querySelectorAll("input[type=checkbox]");

function initTest(stages) {
  const numberOfQuestions = document.querySelector(".A_NumberOfQuestions");
  const question = document.querySelector(".A_Question");
  const answers = document.querySelectorAll(".Q_AnswerQuestion");

  // номер вопроса
  numberOfQuestions.innerHTML = `вопрос №${currentStage + 1}/${stages.length}`;

  // выводим текст вопроса
  question.innerHTML = stages[currentStage].question;

  // проверяем количество тегов для ответов и выводим
  for (let i = 0; i < answers.length; i++) {
    answers[i].innerHTML = stages[currentStage].answers[i].text;
  }

  // проверяем количество чекбоксов и добавляем атрибут с количеством баллов
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].dataset.count = stages[currentStage].answers[i].count;
  }
}

function chooseAnswer(stages, resultTable) {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        resultCount += Number(checkbox.dataset.count);
        updateStage(stages, resultTable); // меняем вопрос и ответы на новые
        checkbox.checked = false;
      }
    });
  });
}

function updateStage(stages, resultTable) {
  if (currentStage + 1 < stages.length) {
    currentStage++;
    initTest(stages);
  } else {
    showResult(resultTable);
  }
}

function showResult(resultTable) {
  const testMessages = document.querySelector(".S_Test");
  testMessages.innerHTML = ""; // Очищаем содержимое теста, но НЕ удаляем его

  const finalCount = document.createElement("div");
  finalCount.classList.add("A_FinalCount");
  finalCount.innerHTML = `Итого баллов: ${resultCount}`;

  const resultHeader = document.createElement("h2");
  resultHeader.classList.add("A_ResultHeader");

  const resultText = document.createElement("p");
  resultText.classList.add("A_ResultText");

  testMessages.appendChild(finalCount);
  testMessages.appendChild(resultHeader);
  testMessages.appendChild(resultText);

  if (resultCount == 0 || resultCount == 1) {
    resultHeader.innerHTML = resultTable[0].header;
    resultText.innerHTML = resultTable[0].paragraph;
  } else if (resultCount == 2 || resultCount == 3) {
    resultHeader.innerHTML = resultTable[1].header;
    resultText.innerHTML = resultTable[1].paragraph;
  } else {
    resultHeader.innerHTML = resultTable[2].header;
    resultText.innerHTML = resultTable[2].paragraph;
  }
}

export { initTest };
export { chooseAnswer };

console.clear();
