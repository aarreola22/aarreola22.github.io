// ─── Mobile nav ───────────────────────────────────────────────
const toggle   = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  toggle.textContent = isOpen ? '×' : '☰';
  toggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Toggle menu');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    toggle.textContent = '☰';
    toggle.setAttribute('aria-label', 'Toggle menu');
  });
});

// ─── Active nav link on scroll ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const links    = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ─── Nav shadow: appears once user scrolls past the hero ──────
const nav  = document.querySelector('.nav');
const hero = document.querySelector('.hero');

if (hero) {
  new IntersectionObserver(([entry]) => {
    nav.classList.toggle('scrolled', !entry.isIntersecting);
  }, { threshold: 0 }).observe(hero);
}

// ─── Card entrance stagger ────────────────────────────────────
const cards = document.querySelectorAll('.card');

const cardObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      cardObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.08 });

cards.forEach(card => cardObserver.observe(card));
