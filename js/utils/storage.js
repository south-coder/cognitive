// js/utils/storage.js

const RESULTS_KEY = "cognitive_web_results";

export function loadResults() {
  try {
    const raw = localStorage.getItem(RESULTS_KEY);
    if (!raw) return [];

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("results 불러오기 실패:", error);
    return [];
  }
}

export function saveResults(results) {
  try {
    localStorage.setItem(RESULTS_KEY, JSON.stringify(results));
  } catch (error) {
    console.error("results 저장 실패:", error);
  }
}

export function clearResults() {
  try {
    localStorage.removeItem(RESULTS_KEY);
  } catch (error) {
    console.error("results 삭제 실패:", error);
  }
}