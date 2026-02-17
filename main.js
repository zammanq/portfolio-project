
function toggleSection(buttonId, sectionId) {
  const button = document.getElementById(buttonId);
  const section = document.getElementById(sectionId);

  if (button && section) {
    button.addEventListener("click", () => {
      section.classList.toggle("hidden");
    });
  }
}

// =============================
// Toggle Different Sections
// =============================
toggleSection("toggleAbout", "about");
toggleSection("toggleSkills", "skills");
toggleSection("toggleProjects", "projects");
toggleSection("toggleContact", "contact");

// =============================
// Hover Effect on Project Image
// =============================
const projectImages = document.querySelectorAll(".project-img");

projectImages.forEach((img) => {
  img.addEventListener("mouseover", () => {
    img.style.transform = "scale(1.1)";
    img.style.transition = "0.3s";
  });

  img.addEventListener("mouseout", () => {
    img.style.transform = "scale(1)";
  });
});

// =============================
// Contact Form Submission
// =============================
const form = document.querySelector("form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Message sent successfully!");
    form.reset();
  });
}
