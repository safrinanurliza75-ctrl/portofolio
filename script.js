// Navbar sticky color
const navBar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 36) navBar.classList.add('solid');
  else navBar.classList.remove('solid');
});

// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in scroll animation
const animatedSections = document.querySelectorAll('[data-animate]');
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      // Animate skills bar when #skills section in view
      if (entry.target.id === 'skills') animateSkillBars();
    }
  });
}, { threshold: 0.33 });
animatedSections.forEach(section => revealObserver.observe(section));

// Animated progress bars for skills
let skillsAnimated = false;
function animateSkillBars() {
  if (skillsAnimated) return;
  document.querySelectorAll('.progress-bar').forEach(bar => {
    const value = bar.dataset.value || 0;
    let fill = document.createElement('div');
    fill.className = 'progress-bar-fill';
    bar.appendChild(fill);
    // Animate width
    setTimeout(() => {
      fill.style.width = value + '%';
    }, 220);
  });
  skillsAnimated = true;
}

// Optional: Contact form basic submission preventDefault effect
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Terima kasih telah menghubungi! 🌸');
  this.reset();
});