import { navigateTo, goBack } from "../utils/navigation.js";
import { renderMedicalListPage } from "./medicalListPage.js";
import { renderRoleSelectPage } from "./roleSelectPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderMedicalLoginPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="test-page">
      <div class="page-top-bar">
        <button id="back-btn" class="secondary-button back-button">뒤로가기</button>
      </div>

      <div class="test-header">
        <div class="consent-icon">🩺</div>
        <h2 class="question-title">치료사 로그인</h2>
        <p class="question-description">관리자 비밀번호를 입력해 주세요.</p>
      </div>

      <div class="form-card">
        <div class="form-block">
          <label class="form-label" for="medical-password">비밀번호</label>
          <input
            id="medical-password"
            class="form-input"
            type="password"
            placeholder="비밀번호 입력"
          />
        </div>

        <div style="margin-top: 24px; display: flex; justify-content: center;">
          <button id="login-btn" class="primary-button">로그인</button>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderRoleSelectPage);
  });

  document.getElementById("login-btn").addEventListener("click", () => {
    const password = document.getElementById("medical-password").value.trim();

    if (!password) return alert("비밀번호를 입력해주세요.");
    if (password !== "KbuOT2122") return alert("비밀번호가 올바르지 않습니다.");

    navigateTo(renderMedicalListPage);
  });
}