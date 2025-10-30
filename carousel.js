document.addEventListener('DOMContentLoaded', () => {
  console.log('carousel.js cargado correctamente');
  const slides = document.querySelectorAll('.carousel-slide');
  const dots = document.querySelectorAll('.carousel-dots .dot');
  const prevButton = document.querySelector('.carousel-prev');
  const nextButton = document.querySelector('.carousel-next');
  let currentSlide = 0;

  // Verificar si los elementos existen
  if (!slides.length || !dots.length || !prevButton || !nextButton) {
    console.error('Error: No se encontraron los elementos del carrusel. Verifica el HTML y los selectores.');
    return;
  }

  function showSlide(index) {
    console.log('Mostrando slide:', index);
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  prevButton.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  nextButton.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      currentSlide = i;
      showSlide(currentSlide);
    });
  });

  // Auto-advance every 5 seconds
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 5000);

  // Mostrar el primer slide al cargar
  showSlide(currentSlide);
});
