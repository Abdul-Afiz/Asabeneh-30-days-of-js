
const body = document.body;

const country_header = document.createElement('h1')
const countrySubHeading = document.createElement('h2')
const totalCountry = document.createElement('h2')
const author = document.createElement('p')
const countryCountainer = document.createElement('div')

body.append(country_header)
body.append(totalCountry)
body.append(countrySubHeading)
body.append(author)
body.append(countryCountainer)

/***************LEVEL_2_COUTRY_DOM*******************/

country_header.textContent = 'WORLD COUNTRIES LIST'
totalCountry.textContent = 'Total Number of countries: 193'
countrySubHeading.textContent = '30DaysOfJavaScript:DOM Day 2'
author.textContent = 'Author: Asabeneh Yetayeh'



for (let i = 0; i < countries.length; i++) {
    countryLists = document.createElement('div')

    /**************CSS STYLING*********/

countryLists.textContent = countries[i]
countryLists.style.fontSize = '16px'
countryLists.style.border = '1px solid grey'
countryLists.style.height = '150px'
countryLists.style.width = '200px'
countryLists.style.textAlign = 'center'
countryLists.style.lineHeight = '150px'
countryLists.style.margin = '0.5rem'
countryCountainer.append(countryLists)
}


body.style.fontFamily = 'sans-serif'
body.style.textAlign = 'center'

totalCountry.style.margin = '0'
totalCountry.style.fontSize = '20px'

country_header.style.margin = 0
country_header.style.fontSize = '48px'
country_header.style.letterSpacing = '14px'

countrySubHeading.style.margin = 0
countrySubHeading.style.fontWeight = '100'
countrySubHeading.style.fontSize = '16px'
countrySubHeading.style.textDecoration = 'underline'

author.style.textDecoration = 'underline'
author.style.margin = '0 0 2rem 0'

countryCountainer.style.display = 'grid'
countryCountainer.style.gridTemplateColumns = 'repeat(6, 1fr)'
 
