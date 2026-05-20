
(function () {

  // =========================
  // ACCESS GUARD
  // =========================
  const access = sessionStorage.getItem("reverie_access");

  if (!access) {
    window.location.replace("gate.html");
    return; // 🔥关键：阻止后面代码执行
  }

  // =========================
  // UI REVEAL SYSTEM
  // =========================
  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const trigger = window.innerHeight * 0.85;

    reveals.forEach((el) => {
      const top = el.getBoundingClientRect().top;

      if (top < trigger) {
        el.classList.add("active");
      } else {
        el.classList.remove("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll, { passive: true });
  revealOnScroll();

  // =========================
  // CARD HOVER MICRO INTERACTION
  // =========================
  const cards = document.querySelectorAll(".novel-card, .novel-card-big");

  cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-4px)";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0px)";
    });
  });

  // =========================
  // SOFT PAGE ENTRY ANIMATION
  // =========================
  window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    document.body.style.transition = "opacity 0.6s ease";

    requestAnimationFrame(() => {
      document.body.style.opacity = "1";
    });
  });

  // =========================
  // FUTURE HOOK
  // =========================
  window.ReverieArchive = {
    unlocked: true,
    getState: () => ({
      access: sessionStorage.getItem("reverie_access"),
      time: new Date().toISOString()
    })
  };

})();