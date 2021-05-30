document.getElementById('menu-burger').addEventListener('click', function () {
  const navTag = document.querySelector('#nav');

  if (navTag.classList.contains('nav-no-display')) {
    navTag.classList.add('nav');
    navTag.classList.remove('nav-no-display');
  } else {
    navTag.classList.add('nav-no-display');
    navTag.classList.remove('nav');
  }
});
