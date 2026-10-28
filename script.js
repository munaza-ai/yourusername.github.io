const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");
const backToTop = document.getElementById("back-to-top");
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

if (backToTop) {
  const toggleBackTop = () => {
    backToTop.classList.toggle("show", window.scrollY > 280);
  };

  window.addEventListener("scroll", toggleBackTop, { passive: true });
  toggleBackTop();

  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
