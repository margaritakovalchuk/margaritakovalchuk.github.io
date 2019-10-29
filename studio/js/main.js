"use strict";

var MobileMenu = function MobileMenu(_ref) {
  var menuClass = _ref.menuClass,
      menuButtonClass = _ref.menuButtonClass,
      sidebarClass = _ref.sidebarClass,
      mobileMenuClass = _ref.mobileMenuClass,
      overlayClass = _ref.overlayClass;
  var body = document.body,
      menu = document.querySelector(menuClass),
      menuButton = document.querySelector(menuButtonClass),
      sidebar = document.querySelector(sidebarClass),
      mobileMenu = document.querySelector(mobileMenuClass),
      overlay = document.querySelector(overlayClass);
  var cloneMenu = menu.cloneNode(true);
  mobileMenu.appendChild(cloneMenu).className = '';

  var showMenu = function showMenu() {
    body.classList.add('no-scroll');
    sidebar.style.display = 'block';
    overlay.style.display = 'block';
  };

  var hideMenu = function hideMenu() {
    body.classList.remove('no-scroll');
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  };

  menuButton.addEventListener('click', showMenu, false);
  overlay.addEventListener('click', hideMenu, false);
};
"use strict";

var init = function init() {
  new MobileMenu({
    menuClass: '.header--nav .nav',
    menuButtonClass: '.nav--button',
    sidebarClass: '.sidebar-menu',
    mobileMenuClass: '.mobile-menu',
    overlayClass: '.overlay'
  });
};

window.onload = init;