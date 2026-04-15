import { QUESTIONS } from "../data/questions.js";

function normalizeDifficulty(value) {
  if (!value) return "";
  const v = String(value).trim().toLowerCase();

  if (v === "high" || v === "상") return "high";
  if (v === "middle" || v === "중") return "middle";
  if (v === "under" || v === "하") return "under";

  return v;
}

function normalizeCategory(value) {
  if (!value) return "";
  return String(value).trim().toLowerCase();
}

export function buildTestSet(settings) {
  const result = [];

  ["aadl", "iadl"].forEach((category) => {
    for (let domain = 1; domain <= 5; domain++) {
      const selectedDifficulty = normalizeDifficulty(settings[category][domain]);

      const filtered = QUESTIONS.filter((q) => {
        return (
          normalizeCategory(q.category) === category &&
          Number(q.domain) === domain &&
          normalizeDifficulty(q.difficulty) === selectedDifficulty
        );
      });

      if (filtered.length > 0) {
        result.push(filtered[0]);
      } else {
        console.error("문제 매칭 실패:", {
          category,
          domain,
          selectedDifficulty
        });
      }
    }
  });

  return result;
}

export function getCurrentQuestion(testSet, currentIndex) {
  if (!Array.isArray(testSet)) return null;
  if (currentIndex < 0 || currentIndex >= testSet.length) return null;
  return testSet[currentIndex];
}

export function isLastQuestion(testSet, currentIndex) {
  if (!Array.isArray(testSet) || testSet.length === 0) return false;
  return currentIndex === testSet.length - 1;
}