
export function applyPageTransition() {
  const app = document.getElementById("app");
  if (!app) return;

  app.classList.remove("page-enter");
  void app.offsetWidth;
  app.classList.add("page-enter");
}