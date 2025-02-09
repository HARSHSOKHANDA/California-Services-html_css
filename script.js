// Nav Active
let nav = document.querySelector(".navbar");
window.onscroll = function () {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("scroll-on");
  } else {
    nav.classList.remove("scroll-on");
  }
};

// nav hide
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
  a.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});

// Testimonial Section

document.addEventListener("DOMContentLoaded", function () {
  const testimonialsContainer = document.querySelector(
    ".testimonials-container"
  );

  if (testimonialsContainer) {
    $(testimonialsContainer).owlCarousel({
      loop: true,
      autoplay: true,
      autoplayTimeout: 6000,
      margin: 10,
      nav: true,
      navText: [
        "<i class='fa-solid fa-arrow-left'></i>",
        "<i class='fa-solid fa-arrow-right'></i>",
      ],
      responsive: {
        0: {
          items: 1,
          nav: false,
        },
        600: {
          items: 1,
          nav: true,
        },
        768: {
          items: 2,
        },
      },
    });
  }
});

// FAQ Section

const acc = document.getElementsByClassName("accordion");
for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    this.parentElement.classList.toggle("active");

    let pannel = this.nextElementSibling;
    if (pannel.style.display === "block") {
      pannel.style.display = "none";
    } else {
      pannel.style.display = "block";
    }
  });
}



// Extra button to getting button
const scrollButton = document.getElementById("scrollToTopBtn");
function toggleScrollButton() {
  const pageHeight = window.innerHeight;
  const scrolledDistance = window.scrollY;

  if (scrolledDistance >= pageHeight * 2) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}
window.addEventListener("scroll", toggleScrollButton);
scrollButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" }); // Smoothly scroll to the top
});