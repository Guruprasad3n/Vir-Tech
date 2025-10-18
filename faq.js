// faq.js – handles popup form & Google Sheet submission
// Dep Id
// AKfycbybGFm0n7As80Y5eCLe9IgVabGu0m03jpifBQIeh5xBlQBSRZsocqrs2BTf0xdglFCPJA

// Web App
// https://script.google.com/macros/s/AKfycbybGFm0n7As80Y5eCLe9IgVabGu0m03jpifBQIeh5xBlQBSRZsocqrs2BTf0xdglFCPJA/exec

// https://script.google.com/macros/library/d/1DISLf-TOZTonzYlX6-rl4BmCZdp0J9_4t1BmvLFASozRsI2B1iIOp9oq/5
const WEB_APP_URL =
  "https://script.google.com/macros/s/AKfycbybGFm0n7As80Y5eCLe9IgVabGu0m03jpifBQIeh5xBlQBSRZsocqrs2BTf0xdglFCPJA/exec";
//   "https://script.google.com/macros/s/PASTE_YOUR_DEPLOYED_WEB_APP_URL_HERE/exec"; // 👈 replace this after deployment

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

  const payload = { name, email, phone, location, message };

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
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

// const WEB_APP_URL =
//   "https://script.google.com/macros/s/AKfycbypD0ZsVQs-nto8zOF-zBgYfqd2N4hY9G7yn-BFnsbp0dESBrom9oBRGPii-imNMyXz3A/exec";

// document.addEventListener("DOMContentLoaded", function () {
//   const openBtns = document.querySelectorAll(
//     "#openReserveBtn, #openReserveBtn2, #openReserveBtn3, #openReserveBtnCourses, #enrollCourseBtn"
//   );
//   const modal = document.getElementById("reserveModal");
//   const modalClose = document.getElementById("modalClose");
//   const modalCancel = document.getElementById("modalCancel");

//   openBtns.forEach((b) => {
//     if (b)
//       b.addEventListener("click", function () {
//         openModal();
//       });
//   });

//   if (modalClose) modalClose.addEventListener("click", closeModal);
//   if (modalCancel) modalCancel.addEventListener("click", closeModal);

//   window.addEventListener("click", function (e) {
//     if (e.target === modal) closeModal();
//   });

//   const reserveForm = document.getElementById("reserveForm");
//   if (reserveForm) {
//     reserveForm.addEventListener("submit", function (e) {
//       e.preventDefault();
//       submitReserveForm();
//     });
//   }

//   loadDraftToModal();
// });

// function openModal() {
//   const modal = document.getElementById("reserveModal");
//   modal.style.display = "flex";
//   modal.setAttribute("aria-hidden", "false");
// }

// function closeModal() {
//   const modal = document.getElementById("reserveModal");
//   modal.style.display = "none";
//   modal.setAttribute("aria-hidden", "true");
// }

// function loadDraftToModal() {
//   try {
//     const raw = localStorage.getItem("virtech_reserve_draft");
//     if (!raw) return;
//     const d = JSON.parse(raw);
//     if (d.name) document.getElementById("r_name").value = d.name;
//     if (d.email) document.getElementById("r_email").value = d.email;
//     if (d.phone) document.getElementById("r_phone").value = d.phone;
//     if (d.location) document.getElementById("r_location").value = d.location;
//     if (d.message) document.getElementById("r_message").value = d.message;
//   } catch (err) {
//     console.warn(err);
//   }
// }

// function saveDraftFromModal() {
//   const d = {
//     name: document.getElementById("r_name").value,
//     email: document.getElementById("r_email").value,
//     phone: document.getElementById("r_phone").value,
//     location: document.getElementById("r_location").value,
//     message: document.getElementById("r_message").value,
//   };
//   localStorage.setItem("virtech_reserve_draft", JSON.stringify(d));
// }

// async function submitReserveForm() {
//   const name = document.getElementById("r_name").value.trim();
//   const email = document.getElementById("r_email").value.trim();
//   const phone = document.getElementById("r_phone").value.trim();
//   const location = document.getElementById("r_location").value.trim();
//   const message = document.getElementById("r_message").value.trim();
//   const agree = document.getElementById("r_agree").checked;

//   if (!name || !email || !phone) {
//     alert("Please fill required fields");
//     return;
//   }
//   if (!agree) {
//     alert("Please agree to Terms & Conditions");
//     return;
//   }

//   saveDraftFromModal();

//   const payload = {
//     name,
//     email,
//     phone,
//     location,
//     message,
//   };

//   try {
//     const res = await fetch(WEB_APP_URL, {
//       method: "POST",
//       mode: "cors",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify(payload),
//     });

//     if (!res.ok) {
//       const text = await res.text();
//       console.error("Submit failed", text);
//       alert("Submission failed. Please try again later.");
//       return;
//     }

//     const json = await res.json();
//     if (json && json.status === "success") {
//       // clear draft
//       localStorage.removeItem("virtech_reserve_draft");
//       // show thank you & close modal
//       alert(
//         "Thanks! Your seat is reserved. Check your email for confirmation."
//       );
//       closeModal();
//       document.getElementById("reserveForm").reset();
//     } else {
//       alert("Submission failed. Please try again.");
//     }
//   } catch (err) {
//     console.error(err);
//     alert("Network error. Please try again later.");
//   }
// }
