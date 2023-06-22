const mobileMenuLogOutBtnEl = document.querySelector('.account-btn__log-out');
const mobileMenuOpenIconEl = document.querySelector('.mobile-menu__open-icon');

if (mobileMenuLogOutBtnEl) {
  const mobileMenuContainerInEl = document.querySelector(
    '.mobile-menu-container__in'
  );

  mobileMenuLogOutBtnEl.addEventListener('click', function (e) {
    mobileMenuContainerInEl.classList.toggle('_active-menu');
    mobileMenuOpenIconEl.classList.toggle('_active-icon');
  });
}
