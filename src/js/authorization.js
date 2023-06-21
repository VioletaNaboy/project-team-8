const userElHeader = document.querySelector('.user-header');
const LogOutHeader = document.querySelector('.log-out-header');
const SignUpHeader = document.querySelector('.sign-up-header');
userElHeader.addEventListener('click', () => {
  LogOutHeader.classList.toggle('hidden');
});
