// Typing effect
const phrases = ["Software Engineer", "Frontend Developer", "C# & Java Developer"];
let index = 0, i = 0, current = "";
function type() {
  if (i < phrases[index].length) {
    current += phrases[index][i++];
    document.querySelector(".typing").textContent = current;
    setTimeout(type, 100);
  } else {
    setTimeout(() => {
      current = ""; i = 0; index = (index + 1) % phrases.length;
      type();
    }, 2000);
  }
}
type();

// Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}
