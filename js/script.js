

   

    // Табы

let tabsBtn = document.querySelectorAll('.nav__item');
let tabsItem = document.querySelectorAll('.logo__list');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('nav__item--active')});
    e.currentTarget.classList.add('nav__item--active');

    tabsItem.forEach(function(element){ element.classList.remove('logo__list--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('logo__list--active');
  });
});