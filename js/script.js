// Back-to-top button
const topBtn = document.getElementById('top');
if (topBtn) {
  window.addEventListener('scroll', () => {
    topBtn.style.display = window.scrollY > 600 ? 'inline-block' : 'none';
  });
  topBtn.addEventListener('click', () => window.scrollTo({ top: 0 }));
}
