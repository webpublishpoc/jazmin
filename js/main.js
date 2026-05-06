/* =============================================
   main.js — Shared UI logic
   ============================================= */

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollAnimations();
  initFaq();
  initContactForm();
  I18n.init();
  markActiveLink();
});

/* ---- Navigation ---- */
function initNav() {
  const nav = document.querySelector('.nav');
  const hamburger = document.getElementById('nav-hamburger');
  const mobileMenu = document.getElementById('nav-mobile');

  // Sticky glass effect on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('nav--scrolled', window.scrollY > 20);
  }, { passive: true });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const open = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });

    // Close on link click
    mobileMenu.querySelectorAll('.nav__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if (!nav.contains(e.target)) {
        hamburger.classList.remove('is-open');
        mobileMenu.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }
}

/* ---- Active link highlight ---- */
function markActiveLink() {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach(link => {
    const href = link.getAttribute('href');
    const isHome = (page === 'index.html' || page === '') && (href === 'index.html' || href === './');
    link.classList.toggle('nav__link--active', href === page || isHome);
  });
}

/* ---- Scroll-triggered fade-in ---- */
function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    document.querySelectorAll('.fade-in').forEach(el => el.classList.add('is-visible'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));
}

/* ---- FAQ Accordion ---- */
function initFaq() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.setAttribute('aria-expanded', 'false');
        b.nextElementSibling.classList.remove('is-open');
      });
      // Open clicked if it was closed
      if (!expanded) {
        btn.setAttribute('aria-expanded', 'true');
        btn.nextElementSibling.classList.add('is-open');
      }
    });
  });
}

/* ---- Contact form (mailto fallback) ---- */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    const name    = form.querySelector('#field-name').value.trim();
    const email   = form.querySelector('#field-email').value.trim();
    const message = form.querySelector('#field-message').value.trim();
    const lang    = form.querySelector('#field-lang').value;

    if (!name || !email || !message) {
      alert(I18n.t('form_required') || 'Please fill in all required fields.');
      return;
    }

    const subject = encodeURIComponent(`Doula inquiry from ${name} [${lang}]`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:jazmin@example.com?subject=${subject}&body=${body}`;
  });
}
