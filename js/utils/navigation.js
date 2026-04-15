
import { appState } from "../state.js";

export function navigateTo(renderFn, options = {}) {
  const { saveHistory = true } = options;

  if (saveHistory && appState.currentPage) {
    appState.pageHistory.push(appState.currentPage);
  }

  appState.currentPage = renderFn;
  renderFn();
}

export function goBack(fallbackRenderFn = null) {
  const prev = appState.pageHistory.pop();

  if (prev) {
    appState.currentPage = prev;
    prev();
    return;
  }

  if (fallbackRenderFn) {
    appState.currentPage = fallbackRenderFn;
    fallbackRenderFn();
  }
}