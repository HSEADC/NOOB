import './index.css'
import './stylesheets/reset.scss'
import './stylesheets/index.scss'
import './stylesheets/vars.scss'
import './stylesheets/fonts.scss'
import './stylesheets/basics.scss'

document.addEventListener('DOMContentLoaded', () => {
  const image = new Image()
  image.src = jpg
  document.querySelector('.images').appendChild(image)
})
