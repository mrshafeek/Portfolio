// small helpers
document.getElementById('year').textContent = new Date().getFullYear();

// smooth focus fix for bootstrap scrollspy on mobile
(() => {
  const links = document.querySelectorAll('#mainNav a.nav-link');
  links.forEach(l => l.addEventListener('click', () => {
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  }));
})();
