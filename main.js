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


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('nav ul li a');
    const header = document.querySelector('header');

    for (const link of links) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);

            if (targetSection){
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
        });
    }
});

