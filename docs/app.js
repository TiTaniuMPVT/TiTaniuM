const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal");
      }
    });
  },
  { threshold: 0.18 }
);

document.querySelectorAll(".section, .hero, .hero-card").forEach((el) => {
  el.classList.add("pre-reveal");
  observer.observe(el);
});
