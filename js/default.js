const button = document.getElementById('menu-toggle');
const nav = document.getElementById('nav-header');

let inLargeScreenMode = false;

function updateScreenStatus() {
  const clientWidth = document.body.getBoundingClientRect().width;
  if (clientWidth >= 576 && !inLargeScreenMode) {
    inLargeScreenMode = true;
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  } else if (clientWidth < 576 && inLargeScreenMode) {
    inLargeScreenMode = false;

    // This prevents transition from playing during breakpoint to small screen
    nav.classList.add('transition-stopper');
    let timeout = setTimeout(() => {
      nav.classList.remove('transition-stopper');
    }, 250);
  }
}

function toggleMenu() {
  if (nav.getAttribute('aria-expanded') === 'false') {
    nav.setAttribute('aria-expanded', true);
    nav.classList.add('nav-header-show');
    button.classList.add('nav-header-button-close');
  } else {
    nav.setAttribute('aria-expanded', false);
    nav.classList.remove('nav-header-show');
    button.classList.remove('nav-header-button-close');
  }
}

window.addEventListener('load', updateScreenStatus, false);
window.addEventListener('resize', updateScreenStatus, false);
button.addEventListener('click', toggleMenu, false);