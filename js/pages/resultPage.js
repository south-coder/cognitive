import { appState } from "../state.js";
import { DOMAIN_MAP } from "../constants.js";
import { generateUniqueId } from "../utils/idGenerator.js";
import { saveResults } from "../utils/storage.js";
import { navigateTo, goBack } from "../utils/navigation.js";
import { renderRoleSelectPage } from "./roleSelectPage.js";
import { renderTestPage } from "./testPage.js";
import { applyPageTransition } from "../utils/transition.js";

function calculateDomainScores() {
  const domainScores = {
    aadl: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 },
    iadl: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 }
  };

  appState.answers.forEach((answer, index) => {
    const question = appState.testSet[index];
    if (!question) return;

    if (answer?.isCorrect) {
      domainScores[question.category][question.domain] += 1;
    }
  });

  return domainScores;
}

function renderScoreRows(scoreMap) {
  return Object.entries(scoreMap)
    .map(
      ([domain, score]) => `
        <div class="result-row">
          <span class="result-row-label">${DOMAIN_MAP[domain]}</span>
          <span class="result-row-score">${score}점</span>
        </div>
      `
    )
    .join("");
}

function getResultStatus(score, total) {
  const ratio = total > 0 ? score / total : 0;

  if (ratio >= 0.8) {
    return {
      label: "양호",
      className: "status-good",
      message: "전반적으로 비교적 안정적인 수행을 보였습니다."
    };
  }

  if (ratio >= 0.5) {
    return {
      label: "관찰 필요",
      className: "status-mid",
      message: "일부 영역은 추가적인 관찰이 필요합니다."
    };
  }

  return {
    label: "주의 필요",
    className: "status-warn",
    message: "전반적인 확인과 추가 평가를 권장합니다."
  };
}

function findExistingSavedResult() {
  if (!Array.isArray(appState.results) || appState.results.length === 0) {
    return null;
  }

  if (!appState.lastSavedResultId) {
    return null;
  }

  return (
    appState.results.find((item) => item.id === appState.lastSavedResultId) || null
  );
}

function saveCurrentResult() {
  if (!Array.isArray(appState.results)) {
    appState.results = [];
  }

  const existingSaved = findExistingSavedResult();
  if (existingSaved) {
    return existingSaved;
  }

  const domainScores = calculateDomainScores();

  const resultData = {
    id: generateUniqueId(appState.results),
    name: appState.patientInfo?.name || "",
    age: appState.patientInfo?.age || "",
    gender: appState.patientInfo?.gender || "",
    date: new Date().toLocaleString(),
    score: appState.score,
    total: appState.testSet.length,
    aadlScores: { ...domainScores.aadl },
    iadlScores: { ...domainScores.iadl },
    answers: [...appState.answers],
    testSet: [...appState.testSet]
  };

  appState.results.push(resultData);
  appState.lastSavedResultId = resultData.id;
  saveResults(appState.results);

  return resultData;
}

function resetTestState() {
  appState.testSet = [];
  appState.currentQuestionIndex = 0;
  appState.answers = [];
  appState.score = 0;
  appState.patientInfo = {
    name: "",
    age: "",
    gender: ""
  };
  appState.lastSavedResultId = null;
}

export function renderResultPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const savedResult = saveCurrentResult();
  const status = getResultStatus(savedResult.score, savedResult.total);

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="result-page final-result-page">
      <div class="result-shell">
        <div class="result-header">
          <div class="result-icon">📊</div>
          <h2 class="question-title result-title">검사 결과</h2>
          <p class="question-description result-description">
            검사가 완료되었습니다. 아래에서 총점과 영역별 점수를 확인할 수 있습니다.
          </p>
        </div>

        <div class="result-summary-card soft-panel">
          <div class="result-summary-label">총점</div>
          <div class="result-summary-score">${savedResult.score} / ${savedResult.total}</div>
          <div class="result-status-wrap">
            <span class="result-status-badge ${status.className}">${status.label}</span>
          </div>
          <p class="result-status-message">${status.message}</p>
        </div>

        <div class="soft-panel result-card patient-result-info">
          <h3 class="result-card-title">기본 정보</h3>
          <div class="result-list">
            <div class="result-row">
              <span class="result-row-label">이름</span>
              <span class="result-row-score">${savedResult.name || "-"}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">나이</span>
              <span class="result-row-score">${savedResult.age || "-"}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">성별</span>
              <span class="result-row-score">${savedResult.gender || "-"}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">검사 날짜</span>
              <span class="result-row-score">${savedResult.date}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">고유번호</span>
              <span class="result-row-score">${savedResult.id}</span>
            </div>
          </div>
        </div>

        <div class="result-grid">
          <div class="soft-panel result-card">
            <h3 class="result-card-title">AADL 영역별 점수</h3>
            <div class="result-list">
              ${renderScoreRows(savedResult.aadlScores)}
            </div>
          </div>

          <div class="soft-panel result-card">
            <h3 class="result-card-title">IADL 영역별 점수</h3>
            <div class="result-list">
              ${renderScoreRows(savedResult.iadlScores)}
            </div>
          </div>
        </div>

        <div class="result-bottom">
          <button id="restart-btn" class="primary-button">처음으로</button>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderTestPage);
  });

  document.getElementById("restart-btn").addEventListener("click", () => {
    resetTestState();
    navigateTo(renderRoleSelectPage);
  });
}