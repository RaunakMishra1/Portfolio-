
const roles = ["Frontend Developer", "Web Developer", "JavaScript Enthusiast"];
let roleIndex = 0;
let charIndex = 0;
const typing = document.getElementById("typing");

function typeEffect() {
  if (charIndex < roles[roleIndex].length) {
    typing.textContent += roles[roleIndex][charIndex];
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}

function eraseEffect() {
  if (charIndex > 0) {
    typing.textContent = roles[roleIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    roleIndex = (roleIndex + 1) % roles.length;
    setTimeout(typeEffect, 300);
  }
}

typeEffect();


const projects = [
  {
    title: "To-Do List Application",
    description: "JavaScript based to-do list allowing users to add, delete and manage tasks."
  },
  {
    title: "Calculator",
    description: "Responsive calculator built using HTML, CSS and JavaScript."
  }
];

const projectGrid = document.getElementById("projectGrid");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "project-card";
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <button>View Project</button>
  `;
  projectGrid.appendChild(card);
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-item");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    if (scrollY >= section.offsetTop - 120) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});







