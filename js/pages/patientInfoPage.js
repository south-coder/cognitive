import { appState } from "../state.js";
import { navigateTo, goBack } from "../utils/navigation.js";
import { renderConsentPage } from "./consentPage.js";
import { renderDifficultySetupPage } from "./difficultySetupPage.js";
import { applyPageTransition } from "../utils/transition.js";

export function renderPatientInfoPage() {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <button id="back-btn" class="floating-back-btn">뒤로가기</button>

    <div class="test-page patient-info-page">
      <div class="patient-info-layout">
        <div class="patient-info-main">
          <div class="patient-info-title-wrap">
            <div class="patient-info-icon">👤</div>
            <h2 class="question-title patient-info-title">대상자 정보</h2>
          </div>

          <div class="form-card patient-info-form-card">
            <div class="form-block">
              <label class="form-label" for="patient-name">이름</label>
              <input
                id="patient-name"
                class="form-input"
                type="text"
                placeholder="이름을 입력해 주세요"
                value="${appState.patientInfo?.name || ""}"
              />
            </div>

            <div class="form-block">
              <label class="form-label" for="patient-age">나이</label>
              <input
                id="patient-age"
                class="form-input"
                type="number"
                placeholder="나이를 입력해 주세요"
                value="${appState.patientInfo?.age || ""}"
              />
            </div>

            <div class="form-block">
              <label class="form-label" for="patient-gender">성별</label>
              <select id="patient-gender" class="form-input">
                <option value="">성별을 선택해 주세요</option>
                <option value="남" ${appState.patientInfo?.gender === "남" ? "selected" : ""}>남</option>
                <option value="여" ${appState.patientInfo?.gender === "여" ? "selected" : ""}>여</option>
              </select>
            </div>

            <div class="patient-info-button-wrap">
              <button id="patient-info-next-btn" class="primary-button">저장</button>
            </div>
          </div>
        </div>

        <div class="patient-info-side soft-panel">
          <div class="patient-info-side-icon">👤</div>
        </div>
      </div>
    </div>
  `;

  applyPageTransition();

  document.getElementById("back-btn").addEventListener("click", () => {
    goBack(renderDifficultySetupPage);
  });

  document.getElementById("patient-info-next-btn").addEventListener("click", () => {
    const name = document.getElementById("patient-name").value.trim();
    const age = document.getElementById("patient-age").value.trim();
    const gender = document.getElementById("patient-gender").value;

    if (!name) {
      alert("이름을 입력해주세요.");
      return;
    }

    if (!age) {
      alert("나이를 입력해주세요.");
      return;
    }

    if (!gender) {
      alert("성별을 선택해주세요.");
      return;
    }

    appState.patientInfo = {
      name,
      age,
      gender
    };

    navigateTo(renderConsentPage);
  });
}