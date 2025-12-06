const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle && navMenu) {
  mobileToggle.addEventListener('click', () => {
    const expanded = mobileToggle.getAttribute('aria-expanded') === 'true';
    navMenu.classList.toggle('show');
    mobileToggle.setAttribute('aria-expanded', (!expanded).toString());
    navMenu.setAttribute('aria-hidden', expanded ? 'true' : 'false');
  });

  // close menu after link click
  navMenu.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.innerWidth < 769) {
        navMenu.classList.remove('show');
        mobileToggle.setAttribute('aria-expanded','false');
        navMenu.setAttribute('aria-hidden','true');
      }
    });
  });
}
  // ======= LOGIN MODAL =======
  const loginBtn = document.getElementById('loginBtn');
  const loginModal = document.getElementById('loginModal');
  const loginClose = document.getElementById('loginClose');
  const loginForm = document.getElementById('loginForm');

  function openLoginModal() {
    loginModal.style.display = 'flex';
    loginModal.setAttribute('aria-hidden', 'false');
    const emailEl = document.getElementById('email');
    if (emailEl) emailEl.focus();
  }

  function closeLoginModal() {
    loginModal.style.display = 'none';
    loginModal.setAttribute('aria-hidden', 'true');
    if (loginForm) loginForm.reset();
  }

  if (loginBtn && loginModal && loginClose && loginForm) {
    loginBtn.addEventListener('click', openLoginModal);

    loginClose.addEventListener('click', closeLoginModal);
    window.addEventListener('click', e => {
      if (e.target === loginModal) closeLoginModal();
    });

    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailEl = document.getElementById('email');
      const passEl = document.getElementById('password');
      const email = emailEl.value.trim();
      const password = passEl.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!email) { alert('Email empty'); emailEl.focus(); return; }
      if (!emailRegex.test(email)) { alert('Invalid email'); emailEl.focus(); return; }
      if (!password) { alert('Password empty'); passEl.focus(); return; }
      if (password.length < 8) { alert('Password must be 8+ chars'); passEl.focus(); return; }

      alert('Successfully Submitted');
      closeLoginModal();
    });
  }



  // ======= BACK TO TOP =======
  const topBtn = document.getElementById('topBtn');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.style.display = window.scrollY > 400 ? 'block' : 'none';
    });
    topBtn.addEventListener('click', () => window.scrollTo({top:0, behavior:'smooth'}));
  }

// Already you have this check
if (!document.getElementById('topbar')) {
  document.body.classList.add('no-topbar');
} else {
  document.body.classList.add('has-topbar');
}

// ======= SCROLL FADE FOR EVENTS =======
const fadeSections = document.querySelectorAll('.fade-section');

function scrollFade() {
  const triggerBottom = window.innerHeight * 0.85;

  fadeSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if(sectionTop < triggerBottom){
      section.classList.add('show');
    } else {
      section.classList.remove('show');
    }
  });
}

window.addEventListener('scroll', scrollFade);
window.addEventListener('load', scrollFade);
  
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("show");
}
// LIGHTBOX FUNCTION  
const galleryImages = document.querySelectorAll(".gallery-grid img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

// On image click → show lightbox
galleryImages.forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightbox.setAttribute("aria-hidden", "false");
  });
});

// Click anywhere to close
lightbox.addEventListener("click", () => {
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImg.src = "";
});
