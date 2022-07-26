// const constants = [2.72, 3.14, 9.81, 37, 100]

// const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants

// console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp)

// const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']

// const [fin, est, sw, den, nor] = countries

// console.log(fin, est, sw, den, nor)

// const rectangle = {
//   width: 20,
//   height: 10,
//   area: 200,
//   perimeter: 60
// }

// const {width, height, area, perimeter} = rectangle

// console.log(width, height, area, perimeter)

// const users = [
// {
//   name:'Brook',
//   scores:75,
//   skills:['HTM', 'CSS', 'JS'],
//   age:16
// },
// {
//   name:'Alex',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'David',
//   scores:75,
//   skills:['HTM', 'CSS'],
//   age:22
// },
// {
//   name:'John',
//   scores:85,
//   skills:['HTML'],
//   age:25
// },
// {
//   name:'Sara',
//   scores:95,
//   skills:['HTM', 'CSS', 'JS'],
//   age: 26
// },
// {
//   name:'Martha',
//   scores:80,
//   skills:['HTM', 'CSS', 'JS'],
//   age:18
// },
// {
//   name:'Thomas',
//   scores:90,
//   skills:['HTM', 'CSS', 'JS'],
//   age:20
// }
// ]

// for (const {name,scores,skills,age} of users) {
//     console.log( name,scores,skills,age )
// }

// console.log(
//     users.filter(({ skills }) => skills.length < 2)
//   )
//   console.log(
//     users.filter((user) => user.skills.length < 2)
//   )

//   for (const {name, capital, languages, population}  of countries_data) {
//   console.log( name, capital, languages, population )}

// const student =['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
//  const [naMe, skill, [ , , jsScore, reactScore]] = student

// console.log(naMe, skill) 

// console.log( naMe, skill, jsScore, reactScore )

// const students = [
//     ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
//     ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
//   ]




// const convertArrayToobj = ( arr ) => {
    
//    let obj = arr.map( ([name, skill, score]) => { return {name, skill, score }} );

//     return obj

// }

// console.log( convertArrayToobj(student) )


// convertArrayToObject2 = (arr) => {
  
//    return arr.map( item => {return{name: item[0], skill: item[1], score: item[2]}})

// }

// console.log(convertArrayToObject2(students))

// const student = {
//     name: 'David',
//     age: 25,
//     skills: {
//       frontEnd: [
//         { skill: 'HTML', level: 10 },
//         { skill: 'CSS', level: 8 },
//         { skill: 'JS', level: 8 },
//         { skill: 'React', level: 9 }
//       ],
//       backEnd: [
//         { skill: 'Node',level: 7 },
//         { skill: 'GraphQL', level: 8 },
//       ],
//       dataBase:[
//         { skill: 'MongoDB', level: 7.5 },
//       ],
//       dataScience:['Python', 'R', 'D3.js']
//     }
//   }

// const newStudent = Object.assign({},student)
// newStudent.skills.frontEnd.push({skill: 'bootstrap', level: 8});
// newStudent.skills.backEnd.push({skill: 'Express', level: 9});
// newStudent.skills.dataBase.push({skill: 'SQL', level: 8})
// newStudent.skills.dataScience.push('SQL')


// console.log(newStudent)