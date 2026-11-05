// Theme toggle
// - Defaults to the operating system's colour scheme.
// - An explicit choice made with the toggle is saved in localStorage and wins
//   over the system setting on later visits.
// - Until the user makes a choice, the page follows system theme changes live.

const STORAGE_KEY = 'colorMode';
const THEMES = ['dark', 'light'];

const root = document.documentElement;
const systemDarkQuery = window.matchMedia('(prefers-color-scheme: dark)');

const getSavedTheme = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return THEMES.includes(saved) ? saved : null;
  } catch (error) {
    return null; // Storage can be unavailable (e.g. private mode, blocked cookies)
  }
};

const saveTheme = (theme) => {
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch (error) {
    // Ignore: the theme still applies for this visit
  }
};

const getSystemTheme = () => (systemDarkQuery.matches ? 'dark' : 'light');

const applyTheme = (theme) => {
  root.classList.remove(...THEMES);
  root.classList.add(theme);

  // Keep the toggle's position in sync with the active theme
  const radio = document.getElementById(theme);
  if (radio) radio.checked = true;
};

const init = () => {
  applyTheme(getSavedTheme() || getSystemTheme());

  document.querySelectorAll('.toggle input[name="theme"]').forEach((radio) => {
    radio.addEventListener('change', () => {
      if (!radio.checked) return;
      applyTheme(radio.value);
      saveTheme(radio.value);
    });
  });

  systemDarkQuery.addEventListener('change', () => {
    if (!getSavedTheme()) applyTheme(getSystemTheme());
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
