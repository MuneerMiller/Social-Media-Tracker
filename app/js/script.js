const darkButton = document.getElementById('dark');
const lightButton = document.getElementById('light');

const setDarkMode = () => {
  document.querySelector('body').classList = 'dark';
  localStorage.setItem('colorMode', 'dark');
};

const setLightMode = () => {
  document.querySelector('body').classList = 'light';
  localStorage.setItem('colorMode', 'light');
};

const colorModeFromLocalStorage = () => {
  return localStorage.getItem('colorMode');
};

const setColorModeFromPreferences = () => {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const loadAndUpdateColor = () => {
  const color = colorModeFromLocalStorage() || setColorModeFromPreferences();
  color === 'dark' ? setDarkMode() : setLightMode();
};

const radioButtons = document.querySelectorAll('.toggle__wrapper input');
radioButtons.forEach(button => {
  button.addEventListener('click', () => {
    darkButton.checked ? setDarkMode() : setLightMode();
  });
});

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  event.matches ? setDarkMode() : setLightMode();
});

document.addEventListener('DOMContentLoaded', loadAndUpdateColor);
