const menuButton = document.querySelector('.site-header__menu');
const header = document.querySelector('.site-header');

menuButton.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  menuButton.innerHTML = isOpen ? '&times;' : '&#9776;';
});
