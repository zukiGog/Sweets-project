// accordion
const accordionHeaders = document.querySelectorAll(".accordion-header");

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    accordionHeaders.forEach(item => {
      if (item !== header) {
        item.classList.remove('active');
      }
    })
    header.classList.toggle('active');
  })
})

// burger menu

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
})

document.querySelectorAll('.navMenu a').forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});