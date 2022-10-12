window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(aboutUs)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  // Valor da linha central da tela
  const targetLine = scrollY + innerHeight / 2

  // Valores do limite da section
  const sectionBegin = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionEnd = sectionBegin + sectionHeight

  //Validações de Posição
  const targetLinePassedSectionBegin = targetLine >= sectionBegin
  const targetLinePassedSectionEnd = targetLine > sectionEnd
  const targetLineInSection =
    targetLinePassedSectionBegin && !targetLinePassedSectionEnd

  //Variavei do HTML
  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (targetLineInSection) {
    menuElement.classList.add('active')
  }
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
