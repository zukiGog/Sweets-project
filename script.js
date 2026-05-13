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