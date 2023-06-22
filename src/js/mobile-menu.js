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

    mobileMenuContainerInEl.classList.toggle('_active-menu');
  });
}
// ! Логіка додавання і прибирання стилю transition
//   if (mobileMenuContainerInEl.classList.contains('._active-menu')) {
//     mobileMenuContainerInEl.style.transition =
//       'transform 500ms cubic-bezier(0.4, 0, 0.2, 1)';
//   } else {
//     mobileMenuContainerInEl.style.transition = '';
// }
// ! ---------

// Користувач НЕ залогінений
// ! Релізація через перевірку "авторизація"
// mobileMenuContainerOutEl.classList.toggle('_active-menu');
// ! ---------
