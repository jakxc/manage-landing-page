const primaryHeader = document.querySelector('.primary-header');
const navToggle = document.querySelector('.mobile-nav-toggle');
const primaryNav = document.querySelector('.primary-nav');

navToggle.addEventListener('click', () => {
    // If primary nav is visible/open, set aria-expanded attr to false, else true
    navToggle.setAttribute('aria-expanded', !primaryNav.hasAttribute('data-visible'))

    primaryNav.toggleAttribute('data-visible');
    primaryHeader.toggleAttribute('data-overlay');
})

const slider = new A11YSlider(document.querySelector(".slider"), {
    adaptiveHeight: false,
    dots: true,
    centerMode: true,
    arrows: false,
    responsive: {
      480: {
        dots: false, // dots enabled 1280px and up
      },
    },
  });