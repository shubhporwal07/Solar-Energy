// Smooth scroll function
function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  }
  
  // Back to Top Button functionality
  const backToTopButton = document.getElementById("back-to-top");
  
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  // Section Fade-in Animation
  const sections = document.querySelectorAll(".fade-in");
  
  window.addEventListener("scroll", () => {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      if (sectionTop < window.innerHeight - 100) {
        section.classList.add("visible");
      }
    });
  });
  
  // Form Validation
  function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return false;
    }
  
    alert("Thank you for contacting us!");
    return true;
  }
  