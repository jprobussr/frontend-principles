const themeToggle = document.getElementById('themeToggle');
const toggleHeadingEl = document.getElementById('toggleHeading');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  if (document.body.classList.contains('dark')) {
    themeToggle.textContent = '☀️';
    toggleHeadingEl.textContent = 'Theme Toggle Dark Mode'
  } else {
    themeToggle.textContent = '🌙';
    toggleHeadingEl.textContent = 'Theme Toggle Light Mode';
  }
});
