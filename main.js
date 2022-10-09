window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()
}

function showNavOnScroll() {
  if (scrollY == 0) {
    navig.classList.remove('scroll')
  } else {
    navig.classList.add('scroll')
  }
}

function showBackToTopOnScroll() {
  if (scrollY > 400) {
    backToTop.classList.add('show')
  } else {
    backToTop.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '70px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services,
  #services header,
  #services .card,
  #about-us, 
  #about-us header, 
  #about-us .content,
  #contact`)
