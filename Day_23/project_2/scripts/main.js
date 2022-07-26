const body = document.querySelector('body')

body.innerHTML = `

<div id = 'Wrapper'> 

<div id = 'wrapper2'> <div id = 'keyDisplay' ></div> <span class = 'num'> </span> </div>

<span id = 'keynumber' > </span>

</div>

`
const wrapper2 = document.querySelector('#wrapper2')

const keyDisplay = document.querySelector('#keyDisplay')

const keyNum = document.querySelector('.num')

const number = document.querySelector('span')

const keynumber = document.querySelector('#keynumber')



keyDisplay.textContent = 'Press any keyboard key'

body.addEventListener('keydown', (e) => {
 
    const {key, keyCode} = e

    keyNum.textContent = key
    keyDisplay.textContent = 'You pressed'
    keynumber.textContent = keyCode

    keyNum.style.marginLeft = '0.5rem'
    keyNum.style.color = 'green'

    keynumber.style.boxShadow = '0px 0.5px 2px 1px #82828285'
    keynumber.style.fontSize = '4rem'
    keynumber.style.padding = '0.7rem'
    keynumber.style.color = 'green'

})


body.style.height = '80vh'
body.style.display = 'grid'
body.style.placeItems = 'center'
body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'
body.style.fontWeight = '600'

wrapper2.style.display = 'flex'
wrapper2.style.fontSize = '2.5rem'
wrapper2.style.padding = '0.5rem 3rem'
wrapper2.style.marginBottom = '1.5rem'
wrapper2.style.boxShadow = '0px 0.5px 2px 1px #82828285'


