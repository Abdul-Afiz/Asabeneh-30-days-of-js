
/********************Exercise 3 - MiniProject***************************/

const body = document.body

const container = document.createElement('div');
const header = document.createElement('h1');
const header_year = document.createElement('h1');
const sub_heading = document.createElement('h2');
const date_container = document.createElement('div');

const container2 = document.createElement('div');
const lists = document.createElement('div');
const authorName = document.createElement('h1')
const icons = document.createElement('div')
const authorSection = document.createElement('div')

const img1 = document.createElement('img')
const img2 = document.createElement('img')
const img3 = document.createElement('img')

const aboutAuthor = document.createElement('p')

const img1link = document.createElement('a')
const img2link = document.createElement('a')
const img3link = document.createElement('a')

const authorContainer = document.createElement('div')

const subContainer = document.createElement('div')
const subContainer1 = document.createElement('div')
const subContainer2 = document.createElement('div')

const titleHead = document.createElement('h3')
const skillHead = document.createElement('h3')
const qualificationHead = document.createElement('h3')

const skillSet = document.createElement('div')
const skillSetHead = document.createElement('h3')
const skillSetContainer = document.createElement('div')

/***********************Attribute Section************************/

img1.setAttribute('src', './dom22img/linkedinBrands.svg')
img2.setAttribute('src', './dom22img/twitterSquare.svg')
img3.setAttribute('src', './dom22img/githubSquare.svg')

img1link.setAttribute('href', 'https://www.linkedin.com/in/asabeneh/')
img2link.setAttribute('href', 'https://twitter.com/Asabeneh')
img3link.setAttribute('href', 'https://github.com/Asabeneh')

/***********************Appending Section************************/
 body.append(container)
 body.append(container2)

 container.append(header)
 container.append(header_year)
 container.append(sub_heading)
 container.append(date_container)

container2.append(lists)
container2.append(authorName)
container2.append(icons)
container2.append(aboutAuthor)
container2.append(authorContainer)
container2.append(skillSet)

img1link.append(img1)
img2link.append(img2)
img3link.append(img3)

icons.append(img1link, img2link, img3link)

authorContainer.append(subContainer, subContainer1, subContainer2)
subContainer.append(titleHead)
subContainer1.append(skillHead)
subContainer2.append(qualificationHead)

skillSet.append(skillSetHead)
skillSet.append(skillSetContainer)
/***********************Functions************************/

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
 date_container.style.background = generateColor()
 date_container.textContent = dateFunction()
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

/***********************TextContent Section************************/

header.textContent = 'Asabeneh Yetayeh challenges in'
header_year.textContent = '2021'
sub_heading.textContent = '30DaysOfJavaScript Challenge'

authorName.textContent = 'Asabeneh Yetayeh'

aboutAuthor.textContent = 'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'

titleHead.textContent = 'Titles'
skillHead.textContent = 'Skills'
qualificationHead.textContent = 'Qualifications'
skillSetHead.textContent = 'Keywords'

/***********************Arrays of Datas************************/

const challenges = [
  {
    name: '30 Days Of Python',
    topics: [
      'Python',
      'Flask',
      'Numpy',
      'Pandas',
      'Statistics',
      'API',
      'MongoDB'
    ],
    days: 30,
    status: 'Done',
    questions: 'Above 500',
    projects: 'Two',
    interviewQns: '',
    githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
  },
  {
    name: '30 Days Of JavaScript',
    topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
    days: 30,
    status: 'Ongoing',
    questions: 'Above 500',
    projects: 'About 30',
    interviewQns: '',
    githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
  },
  {
    name: '30 Days Of HTML & CSS',
    topics: ['HTML & CSS','CSS', 'Flex', 'Grid', 'CSS Animation'],
    days: 30,
    status: 'Coming',
    questions: 'Above 500',
    projects: 'Two',
    interviewQns: '',
    githubUrl: ''
  },
  {
    name: '30 Days Of React',
    topics: [
      'React',
      'React Router',
      'Redux',
      'Context API',
      'React Hooks',
      'MERN'
    ],
    days: 30,
    status: 'Coming',
    questions: '',
    projects: '',
    interviewQns: '',
    githubUrl: ''
  },
  {
    name: '30 Days Of ReactNative',
    topics: ['ReactNative', 'Redux'],
    days: 30,
    status: 'Coming',
    questions: '',
    projects: 'Two',
    interviewQns: '',
    githubUrl: ''
  },
  {
    name: '30 Days Of Fullstack',
    topics: ['Fullstack','React', 'Redux', 'MongoDB', 'Node', 'MERN'],
    days: 30,
    status: 'Coming',
    questions: '',
    projects: '',
    interviewQns: '',
    githubUrl: ''
  },
  {
    name: '30 Days Of Data Analysis',
    topics: ['Data Analysis','Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
    days: 30,
    status: 'Coming',
    questions: '',
    projects: '',
    interviewQns: '',
    githubUrl: ''
  },
  {
    name: '30 Days Of Machine Learning',
    topics: [
      'Machine Learning',
      'Python',
      'Numpy',
      'Pandas',
      'Scikit-learn',
      'Scipy',
      'Linear Algebra',
      'Statistics',
      'Visualization'
    ],
    days: 30,
    status: 'Coming',
    questions: '',
    projects: '',
    interviewQns: '',
    githubUrl: ''
  }
]

const skills = [
  '✅ Web Development',
  '✅ Data Analysis',
  '✅ Data Visualization',
  '✅ Programming',
  '✅ Databases',
  '✅ Developing API'
]

const titles = [
  '🌱 Educator',
  '💻 Programmer',
  '🌐 Developer',
  '🔥 Motivator',
  '📔 Content Creator'
]

const qualifications = [
  '📖 MSc. Computer Science Ongoing',
  '👮 BSc. Information and Communication Eng.',
  '👮 MSc. Food Technology',
  '👮 BSc.Food Technology'
]


const keywords = [
  'HTML',
  'HTML5',
  'CSS',
  'CSS3',
  'JS',
  'JavaScript',
  'ES6',
  'Promise',
  'async await',
  'Database',
  'React',
  'React Hooks',
  'Context API',
  'React Router',
  'Web Storage',
  'localStorage',
  'sessionStorage',
  'Redux',
  'Node',
  'MongoDB',
  'SQL',
  'API',
  'DOM',
  'data science',
  'MERN',
  'Python',
  'Flask',
  'Statistics',
  'Linear Algebra',
  'Numpy',
  'Pandas',
  'Scipy',
  'Scikit-learn',
  'Visualization',
  'D3.js'
]

/***********************Data Loop************************/

for (const item of challenges) {

  const listContainer = document.createElement('div')
  const name = document.createElement('div')
  const skill = document.createElement('details')
  const status = document.createElement('div')

  name.textContent = item.name
  status.innerText = item.status

  item.topics.forEach( (item, index) => {
    const summary = document.createElement('summary')
    summary.innerText = item
    skill.append(summary)
  });

  listContainer.append(name, skill, status)
  lists.append(listContainer)


   listContainer.style.display = 'flex'
   listContainer.style.justifyContent = 'space-between'
   listContainer.style.alignItems = 'center'
   listContainer.style.background = 'red'
   listContainer.style.padding = '20px'
   listContainer.style.marginBottom = '5px'

  
  if (item.status.includes('Done')) {

    name.style.color = 'royalblue';
    name.style.textDecoration = 'underline';
    name.style.textDecorationColor = 'blue';
    listContainer.style.background = 'green'

  } else if (item.status.includes('Ongoing')) {
    
    name.style.color = 'royalblue';
    name.style.textDecoration = 'underline';
    name.style.textDecorationColor = 'blue';
    listContainer.style.background = 'yellow'

  }
}

for (const title of titles) {

  const titleList = document.createElement('div')
  titleList.append(title)  
  subContainer.append(titleList)
}

for (const skill of skills) {
  const skillList = document.createElement('div')
  skillList.append(skill)
  subContainer1.append(skillList)
}

for (const item of qualifications) {
  const itemList = document.createElement('div')
  itemList.append(item)
  subContainer2.append(itemList)
}

for (const keys of keywords) {
  const key = document.createElement('div')
  key.append('# ' + keys)
  skillSetContainer.append(key)

  key.style.marginRight = '15px'
  key.style.background = generateColor()
  key.style.padding = '6px 10px 6px 6px'
  key.style.marginTop = '6px'
  key.style.borderRadius = '1rem'

skillSetContainer.style.margin = '2rem 0 0 0'
skillSetContainer.style.display = 'flex'
skillSetContainer.style.flexWrap = 'wrap'
}

/***********************CSS Styling************************/

body.style.fontFamily = 'ubuntu'
body.style.boxSizing = 'border-box'

container.style.textAlign = 'center'

container2.style.margin = '0 auto'
container2.style.width = '60%'
container2.style.fontSize = '1em'

header.style.display = 'inline'
header.style.fontSize = '22px'

header_year.style.display = 'inline'
header_year.style.fontSize = '64px'
header_year.style.marginLeft = '4px'

sub_heading.style.fontSize = '22px'
sub_heading.style.fontWeight = 100
sub_heading.style.textDecoration = 'underline'

date_container.style.padding = '5px 20px'
date_container.style.display = 'inline'

lists.style.margin = '1rem 0'

authorName.style.margin = '0 0 0.3em 0'
authorName.style.textAlign = 'center'

img1.style.height = '40px'
img2.style.height = '40px'
img3.style.height = '40px'

img1.style.marginRight = '0.5em'
img2.style.marginRight = '0.5em'
img3.style.marginRight = '0.5em'

icons.style.display = 'flex'
icons.style.justifyContent = 'center'

aboutAuthor.style.textAlign = 'center'

authorContainer.style.display = 'flex'
authorContainer.style.justifyContent = 'space-between'

titleHead.style.marginBottom = '7px'
skillHead.style.marginBottom = '7px'
qualificationHead.style.marginBottom = '7px'

skillSetHead.style.margin = '2rem 0 0.2rem 0'

skillSetContainer.style.margin = 0
skillSetContainer.style.padding = '0 10px'