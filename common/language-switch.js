(() => {
  const panels = Array.from(document.querySelectorAll("[data-language-panel]"));
  const links = Array.from(document.querySelectorAll("[data-language-link]"));

  if (panels.length === 0 || links.length === 0) {
    return;
  }

  const availableLanguages = new Set(
    panels.map((panel) => panel.dataset.languagePanel).filter(Boolean)
  );
  const defaultLanguage = document.documentElement.dataset.defaultLanguage || "ja";

  const readLanguage = () => {
    const hashLanguage = decodeURIComponent(window.location.hash.replace(/^#/, "")).toLowerCase();
    return availableLanguages.has(hashLanguage) ? hashLanguage : defaultLanguage;
  };

  const applyLanguage = (language) => {
    panels.forEach((panel) => {
      panel.hidden = panel.dataset.languagePanel !== language;
    });

    links.forEach((link) => {
      const isActive = link.dataset.languageLink === language;
      link.classList.toggle("is-active", isActive);
      link.setAttribute("aria-pressed", String(isActive));
    });

    document.documentElement.lang = language;
  };

  window.addEventListener("hashchange", () => {
    applyLanguage(readLanguage());
  });

  applyLanguage(readLanguage());
})();
