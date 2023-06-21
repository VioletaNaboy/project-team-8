const userElHeader = document.querySelector('.user-header');
const logOutHeader = document.querySelector('.log-out-header');
const signUpHeader = document.querySelector('.sign-up-header');
userElHeader.addEventListener('click', () => {
  logOutHeader.classList.toggle('hidden');
});
