function animateNumber(element, start, end, duration, increment) {
  const range = end - start;
  const stepTime = Math.abs(Math.floor(duration / range));
  let current = start;

  const timer = setInterval(function () {
    current += increment;
    element.textContent = current;

    if ((increment > 0 && current >= end) || (increment < 0 && current <= end)) {
      clearInterval(timer);
    }
  }, stepTime);
}
window.addEventListener('DOMContentLoaded', function() {
  var titulo1 = document.getElementById('titulo-Inf1');
  var titulo2 = document.getElementById("titulo-Inf2");
  var titulo3 = document.getElementById("titulo-Inf3");
    animateNumber(titulo1, 0, 850, 2000, 1); // Define os parâmetros: elemento, valor inicial, valor final, duração em milissegundos
    animateNumber(titulo2, 0, 40, 5000, 1);
    animateNumber(titulo3, 0, 2000000, 1000, 1000);
  });