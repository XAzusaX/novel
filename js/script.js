
// =========================
// RANDOM QUOTE
// =========================
const quotes = [
  "Some stories are never finished, only paused.",
  "A quiet world built from words.",
  "You are now entering a private archive.",
  "Every page remembers you.",
  "Stories exist where memory fades."
];

const quoteEl = document.querySelector(".quote");

if (quoteEl) {
  quoteEl.textContent =
    quotes[Math.floor(Math.random() * quotes.length)];
}


// =========================
// ELEMENTS CACHE
// =========================
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");
const reveals = document.querySelectorAll(".reveal");


// =========================
// SCROLL HANDLER (optimized)
// =========================
function onScroll() {
  const scrollY = window.scrollY;
  const trigger = window.innerHeight * 0.85;

  // -------------------------
  // NAV GLASS EFFECT
  // -------------------------
  if (nav) {
    if (scrollY > 20) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  // -------------------------
  // HERO HIDE EFFECT
  // -------------------------
  if (hero) {
    if (scrollY > window.innerHeight * 0.6) {
      hero.classList.add("hide");
    } else {
      hero.classList.remove("hide");
    }
  }

  // -------------------------
  // REVEAL SYSTEM
  // -------------------------
  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top;

    if (top < trigger) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
}



// =========================
// INIT
// =========================
window.addEventListener("scroll", onScroll, { passive: true });

// first run (important)
onScroll();

const text = "SYSTEM NOTICE: Archive node lost connection...";

let i = 0;
const speed = 45;

function typeWriter() {
  const el = document.getElementById("typewriter");
  if (!el) return;

  if (i < text.length) {
    el.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.addEventListener("load", () => {
  typeWriter();
});