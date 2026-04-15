import { navigateTo, goBack } from "../utils/navigation.js";
import { renderDifficultySetupPage } from "./difficultySetupPage.js";
import { renderMedicalLoginPage } from "./medicalLoginPage.js";
import { renderIntroPage } from "./introPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderRoleSelectPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="test-page role-select-page">
      <div class="role-select-wrap">

        <div class="role-select-header">
          <div class="role-select-icon">🩺</div>
          <h2 class="question-title role-select-title">사용자 선택</h2>
          <p class="question-description role-select-description">
            어떤 용도로 시작할지 선택해 주세요.
          </p>
        </div>

        <div class="role-select-card soft-panel">
          <div class="role-select-grid">

            <button id="patient-start-btn" class="role-card">
              <div class="role-card-icon">🧑</div>
              <div class="role-card-title">클라이언트용</div>
              <div class="role-card-desc">
                인지능력 평가를 시작합니다.
              </div>
            </button>

            <button id="medical-start-btn" class="role-card">
              <div class="role-card-icon">👨‍⚕️</div>
              <div class="role-card-title">치료사용</div>
              <div class="role-card-desc">
                검사 결과 조회 및 관리 화면입니다.
              </div>
            </button>

          </div>
        </div>

      </div>
    </div>
  `;

  applyPageTransition();

  // 뒤로가기 → 인트로 화면
  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderIntroPage);
  });

  // 클라이언트용 → 난이도 설정
  document.getElementById("patient-start-btn").addEventListener("click", () => {
    navigateTo(renderDifficultySetupPage);
  });

  // 치료사용 → 로그인
  document.getElementById("medical-start-btn").addEventListener("click", () => {
    navigateTo(renderMedicalLoginPage);
  });
}