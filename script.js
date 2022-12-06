document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

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
