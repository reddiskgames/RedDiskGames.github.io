window.addEventListener('scroll', function() {
  const header = document.querySelector('.animated-header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.classList.add('active');
  } else {
    header.classList.remove('active');
  }
});
