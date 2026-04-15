import { appState } from "../state.js";
import { buildTestSet } from "../services/questionService.js";
import { navigateTo, goBack } from "../utils/navigation.js";
import { renderPatientInfoPage } from "./patientInfoPage.js";
import { renderTestPage } from "./testPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderConsentPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="test-page consent-page">
      <div class="consent-wrap">
        <div class="consent-header">
          <div class="consent-icon">✅</div>
          <h2 class="question-title consent-title">사용권 동의</h2>
          <p class="question-description consent-description">
            평가 시작 전 아래 내용을 확인해 주세요.
          </p>
        </div>

        <div class="soft-panel consent-card">
          <div class="consent-text-box">
            <p>
              본 프로그램은 작업치료학에 근거한 인지능력 평가 도구로,
              사용자의 일상생활 수행 능력과 인지 기능을 확인하기 위한 목적으로 사용됩니다.
            </p>
            <p>
              본 평가 결과는 의료적 진단을 대체하지 않으며,
              전문적인 의학적 판단이나 치료 결정을 위한 근거로 사용할 수 없습니다.
            </p>
            <p>
              평가 결과는 사용자의 인지 기능 상태를 참고 수준에서 확인하기 위한 자료로 사용되며,
              필요시 전문 의료진 또는 작업치료사와의 추가 상담이 권장됩니다.
              또한 검사를 실행하는 것은 위 사항에 동의한 것으로 간주됩니다.
            </p>
          </div>

          <div class="consent-check-wrap">
            <label class="consent-label">
              <input id="consent-check" type="checkbox" />
              위 내용에 동의합니다.
            </label>
          </div>

          <div class="consent-button-wrap">
            <button id="consent-next-btn" class="primary-button">
              검사 시작
            </button>
          </div>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderPatientInfoPage);
  });

  document.getElementById("consent-next-btn").addEventListener("click", () => {
    const checked = document.getElementById("consent-check").checked;

    if (!checked) {
      alert("사용권에 동의해주세요.");
      return;
    }

    appState.testSet = buildTestSet(appState.settings);
    appState.currentQuestionIndex = 0;
    appState.answers = [];
    appState.score = 0;

    if (!appState.testSet.length) {
      alert("선택한 난이도에 맞는 문제를 찾지 못했습니다.");
      return;
    }

    navigateTo(renderTestPage);
  });
}
