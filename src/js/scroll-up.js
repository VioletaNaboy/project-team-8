const arrow = document.querySelector('a.arrow');
window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    arrow.style.visibility = 'visible';
  } else {
    arrow.style.visibility = 'hidden';
  }
});
arrow.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
