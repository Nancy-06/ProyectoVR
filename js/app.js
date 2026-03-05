// ./js/app.js
// ================== NAVBAR SKIN ==================
(function () {
  const menu = document.getElementById('menu1');
  if (!menu) return;

  const logo     = document.querySelector('.logo');
  const toggler  = document.querySelector('.navbar-toggler');
  const collapse = document.getElementById('navbarSupportedContent');

  // Si el nav trae 'menu-white1' en el HTML, esa página "prefiere" menú claro.
  // (cassette.html lo trae; index.html no).
  const defaultIsLight = menu.classList.contains('menu-white1');

  function setLogo(isLight) {
    if (!logo) return;
    // Claro => logo negro; Oscuro/transparente => logo blanco
    logo.setAttribute('src', isLight ? './imagenes/logoblack.png' : './imagenes/logowhite.png');
  }

  function applyMenuStyle(isLight) {
    menu.classList.toggle('menu-white1',  isLight);
    menu.classList.toggle('linea-navbar', isLight);
    setLogo(isLight);
  }

  // Regla central: claro si (la página lo prefiere) O (hay scroll) O (menú móvil abierto)
  function computeIsLight() {
    const mobileOpen = collapse && collapse.classList.contains('show');
    return defaultIsLight || window.scrollY > 2 || mobileOpen;
  }

  // Estado inicial (respeta HTML + estado del collapse si ya estuviera abierto)
  applyMenuStyle(computeIsLight());

  // Scroll
  window.addEventListener('scroll', () => {
    applyMenuStyle(computeIsLight());
  });

  // Eventos de Bootstrap 5 (sin jQuery): mantener claro cuando el menú móvil esté abierto
  if (collapse) {
    collapse.addEventListener('show.bs.collapse', () => applyMenuStyle(true));
    collapse.addEventListener('hide.bs.collapse', () => applyMenuStyle(computeIsLight()));
  }

  // No necesitamos "click" manual del toggler para alternar el skin:
  // los eventos del collapse ya controlan el estado correctamente.
})();

// ================== GOTO TOP ==================
(function () {
  const gotoTop = document.getElementById('flecha');
  if (!gotoTop) return;

  const toggleGotoTop = () => {
    gotoTop.classList.toggle('goto-top--visible', window.scrollY > 200);
  };

  window.addEventListener('scroll', toggleGotoTop);
  toggleGotoTop(); // estado inicial
})();

