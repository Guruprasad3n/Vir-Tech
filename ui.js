// ui.js
(function () {
  // shrink header on scroll
  const header = document.querySelector(".site-header");
  let lastScroll = 0;
  window.addEventListener("scroll", () => {
    const s = window.scrollY;
    if (s > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
    lastScroll = s;
  });

  // modal accessibility: focus first input when opened
  function openModal() {
    const modal = document.getElementById("reserveModal");
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden", "false");
    const first = modal.querySelector("input, textarea, button");
    if (first) first.focus();
  }
  function closeModal() {
    const modal = document.getElementById("reserveModal");
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
    // return focus to reserve button
    const btn = document.getElementById("openReserveBtn");
    if (btn) btn.focus();
  }

  // attach to same ids you already use
  const openBtns = document.querySelectorAll(
    "#openReserveBtn, #openReserveBtn2, #openReserveBtn3, #openReserveBtnCourses, #enrollCourseBtn"
  );
  openBtns.forEach((b) => {
    if (b) b.addEventListener("click", openModal);
  });

  const modalClose = document.getElementById("modalClose");
  const modalCancel = document.getElementById("modalCancel");
  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalCancel) modalCancel.addEventListener("click", closeModal);

  // close on backdrop click
  window.addEventListener("click", function (e) {
    const modal = document.getElementById("reserveModal");
    if (e.target === modal) closeModal();
  });

  // keyboard escape
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const modal = document.getElementById("reserveModal");
      if (modal && modal.style.display === "flex") closeModal();
    }
  });
})();
