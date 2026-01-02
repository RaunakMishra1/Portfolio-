const form = document.getElementById('contactForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('Thank you! Your message has been sent ');
  form.reset();
});


const aboutText = "I’m a curious and driven Computer Science student who enjoys turning ideas into interactive digital experiences. I love designing clean layouts, writing efficient code, and continuously learning new technologies to grow as a developer.";

let index = 0;
const speed = 40; 

function typeAbout() {
  if (index < aboutText.length) {
    document.getElementById("about-dynamic").textContent += aboutText.charAt(index);
    index++;
    setTimeout(typeAbout, speed);
  }
}

window.addEventListener("load", typeAbout);
