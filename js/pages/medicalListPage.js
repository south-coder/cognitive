import { appState } from "../state.js";
import { saveResults } from "../utils/storage.js";
import { exportResultsToCsv } from "../utils/csvExporter.js";
import { renderMedicalDetailPage } from "./medicalDetailPage.js";

function sortByLatest(list) {
  return [...list].sort((a, b) => new Date(b.date) - new Date(a.date));
}

function renderListItems(filteredList) {
  if (filteredList.length === 0) {
    return `
      <div class="soft-panel">
        <p style="font-size:24px; margin:0;">검색 결과가 없습니다.</p>
      </div>
    `;
  }

  return filteredList
    .map(
      (item) => `
        <div class="medical-list-item soft-panel">
          <label class="medical-check-wrap">
            <input type="checkbox" class="medical-delete-check" data-id="${item.id}" />
            <span>선택</span>
          </label>

          <div class="medical-list-info">
            <div class="medical-list-line"><strong>이름:</strong> ${item.name}</div>
            <div class="medical-list-line"><strong>나이:</strong> ${item.age}</div>
            <div class="medical-list-line"><strong>성별:</strong> ${item.gender}</div>
            <div class="medical-list-line"><strong>검사 날짜:</strong> ${item.date}</div>
            <div class="medical-list-line"><strong>고유번호:</strong> ${item.id}</div>
            <div class="medical-list-line"><strong>총점:</strong> ${item.score} / ${item.total}</div>
          </div>

          <div class="medical-list-actions">
            <button class="primary-button medical-detail-btn" data-id="${item.id}">
              상세 보기
            </button>
          </div>
        </div>
      `
    )
    .join("");
}

function bindMedicalListEvents() {
  document.querySelectorAll(".medical-detail-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const id = button.dataset.id;
      const realIndex = appState.results.findIndex((item) => item.id === id);
      renderMedicalDetailPage(realIndex);
    });
  });

  const deleteBtn = document.getElementById("medical-delete-btn");
  if (deleteBtn) {
    deleteBtn.addEventListener("click", () => {
      const checkedIds = Array.from(
        document.querySelectorAll(".medical-delete-check:checked")
      ).map((checkbox) => checkbox.dataset.id);

      if (checkedIds.length === 0) {
        alert("삭제할 클라이언트를 선택해주세요.");
        return;
      }

      const ok = confirm("선택한 클라이언트 데이터를 삭제하시겠습니까?");
      if (!ok) return;

      appState.results = appState.results.filter(
        (item) => !checkedIds.includes(item.id)
      );

      saveResults(appState.results);
      renderMedicalListPage();
    });
  }

  const searchBtn = document.getElementById("medical-search-btn");
  if (searchBtn) {
    searchBtn.addEventListener("click", () => {
      renderMedicalListPage();
    });
  }

  const exportBtn = document.getElementById("medical-export-btn");
  if (exportBtn) {
    exportBtn.addEventListener("click", () => {
      exportResultsToCsv(appState.results);
    });
  }
}

export function renderMedicalListPage() {
  const app = document.getElementById("app");
  if (!app) return;

  const nameKeyword =
    document.getElementById("medical-search-name")?.value.trim() || "";
  const ageKeyword =
    document.getElementById("medical-search-age")?.value.trim() || "";
  const idKeyword =
    document.getElementById("medical-search-id")?.value.trim() || "";

  let filteredList = sortByLatest(appState.results);

  if (nameKeyword) {
    filteredList = filteredList.filter((item) =>
      item.name.includes(nameKeyword)
    );
  }

  if (ageKeyword) {
    filteredList = filteredList.filter((item) =>
      String(item.age).includes(ageKeyword)
    );
  }

  if (idKeyword) {
    filteredList = filteredList.filter((item) =>
      item.id.includes(idKeyword)
    );
  }

  app.innerHTML = `
    <div class="result-page final-result-page">
      <div class="result-shell">
        <div class="result-header">
          <div class="result-icon">📋</div>
          <h2 class="question-title result-title">환자 목록</h2>
          <p class="question-description result-description">
            저장된 검사 결과를 검색하고 확인할 수 있습니다.
          </p>
        </div>

        <div class="soft-panel medical-search-panel">
          <div class="medical-search-grid">
            <input id="medical-search-name" class="form-input" type="text" placeholder="이름 검색" value="${nameKeyword}" />
            <input id="medical-search-age" class="form-input" type="text" placeholder="나이 검색" value="${ageKeyword}" />
            <input id="medical-search-id" class="form-input" type="text" placeholder="고유번호 검색" value="${idKeyword}" />
          </div>

          <div class="medical-search-actions">
            <button id="medical-search-btn" class="primary-button">검색</button>
            <button id="medical-delete-btn" class="secondary-button">선택 삭제</button>
            <button id="medical-export-btn" class="secondary-button">CSV 다운로드</button>
          </div>
        </div>

        <div class="medical-list-wrap">
          ${renderListItems(filteredList)}
        </div>
      </div>
    </div>
  `;

  bindMedicalListEvents();
}