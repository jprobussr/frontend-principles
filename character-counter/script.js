const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const messageInput = document.getElementById('messageInput');
const countText = document.getElementById('countText');

const updateThemeButton = () => {
  const isLight = body.classList.contains('light');

  if (isLight) {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'false');
  } else {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'true');
  }
};

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'light') {
  body.classList.add('light');
}

updateThemeButton();

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light');

  const isLight = body.classList.contains('light');

  if (isLight) {
    localStorage.setItem('theme', 'light');
  } else {
    localStorage.setItem('theme', 'dark');
  }

  updateThemeButton();
});

messageInput.addEventListener('input', () => {
  console.log(messageInput.value.length);
});
