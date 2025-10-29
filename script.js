// Smooth scrolling untuk navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Animasi scroll
window.addEventListener("scroll", function () {
  const nav = document.querySelector("nav");
  if (window.scrollY > 100) {
    nav.style.background = "rgba(255, 255, 255, 0.95)";
    nav.style.backdropFilter = "blur(10px)";
  } else {
    nav.style.background = "white";
    nav.style.backdropFilter = "none";
  }
});

// CTA Button action
document.querySelector(".cta-button").addEventListener("click", function () {
  document.querySelector("#projects").scrollIntoView({
    behavior: "smooth",
  });
});

// Simple animation untuk project cards
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe project cards
document.querySelectorAll(".project-card").forEach((card) => {
  card.style.opacity = "0";
  card.style.transform = "translateY(20px)";
  card.style.transition = "all 0.6s ease";
  observer.observe(card);
});

console.log("Website portfolio loaded! 🚀");
// Smooth scroll ke projects
document.querySelectorAll(".project-btn").forEach((button) => {
  button.addEventListener("click", function () {
    if (!this.disabled) {
      alert("Project bakal segera diluncurin bro! Stay tuned! 🚀");
    }
  });
});
// Projects section interaction
document.querySelectorAll(".project-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const projectTitle =
      this.closest(".project-card").querySelector("h3").textContent;

    if (this.classList.contains("primary")) {
      alert(`🚀 "${projectTitle}" akan segera diluncurkan!\nStay tuned bro!`);
    } else {
      alert(
        `📁 Source code untuk "${projectTitle}" sedang dipersiapkan.\nComing soon!`
      );
    }
  });
});
// Projects section functions
function showCode(projectName) {
  const messages = {
    portfolio:
      "Source code website portfolio ini sudah bisa dilihat di VS Code lu bro! 😎",
    todo: "Code Todo App akan segera diupload ke GitHub!",
    calculator: "Code Calculator sedang dalam pengerjaan!",
  };

  alert(messages[projectName] || "Source code coming soon! 🚀");
}

function comingSoon(feature) {
  alert(`🎯 ${feature} sedang dalam pengembangan!\nStay tuned bro! 🔥`);
}

// Add click effects
document.querySelectorAll(".project-btn").forEach((button) => {
  button.addEventListener("click", function (e) {
    // Add ripple effect
    const ripple = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `;

    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 600);
  });
});

// Add ripple animation to CSS
const style = document.createElement("style");
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    .project-btn {
        position: relative;
        overflow: hidden;
    }
`;
document.head.appendChild(style);
// Fun functions for the projects section
function visitDemo() {
  const messages = [
    "Bro, lu udah liat demo nya! Ini dia website portfolio gue! 😎",
    "Demo? Ini dia demonya! Website yang lu lagi liat ini! 🚀",
    "Lu lagi liat demo nya sekarang! Keren kan? 😏",
  ];
  alert(messages[Math.floor(Math.random() * messages.length)]);
}

function showMotivation() {
  const motivations = [
    "JANGAN MENYERAH BRO! Setiap expert pernah jadi pemula! 💪",
    "CODING ITU SEPERTI OLAHRAGA - makin sering latihan, makin jago! 🏋️",
    "ERROR? Itu tanda lu sedang belajar! Terus semangat! 🔥",
    "Dari portfolio ini, next lu bisa bikin startup unicorn! 🦄",
  ];
  alert(motivations[Math.floor(Math.random() * motivations.length)]);
}

function notifyMe() {
  alert(
    "🔔 Oke bro! Gue akan kabarin lu kalau project baru ready!\n(Spoiler: Bikin WhatsApp bot dulu buat notify lu 😂)"
  );
}

function createHype() {
  alert(
    "🎉 WOOO! HYPE TRAIN MULAI!\nCHOO CHOO! Next project bakal EPIC banget! 🚂✨"
  );
}

function showRoadmap() {
  alert(
    "🗺️ ROADMAP GUE:\n1. Portfolio ✅\n2. Belajar React 🔄\n3. Bikin Real Project ⏳\n4. PROFIT! 💰\n\nStay tuned!"
  );
}

function joinJourney() {
  alert(
    "🤝 YO! Welcome to the journey bro!\nMari belajar coding bareng-bareng!\nSemangat! 🔥"
  );
}

// Add some fun animations
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", function () {
    this.style.transform = "translateY(-10px) scale(1.02)";
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "translateY(0) scale(1)";
  });
});

// Add confetti effect for featured card
document
  .querySelector(".featured .btn-hype")
  .addEventListener("click", function () {
    alert(
      "🎊 CONFETTI MODE ACTIVATED!\n*imaginary confetti everywhere*\nLUDAHIN LAYAR BUAT EFEK NYATA! 😂"
    );
  });

// Fun console message
console.log(`🔥 Portfolio website loaded! 
👨‍💻 Developer: Someone awesome
🎯 Mission: Become a coding master
💡 Tip: Never stop learning!`);
