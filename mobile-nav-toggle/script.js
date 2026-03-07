const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
const siteHeader = document.querySelector('.site-header');

menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');

  if (siteNav.classList.contains('open')) {
    menuToggle.textContent = 'Close';
    menuToggle.setAttribute('aria-expanded', 'true');
  } else {
    menuToggle.textContent = 'Menu';
    menuToggle.setAttribute('aria-expanded', 'false');
  }
});

document.addEventListener('click', (event) => {
  if (!siteHeader.contains(event.target)) {
    siteNav.classList.remove('open');
    menuToggle.textContent = 'Menu';
  }
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    siteNav.classList.remove('open');
    menuToggle.textContent = 'Menu';
  }
});
