// js/pages/introPage.js
import { navigateTo } from "../utils/navigation.js";
import { renderRoleSelectPage } from "./roleSelectPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderIntroPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <div class="intro-page">
      <div class="intro-overlay">
        <div class="intro-content">
          <h1 class="intro-title">인지능력 평가</h1>
          <p class="intro-subtitle">검사 전 준비를 진행해주세요</p>
          <button id="intro-start-btn" class="primary-button intro-start-button">
            시작하기
          </button>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("intro-start-btn").addEventListener("click", () => {
    navigateTo(renderRoleSelectPage);
  });
}