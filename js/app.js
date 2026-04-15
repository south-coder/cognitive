import { appState } from "./state.js";
import { loadResults } from "./utils/storage.js";
import { navigateTo } from "./utils/navigation.js";
import { renderIntroPage } from "./pages/introPage.js";
import { renderAboutPage } from "./pages/aboutPage.js";

appState.results = loadResults();

const aboutBtn = document.getElementById("global-about-btn");
if (aboutBtn) {
  aboutBtn.addEventListener("click", () => {
    navigateTo(renderAboutPage);
  });
}

navigateTo(renderIntroPage, { saveHistory: false });