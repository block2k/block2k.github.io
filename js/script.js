// Mobile Navigation Toggle
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".primary-nav ul");

if (navToggle && navList) {
  navToggle.setAttribute("aria-expanded", "false");
  
  navToggle.addEventListener("click", () => {
    const isOpen = navList.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });
  
  // Close menu when clicking a link
  navList.querySelectorAll("a").forEach((link) =>
    link.addEventListener("click", () => {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    })
  );
  
  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!navToggle.contains(e.target) && !navList.contains(e.target)) {
      navList.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Dynamic Year in Footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Animated Statistics Counter
const stats = document.querySelectorAll(".stat[data-target]");
const statsContainers = document.querySelectorAll(".stats-grid, .stats-grid-large");

const animateStats = () => {
  stats.forEach((stat) => {
    if (stat.dataset.animated === "true") return; // Skip if already animated
    
    const target = parseInt(stat.dataset.target, 10);
    const duration = 1800;
    let start = 0;
    
    const step = (timestamp) => {
      if (!stat.dataset.startTime) {
        stat.dataset.startTime = timestamp;
      }
      
      const elapsed = timestamp - parseInt(stat.dataset.startTime, 10);
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smoother animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const value = Math.floor(easeOutQuart * (target - start) + start);
      
      stat.textContent = value.toLocaleString();
      
      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        stat.dataset.animated = "true";
      }
    };
    
    requestAnimationFrame(step);
  });
};

// Observe stats containers and animate when visible
if (stats.length && statsContainers.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
        }
      });
    },
    { threshold: 0.2 }
  );
  
  statsContainers.forEach((container) => observer.observe(container));
}

// Contact Form Handler
const form = document.getElementById("contact-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = "Sending...";
    submitBtn.style.opacity = "0.7";
    
    // Simulate sending delay
    setTimeout(() => {
      // Show success message
      submitBtn.textContent = "✓ Message Sent!";
      submitBtn.style.backgroundColor = "#10b981";
      
      // Create success notification
      const successMsg = document.createElement("div");
      successMsg.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #10b981;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 9999;
        animation: slideIn 0.3s ease;
      `;
      successMsg.innerHTML = `
        <strong>✓ Success!</strong><br>
        Your message has been sent. We'll get back to you soon!
      `;
      document.body.appendChild(successMsg);
      
      // Add animation
      const style = document.createElement('style');
      style.textContent = `
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `;
      document.head.appendChild(style);
      
      // Reset form
      form.reset();
      
      // Remove notification after 4 seconds
      setTimeout(() => {
        successMsg.style.animation = "slideIn 0.3s ease reverse";
        setTimeout(() => successMsg.remove(), 300);
      }, 4000);
      
      // Reset button after 3 seconds
      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = "";
        submitBtn.style.opacity = "";
      }, 3000);
      
    }, 1500); // 1.5 second delay to simulate sending
  });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    
    // Skip if it's just "#" or doesn't exist
    if (href === "#" || href === "#!") {
      e.preventDefault();
      return;
    }
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offsetTop = target.offsetTop - 100; // Account for sticky nav
      
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  });
});

// Add active class to current page in navigation
const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".primary-nav a");

navLinks.forEach((link) => {
  const linkPage = link.getAttribute("href");
  if (linkPage === currentPage || (currentPage === "" && linkPage === "index.html")) {
    link.classList.add("active");
  }
});

// Add fade-in animation for sections on scroll
const observeSections = () => {
  const sections = document.querySelectorAll(".section");
  
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateY(0)";
        }
      });
    },
    { threshold: 0.1 }
  );
  
  sections.forEach((section) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(20px)";
    section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    sectionObserver.observe(section);
  });
};

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  observeSections();
});

