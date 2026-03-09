const themeToggle = document.getElementById('themeToggle');
const toggleHeadingEl = document.getElementById('toggleHeading');

const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.body.classList.add('dark');
  themeToggle.textContent = '☀️';
  themeToggle.setAttribute('aria-pressed', 'true');
} else {
  themeToggle.textContent = '🌙';
  themeToggle.setAttribute('aria-pressed', 'false');
}

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  const isDark = document.body.classList.contains('dark');

  if (isDark) {
    themeToggle.textContent = '☀️';
    themeToggle.setAttribute('aria-pressed', 'true');
    localStorage.setItem('theme', 'dark');
  } else {
    themeToggle.textContent = '🌙';
    themeToggle.setAttribute('aria-pressed', 'false');
    localStorage.setItem('theme', 'light');
  }
});
