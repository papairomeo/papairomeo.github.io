/* ============================================
   PapaiRomeo — script
   ============================================ */

(function () {
  'use strict';

  /* ---------- Theme toggle ---------- */
  var themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var current = document.documentElement.getAttribute('data-theme') || 'light';
      var next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) { /* noop */ }
    });
  }

  /* ---------- Mobile menu ---------- */
  var menuToggle = document.querySelector('.menu-toggle');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function () {
      var expanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!expanded));
      if (expanded) {
        mobileNav.setAttribute('hidden', '');
      } else {
        mobileNav.removeAttribute('hidden');
      }
    });
  }

  /* ---------- Reveal on scroll ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Auto year in footer ---------- */
  var yearEls = document.querySelectorAll('.footer-year');
  var currentYear = new Date().getFullYear();
  yearEls.forEach(function (el) { el.textContent = String(currentYear); });
})();
