
// JavaScript to handle the login button click event
document.getElementById('loginButton').addEventListener('click', () => {
  document.getElementById('loginContainer').classList.remove('hidden');
  document.getElementById('SignupContainer').classList.add('hidden');
});

// JavaScript to handle the signup button click event
document.getElementById('signupButton').addEventListener('click', () => {
  document.getElementById('SignupContainer').classList.remove('hidden');
  document.getElementById('loginContainer').classList.add('hidden');
});

// JavaScript to handle hiding containers when clicking outside
document.addEventListener('click', (event) => {
  const loginContainer = document.getElementById('loginContainer');
  const signupContainer = document.getElementById('SignupContainer');

  if (!loginContainer.contains(event.target) && !event.target.closest('#loginButton') && !signupContainer.contains(event.target) && !event.target.closest('#signupButton')) {
      loginContainer.classList.add('hidden');
      signupContainer.classList.add('hidden');
  }
});

// JavaScript to handle the "Don't have an account?" and "Already have an account?" links
document.addEventListener('click', (event) => {
  if (event.target.closest('#loginContainer a[href="#signup"]')) {
      document.getElementById('loginContainer').classList.add('hidden');
      document.getElementById('SignupContainer').classList.remove('hidden');
  }
  if (event.target.closest('#SignupContainer a[href="#login"]')) {
      document.getElementById('SignupContainer').classList.add('hidden');
      document.getElementById('loginContainer').classList.remove('hidden');
  }
});

  
