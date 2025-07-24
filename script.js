//Typing effect
const phrases = ["Software Engineer", "Frontend Learner", "C# & Java Developer"];
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

//Dark Mode Toggle
function toggleMode() {
  document.body.classList.toggle("dark-mode");
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark-mode")) {
    btn.textContent = "☀️ Light Mode";
  } else {
    btn.textContent = "🌙 Dark Mode";
  }
}

//COntact form Validations
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const status = document.getElementById("form-status");

  //Client-side validation
  if (!form.name.value || !form.email.value || !form.message.value) {
    status.textContent = "Please fill all fields.";
    status.style.color = "red";
    return;
  }

  //Email format validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!form.email.value.match(emailPattern)) {
    status.textContent = "Please enter a valid email.";
    status.style.color = "red";
    return;
  }

  //Successful submission
  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  form.reset();
});


AOS.init();
