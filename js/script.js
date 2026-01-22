const root = document.documentElement;
const themeBtn = document.getElementById("themeBtn");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function setTheme(next) {
  root.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
  themeBtn.textContent = next === "light" ? "🌙" : "☀️";
}

const saved = localStorage.getItem("theme");
setTheme(saved || "dark");

themeBtn.addEventListener("click", () => {
  const current = root.getAttribute("data-theme") || "dark";
  setTheme(current === "dark" ? "light" : "dark");
});

// smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href");
    const el = document.querySelector(id);
    if (!el) return;
    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
// Detect scroll and add/remove 'scrolled' class to navbar
window.addEventListener('scroll', function () {
  const topbar = document.querySelector('.topbar');
  if (window.scrollY > 50) {
    topbar.classList.add('scrolled');
  } else {
    topbar.classList.remove('scrolled');
  }
});
