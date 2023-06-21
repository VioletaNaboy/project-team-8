const mobileMenuOpenIconEl = document.querySelector('.mobile-menu__open-icon');

if (mobileMenuOpenIconEl) {
  const mobileMenuAccountInEl = document.querySelector(
    '.mobile-menu-container__account-in'
  );
  const mobileMenuContainerEl = document.querySelector(
    '.mobile-menu-container'
  );

  mobileMenuOpenIconEl.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    mobileMenuOpenIconEl.classList.toggle('_active-icon');
    mobileMenuAccountInEl.classList.toggle('_active-icon');
    mobileMenuContainerEl.classList.toggle('_active-menu');
  });
}
