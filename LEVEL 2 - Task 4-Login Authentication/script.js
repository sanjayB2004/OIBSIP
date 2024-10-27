const users = {};

document.getElementById("signup-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (users[email]){
    showMessage("User with this email is already registered.")
  }{

  const hashedPassword = btoa(password);


  users[email] = hashedPassword;

  document.getElementById("signup-email").value = "";
  document.getElementById("signup-password").value = "";

  showMessage("User signed up successfully.");
  }
});



document.getElementById("login-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  if (users[email]) {
    const hashedPassword = users[email];

    if (hashedPassword === btoa(password)) {
      showMessage("Login successful.");
      setTimeout(() => {
        window.location.href = "secured.html";
      },2000)
    } else {
      showMessage("Incorrect password.");
    }
  } else {
    showMessage("Email not found.");
  }
});

const sliderButton = document.getElementById("slider-button");
const sliderText = document.getElementById('slider-text');
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

sliderButton.addEventListener('click', () => {
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'block';
        signupForm.style.display = 'none';
        sliderButton.textContent = 'Sign Up';
        sliderText.textContent = 'Create an account!';
        sliderButton.classList.remove('active');
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'block';
        sliderButton.textContent = 'Login';
        sliderText.textContent = 'Already signed?';
        sliderButton.classList.add('active');
    }
});

function showMessage(message) {
    const messageElement = document.getElementById("message");
    messageElement.textContent = message;
  
    setTimeout(() => {
      messageElement.textContent = "";
    }, 2000);
  }
