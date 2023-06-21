const mobileMenuOpenIconEl = document.querySelector('.mobile-menu__open-icon');

if (mobileMenuOpenIconEl) {
  // Користувач залогінений
  const mobileMenuContainerInEl = document.querySelector(
    '.mobile-menu-container__in'
  );
  // ! ---------

  // Користувач НЕ залогінений
  const mobileMenuContainerOutEl = document.querySelector(
    '.mobile-menu-container__out'
  );
  // ! ---------

  mobileMenuOpenIconEl.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock');
    mobileMenuOpenIconEl.classList.toggle('_active-icon');
    // mobileMenuAccountInEl.classList.toggle('_active-icon');
    mobileMenuContainerInEl.classList.toggle('_active-menu');
  });
}

// Користувач НЕ залогінений
// ! Релізація через перевірку "авторизація"
// mobileMenuContainerOutEl.classList.toggle('_active-menu');
