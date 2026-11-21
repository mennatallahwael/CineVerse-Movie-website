// =============================================
// CineVerse - script.js
// Uses only inline-style event handlers
// =============================================

// ─── onload ───────────────────────────────────
function welcomeMessage() {
  alert("🎬 Welcome to CineVerse!\nYour ultimate cinematic experience awaits.");
}

// ─── Navbar hamburger toggle ──────────────────
function toggleMenu() {
  var navLinks = document.getElementById("navLinks");
  if (navLinks.style.display === "flex") {
    navLinks.style.display = "none";
  } else {
    navLinks.style.display = "flex";
  }
}

// ─── Smooth scroll helper (used by nav links) ─
function scrollToSection(sectionId) {
  var el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
  
  // Only close mobile menu if we are on a mobile screen
  if (window.innerWidth <= 768) {
    var navLinks = document.getElementById("navLinks");
    navLinks.style.display = "none";
  }
}

// ─── onclick : Watch Trailer button ───────────
function watchTrailer(movieId) {
  var btn = document.getElementById(movieId);
  if (btn.innerHTML === "▶ Watch Trailer") {
    btn.innerHTML = "⏸ Playing...";
    btn.style.background = "linear-gradient(135deg, #ff6b35, #f7c59f)";
    btn.style.color = "#0a0a0a";
    setTimeout(function () {
      btn.innerHTML = "▶ Watch Trailer";
      btn.style.background = "";
      btn.style.color = "";
    }, 3000);
  }
}

// ─── onclick : Book Now button ─────────────────
function bookNow(movieTitle) {
  var statusEl = document.getElementById("bookingStatus");
  statusEl.innerHTML =
    "✅ Booking confirmed for <strong>" + movieTitle + "</strong>! Enjoy the show 🍿";
  statusEl.style.display = "block";
  setTimeout(function () {
    statusEl.style.display = "none";
  }, 4000);
}

// ─── onmouseover / onmouseout : Movie Cards ───
function mouseOver(card) {
  card.style.border = "2px solid #e50914";
  card.style.boxShadow = "0 0 20px rgba(229, 9, 20, 0.7)";
  card.style.transform = "translateY(-8px) scale(1.03)";
}

function mouseOut(card) {
  card.style.border = "2px solid transparent";
  card.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";
  card.style.transform = "translateY(0) scale(1)";
}

// ─── onmouseover / onmouseout : Upcoming Cards ─
function upcomingOver(card) {
  card.style.border = "2px solid #f5c518";
  card.style.boxShadow = "0 0 20px rgba(245, 197, 24, 0.6)";
  card.style.transform = "translateY(-6px)";
}

function upcomingOut(card) {
  card.style.border = "2px solid transparent";
  card.style.boxShadow = "0 8px 30px rgba(0,0,0,0.5)";
  card.style.transform = "translateY(0)";
}

// ─── onsubmit : Contact form validation ───────
function validateForm() {
  var name  = document.getElementById("contactName").value.trim();
  var email = document.getElementById("contactEmail").value.trim();
  var msg   = document.getElementById("contactMessage").value.trim();

  if (name === "") {
    alert("⚠️ Name must be filled out.");
    return false;
  }
  if (email === "") {
    alert("⚠️ Please enter your email address.");
    return false;
  }
  if (msg === "") {
    alert("⚠️ Please write a message before submitting.");
    return false;
  }

  // Success feedback using getElementById
  var successEl = document.getElementById("formSuccess");
  successEl.innerHTML =
    "🎉 Thank you, <strong>" + name + "</strong>! We'll get back to you soon.";
  successEl.style.display = "block";

  // Clear fields using getElementsByClassName
  var fields = document.getElementsByClassName("form-input");
  for (var i = 0; i < fields.length; i++) {
    fields[i].value = "";
  }

  setTimeout(function () {
    successEl.style.display = "none";
  }, 5000);

  return false; // Prevent actual page reload
}

// ─── querySelector demo: active nav highlight ─
function setActiveNav(clickedEl) {
  // Remove active from all nav links
  var allLinks = document.querySelectorAll(".nav-link");
  for (var i = 0; i < allLinks.length; i++) {
    allLinks[i].classList.remove("active");
  }
  clickedEl.classList.add("active");
}
