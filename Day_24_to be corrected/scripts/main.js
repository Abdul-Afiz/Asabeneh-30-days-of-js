const body = document.querySelector('body')
const main = document.querySelector('main')
const inputElement = document.querySelector('input')
const selection = document.querySelector('select')
const btn = document.querySelector('button')
const contentContainer = document.querySelector('.flex-container')
const contentError = document.querySelector('.contentError')
const image = document.querySelector('img')
const planetname = document.querySelector('.planetname')
const planet= document.querySelector('.planet')
const planetWeight = document.querySelector('.planetWeight')
const planetValue = document.querySelector('.planetValue')

contentContainer.append(contentError)


const planets = [
    {name: 'MERCURY', imgsrc: './images/mercury.png', value: 3.7},
    {name: 'VENUS', imgsrc: './images/venus.png', value: 8.9},
    {name: 'EARTH', imgsrc: './images/earth.png', value: 9.8},
    {name: 'MOON', imgsrc: './images/moon.png', value: 1.6},
    {name: 'MARS', imgsrc: './images/mars.png', value: 3.7},
    {name: 'JUPITER', imgsrc: './images/jupiter.png', value: 2.31},
    {name: 'SATURN', imgsrc: './images/saturn.png', value: 9.0},
    {name: 'URANUS', imgsrc: './images/uranus.png', value: 8.7},
    {name: 'NEPTUNE', imgsrc: './images/neptune.png', value: 1.1},
    {name: 'PLUTO', imgsrc: './images/pluto.png', value: 0.7}
]


image.src = './images/earth.png'


const planetsloader = (item) => {
    image.src = item.imgsrc
    planetname.textContent = item.name
    planetValue.textContent = inputElement.value * item.value
}


window.addEventListener('DOMContentLoaded', () => {})


btn.addEventListener('click', () => {

value = Number(selection.value)
let index = planets[value]


inputElement.value ? contentError.innerHTML = 'mass is required' : 


planetsloader(index)

})


// index = planets[1]
// image.src = index.imgsrc












body.style.height = '80vh'
body.style.backgroundImage = 'url(./images/galaxy.gif)'
body.style.fontFamily = 'ubuntu'

main.style.display = 'grid'
main.style.placeItems = 'center'

inputElement.style.border = 'none'
inputElement.style.outline = 'none'
inputElement.style.padding = '0.5rem'

selection.style.border = 'none'
selection.style.padding = '0.45rem 1rem'
selection.style.outline = 'none'
selection.style.color = '#b0afb0'
selection.style.background = '#f9f8f9'

btn.style.background = '#6e6d72c4'
btn.style.color = '#fff'
btn.style.border = 'none'
btn.style.padding = '0.5rem'

image.style.width = '25vw'

contentContainer.style.margin = '1rem auto'
contentContainer.style.width = '60vw'
contentContainer.style.padding = '2rem'
contentContainer.style.background = '#4444445e'

contentError.style.display = 'flex'
contentError.style.justifyContent = 'center'
contentError.style.alignItems = 'center'

planet.style.textAlign = 'center'
planet.style.width = '35%'
planet.style.marginLeft = '2rem'
planet.style.fontSize = '1rem'
planet.style.color = 'white'
planet.style.padding = '1rem 3rem'
planet.style.background = '#4444445e'

planetname.style.fontWeight = 'bold'

planetWeight.style.margin = '0 0 1rem 0'

planetValue.style.margin = '0 auto'
planetValue.style.padding = '2rem 0'
planetValue.style.width = '30%'
planetValue.style.background = '#4444445e'
planetValue.style.borderRadius = '50%'
planetValue.style.fontWeight = 'bold'