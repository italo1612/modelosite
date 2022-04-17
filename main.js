//  abre e fecha o menu quando clicar no icone hamburguer e x
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  // funciolidade add click ouvinte
  element.addEventListener('click', () => {
    // toggle = realiza troca da class show
    nav.classList.toggle('show')
  })
}

// fechar/esconder menu quando clicar em um item

const links = document.querySelectorAll('#header li a')

for (const link of links) {
  link.addEventListener('click', () => {
    nav.classList.remove('show')
  })
}
const header = document.querySelector('#header')
// pegando deslocamento da altura
const navHeigth = header.offsetHeight
// Função scroll mundando header da página quando der scroll
function mudarHeaderScroll() {
  if (window.scrollY >= navHeigth) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// depoimentos carousel slider swiper
const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  breakpoints: {
    767: {
      slidesPerView: 2,
      setWrapperSize: true
    }
  }
})

// ScrollReveal: Mostrar eelemtnos quando der scroll na página
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 600,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #depoimentos header, #depoimentos .depoimentos,
  #contato .text, #contato .links
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// Função voltar para o topo
const botao = document.querySelector('.back-to-top')
function backToTop() {
  // Pegando o tamanho da janela do windows
  if (window.scrollY >= 600) {
    botao.classList.add('show')
  } else {
    botao.classList.remove('show')
  }
}
// Menu ativo coforme a seção visivel na pagina
const sections = document.querySelectorAll('main section[id]')
function activateMenu() {
  const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4

  for (const section of sections) {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    const sectionId = section.getAttribute('id')

    const checkpointStart = checkpoint >= sectionTop
    const checkpointEnd = checkpoint <= sectionTop + sectionHeight

    if (checkpointStart && checkpointEnd) {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.add('active')
    } else {
      document
        .querySelector('nav ul li a[href*=' + sectionId + ']')
        .classList.remove('active')
    }
  }
}

// Logica de scroll
window.addEventListener('scroll', () => {
  mudarHeaderScroll()
  backToTop()
  activateMenu()
})
