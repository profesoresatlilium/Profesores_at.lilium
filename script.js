// Menú móvil
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      links.classList.toggle('abierto');
    });
  }

  // Aparición suave al hacer scroll
  const elementos = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && elementos.length) {
    const observer = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observer.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12 });
    elementos.forEach((el) => observer.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add('visible'));
  }
});
