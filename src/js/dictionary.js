import { words } from './words.js'

document.addEventListener('DOMContentLoaded', () => {
  popUp()
})

function popUp() {
  const cards = document.querySelectorAll('.O_CardDictionari')

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const overlay = document.createElement('div')
      overlay.classList.add('W_Overlay')
      document.querySelector('body').appendChild(overlay)

      const block = document.createElement('div')
      block.classList.add('O_WordCard')

      const cross = document.createElement('img')
      cross.classList.add('A_WordCardcross')

      const header = document.createElement('h3')
      header.classList.add('A_WordCardHeader')

      const description = document.createElement('p')
      description.classList.add('A_WordCardDescription')

      const image = document.createElement('img')
      image.classList.add('A_WordCardImage')

      let cardHeader = card.querySelector('h4').innerText
      console.log(cardHeader)
      words.forEach((word) => {
        if (word.header == cardHeader) {
          header.innerHTML = word.header
          description.innerHTML = word.description
          image.src = word.image
        }
      })

      block.appendChild(cross)
      block.appendChild(header)
      block.appendChild(description)
      block.appendChild(image)

      overlay.appendChild(block)

      overlay.addEventListener('click', () => {
        overlay.remove()
      })
    })
  })

  const body = document.querySelector('body')

  setInterval(() => {
    if (body.querySelector('.W_Overlay')) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = 'scroll'
    }
  }, 1000)
}
