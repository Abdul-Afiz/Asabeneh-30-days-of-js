
const body = document.body;

const numberHeader = document.createElement('h1')
const number2header = document.createElement('h2')
const author = document.createElement('p')
const numberDiv = document.createElement('div')

body.append(numberHeader)
body.append(number2header)
body.append(author)
body.append(numberDiv)

numberHeader.textContent = 'Number Generator'
number2header.textContent = '30DaysOfJavaScript:DOM Day 2'
author.textContent = 'Author: Asabeneh Yetayeh'

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

for (let i = 0; i <= 101; i++) {
    noList = document.createElement('div')

    isPrime(i) ? noList.style.background = 'red' : i % 2 === 0 ? noList.style.background = 'green' : noList.style.background = 'yellow'

    /**************CSS STYLING*********/

noList.textContent = i
noList.style.fontSize = '50px'
noList.style.textAlign = 'center'
noList.style.height = '80px'
noList.style.lineHeight = '80px'
noList.style.margin = '0.5rem'
noList.style.color = 'white'
numberDiv.append(noList)
}

body.style.textAlign = 'center'
body.style.fontFamily = 'sans-serif'

numberHeader.style.margin = 0

number2header.style.margin = 0
number2header.style.fontWeight = '100'
number2header.style.fontSize = '16px'
number2header.style.textDecoration = 'underline'

author.style.textDecoration = 'underline'
author.style.margin = '0 0 1rem 0'

numberDiv.style.display = 'grid'
numberDiv.style.gridTemplateColumns = 'repeat(6, 1fr)'
numberDiv.style.fontWeight = '600'

console.log(body)