const body = document.querySelector('body')
body.innerHTML = `
<header style = 'text-align: center; font-family: ubuntu;'>
<h1 style = ' color: green; margin: 0;'>Number Generator</h1>
<h2 style = ' font-weight:400; margin: 0;'>30DaysOfJavaScript:DOM DAY 2</h2>
<h3 style = ' margin: 0; font-weight:300;' >Author: Asabeneh Yetayeh</h3>
</header>

<div style=' margin:1rem auto; width: 55%; '>

<p style='color: red; font-size: 1rem; margin:0.3rem 1rem;'></p>

<div style=' box-sizing: border-box; display:flex; justify-content: center; align-items: center; margin-bottom: 1rem;'>
<input id='digit' style=' width: 35rem; margin-right: 0.5rem; border: 1px solid green; outline: none; padding: 0.5rem;' placeholder = 'Generate more number';>

<button id ='generate_Btn' style = ' border: none; background: green; color: white; outline: none; padding: 0.5rem 0.5rem ;'>Generate numbers</button>
</div>

<div class='content' style='display: grid; grid-template-columns: repeat(6, 1fr);'></div>

</div>

`

const Btn = document.querySelector('button')
const errorDisplay = document.querySelector('p')
const input = document.querySelector('input')
const contentDisplay = document.querySelector('.content')

const isPrime = (n) => {

    if (n < 2) {
        return false
    };

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false
        }
    }

    return true
}

const numloop = (item) => {

for (let i = 0; i <= item; i++) {
        noList = document.createElement('div')
    
        isPrime(i) ? noList.style.background = 'red' : i % 2 === 0 ? noList.style.background = 'green' : noList.style.background = 'yellow'
    
        /**************CSS STYLING*********/
    
    noList.textContent = i
    noList.style.fontSize = '50px'
    noList.style.textAlign = 'center'
    noList.style.height = '80px'
    noList.style.lineHeight = '80px'
    noList.style.margin = '0.2rem'
    noList.style.color = 'white'
    contentDisplay.append(noList)
    }
}

    //console.log( numloop(10) )

Btn.addEventListener('click', () => {

    contentDisplay.textContent = ''

    errorDisplay .textContent = ''

    const number = input.value;

    const numPattern = /^[0-9]+$/;    

    number === '' ? errorDisplay.textContent = 'Enter number value on the input field to generate numbers' : numPattern.test(number) ? numloop(number) : errorDisplay.textContent = 'input must be a number'

})

// console.log(numPattern.test('ten'))