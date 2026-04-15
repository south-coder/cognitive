import { appState } from "../state.js";
import { DOMAIN_INFO } from "../data/domainInfo.js";
import {
  getCurrentQuestion,
  isLastQuestion
} from "../services/questionService.js";
import { navigateTo, goBack } from "../utils/navigation.js";
import { renderConsentPage } from "./consentPage.js";
import { renderResultPage } from "./resultPage.js";
import { applyPageTransition } from "../utils/transition.js";

function renderImageChoice(currentQuestion) {
  return `
    <div class="image-grid">
      ${currentQuestion.images
        .map(
          (imagePath, index) => `
            <button class="choice-button image-choice" data-answer="${index + 1}">
              <img src="${imagePath}" alt="선택지 ${index + 1}" />
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderNumberChoice(currentQuestion) {
  return `
    <div class="number-choice-wrap">
      ${
        currentQuestion.image
          ? `
            <div class="question-image-wrap">
              <img
                class="question-single-image"
                src="${currentQuestion.image}"
                alt="문제 이미지"
              />
            </div>
          `
          : ""
      }

      <div class="choice-list">
        ${currentQuestion.choices
          .map(
            (choice, index) => `
              <button class="choice-button number-choice" data-answer="${index + 1}">
                ${index + 1}. ${choice}
              </button>
            `
          )
          .join("")}
      </div>
    </div>
  `;
}

export function renderTestPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const currentQuestion = getCurrentQuestion(
    appState.testSet,
    appState.currentQuestionIndex
  );

  if (!currentQuestion) {
    app.innerHTML = `
      <div class="result-page">
        <h2>문제를 불러올 수 없습니다.</h2>
      </div>
    `;
    applyPageTransition();
    return;
  }

  const description =
    DOMAIN_INFO[currentQuestion.category]?.[currentQuestion.domain] || "";

  let contentHtml = "";

  if (currentQuestion.type === "image_choice") {
    contentHtml = renderImageChoice(currentQuestion);
  }

  if (currentQuestion.type === "number_choice") {
    contentHtml = renderNumberChoice(currentQuestion);
  }

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="test-page question-page">
      <div class="question-shell">
        <div class="test-header question-header">
          <div class="progress-text">
            문제 ${appState.currentQuestionIndex + 1} / ${appState.testSet.length}
          </div>
          <h2 class="question-title">${currentQuestion.title}</h2>
          <p class="question-description">${description}</p>
        </div>

        <div class="soft-panel question-panel">
          <div class="question-body">
            <h3 class="question-text">${currentQuestion.question}</h3>
            ${contentHtml}
          </div>
        </div>

        <div class="test-footer question-footer">
          <div id="selected-answer-text" class="selected-answer-badge">선택한 답: 없음</div>
          <button id="next-button" class="primary-button" disabled>다음</button>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    if (appState.currentQuestionIndex === 0) {
      goBack(renderConsentPage);
      return;
    }

    appState.currentQuestionIndex -= 1;

    const previousAnswer = appState.answers[appState.currentQuestionIndex];
    if (previousAnswer?.isCorrect) {
      appState.score -= 1;
    }

    appState.answers.splice(appState.currentQuestionIndex, 1);
    renderTestPage();
  });

  let selectedAnswer = null;

  const choiceButtons = app.querySelectorAll(".choice-button");
  const selectedAnswerText = document.getElementById("selected-answer-text");
  const nextButton = document.getElementById("next-button");

  choiceButtons.forEach((button) => {
    button.addEventListener("click", () => {
      choiceButtons.forEach((btn) => btn.classList.remove("selected"));
      button.classList.add("selected");

      selectedAnswer = Number(button.dataset.answer);
      selectedAnswerText.textContent = `선택한 답: ${selectedAnswer}번`;
      nextButton.disabled = false;
    });
  });

  nextButton.addEventListener("click", () => {
    if (!selectedAnswer) {
      alert("정답을 선택해주세요.");
      return;
    }

    const isCorrect = selectedAnswer === currentQuestion.answer;

    appState.answers[appState.currentQuestionIndex] = {
      questionId: currentQuestion.id,
      selectedAnswer,
      correctAnswer: currentQuestion.answer,
      isCorrect
    };

    if (isCorrect) {
      appState.score += 1;
    }

    if (isLastQuestion(appState.testSet, appState.currentQuestionIndex)) {
      navigateTo(renderResultPage);
      return;
    }

    appState.currentQuestionIndex += 1;
    renderTestPage();
  });
}