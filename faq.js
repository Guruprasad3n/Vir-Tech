const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbxfgPFwsQ4M4QSR6lK4x2cbXtxjtwIjGEaQZo24TtnDlXlLxBz132F_tJ1lxXeY8VJm/exec";

document.addEventListener("DOMContentLoaded", function () {
  const openBtns = document.querySelectorAll(
    "#openReserveBtn, #openReserveBtn2, #openReserveBtn3, #openReserveBtnCourses, #enrollCourseBtn"
  );
  const modal = document.getElementById("reserveModal");
  const modalClose = document.getElementById("modalClose");
  const modalCancel = document.getElementById("modalCancel");

  openBtns.forEach((btn) => {
    if (btn) btn.addEventListener("click", openModal);
  });

  if (modalClose) modalClose.addEventListener("click", closeModal);
  if (modalCancel) modalCancel.addEventListener("click", closeModal);

  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  const reserveForm = document.getElementById("reserveForm");
  if (reserveForm) {
    reserveForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      await submitReserveForm();
    });
  }
});

function openModal() {
  const modal = document.getElementById("reserveModal");
  modal.style.display = "flex";
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  const modal = document.getElementById("reserveModal");
  modal.style.display = "none";
  modal.setAttribute("aria-hidden", "true");
}

async function submitReserveForm() {
  const name = document.getElementById("r_name").value.trim();
  const email = document.getElementById("r_email").value.trim();
  const phone = document.getElementById("r_phone").value.trim();
  const location = document.getElementById("r_location").value.trim();
  const message = document.getElementById("r_message").value.trim();
  const agree = document.getElementById("r_agree").checked;

  if (!name || !email || !phone) {
    alert("Please fill required fields");
    return;
  }

  if (!agree) {
    alert("Please agree to the Terms & Conditions");
    return;
  }

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, phone, location, message }),
    });

    const result = await response.json();

    if (result.status === "success") {
      alert(
        "✅ Thank you! Your seat is reserved. Check your email for confirmation."
      );
      document.getElementById("reserveForm").reset();
      closeModal();
    } else {
      alert("⚠️ Submission failed: " + result.message);
    }
  } catch (err) {
    console.error("Network Error:", err);
    alert("❌ Network error. Please try again later.");
  }
}
