const menuButton = document.getElementById('menu')
const navItem = document.getElementById('nav-items')
const hero = document.getElementById('hero-p')
const navLinks = navItem.querySelectorAll('li')

//Ensuring the menu button is functional
menuButton.addEventListener('click', () => {
  navItem.classList.toggle('second-menu')
  hero.classList.toggle('push-hero-down')
})

//Ensuring the menu closes when any of the items is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navItem.classList.remove('second-menu')
      hero.classList.remove('push-hero-down')
    })
  })
