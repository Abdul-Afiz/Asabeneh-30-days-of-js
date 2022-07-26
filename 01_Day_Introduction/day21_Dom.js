// const firstP = document.querySelector('p');

// const idPargraph = document.querySelector('#par-4');

// let allParagraph = document.querySelectorAll('p');

    // for (let i = 0; i < allPargraph.length; i++) {
   //   console.log( allPargraph[i] ) 
   //}

//    allParagraph[0].className = 'first-paragraph'
//    allParagraph[0].id = 'first-paragraph-id'

//    allParagraph[1].className = 'second-paragraph'
//    allParagraph[1].id = 'second-paragraph-id'

//    allParagraph[2].setAttribute('class', 'third-paragraph')
//    allParagraph[2].setAttribute('id', 'third-paragraph-id')

//    allParagraph[3].classList.add('fourth-paragraph')
//    allParagraph[3].id = 'fourth-paragraph-id'

//    console.log(allParagraph)

//    allParagraph[0].style.color = 'white'
//    allParagraph[0].style.background = 'black'
//    allParagraph[0].style.border = '1px solid red'
//    allParagraph[0].style.fontSize = '22px'

//    allParagraph[1].style.color = 'yellow'
//    allParagraph[1].style.background = 'black'
//    allParagraph[1].style.border = '2px solid blue'
//    allParagraph[1].style.fontSize = '24px'

//    allParagraph[2].style.color = 'red'
//    allParagraph[2].style.background = 'white'
//    allParagraph[2].style.border = '3px solid black'
//    allParagraph[2].style.fontSize = '26px'

//    allParagraph[3].style.color = 'green'
//    allParagraph[3].style.background = 'white'
//    allParagraph[3].style.border = '4px solid green'
//    allParagraph[3].style.fontSize = '28px'


//   allParagraph.forEach( (content, index) =>  ( index % 2 === 0 ) ? content.style.color = 'green' : content.style.color = 'red' )

  
//   allParagraph[0].className = 'first-paragraph'
//   allParagraph[0].id = 'first-paragraph-id'
//   allParagraph[0].textContent = 'this is my first paragraph'

//   allParagraph[1].className = 'second-paragraph'
//   allParagraph[1].id = 'second-paragraph-id'
//   allParagraph[1].textContent = 'this is my second paragraph'

//   allParagraph[2].setAttribute('class', 'third-paragraph')
//   allParagraph[2].setAttribute('id', 'third-paragraph-id')
//   allParagraph[2].textContent = 'this is my third paragraph'

//   allParagraph[3].classList.add('fourth-paragraph')
//   allParagraph[3].id = 'fourth-paragraph-id'
//   allParagraph[3].textContent = 'this is my fourth paragraph'

//   console.log(allParagraph)


// console.log( 2 % 2 )

//    console.log(allParagraph)

/********************Exercise 3 - MiniProject***************************/

const Wrapper = document.querySelector('.wrapper');
const header = document.querySelector('h1');
const header_year = document.querySelector('span')
const sub_heading = document.querySelector('h2')
const date_wrapper = document.querySelector('.time')
const lists = document.querySelector('ul')
const all_lists = document.querySelectorAll('li')

/***********************************************/

const generateColor = () => {

let str = '0123456789abcdef';

let color = '';

for (let i = 0; i < 6; i++) {
 let index = Math.floor(Math.random() * str.length)
 index = str[index]
 color += index
}
  return '#' + color
}

const header_year_color = setInterval(() => {
 header_year.style.color = generateColor()
 date_wrapper.style.background = generateColor()
 date_wrapper.textContent = dateFunction()
}, 1000);


const dateFunction = () => {

const date = new Date()
const month = date.toLocaleString('default', { month: 'long' })
const day = date.getDate()
const year = date.getFullYear()
const hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
const minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
const seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
10 > hours ? '0' + hours : hours;

return ` ${month} ${day}, ${year} ${hours}:${minutes}:${seconds}`

}


//const [first, second, ...third] = all_lists

/******CSS STYLING******/

Wrapper.style.fontFamily = 'Ubuntu'
Wrapper.style.display = 'grid'
Wrapper.style.placeItems = 'center'


header.style.fontSize = '22px'

header_year.style.fontSize = '56px'

sub_heading.style.fontSize = '15px'
sub_heading.style.fontWeight = 100
sub_heading.style.borderBottom = '1px solid black'

date_wrapper.style.padding = '5px 20px'

lists.style.listStyle = 'none'
lists.style.width = '40%'

all_lists.forEach( (list, index) => {

    list.style.height = '40px'
    list.style.textAlign = 'left'
    list.style.paddingLeft = '1rem' 
    list.style.marginBottom = '0.2rem'
    list.style.fontSize = '14px'
    list.style.lineHeight = '40px'
    
    index === 0 ? list.style.background = 'green' : index === 1 ? list.style.background = 'yellow' : list.style.background = 'red'

})

