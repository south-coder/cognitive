
import { goBack } from "../utils/navigation.js";
import { renderIntroPage } from "./introPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderAboutPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="test-page about-page">
      <div class="page-top-bar">
        <button id="back-btn" class="secondary-button back-button">뒤로가기</button>
      </div>

      <div class="about-wrap">
        <div class="about-header">
          <div class="role-select-icon">ℹ️</div>
          <h2 class="question-title">제작 정보</h2>
          <p class="question-description">
            프로그램 제작에 도움을 주신 분들:
          </p>
        </div>

        <div class="soft-panel about-card">
          <div class="about-section">
            <h3 class="result-card-title">프로젝트명</h3>
            <p class="about-text">인지능력 평가 웹 프로그램</p>
          </div>

          <div class="about-section">
            <h3 class="result-card-title">제작자</h3>
            <p class="about-text">팀 카미카제</p>
          </div>

          <div class="about-section">
            <h3 class="result-card-title">팀원</h3>
            <p class="about-text">최건준 구본승 이치후 김한솔 김진욱 손창현</p>
          </div>

          <div class="about-section">
            <h3 class="result-card-title">담당 교수</h3>
            <p class="about-text">교수 박은정</p>
          </div>

          <div class="about-section">
            <h3 class="result-card-title">웹 제작자</h3>
            <p class="about-text">South Korea Code</p>
          </div>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderIntroPage);
  });
}