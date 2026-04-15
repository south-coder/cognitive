// js/pages/medicalDetailPage.js

import { appState } from "../state.js";
import { DOMAIN_MAP } from "../constants.js";
import { saveResults } from "../utils/storage.js";
import { renderMedicalListPage } from "./medicalListPage.js";

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

export function renderMedicalDetailPage(index) {
  const app = document.getElementById("app");
  if (!app) return;

  const data = appState.results?.[index];

  if (!data) {
    app.innerHTML = `
      <div class="result-page">
        <h2>데이터를 찾을 수 없습니다.</h2>
      </div>
    `;
    return;
  }

  app.innerHTML = `
    <div class="result-page final-result-page">
      <div class="result-shell">
        <div class="result-header">
          <div class="result-icon">🩺</div>
          <h2 class="question-title result-title">클라이언트 상세 정보</h2>
          <p class="question-description result-description">
            선택한 클라이언트의 검사 상세 결과입니다.
          </p>
        </div>

        <div class="soft-panel result-card">
          <h3 class="result-card-title">기본 정보</h3>
          <div class="result-list">
            <div class="result-row">
              <span class="result-row-label">이름</span>
              <span class="result-row-score">${data.name}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">나이</span>
              <span class="result-row-score">${data.age}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">성별</span>
              <span class="result-row-score">${data.gender}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">검사 날짜</span>
              <span class="result-row-score">${data.date}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">고유번호</span>
              <span class="result-row-score">${data.id}</span>
            </div>
            <div class="result-row">
              <span class="result-row-label">총점</span>
              <span class="result-row-score">${data.score} / ${data.total}</span>
            </div>
          </div>
        </div>

        <div class="result-grid">
          <div class="soft-panel result-card">
            <h3 class="result-card-title">AADL 영역별 점수</h3>
            <div class="result-list">
              ${renderScoreRows(data.aadlScores)}
            </div>
          </div>

          <div class="soft-panel result-card">
            <h3 class="result-card-title">IADL 영역별 점수</h3>
            <div class="result-list">
              ${renderScoreRows(data.iadlScores)}
            </div>
          </div>
        </div>

        <div class="result-bottom">
          <button id="back-to-list-btn" class="secondary-button">목록으로</button>
          <button id="delete-single-btn" class="primary-button"> 클라이언트 삭제</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById("back-to-list-btn").addEventListener("click", () => {
    renderMedicalListPage();
  });

  document.getElementById("delete-single-btn").addEventListener("click", () => {
    const ok = confirm("클라이언트 데이터를 삭제하시겠습니까?");
    if (!ok) return;

    appState.results.splice(index, 1);
    saveResults(appState.results);
    renderMedicalListPage();
  });
}