// ---
const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
const smallMenu = document.querySelector('.header__sm-menu')
const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
const headerHamMenuCloseBtn = document.querySelector(
  '.header__main-ham-menu-close'
)
const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

hamMenuBtn.addEventListener('click', () => {
  if (smallMenu.classList.contains('header__sm-menu--active')) {
    smallMenu.classList.remove('header__sm-menu--active')
  } else {
    smallMenu.classList.add('header__sm-menu--active')
  }
  if (headerHamMenuBtn.classList.contains('d-none')) {
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  } else {
    headerHamMenuBtn.classList.add('d-none')
    headerHamMenuCloseBtn.classList.remove('d-none')
  }
})

for (let i = 0; i < headerSmallMenuLinks.length; i++) {
  headerSmallMenuLinks[i].addEventListener('click', () => {
    smallMenu.classList.remove('header__sm-menu--active')
    headerHamMenuBtn.classList.remove('d-none')
    headerHamMenuCloseBtn.classList.add('d-none')
  })
}

// ---
const headerLogoConatiner = document.querySelector('.header__logo-container')

headerLogoConatiner.addEventListener('click', () => {
  location.href = 'index.html'
})

// Typewriter Effect for Home Hero
const typewriterElement = document.querySelector('.home-hero__typewriter');
const roles = ['Data Scientist', 'Machine Learning Developer'];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentRole = roles[roleIndex];
  if (!isDeleting && charIndex <= currentRole.length) {
    // Typing
    typewriterElement.textContent = currentRole.substring(0, charIndex);
    charIndex++;
    typingSpeed = 100;
  } else if (isDeleting && charIndex >= 0) {
    // Deleting
    typewriterElement.textContent = currentRole.substring(0, charIndex);
    charIndex--;
    typingSpeed = 50;
  }

  if (charIndex > currentRole.length) {
    isDeleting = true;
    typingSpeed = 1000; // Pause before deleting
  } else if (isDeleting && charIndex < 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    typingSpeed = 500; // Pause before typing next role
  }

  setTimeout(type, typingSpeed);
}

if (typewriterElement) {
  setTimeout(type, 1000); // Start after slight delay
}