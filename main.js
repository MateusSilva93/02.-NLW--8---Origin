function onScroll() {
  if (scrollY == 0) {
    navig.classList.remove('scroll')
  } else {
    navig.classList.add('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
