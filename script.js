/******************************
          SMOOTH SCROLLING
*******************************/

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

/****************************** 
          FORM HANDLING
*******************************/

const form = document.getElementById("submit-button");
// form.addEventListener("click", processForm);

function processForm(e) {
  if (e.preventDefault) {
    e.preventDefault();
  }

  /* do what you want with the form */

  const name = document.getElementById("name");
  const emailAddress = document.getElementById("email");
  const message = document.getElementById("message");
}

/*****************************
          LAZY LOADING
******************************/

// Set up the IntersectionObserver
const observer = new IntersectionObserver((entries) => {
  // For each entry that intersects with the viewport
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

// Select all elements that should be lazy loaded
const lazyLoadElements = document.querySelectorAll(".lazy-load");

// Start observing each lazy load element
lazyLoadElements.forEach((element) => observer.observe(element));
