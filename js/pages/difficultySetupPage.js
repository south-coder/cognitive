import { appState } from "../state.js";
import { navigateTo, goBack } from "../utils/navigation.js";
import { renderPatientInfoPage } from "./patientInfoPage.js";
import { renderRoleSelectPage } from "./roleSelectPage.js";
import { applyPageTransition } from "../utils/transition.js";

const LEVELS = ["high", "middle", "under"];

const LABELS = {
  high: "상",
  middle: "중",
  under: "하"
};

const DOMAIN_LABELS = {
  1: "시지각",
  2: "지남력",
  3: "계산력",
  4: "기억력",
  5: "실행력"
};

function createSelect(id, selectedValue = "high") {
  return `
    <select id="${id}" class="form-input">
      ${LEVELS.map(
        (level) => `
          <option value="${level}" ${selectedValue === level ? "selected" : ""}>
            ${LABELS[level]}
          </option>
        `
      ).join("")}
    </select>
  `;
}

function createSection(category, settings) {
  return `
    <div class="difficulty-column soft-panel">
      <h3 class="difficulty-section-title">${category.toUpperCase()}</h3>

      ${[1, 2, 3, 4, 5]
        .map(
          (domain) => `
            <div class="form-block">
              <label class="form-label" for="${category}-${domain}">
                ${DOMAIN_LABELS[domain]}
              </label>
              ${createSelect(
                `${category}-${domain}`,
                settings?.[category]?.[domain] || "high"
              )}
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

export function renderDifficultySetupPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="test-page difficulty-page">
      <div class="test-header">
        <h2 class="question-title">난이도 설정</h2>
        <p class="question-description">
          치료사가 영역별 난이도를 설정합니다.
        </p>
      </div>

      <div class="difficulty-grid">
        ${createSection("aadl", appState.settings)}
        ${createSection("iadl", appState.settings)}
      </div>

      <div class="difficulty-bottom">
        <button id="start-btn" class="primary-button">다음</button>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderRoleSelectPage);
  });

  document.getElementById("start-btn").addEventListener("click", () => {
    const settings = {
      aadl: {},
      iadl: {}
    };

    for (let i = 1; i <= 5; i++) {
      settings.aadl[i] = document.getElementById(`aadl-${i}`).value;
      settings.iadl[i] = document.getElementById(`iadl-${i}`).value;
    }

    appState.settings = settings;
    navigateTo(renderPatientInfoPage);
  });
}