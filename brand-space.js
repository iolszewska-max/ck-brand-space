(() => {
  'use strict';
  document.documentElement.classList.add('has-js');
  const toggle = document.querySelector('.menu-toggle');
  const navigation = document.querySelector('#site-navigation');
  if (toggle && navigation) {
    toggle.hidden = false;
    const closeMenu = () => {
      toggle.setAttribute('aria-expanded', 'false');
      navigation.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      navigation.classList.toggle('is-open', open);
    });
    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
        closeMenu();
        toggle.focus();
      }
    });
    document.addEventListener('click', (event) => {
      if (!event.target.closest('.site-header')) closeMenu();
    });
    window.matchMedia('(min-width: 621px)').addEventListener('change', closeMenu);
  }
  document.querySelectorAll('[data-back-top]').forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
      const main = document.querySelector('main');
      if (main) {
        main.setAttribute('tabindex', '-1');
        main.focus({ preventScroll: true });
        main.addEventListener('blur', () => main.removeAttribute('tabindex'), { once: true });
      }
      history.replaceState(null, '', location.pathname + location.search);
    });
  });
  const chapters = document.querySelector('.chapter-menu');
  if (chapters) {
    chapters.addEventListener('click', (event) => {
      if (event.target.closest('a')) chapters.open = false;
    });
    document.addEventListener('click', (event) => {
      if (!chapters.contains(event.target)) chapters.open = false;
    });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && chapters.open) {
        chapters.open = false;
        chapters.querySelector('summary').focus();
      }
    });
  }
  const progress = document.querySelector('.reading-progress');
  if (progress) {
    let scheduled = false;
    const updateProgress = () => {
      const distance = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.transform = `scaleX(${distance > 0 ? Math.min(1, Math.max(0, window.scrollY / distance)) : 1})`;
      scheduled = false;
    };
    window.addEventListener('scroll', () => {
      if (!scheduled) {
        scheduled = true;
        window.requestAnimationFrame(updateProgress);
      }
    }, { passive: true });
    window.addEventListener('resize', updateProgress);
    window.addEventListener('load', updateProgress);
    updateProgress();
  }
})();
