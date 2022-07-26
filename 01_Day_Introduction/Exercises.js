// //Day 2 - Level 1
// //Exercise 1
// let challenge = '30 Days Of JavaScript'
// console.log(challenge)

// console.log(challenge.length)
// console.log(challenge.toUpperCase())
// console.log(challenge.toLowerCase())
// console.log(challenge.substr(3, 4))
// console.log(challenge.substring(3, 21))
// console.log(challenge.substr(3, 18))
// console.log(challenge.includes('Script'))
// console.log(challenge.split(' '))


// let org = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
// console.log(org.split(', '))

// console.log(challenge.replace('JavaScript', 'Python'))
// console.log(challenge.charAt(15))
// console.log(challenge.charCodeAt('J'))
// console.log(challenge.indexOf('a'))
// console.log(challenge.lastIndexOf('a'))

// let word = 'You cannot end a sentence with because because because is a conjunction'
// console.log(word.indexOf('because'))
// console.log(word.lastIndexOf('because'))
// console.log(word.search('because'))

// console.log(challenge.trim('30 Days Of Javascript'))
// console.log(challenge.startsWith('30 Days Of JavaScript'))
// console.log(challenge.endsWith('30 Days Of JavaScript'))
// console.log(challenge.match('a'))
// console.log(challenge.concat('JavaScript'))
// console.log(challenge.repeat(2))

// //Exercise 2
// console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another`)
// console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")

// let num = '10'
// console.log(typeof(num))

// let numInt = parseInt(num)
// console.log(numInt)

// let n = Number(num)
// console.log(n)

// let xy = +(num)
// console.log(xy)

// let flo = '60.81'
// console.log(typeof('flo'))

// let f = parseFloat(flo)
// console.log(f)

// let g = Number(flo)
// console.log(g)

// let h = +(flo)
// console.log(h)

// let p = 'python'
// console.log(p.includes('on'))

// let j = 'jargon'
// console.log(j.includes('on'))

// let s = 'I hope this course is not full of jargon.'
// console.log(s.includes('jargon'))

// let gen = Math.random() * (100 - 50) + 50
// console.log(gen)

// let genr = Math.random() * (100 - 50) + 50
// console.log(genr)

// let genrr = Math.random() * (255 - 0) + 0
// console.log(genrr)

// let jas = 'JavaScript'
// console.log(jas[Math.floor(Math.random() * jas.length)])

// console.log(` 1 1 1 1 1 \n
// 2 1 2 4 8 \n
// 3 1 3 9 27 \n
// 4 1 4 16 64 \n
// 5 1 5 25 125`)

// let youcan = 'You cannot end a sentence with because because because is a conjunction'
// console.log(youcan.substr(31, 23))

// let love = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
// console.log(love.search('love'))

// let because = 'You cannot end a sentence with because because because is a conjunction'
// console.log(because.match('because'))

// const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
// console.log(sentence.replace(/[^a-z0-9 ]/ig,''))

// //Day 3 Exercise 1
// let fn = 'Aweda'
// let ln  = 'Adekunle'
// const mycountry = 'Nigeria'
// let mystate = 'Kwara'
// let my_age = 200 
// let isEngaged = false
// let year = 2021

// console.log(
//     typeof(fn),
//     typeof(ln),
//     typeof(mycountry),
//     typeof(mystate),
//     typeof(my_age),
//     typeof(isEngaged),
//     typeof(year))

//     let nu = '10'
//     let nu2 = 10
//     console.log(typeof(nu) == typeof(nu2))

//     console.log(parseInt('9.8' == 10))

//     let isLightOn = true
//     let truV = 2 > 1
//     console.log(truV)
//     console.log('' == '')
//     console.log(isLightOn)

//     let isLightOff = false
//     let truF = 2 > 3
//     let is = 0 == 1 
//     console.log(truF)
//     console.log(is)
//     console.log(isLightOff)

//     console.log(4 > 3)
//     console.log(4 >= 3)
//     console.log(4 < 3)
//     console.log(4 <= 3)
//     console.log(4 == 4)
//     console.log(4 === 4)
//     console.log(4 != 4)
//     console.log(4 !== 4)
//     console.log(4 != '4')
//     console.log(4 == '4')
//     console.log(4 === '4')

//     let pt = 'python'
//     let jr = 'jargon'
//     console.log(pt.length)
//     console.log(jr.length)
//     console.log(pt == jr)

//     console.log(4 > 3 && 10 < 12)
//     console.log(4 > 3 && 10 > 12)
//     console.log(4 > 3 || 10 < 12)
//     console.log(4 > 3 || 10 > 12)
//     console.log(!(4 > 3))
//     console.log(!(4 < 3))
//     console.log(!(false))
//     console.log(!(4 > 3 && 10 < 12))
//     console.log(!(4 > 3 && 10 > 12))
//     console.log(!(4 === '4'))

//     let on = 'on'
//     console.log(pt == on)
//     console.log(jr == on)
// let yea = new Date()
// console.log(yea.getFullYear())
// let mnth = new Date()
// console.log(mnth.getMonth())
// let dt = new Date()
// console.log(dt)
// let tdt = new Date()
// console.log(tdt.getDay())
// let hr = new Date()
// console.log(hr.getHours())
// let min = new Date()
// console.log(min.getMinutes())
// let sec = new Date()
// console.log(sec.getSeconds())
// let mili = new Date()
// console.log(mili.getTime())

//Day 3 Exercise 2
//let base = rompt('Input the base')
//let height= rompt('Input height')
//let area = 0.5 * Number(base) * Number(height)
//console.log(`The area of triangle is ${area}`)

//let a = prompt('input value for a')
//let b = prompt('input value for b')
//let c = prompt('input value for c')
//let perimeter = Number(a) + Number(b) + Number(c)
//console.log(`the perimeter of the triangle is ${perimeter}`)

//let lt = prompt('input the value of your length')
//let wt = prompt('input the value of your width')
//let perOfrec = 2 * (Number(lt) + Number(wt))
//let areaOfRec = Number(lt) * Number(wt) * Number(perOfrec)
//console.log(`the area of the rectangle is ${areaOfRec}`)

//let pi = 3.14
//let rad = prompt('input the value of your radius')
//let areaOfCir = Number(pi) * Number(rad) * Number(rad)
//let cirOfCir = 2 * Number(pi) * Number(rad)
//console.log(`the area of circle is ${areaOfCir} \n the circumference of a circle is ${cirOfCir}`)

// let valOfX = prompt('input value of x')
// let valOfY = (2 * Number(valOfX)) - 2
// console.log(`the slope is ${valOfY}`)


// let y1 = prompt('enter your y1 value')
// let y2 = prompt('enter your y2 value')
// let x1 = prompt('enter your x1 value')
// let x2 = prompt('enter your x2 value')
// let mSlope = (Number(y2) - Number(y1)) / (Number(x2) - Number(x1))
// console.log(`the value of our slope is ${mSlope}`)

// console.log('valofY' == 'mSlope')

// let xVal = prompt('enter your x value')
// let yv = (Number(xVal) ** 2) + (6 * Number(xVal)) + 9
// console.log(`your answer is ${yv}`)

// let payrate = prompt('enter hours of work')
// let ratePerHour = prompt('enter rate per hour')
// let weeklyEarn = Number(payrate) * Number(ratePerHour)
// console.log(`Your weekly earning is ${weeklyEarn}`)

// let miNam = prompt('type your first name')
//  if (miNam.length > 7) {console.log('name is long')}
//  else {console.log('name is short')}

// let famNam = prompt('type your family name')
// if (miNam.length >= famNam.length) {
// console.log(`Your first name ${miNam} is longer than your family name ${miNam}`)    
// }
// else {
//     console.log(`Your family name ${famNam} is longer than your family name ${famNam}`)
// }

// let myAge = prompt('my age')
// let yourAge = prompt('your age')
// let currentAge = myAge - yourAge
// let calcAge1 = myAge - yourAge
// let calcAge2 = yourAge - myAge
// if ( myAge > yourAge ) {console.log(`i am ${calcAge1}years older than you`)
    
// } else {console.log(`you are ${calcAge2}years older than me`)   
// }
// console.log(`i am ${currentAge}years than you`) 

// const birthYr = prompt('input your year')
// const currentYr = new Date().getFullYear()
// const ag = currentYr - birthYr
// if (ag >= 18) {
//     console.log(`You are ${ag}.You are old enough to drive`)
// } else {
//    console.log(`You are ${ag}.You will be allowed to drive after ${18 - ag} years.)`)
// }

// const ent = Number(prompt("Enter number of yours you live:"))
// console.log(`You lived ${ent * 365 * 24 * 60 * 60} seconds.
// You can live for ${(100 - age) * 365 * 24 * 60 * 60} seconds more.`)

// const nd = new Date()
// const yR = nd.getFullYear()
// const mNth = nd.getMonth()
// const dT = nd.getDate()
// const hR = nd.getHours()
// const mIn = nd.getMinutes()
// const seC = nd.getSeconds()

// console.log(`${yR}-${mNth}-${dT} ${hR}:${mIn}`)
// console.log(`${dT}-${mNth}-${yR} ${hR}:${mIn}`)
// console.log(`${yR}/${mNth}/${dT} ${hR}:${mIn}`)

//Exercise Day 4
// let aGe = prompt('enter your age')
// if ( aGe>=18 ) {
//     console.log(`You are old enough to drive.`)
// } else {
//     console.log(`You are left with ${18 - aGe}years to drive.`)
// }

// let yourAge = prompt('enter your age')
// if (yourAge > 25) {
//     console.log(`you are ${yourAge - 25}years older than me.`)
// } else {
//     console.log(`i am ${25 - yourAge}years older than you.`)
// }

// let a = 4
// let b = 3
// if (a > b) {
//     console.log(`4 is greater than 3`)
// } else {
//     console.log(`3 is less to 4`)
// }

// a < b
// ? console.log(`4 is greater than 3`)
// : console.log(`3 is less to 4`)

// let even = prompt('enter your number')
// if ( even%2 === 0) {
//     console.log(`${even} is an even number`)
// } else {
//     console.log(`${even} is an odd number`)
// }

// Day 3 Level 2

// let Grade = prompt(`enter your score`)
// switch (true) {
//     case (Grade >= 90):
//     console.log(`your number is grade A`);   
//         break;
//     case (Grade >= 70):
//     console.log(`your number is grade B`);   
//         break;
//     case (Grade >= 60):
//     console.log(`your number is grade C`);   
//         break;
//     case (Grade >= 50):
//     console.log(`your number is grade D`);   
//         break;
//     case (Grade >= 0):
//     console.log(`your number is grade E`);   
//         break;
//     default:
//     console.log(`your number is not grade`);
//         break;
// }

// let checkSeason = prompt('enter the month')
// switch (true) {
//     case 'September October November'.includes(checkSeason):
//      console.log(`the season is Autumn.`);
//         break;
//         case 'December January February'.includes(checkSeason):
//      console.log(`the season is Winter.`);
//         break;
//         case 'March April May'.includes(checkSeason):
//      console.log(`the season is Spring.`);
//         break;
//         case 'June July August'.includes(checkSeason):
//      console.log(`the season is Summer.`);
//         break;
//     default:console.log(`this is not a month`)
//         break;
// }

// if('september October November'.includes(checkSeason))
//     {alert('the season is Autumn')}

//     else if ('January December February'.includes(checkSeason))
//     {alert('The season is winter')}

//     else if ('March April May'.includes(checkSeason))
//     {alert('The season is Spring')}
    
//     else if ('June July August'.includes(checkSeason))
//     {alert('The season is Summer')}

// let dAy = prompt(`What is the day today:`)
// if (`Monday Tuesday Wednesday Thursday`.includes(dAy))
//  {alert(`${dAy} is a working day`)} 
//  else if (`Friday`.includes(dAy))
//  {alert(`${dAy} T.G.I.F`)}
//  else if (`Saturday Sunday`.includes(dAy))
//  {alert(`${dAy} is a weekend`)}

// let noOfMonth = prompt('which month are we:')
// if (`January March May July August October December`.includes(noOfMonth))
// {alert(`${noOfMonth} has 31 days`)} 
// else if (`April June Septempber November`.includes(noOfMonth))
// {alert(`${noOfMonth} has 30 days`)}
// else if (`February`.includes(noOfMonth))
// {alert(`${noOfMonth} has 28 days`)}

// if (`January March May July August October December`.includes(noOfMonth))
// {alert(`${noOfMonth} has 31 days`)} 
// else if (`April June Septempber November`.includes(noOfMonth))
// {alert(`${noOfMonth} has 30 days`)}
// else if (`February`.includes(noOfMonth))
// {alert(`${noOfMonth} has 29 days`)}

// // Day 5 Exercise 1
// // const arr = Array()
// // console.log(arr)

// // const arrNo = ['one', 'two', 'three', 'four', 'five', 'six']
// // console.log(arrNo)
// // console.log(arrNo.length)

// // const arrNofirst = arrNo[0]
// // const arrNomiddle = arrNo[2]
// // const arrNolast = arrNo[5]
// // console.log(arrNofirst)
// // console.log(arrNomiddle)
// // console.log(arrNolast)

// // const mixedDataTypes = [1,'two', 'house', [1,2], false, true, 'six']
// // console.log(arrNo)
// // console.log(arrNo.length)

// // const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // console.log(itCompanies)
// // console.log(itCompanies.length)
// // const itCompaniesfirst = itCompanies[0]
// // const itCompaniesmiddle = itCompanies[3]
// // const itCompanieslast = itCompanies[6]
// // console.log(itCompaniesfirst)
// // console.log(itCompaniesmiddle)
// // console.log(itCompanieslast)

// // const itCompanies0 = itCompanies[0]
// // const itCompanies1 = itCompanies[1]
// // const itCompanies2 = itCompanies[2]
// // const itCompanies3 = itCompanies[3]
// // const itCompanies4 = itCompanies[4]
// // const itCompanies5 = itCompanies[5]
// // const itCompanies6 = itCompanies[6]

// // console.log(itCompanies0)
// // console.log(itCompanies1)
// // console.log(itCompanies2)
// // console.log(itCompanies3)
// // console.log(itCompanies4)
// // console.log(itCompanies5)
// // console.log(itCompanies6)

// // console.log(itCompanies0.toUpperCase())
// // console.log(itCompanies1.toUpperCase())
// // console.log(itCompanies2.toUpperCase())
// // console.log(itCompanies3.toUpperCase())
// // console.log(itCompanies4.toUpperCase())
// // console.log(itCompanies5.toUpperCase())
// // console.log(itCompanies6.toUpperCase())

// // console.log(itCompanies.join())

// // if (itCompanies.includes('Amazon')) {
// //     console.log('the company exist')
// // } else {
// //     console.log('The company does not exist')
// // }
// // if (itCompanies.includes('Yahoo')) {
// //     console.log('The company exist')
// // } else {
// //     console.log('The company does not exist')
// // }

// // console.log(itCompanies.sort())
// // console.log(itCompanies.reverse())

// console.log(itCompanies.slice(0,3))
// console.log(itCompanies.slice(3,6))
// console.log(itCompanies.slice(2,5))
// // itCompanies.shift()
// // itCompanies.splice(3,1)
// // itCompanies.pop()
// // itCompanies.splice(0,7)
// console.log(itCompanies)

// // const countries = ['Nigeria', 'America', 'Usr', 'British']
// // countries[2] = 'Russia'
// console.log(countries)
// console.log(webtech)

// // const web_techs = ['facebook', 'google', 'Yahoo', 'apple']
// // const couweb = countries.concat(web_techs)
// // console.log(couweb)

// let text =
//   'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// const words = text.replaceAll('.', '').replaceAll(',', '').split(' ')
// console.log(words)
// console.log(words.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// // shoppingCart.unshift('Meat')
// // shoppingCart.push('Sugar')
// // shoppingCart.pop()

// shoppingCart[2] = 'Green Tea'
// console.log(shoppingCart)

// // console.log(countries.includes('Ethiopia'))

// if (countries.includes('ETHIOPIA')) {
//     console.log('ETHIOPIA')
// }   else {
//     countries.push('ETHIOPIA')
// }
// console.log(countries)

// if (webtech.includes('Sass')) {
//     console.log(['Sass'])
// }
// else{
//    webtech.push('Sass')
// }
// console.log(webtech)

// console.log(fullStack)

// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// const ages_Sort = ages.sort()
// const agesMax = Math.max(...ages)
// // const agesMin = Math.min(...ages)
// console.log(agesMax)
// console.log(agesMin)
// console.log(ages_Sort)
// console.log(Math.max(...ages) - Math.min(...ages))
// // console.log(ages_Sort[(ages_Sort4.length - 1 )/ 2])
// // 
   
// console.log(ages_Sort.slice((ages_Sort.length / 2) - 1, (ages_Sort.length / 2) + 1))


// const rangeAll = Math.max(...ages_Sort) - Math.min(...ages_Sort)
// console.log(rangeAll)

// // const counSlice = countries.slice(0,11)
// // console.log(counSlice)

// // console.log(
// //     countries.length % 2
// //       ? countries[countries.length/2 - 1]
// //       : countries.slice(countries.length/2 - 1, countries.length/2 + 1)
// //   )

// console.log(countries.slice(0, 10))

// const counMid = countries.slice(6,8)
// console.log(counMid)

// const counMid1 = countries.slice(0,6)
// console.log(counMid1)

// const counMid2 = countries.slice(6,12)
// console.log(counMid2)

// const fruits = ['grape', 'grape','mango', 'banana', 'apple']
// console.log(fruits[0])
// console.log(fruits[(fruits.length - 1) / 2])
// console.log(fruits[(fruits.length + 1) / 2])
// console.log(fruits[fruits.length - 1])



// console.log(
//     fruits.length % 2
//    ? fruits[(fruits.length - 1) / 2]
//     : fruits.slice((fruits.length - 1) / 2, fruits.length + 2 - 1))



// //Day 6 Loops

// const countries1 = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
// ]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
// ]

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']

// // for (i = 0; i <= 10; i++){
// //     console.log(i)
// // }

// let ij = 0
// // while (ij <= 10) {
//     console.log(ij)
//     ij++
// }

// do {
//     console.log(ij)
//     ij++
// } while ( ij <= 10)

// for (ik = 10; ik >= 0; ik-- ){
//     console.log(ik)
// }

// let ik2 = 10
// while (ik2 >= 0){
//     console.log(ik2)
//     ik2--
// }

// let ik3 = 10
// do {
//     console.log(ik3)
//     ik3--
// } while(ik3 >= 0)

// let t = ['0','1','2','3','4','n']
// for (ti = 0; ti <= t.length; ti++){
//     console.log(t)
// }

// let nth = '0, j, k, l, m, n'.split(', ')
// for(i = 0; i < nth.length; i++){
//     console.log(nth[i])
// }

// for(let i = 1; i <= 7; i++){
//     console.log('#'.repeat(i))
// }

// for( i = 0; i <= 10; i++ ) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// for( i = 0; i <= 10; i++ ) {
//     console.log(`${i} ${i * i} ${i * i * i}`)
// }

// for(let i = 0; i <= 100; i++){
//        if(i % 2 !== 0){
//          continue
//   let longestWord = webTechs[0]
//   for (let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > longestWord.length){
//         longestWord = webTechs[i]
//     }
//   }console.log(longestWord)

//   let webTechsArray = []
//   for(let i = 0; i < webTechs.length; i++){
// webTechsArray.push([webTechs[i], webTechs[i].length])
//   }console.log(webTechsArray)

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   let mern = []
//  for(let i = 0; i < mernStack.length; i++){
//      mern.push(mernStack[i].slice(0,1))
//  }console.log(mern.toString())


//  for(let i = 0; i < webTechs.length; i++){
//     console.log(webTechs[i]) 
//  }

//  let fruit = ['banana','orange','mango','lemon']
//  for(let i = fruit.length; i >= 0; i--){
//      console.log(fruit[i])
//  }
//        }
//        console.log(i)
//     }

//     for(let i = 0; i <= 100; i++){
//         if(i % 2 == 0){
//           continue
//         }
//         console.log(i)
//     }
    
// let nth = '0, j, k, l, m, n'.split(', ')
// for(i = 0; i < nth.length; i++){
//     console.log(nth[i])
// }

// for(let i = 1; i <= 7; i++){
//     console.log('#'
//   let longestWord = webTechs[0]
//   for (let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > longestWord.length){
//         longestWord = webTechs[i]
//     }
//   }console.log(longestWord)

//   let webTechsArray = []
//   for(let i = 0; i < webTechs.length; i++){
// webTechsArray.push([webTechs[i], webTechs[i].length])
//   }console.log(webTechsArray)

// const mernStack = ['MongoDB', 'Express', 'React', 'Node']
//   let mern = []
//  for(let i = 0; i < mernStack.length; i++){
//      mern.push(mernStack[i].slice(0,1))
//  }console.log(mern.toString())


//  for(let i = 0; i < webTechs.length; i++){
//     console.log(webTechs[i]) 
//  }

//  let fruit = ['banana','orange','mango','lemon']
//  for(let i = fruit.length; i >= 0; i--){
//      console.log(fruit[i])
//  }.repeat(i))
// }

// for( i = 0; i <= 10; i++ ) {
//     console.log(`${i} * ${i} = ${i * i}`)
// }

// for( i = 0; i <= 10; i++ ) {
//     console.log(`${i} ${i * i} ${i * i * i}`)
// }

// //even
// for(let n = 0; n <= 100; n++){
//        if(n % 2 !== 0){
//          continue
//        }
//        console.log(n)
//     }

    // for(let i = 0; i <= 100; i++){
    //     if(i % 2 == 0){
    //       continue
    //     }
    //     console.log(i)
    // }

// prime
// for (let i=0; i<=100; i++){
//     if(i > 1, i){
//         continue


// let sum = 0
// for(let i = 0; i <= 100; i++){
//     sum = sum+i
// }console.log(`The sum of all numbers from 0 to 100 is ${sum}`)

// let add = 0
// for(i = 0; i <=100; i++){
//     if ( i % 2 !==0){
//         continue
//     }
//     add = add+i
// } console.log(add)

// let add1 = 0
// for(i = 0; i <=100; i++){
//     if ( i % 2 == 0){
//         continue
//     }
//     add1 = add1+i
// } console.log(add1)

// const even_odd = Array(add , add1)
// console.log(even_odd)
// console.log(`The sum of all evens from 0 to 100 is ${add}. And the sum of all odds from 0 to 100 is ${add1}.
// `)

// let random_ = []
// for(let i =0; random_.length<5; i++){
//     let n = Math.floor(Math.random()*10)
//     if(n!==random_.length){
//         random_.push(n)
//     }
      
// }console.log(random_)

// let unique = Math.random().toString(36).substring(2,8)
// console.log(unique)
// let hexnumber = (Math.random()*1000000* 0xfffff).toString(16).substring(0,6)
// console.log(`#${hexnumber}`)

// let r = Math.floor(Math.random()*255)
// let g_ = Math.floor(Math.random()*255)
// let b = Math.floor(Math.random()*255)

// console.log(`rgb(${r}, ${g_}, ${b})`)

// let country_a =[]
// const country = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
// console.log(c_c)
// console.log(c_c.length)

// let countriesLength = []
// for(let i = 0; i < country.length; i++){
//     countriesLength.push(country[i].length)
//     }
//     console.log(countriesLength)

// let countryArrayOfArray = []
// for(let i = 0; i < country.length; i++){
//     countryArrayOfArray.push([country[i], country[i].slice(0,3).toUpperCase(), country[i].length])
// } 
// console.table(countryArrayOfArray)

// let countryWithLand = []
// for (let i = 0; i < country.length; i++){
//     if (country[i].includes('land')){
//         countryWithLand.push(country[i])
//     }
// }console.log(countryWithLand)

// let countryEndWith_ia = []
// for(let i = 0; i < country.length; i++){
//     if (country[i].endsWith('ia')){
//         countryEndWith_ia.push(country[i])
//     }
// }console.log(countryEndWith_ia)

// let countryBigNum = []
// for (let i = 0; i < country.length; i++){
//     if (country[i].length > length){
//         length = country[i].length;
//         countryBigNum = country[i]
//     }
// }console.log(countryBigNum)

// let countriesWith5no = []
// for (let i = 0; i < country.length; i++){
//     if (country[i].length === 5){
//         countriesWith5no.push(country[i])
//     }
// }console.log(countriesWith5no)

const webTechs = [
    'Html',
    'Css',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

//   let longestWord = webTechs[0]
//   for (let i = 0; i < webTechs.length; i++){
//     if(webTechs[i].length > longestWord.length){
//         longestWord = webTechs[i]
//     }
//   }console.log(longestWord)

//   let webTechsArray = []
//   for(let i = 0; i < webTechs.length; i++){
// webTechsArray.push([webTechs[i], webTechs[i].length])
//   }console.log(webTechsArray)

// const mernStac = ['MongoDB', 'Express', 'React', 'Node']
//   let mern = []
//  for(let i = 0; i < mernStac.length; i++){
//      (mern += mernStac[i][0])
//  }console.log(mern)


//  for(let i = 0; i < webTechs.length; i++){
//     console.log(webTechs[i]) 
//  }

//  let fruit = ['banana','orange','mango','lemon']
//  for(let i = fruit.length; i >= 0; i--){
//      console.log(fruit[i])
//  }

//  const fullStack = [
//     ['HTML', 'CSS', 'JS', 'React'],
//     ['Node', 'Express', 'MongoDB']
//   ]

// for(let i = 0; i < fullStack.length; i++){
//     for(let j = 0; j < fullStack[i].length; j++){
//         console.log(fullStack[i][j])
//     }
// }

// let fullStack2 = 'HTML, CSS, JS, React, Node, Express, MongoDB'.split(' ')
// let fullstack = []
// for (let i = 0; i < fullStack2.length; i++){
//     (fullstack += fullStack2[i][0])
// }console.log(fullstack)


//Day 6 Loop Exercise 3

const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

  const mernStack = ['MongoDB', 'Express', 'React', 'Node']
  
//   let sortedCountries = countries.sort()
//   console.log(sortedCountries)

//   let webTechSorted = webTechs.sort()
//   console.log(webTechs)

//   let mernSorted = mernStack.sort()
//   console.log(mernStack)

//   let landContainer = []
//   for (let i = 0; i < countries.length; i++){
//       if (countries[i].includes('land')){
//           landContainer.push(countries[i])
//       }
//   }console.log(landContainer)

// let firstCountry = countries[0]
// for (let i = 0; i < countries.length; i++){
//     if (countries[i].length > firstCountry.length){
//         firstCountry = countries[i] 
//     }
// }console.log(firstCountry)

// let countriesWith4character = []
// for (let i = 0; i < countries.length; i++){
//     if (countries[i].length === 4){
//         countriesWith4character.push(countries[i])
//     }
// }console.log(countriesWith4character)

let twoWord = []
for (let i = 0; i < countries.length; i++) {
    if(countries[i].split(' ').length >= 2){
        twoWord.push(countries[i])
    }}console.log(twoWord)

// const reversedCountries = countries.reverse()
// for(let i=0; i< reversedCountries.length; i++){
//     reversedCountries[i] = reversedCountries[i].toUpperCase()}console.log(reversedCountries)




///////////////////////////////////////////////////
// FUNCTION
//Function Day 7

// function fullName() {
//     let firstName = 'Jimoh'
//     let lastName = 'Afeez'
//     let spacer = ' '
//     let full_Name = firstName + spacer + lastName
//     console.log(full_Name)
// } fullName() 

// function fullName(firstName, lastName) {
//     let full_name = firstName + ' ' + lastName
//     return full_name
// }
//  console.log(fullName('Jimoh', 'Afeez')) 

// function addNumbers(a, b) {
//  let sum = a + b
//  return sum
// }
// console.log(addNumbers(3, 6))

// function areaOfRectangle(a, b) {
//  let area = a * b
//  return area
// }
// console.log(areaOfRectangle(2, 4))

// function perimeterOfRectangle(a, b) {
//     let perimeter = 2 * (a + b)
//     return perimeter
//    }
//    console.log(perimeterOfRectangle(2, 4))

// function volumeOfRectPrism(a, b, c) {
//     let volume = a * b * c
//     return volume
//    }
//    console.log(volumeOfRectPrism(2, 4, 2))

// function areaOfCircle(r) {
//     let areaOfC = Math.PI * r * r
//     return areaOfC
// }
// console.log(areaOfCircle(2))

// function circumOfCircle(r) {
//     let coc = 2 * Math.PI * r 
//     return coc
// }
// console.log(circumOfCircle(4))

// function density(a, b) {
//     let den = a / b
//     return den
// }
// console.log(density(4, 2))

// function speed(a, b) {
//  let totalSpeed = a / b 
//  return totalSpeed
// }
// console.log(speed(5000, 4))


// const weight = (a, b) => a * b
// console.log(weight(2, 5.03))

// const convertCelciusToFahrenheit = (a) => (a * (9/5)) + 32
// console.log(convertCelciusToFahrenheit(40))

const bmi = (a, b) => {
  let bodyMassIndex = a / (b * b)
  if (bodyMassIndex < 18.5) {
    console.log(`Underweight`)
  } else if (bodyMassIndex <= 24.9) {
    console.log(`Normal weight`)
  } else if (bodyMassIndex <= 29.9) {
    console.log(`Overweight`)
  } else if (bodyMassIndex >= 30) {
    console.log(`Obese`)
  } else{ 
  }
}
   bmi(1000, 4)

const checkSeason = (month) => {
  if ('december january february'.includes(month)) {
    return `the season is Winter.`
  } else if ('march april may'.includes(month)) {
    return `the season is Spring.`
  } else if ('june july august'.includes(month)) {
    return `the season is Summer.`
  } else if ('september october november'.includes(month)) {
    return `the season is Autumn.`
  } else {
    return `this is not a month`
  }
}
console.log(checkSeason('january'))


//Exercise 2

// const solveLinEquation = (a, b, c) => (a * x) + (b * y) + c == 0 
// console.log(solveLinEquation(2, 4, 3))

// const solveLinEquation = (a, b, c) => (a * x) + (b * y) + c == 0 
// console.log(solveLinEquation(2, 4, 3))

const printArray = (arr) => {
 for(const item of arr) {
    console.log(item)   
 }
}
printArray(webTechs)

const showDateTime = () => {
  const date = new Date()
  const day = date.getDate()
  const month = date.getMonth() + 1
  const year = date.getFullYear()
  const minute = date.getMinutes()
  const hour = date.getHours()
  console.log(`${day}/${month}/${year} ${hour}:${minute}`)
}
showDateTime()

const swapValues = (x, y) => `${y}, ${x}`
console.log(swapValues(6, 9))
 
const reverseArray = (arr) => {
  let array = []
for (let i = arr.length - 1; i >= 0; i--){
  array.push(arr[i])
 }return array
}
console.log(reverseArray(webTechs))

// const capitalizedArray = (arr) => {
//   let array = []
// for (let i = 0; i < arr.length; i++){
//   array.push(arr[i].toUpperCase())
//  }return array
// }
// console.log(capitalizedArray(mernStack))

// const addItem = (item) =>{
//   mernStack.push(item)
//   return mernStack
// } 
// console.log(addItem('linguistic'))

// const removeItem = (item1, item2) =>{
//   mernStack.splice(item1, item2)
//   return mernStack
// } 
// console.log(removeItem(0, 1))

// const sumOfNumbers = (numb) => {
//   let sum = 0
// for(let i = 0; i <= numb; i++){
//     sum = sum+i
// }
//  return sum
// }
// console.log(sumOfNumbers(8))

// const sumOfEven = (numb) => {
//   let sum = 0
// for(let i = 0; i <= numb; i+=2){
//     sum +=i
// }
//  return sum
// }
// console.log(sumOfEven(10))

// const sumOfOdd = (numb) => {
//   let sum = 0
// for(let i = 1; i <= numb; i+=2){
//     sum = sum+i
// }
//  return sum
// }

// console.log(sumOfOdd(8))




// const evenOnly = (numb) => {
// let evenNo = []
// for(let i = 0; i <= numb; i+=2){
//   evenNo.push(i)
// }
//  return evenNo
// }

// const oddOnly = (numb) => {
// let oddNo = []
// for(let i = 1; i <= numb; i+=2){
//   oddNo.push(i)
// }
//  return oddNo
// }

// const evensAndOdds = (num) => {
//   let odd = oddOnly(num)
//   let even = evenOnly(num)
//   console.log(`The number of odds are ${odd.length}.\nThe number of evens are ${even.length}.`)
// } 
// evensAndOdds(100)
 
// function sumNo () {
//   let sums = 0
//   for (let i = 0; i < arguments.length; i++) {
//   sums += arguments[i]
//   }
//   return sums
// } 
// console.log(sumNo(8,9))

// function findMax (...max) {
//   let maximum = max[0];
//   for (let i = 0; i < max.length; i++) {
//     if (maximum < max[i]) {
//       maximum = max[i]
//     }
//   }return maximum
// }
 
// console.log(findMax(2, 10, 6))

// const randomUserIp = () => {
//   let a = (Math.floor(Math.random() * 256) + '.' + Math.floor(Math.random() * 255 + 1) + '.' + Math.floor(Math.random() * 255 + 1) + '.' + Math.floor(Math.random() * 255 + 1)) 
//   return a
// }
// console.log(randomUserIp());

// const randoMacAddress = () => {
//   let a = (Math.floor(Math.random() * 26) + '.' + Math.floor(Math.random() * 25 + 1) + '.' + Math.floor(Math.random() * 25 + 1) + '.' + Math.floor(Math.random() * 55 + 1)) 
//   return a
// }
// console.log(randoMacAddress());


// const randomHexaNumberGenerator = () => {
//   let hexNo = '0123456789ABCDEF'
//   return hexNo[Math.floor(Math.random() * hexNo.length)]
// }
// console.log(randomHexaNumberGenerator())

// const userIdGeneratedByUser = () => {
//   const length = 7
//   const ids = 1

//   const chars = '01234567890abcdefghijklmnopqrstuvwxyz'

//   return Array(ids).fill(0).map(() => {
//     let id = ''
//     for (let i = 0; i < length; i++) {
//       id += chars[Math.floor(Math.random() * chars.length)]
//     }
//     return id
//   })
// }
// console.log(userIdGeneratedByUser());

//Level 3

// const rgbColorGen = () => {
//   const r = Math.floor(Math.random() * 255)
//   const g = Math.floor(Math.random() * 255)
//   const b = Math.floor(Math.random() * 255)
//   return `rgb(${r},${g},${b})`
// } 
// console.log(rgbColorGen());

// const arrayOfHexaColors = () => {
//  let HexArray = Array(3).fill().map(hexarr => Math.floor(Math.random() *  25))
//  return HexArray
// }
// console.log(arrayOfHexaColors());

// const arrayOfRgbColors = () => {
//   let RgbArray = Array(3).fill().map(hexarr => Math.floor(Math.random() *  256))
//   return RgbArray
//  }
//  console.log(arrayOfRgbColors());

// const factorial = (n) => {
//   let value = 1
//   for (let i = n; i > 0 ; i--) {
//     value *= i;
//   }return value
// } 
// console.log(factorial(2));

const ade = ['agbeke','alake','abeke','ajoke','abebi']

const shuffledArray = (arr) => {
  let shuffle = []
  const elements = arr.length
  for (let i = 0; i < elements; i++) {
    const index = Math.floor(Math.random() * arr.length);
    const removed = arr.splice(index, 1)
    shuffle = shuffle.concat(removed)
  }
  return shuffle
}

console.log(shuffledArray(ade));


///////////////////////////////////////////////////
// OBJECT

// const dog = {
//   name: 'bingo',
//   legs: 4,
//   color: 'black and white',
//   age: '1 years',
//   bark: 'woof woof',
// }
// dog.breed = 'asian'
// dog.getDogInfo = function() {
// return `Dog name is ${this.name}, it has ${this.legs} leg\n it's color is ${this.color} and ${this.age} old, it bark like ${this.bark}. It is an ${this.breed}.`
// }
// console.log(dog);

//Level 2

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
// console.log(users);

// Find the person who has many skills in the users object.
// console.log(
//   Object.entries(users).sort((a, b) => b[1].skills.length - a[1].skills.length)[0]
// )

//Count logged in users
  // console.log(
  //   Object.values(users)
  //     .filter(user => user.isLoggedIn === true)
  // )
  

//users having greater than equal to 50 points from the following object.
// console.log(
//   Object.values(users)
//     .filter(user => user.points >= 50).length
// )

// console.log(Object.values(users).filter(user => user.skills.includes('MongoDB', 'Express', 'React', 'Node')));



// const newUse = Object.assign({}, users)
// newUse.Afeez = {
//     email: 'afeez.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
//   console.log(newUse);

// const newUse = {
//   ...users,
//   Afeez: {
//     email: 'afeez.com',
//     skills: ['HTML', 'CSS', 'JavaScript'],
//     age: 20,
//     isLoggedIn: false,
//     points: 40
//   }
// }
// console.log(newUse);

// console.log(Object.keys(users));

// console.log(Object.values(users));

// const personAccount = {
//   firstName: 'Abdul',
//   lastName: 'Afeez',
//   incomes: [20_000, 10_000, 15_000, 25_000],
//   expenses: [2000, 1000, 5000, 2000],
//   totalIncome: function () {
//    return this.incomes.reduce((acc, cur) => acc + cur)
//   },

//   totalExpense: function () {
//     return this.expenses.reduce((a, b) => a + b)
//    },

//    accountInfo: function () {
//     return `This account belongs to Mr ${this.firstName}-${this.lastName}. 
// Total income = #${this.totalIncome()}, Total expenses = #${this.totalExpense()}`
// },

//  addIncome: function (amount) {
//    this.incomes.push(amount)
//  },
 
//  addExpense: function (amount) {
//   this.expenses.push(amount)
// },

// acctBalance: function () {
//   return this.totalIncome() - this.totalExpense()
// },

// }

// console.log(personAccount.totalExpense());

// console.log(personAccount.totalIncome());

// personAccount.addExpense(10000)
// personAccount.addIncome(30000)

// console.log(personAccount.acctBalance());

const country = [
  {
    name: 'Afghanistan',
    capital: 'Kabul',
    languages: ['Pashto', 'Uzbek', 'Turkmen'],
    population: 27657145,
    flag: 'https://restcountries.eu/data/afg.svg',
    currency: 'Afghan afghani'
  },
  {
    name: 'Åland Islands',
    capital: 'Mariehamn',
    languages: ['Swedish'],
    population: 28875,
    flag: 'https://restcountries.eu/data/ala.svg',
    currency: 'Euro'
  },
  {
    name: 'Albania',
    capital: 'Tirana',
    languages: ['Albanian'],
    population: 2886026,
    flag: 'https://restcountries.eu/data/alb.svg',
    currency: 'Albanian lek'
  },
  {
    name: 'Algeria',
    capital: 'Algiers',
    languages: ['Arabic'],
    population: 40400000,
    flag: 'https://restcountries.eu/data/dza.svg',
    currency: 'Algerian dinar'
  },
  {
    name: 'American Samoa',
    capital: 'Pago Pago',
    languages: ['English', 'Samoan'],
    population: 57100,
    flag: 'https://restcountries.eu/data/asm.svg',
    currency: 'United State Dollar'
  },
  {
    name: 'Andorra',
    capital: 'Andorra la Vella',
    languages: ['Catalan'],
    population: 78014,
    flag: 'https://restcountries.eu/data/and.svg',
    currency: 'Euro'
  },
  {
    name: 'Angola',
    capital: 'Luanda',
    languages: ['Portuguese'],
    population: 25868000,
    flag: 'https://restcountries.eu/data/ago.svg',
    currency: 'Angolan kwanza'
  },
  {
    name: 'Anguilla',
    capital: 'The Valley',
    languages: ['English'],
    population: 13452,
    flag: 'https://restcountries.eu/data/aia.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Antarctica',
    capital: '',
    languages: ['English', 'Russian'],
    population: 1000,
    flag: 'https://restcountries.eu/data/ata.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Antigua and Barbuda',
    capital: "Saint John's",
    languages: ['English'],
    population: 86295,
    flag: 'https://restcountries.eu/data/atg.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Argentina',
    capital: 'Buenos Aires',
    languages: ['Spanish', 'Guaraní'],
    population: 43590400,
    flag: 'https://restcountries.eu/data/arg.svg',
    currency: 'Argentine peso'
  },
  {
    name: 'Armenia',
    capital: 'Yerevan',
    languages: ['Armenian', 'Russian'],
    population: 2994400,
    flag: 'https://restcountries.eu/data/arm.svg',
    currency: 'Armenian dram'
  },
  {
    name: 'Aruba',
    capital: 'Oranjestad',
    languages: ['Dutch', '(Eastern) Punjabi'],
    population: 107394,
    flag: 'https://restcountries.eu/data/abw.svg',
    currency: 'Aruban florin'
  },
  {
    name: 'Australia',
    capital: 'Canberra',
    languages: ['English'],
    population: 24117360,
    flag: 'https://restcountries.eu/data/aus.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Austria',
    capital: 'Vienna',
    languages: ['German'],
    population: 8725931,
    flag: 'https://restcountries.eu/data/aut.svg',
    currency: 'Euro'
  },
  {
    name: 'Azerbaijan',
    capital: 'Baku',
    languages: ['Azerbaijani'],
    population: 9730500,
    flag: 'https://restcountries.eu/data/aze.svg',
    currency: 'Azerbaijani manat'
  },
  {
    name: 'Bahamas',
    capital: 'Nassau',
    languages: ['English'],
    population: 378040,
    flag: 'https://restcountries.eu/data/bhs.svg',
    currency: 'Bahamian dollar'
  },
  {
    name: 'Bahrain',
    capital: 'Manama',
    languages: ['Arabic'],
    population: 1404900,
    flag: 'https://restcountries.eu/data/bhr.svg',
    currency: 'Bahraini dinar'
  },
  {
    name: 'Bangladesh',
    capital: 'Dhaka',
    languages: ['Bengali'],
    population: 161006790,
    flag: 'https://restcountries.eu/data/bgd.svg',
    currency: 'Bangladeshi taka'
  },
  {
    name: 'Barbados',
    capital: 'Bridgetown',
    languages: ['English'],
    population: 285000,
    flag: 'https://restcountries.eu/data/brb.svg',
    currency: 'Barbadian dollar'
  },
  {
    name: 'Belarus',
    capital: 'Minsk',
    languages: ['Belarusian', 'Russian'],
    population: 9498700,
    flag: 'https://restcountries.eu/data/blr.svg',
    currency: 'New Belarusian ruble'
  },
  {
    name: 'Belgium',
    capital: 'Brussels',
    languages: ['Dutch', 'French', 'German'],
    population: 11319511,
    flag: 'https://restcountries.eu/data/bel.svg',
    currency: 'Euro'
  },
  {
    name: 'Belize',
    capital: 'Belmopan',
    languages: ['English', 'Spanish'],
    population: 370300,
    flag: 'https://restcountries.eu/data/blz.svg',
    currency: 'Belize dollar'
  },
  {
    name: 'Benin',
    capital: 'Porto-Novo',
    languages: ['French'],
    population: 10653654,
    flag: 'https://restcountries.eu/data/ben.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Bermuda',
    capital: 'Hamilton',
    languages: ['English'],
    population: 61954,
    flag: 'https://restcountries.eu/data/bmu.svg',
    currency: 'Bermudian dollar'
  },
  {
    name: 'Bhutan',
    capital: 'Thimphu',
    languages: ['Dzongkha'],
    population: 775620,
    flag: 'https://restcountries.eu/data/btn.svg',
    currency: 'Bhutanese ngultrum'
  },
  {
    name: 'Bolivia (Plurinational State of)',
    capital: 'Sucre',
    languages: ['Spanish', 'Aymara', 'Quechua'],
    population: 10985059,
    flag: 'https://restcountries.eu/data/bol.svg',
    currency: 'Bolivian boliviano'
  },
  {
    name: 'Bonaire, Sint Eustatius and Saba',
    capital: 'Kralendijk',
    languages: ['Dutch'],
    population: 17408,
    flag: 'https://restcountries.eu/data/bes.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Bosnia and Herzegovina',
    capital: 'Sarajevo',
    languages: ['Bosnian', 'Croatian', 'Serbian'],
    population: 3531159,
    flag: 'https://restcountries.eu/data/bih.svg',
    currency: 'Bosnia and Herzegovina convertible mark'
  },
  {
    name: 'Botswana',
    capital: 'Gaborone',
    languages: ['English', 'Tswana'],
    population: 2141206,
    flag: 'https://restcountries.eu/data/bwa.svg',
    currency: 'Botswana pula'
  },
  {
    name: 'Bouvet Island',
    capital: '',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 0,
    flag: 'https://restcountries.eu/data/bvt.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Brazil',
    capital: 'Brasília',
    languages: ['Portuguese'],
    population: 206135893,
    flag: 'https://restcountries.eu/data/bra.svg',
    currency: 'Brazilian real'
  },
  {
    name: 'British Indian Ocean Territory',
    capital: 'Diego Garcia',
    languages: ['English'],
    population: 3000,
    flag: 'https://restcountries.eu/data/iot.svg',
    currency: 'United States dollar'
  },
  {
    name: 'United States Minor Outlying Islands',
    capital: '',
    languages: ['English'],
    population: 300,
    flag: 'https://restcountries.eu/data/umi.svg',
    currency: 'United States Dollar'
  },
  {
    name: 'Virgin Islands (British)',
    capital: 'Road Town',
    languages: ['English'],
    population: 28514,
    flag: 'https://restcountries.eu/data/vgb.svg',
    currency: '[D]'
  },
  {
    name: 'Virgin Islands (U.S.)',
    capital: 'Charlotte Amalie',
    languages: ['English'],
    population: 114743,
    flag: 'https://restcountries.eu/data/vir.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Brunei Darussalam',
    capital: 'Bandar Seri Begawan',
    languages: ['Malay'],
    population: 411900,
    flag: 'https://restcountries.eu/data/brn.svg',
    currency: 'Brunei dollar'
  },
  {
    name: 'Bulgaria',
    capital: 'Sofia',
    languages: ['Bulgarian'],
    population: 7153784,
    flag: 'https://restcountries.eu/data/bgr.svg',
    currency: 'Bulgarian lev'
  },
  {
    name: 'Burkina Faso',
    capital: 'Ouagadougou',
    languages: ['French', 'Fula'],
    population: 19034397,
    flag: 'https://restcountries.eu/data/bfa.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Burundi',
    capital: 'Bujumbura',
    languages: ['French', 'Kirundi'],
    population: 10114505,
    flag: 'https://restcountries.eu/data/bdi.svg',
    currency: 'Burundian franc'
  },
  {
    name: 'Cambodia',
    capital: 'Phnom Penh',
    languages: ['Khmer'],
    population: 15626444,
    flag: 'https://restcountries.eu/data/khm.svg',
    currency: 'Cambodian riel'
  },
  {
    name: 'Cameroon',
    capital: 'Yaoundé',
    languages: ['English', 'French'],
    population: 22709892,
    flag: 'https://restcountries.eu/data/cmr.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Canada',
    capital: 'Ottawa',
    languages: ['English', 'French'],
    population: 36155487,
    flag: 'https://restcountries.eu/data/can.svg',
    currency: 'Canadian dollar'
  },
  {
    name: 'Cabo Verde',
    capital: 'Praia',
    languages: ['Portuguese'],
    population: 531239,
    flag: 'https://restcountries.eu/data/cpv.svg',
    currency: 'Cape Verdean escudo'
  },
  {
    name: 'Cayman Islands',
    capital: 'George Town',
    languages: ['English'],
    population: 58238,
    flag: 'https://restcountries.eu/data/cym.svg',
    currency: 'Cayman Islands dollar'
  },
  {
    name: 'Central African Republic',
    capital: 'Bangui',
    languages: ['French', 'Sango'],
    population: 4998000,
    flag: 'https://restcountries.eu/data/caf.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Chad',
    capital: "N'Djamena",
    languages: ['French', 'Arabic'],
    population: 14497000,
    flag: 'https://restcountries.eu/data/tcd.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Chile',
    capital: 'Santiago',
    languages: ['Spanish'],
    population: 18191900,
    flag: 'https://restcountries.eu/data/chl.svg',
    currency: 'Chilean peso'
  },
  {
    name: 'China',
    capital: 'Beijing',
    languages: ['Chinese'],
    population: 1377422166,
    flag: 'https://restcountries.eu/data/chn.svg',
    currency: 'Chinese yuan'
  },
  {
    name: 'Christmas Island',
    capital: 'Flying Fish Cove',
    languages: ['English'],
    population: 2072,
    flag: 'https://restcountries.eu/data/cxr.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Cocos (Keeling) Islands',
    capital: 'West Island',
    languages: ['English'],
    population: 550,
    flag: 'https://restcountries.eu/data/cck.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Colombia',
    capital: 'Bogotá',
    languages: ['Spanish'],
    population: 48759958,
    flag: 'https://restcountries.eu/data/col.svg',
    currency: 'Colombian peso'
  },
  {
    name: 'Comoros',
    capital: 'Moroni',
    languages: ['Arabic', 'French'],
    population: 806153,
    flag: 'https://restcountries.eu/data/com.svg',
    currency: 'Comorian franc'
  },
  {
    name: 'Congo',
    capital: 'Brazzaville',
    languages: ['French', 'Lingala'],
    population: 4741000,
    flag: 'https://restcountries.eu/data/cog.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Congo (Democratic Republic of the)',
    capital: 'Kinshasa',
    languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
    population: 85026000,
    flag: 'https://restcountries.eu/data/cod.svg',
    currency: 'Congolese franc'
  },
  {
    name: 'Cook Islands',
    capital: 'Avarua',
    languages: ['English'],
    population: 18100,
    flag: 'https://restcountries.eu/data/cok.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Costa Rica',
    capital: 'San José',
    languages: ['Spanish'],
    population: 4890379,
    flag: 'https://restcountries.eu/data/cri.svg',
    currency: 'Costa Rican colón'
  },
  {
    name: 'Croatia',
    capital: 'Zagreb',
    languages: ['Croatian'],
    population: 4190669,
    flag: 'https://restcountries.eu/data/hrv.svg',
    currency: 'Croatian kuna'
  },
  {
    name: 'Cuba',
    capital: 'Havana',
    languages: ['Spanish'],
    population: 11239004,
    flag: 'https://restcountries.eu/data/cub.svg',
    currency: 'Cuban convertible peso'
  },
  {
    name: 'Curaçao',
    capital: 'Willemstad',
    languages: ['Dutch', '(Eastern) Punjabi', 'English'],
    population: 154843,
    flag: 'https://restcountries.eu/data/cuw.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Cyprus',
    capital: 'Nicosia',
    languages: ['Greek (modern)', 'Turkish', 'Armenian'],
    population: 847000,
    flag: 'https://restcountries.eu/data/cyp.svg',
    currency: 'Euro'
  },
  {
    name: 'Czech Republic',
    capital: 'Prague',
    languages: ['Czech', 'Slovak'],
    population: 10558524,
    flag: 'https://restcountries.eu/data/cze.svg',
    currency: 'Czech koruna'
  },
  {
    name: 'Denmark',
    capital: 'Copenhagen',
    languages: ['Danish'],
    population: 5717014,
    flag: 'https://restcountries.eu/data/dnk.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Djibouti',
    capital: 'Djibouti',
    languages: ['French', 'Arabic'],
    population: 900000,
    flag: 'https://restcountries.eu/data/dji.svg',
    currency: 'Djiboutian franc'
  },
  {
    name: 'Dominica',
    capital: 'Roseau',
    languages: ['English'],
    population: 71293,
    flag: 'https://restcountries.eu/data/dma.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Dominican Republic',
    capital: 'Santo Domingo',
    languages: ['Spanish'],
    population: 10075045,
    flag: 'https://restcountries.eu/data/dom.svg',
    currency: 'Dominican peso'
  },
  {
    name: 'Ecuador',
    capital: 'Quito',
    languages: ['Spanish'],
    population: 16545799,
    flag: 'https://restcountries.eu/data/ecu.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Egypt',
    capital: 'Cairo',
    languages: ['Arabic'],
    population: 91290000,
    flag: 'https://restcountries.eu/data/egy.svg',
    currency: 'Egyptian pound'
  },
  {
    name: 'El Salvador',
    capital: 'San Salvador',
    languages: ['Spanish'],
    population: 6520675,
    flag: 'https://restcountries.eu/data/slv.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Equatorial Guinea',
    capital: 'Malabo',
    languages: ['Spanish', 'French'],
    population: 1222442,
    flag: 'https://restcountries.eu/data/gnq.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Eritrea',
    capital: 'Asmara',
    languages: ['Tigrinya', 'Arabic', 'English'],
    population: 5352000,
    flag: 'https://restcountries.eu/data/eri.svg',
    currency: 'Eritrean nakfa'
  },
  {
    name: 'Estonia',
    capital: 'Tallinn',
    languages: ['Estonian'],
    population: 1315944,
    flag: 'https://restcountries.eu/data/est.svg',
    currency: 'Euro'
  },
  {
    name: 'Ethiopia',
    capital: 'Addis Ababa',
    languages: ['Amharic'],
    population: 92206005,
    flag: 'https://restcountries.eu/data/eth.svg',
    currency: 'Ethiopian birr'
  },
  {
    name: 'Falkland Islands (Malvinas)',
    capital: 'Stanley',
    languages: ['English'],
    population: 2563,
    flag: 'https://restcountries.eu/data/flk.svg',
    currency: 'Falkland Islands pound'
  },
  {
    name: 'Faroe Islands',
    capital: 'Tórshavn',
    languages: ['Faroese'],
    population: 49376,
    flag: 'https://restcountries.eu/data/fro.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Fiji',
    capital: 'Suva',
    languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
    population: 867000,
    flag: 'https://restcountries.eu/data/fji.svg',
    currency: 'Fijian dollar'
  },
  {
    name: 'Finland',
    capital: 'Helsinki',
    languages: ['Finnish', 'Swedish'],
    population: 5491817,
    flag: 'https://restcountries.eu/data/fin.svg',
    currency: 'Euro'
  },
  {
    name: 'France',
    capital: 'Paris',
    languages: ['French'],
    population: 66710000,
    flag: 'https://restcountries.eu/data/fra.svg',
    currency: 'Euro'
  },
  {
    name: 'French Guiana',
    capital: 'Cayenne',
    languages: ['French'],
    population: 254541,
    flag: 'https://restcountries.eu/data/guf.svg',
    currency: 'Euro'
  },
  {
    name: 'French Polynesia',
    capital: 'Papeetē',
    languages: ['French'],
    population: 271800,
    flag: 'https://restcountries.eu/data/pyf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'French Southern Territories',
    capital: 'Port-aux-Français',
    languages: ['French'],
    population: 140,
    flag: 'https://restcountries.eu/data/atf.svg',
    currency: 'Euro'
  },
  {
    name: 'Gabon',
    capital: 'Libreville',
    languages: ['French'],
    population: 1802278,
    flag: 'https://restcountries.eu/data/gab.svg',
    currency: 'Central African CFA franc'
  },
  {
    name: 'Gambia',
    capital: 'Banjul',
    languages: ['English'],
    population: 1882450,
    flag: 'https://restcountries.eu/data/gmb.svg',
    currency: 'Gambian dalasi'
  },
  {
    name: 'Georgia',
    capital: 'Tbilisi',
    languages: ['Georgian'],
    population: 3720400,
    flag: 'https://restcountries.eu/data/geo.svg',
    currency: 'Georgian Lari'
  },
  {
    name: 'Germany',
    capital: 'Berlin',
    languages: ['German'],
    population: 81770900,
    flag: 'https://restcountries.eu/data/deu.svg',
    currency: 'Euro'
  },
  {
    name: 'Ghana',
    capital: 'Accra',
    languages: ['English'],
    population: 27670174,
    flag: 'https://restcountries.eu/data/gha.svg',
    currency: 'Ghanaian cedi'
  },
  {
    name: 'Gibraltar',
    capital: 'Gibraltar',
    languages: ['English'],
    population: 33140,
    flag: 'https://restcountries.eu/data/gib.svg',
    currency: 'Gibraltar pound'
  },
  {
    name: 'Greece',
    capital: 'Athens',
    languages: ['Greek (modern)'],
    population: 10858018,
    flag: 'https://restcountries.eu/data/grc.svg',
    currency: 'Euro'
  },
  {
    name: 'Greenland',
    capital: 'Nuuk',
    languages: ['Kalaallisut'],
    population: 55847,
    flag: 'https://restcountries.eu/data/grl.svg',
    currency: 'Danish krone'
  },
  {
    name: 'Grenada',
    capital: "St. George's",
    languages: ['English'],
    population: 103328,
    flag: 'https://restcountries.eu/data/grd.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Guadeloupe',
    capital: 'Basse-Terre',
    languages: ['French'],
    population: 400132,
    flag: 'https://restcountries.eu/data/glp.svg',
    currency: 'Euro'
  },
  {
    name: 'Guam',
    capital: 'Hagåtña',
    languages: ['English', 'Chamorro', 'Spanish'],
    population: 184200,
    flag: 'https://restcountries.eu/data/gum.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Guatemala',
    capital: 'Guatemala City',
    languages: ['Spanish'],
    population: 16176133,
    flag: 'https://restcountries.eu/data/gtm.svg',
    currency: 'Guatemalan quetzal'
  },
  {
    name: 'Guernsey',
    capital: 'St. Peter Port',
    languages: ['English', 'French'],
    population: 62999,
    flag: 'https://restcountries.eu/data/ggy.svg',
    currency: 'British pound'
  },
  {
    name: 'Guinea',
    capital: 'Conakry',
    languages: ['French', 'Fula'],
    population: 12947000,
    flag: 'https://restcountries.eu/data/gin.svg',
    currency: 'Guinean franc'
  },
  {
    name: 'Guinea-Bissau',
    capital: 'Bissau',
    languages: ['Portuguese'],
    population: 1547777,
    flag: 'https://restcountries.eu/data/gnb.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Guyana',
    capital: 'Georgetown',
    languages: ['English'],
    population: 746900,
    flag: 'https://restcountries.eu/data/guy.svg',
    currency: 'Guyanese dollar'
  },
  {
    name: 'Haiti',
    capital: 'Port-au-Prince',
    languages: ['French', 'Haitian'],
    population: 11078033,
    flag: 'https://restcountries.eu/data/hti.svg',
    currency: 'Haitian gourde'
  },
  {
    name: 'Heard Island and McDonald Islands',
    capital: '',
    languages: ['English'],
    population: 0,
    flag: 'https://restcountries.eu/data/hmd.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Holy See',
    capital: 'Rome',
    languages: ['Latin', 'Italian', 'French', 'German'],
    population: 451,
    flag: 'https://restcountries.eu/data/vat.svg',
    currency: 'Euro'
  },
  {
    name: 'Honduras',
    capital: 'Tegucigalpa',
    languages: ['Spanish'],
    population: 8576532,
    flag: 'https://restcountries.eu/data/hnd.svg',
    currency: 'Honduran lempira'
  },
  {
    name: 'Hong Kong',
    capital: 'City of Victoria',
    languages: ['English', 'Chinese'],
    population: 7324300,
    flag: 'https://restcountries.eu/data/hkg.svg',
    currency: 'Hong Kong dollar'
  },
  {
    name: 'Hungary',
    capital: 'Budapest',
    languages: ['Hungarian'],
    population: 9823000,
    flag: 'https://restcountries.eu/data/hun.svg',
    currency: 'Hungarian forint'
  },
  {
    name: 'Iceland',
    capital: 'Reykjavík',
    languages: ['Icelandic'],
    population: 334300,
    flag: 'https://restcountries.eu/data/isl.svg',
    currency: 'Icelandic króna'
  },
  {
    name: 'India',
    capital: 'New Delhi',
    languages: ['Hindi', 'English'],
    population: 1295210000,
    flag: 'https://restcountries.eu/data/ind.svg',
    currency: 'Indian rupee'
  },
  {
    name: 'Indonesia',
    capital: 'Jakarta',
    languages: ['Indonesian'],
    population: 258705000,
    flag: 'https://restcountries.eu/data/idn.svg',
    currency: 'Indonesian rupiah'
  },
  {
    name: "Côte d'Ivoire",
    capital: 'Yamoussoukro',
    languages: ['French'],
    population: 22671331,
    flag: 'https://restcountries.eu/data/civ.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Iran (Islamic Republic of)',
    capital: 'Tehran',
    languages: ['Persian (Farsi)'],
    population: 79369900,
    flag: 'https://restcountries.eu/data/irn.svg',
    currency: 'Iranian rial'
  },
  {
    name: 'Iraq',
    capital: 'Baghdad',
    languages: ['Arabic', 'Kurdish'],
    population: 37883543,
    flag: 'https://restcountries.eu/data/irq.svg',
    currency: 'Iraqi dinar'
  },
  {
    name: 'Ireland',
    capital: 'Dublin',
    languages: ['Irish', 'English'],
    population: 6378000,
    flag: 'https://restcountries.eu/data/irl.svg',
    currency: 'Euro'
  },
  {
    name: 'Isle of Man',
    capital: 'Douglas',
    languages: ['English', 'Manx'],
    population: 84497,
    flag: 'https://restcountries.eu/data/imn.svg',
    currency: 'British pound'
  },
  {
    name: 'Israel',
    capital: 'Jerusalem',
    languages: ['Hebrew (modern)', 'Arabic'],
    population: 8527400,
    flag: 'https://restcountries.eu/data/isr.svg',
    currency: 'Israeli new shekel'
  },
  {
    name: 'Italy',
    capital: 'Rome',
    languages: ['Italian'],
    population: 60665551,
    flag: 'https://restcountries.eu/data/ita.svg',
    currency: 'Euro'
  },
  {
    name: 'Jamaica',
    capital: 'Kingston',
    languages: ['English'],
    population: 2723246,
    flag: 'https://restcountries.eu/data/jam.svg',
    currency: 'Jamaican dollar'
  },
  {
    name: 'Japan',
    capital: 'Tokyo',
    languages: ['Japanese'],
    population: 126960000,
    flag: 'https://restcountries.eu/data/jpn.svg',
    currency: 'Japanese yen'
  },
  {
    name: 'Jersey',
    capital: 'Saint Helier',
    languages: ['English', 'French'],
    population: 100800,
    flag: 'https://restcountries.eu/data/jey.svg',
    currency: 'British pound'
  },
  {
    name: 'Jordan',
    capital: 'Amman',
    languages: ['Arabic'],
    population: 9531712,
    flag: 'https://restcountries.eu/data/jor.svg',
    currency: 'Jordanian dinar'
  },
  {
    name: 'Kazakhstan',
    capital: 'Astana',
    languages: ['Kazakh', 'Russian'],
    population: 17753200,
    flag: 'https://restcountries.eu/data/kaz.svg',
    currency: 'Kazakhstani tenge'
  },
  {
    name: 'Kenya',
    capital: 'Nairobi',
    languages: ['English', 'Swahili'],
    population: 47251000,
    flag: 'https://restcountries.eu/data/ken.svg',
    currency: 'Kenyan shilling'
  },
  {
    name: 'Kiribati',
    capital: 'South Tarawa',
    languages: ['English'],
    population: 113400,
    flag: 'https://restcountries.eu/data/kir.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Kuwait',
    capital: 'Kuwait City',
    languages: ['Arabic'],
    population: 4183658,
    flag: 'https://restcountries.eu/data/kwt.svg',
    currency: 'Kuwaiti dinar'
  },
  {
    name: 'Kyrgyzstan',
    capital: 'Bishkek',
    languages: ['Kyrgyz', 'Russian'],
    population: 6047800,
    flag: 'https://restcountries.eu/data/kgz.svg',
    currency: 'Kyrgyzstani som'
  },
  {
    name: "Lao People's Democratic Republic",
    capital: 'Vientiane',
    languages: ['Lao'],
    population: 6492400,
    flag: 'https://restcountries.eu/data/lao.svg',
    currency: 'Lao kip'
  },
  {
    name: 'Latvia',
    capital: 'Riga',
    languages: ['Latvian'],
    population: 1961600,
    flag: 'https://restcountries.eu/data/lva.svg',
    currency: 'Euro'
  },
  {
    name: 'Lebanon',
    capital: 'Beirut',
    languages: ['Arabic', 'French'],
    population: 5988000,
    flag: 'https://restcountries.eu/data/lbn.svg',
    currency: 'Lebanese pound'
  },
  {
    name: 'Lesotho',
    capital: 'Maseru',
    languages: ['English', 'Southern Sotho'],
    population: 1894194,
    flag: 'https://restcountries.eu/data/lso.svg',
    currency: 'Lesotho loti'
  },
  {
    name: 'Liberia',
    capital: 'Monrovia',
    languages: ['English'],
    population: 4615000,
    flag: 'https://restcountries.eu/data/lbr.svg',
    currency: 'Liberian dollar'
  },
  {
    name: 'Libya',
    capital: 'Tripoli',
    languages: ['Arabic'],
    population: 6385000,
    flag: 'https://restcountries.eu/data/lby.svg',
    currency: 'Libyan dinar'
  },
  {
    name: 'Liechtenstein',
    capital: 'Vaduz',
    languages: ['German'],
    population: 37623,
    flag: 'https://restcountries.eu/data/lie.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Lithuania',
    capital: 'Vilnius',
    languages: ['Lithuanian'],
    population: 2872294,
    flag: 'https://restcountries.eu/data/ltu.svg',
    currency: 'Euro'
  },
  {
    name: 'Luxembourg',
    capital: 'Luxembourg',
    languages: ['French', 'German', 'Luxembourgish'],
    population: 576200,
    flag: 'https://restcountries.eu/data/lux.svg',
    currency: 'Euro'
  },
  {
    name: 'Macao',
    capital: '',
    languages: ['Chinese', 'Portuguese'],
    population: 649100,
    flag: 'https://restcountries.eu/data/mac.svg',
    currency: 'Macanese pataca'
  },
  {
    name: 'Macedonia (the former Yugoslav Republic of)',
    capital: 'Skopje',
    languages: ['Macedonian'],
    population: 2058539,
    flag: 'https://restcountries.eu/data/mkd.svg',
    currency: 'Macedonian denar'
  },
  {
    name: 'Madagascar',
    capital: 'Antananarivo',
    languages: ['French', 'Malagasy'],
    population: 22434363,
    flag: 'https://restcountries.eu/data/mdg.svg',
    currency: 'Malagasy ariary'
  },
  {
    name: 'Malawi',
    capital: 'Lilongwe',
    languages: ['English', 'Chichewa'],
    population: 16832910,
    flag: 'https://restcountries.eu/data/mwi.svg',
    currency: 'Malawian kwacha'
  },
  {
    name: 'Malaysia',
    capital: 'Kuala Lumpur',
    languages: ['Malaysian'],
    population: 31405416,
    flag: 'https://restcountries.eu/data/mys.svg',
    currency: 'Malaysian ringgit'
  },
  {
    name: 'Maldives',
    capital: 'Malé',
    languages: ['Divehi'],
    population: 344023,
    flag: 'https://restcountries.eu/data/mdv.svg',
    currency: 'Maldivian rufiyaa'
  },
  {
    name: 'Mali',
    capital: 'Bamako',
    languages: ['French'],
    population: 18135000,
    flag: 'https://restcountries.eu/data/mli.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Malta',
    capital: 'Valletta',
    languages: ['Maltese', 'English'],
    population: 425384,
    flag: 'https://restcountries.eu/data/mlt.svg',
    currency: 'Euro'
  },
  {
    name: 'Marshall Islands',
    capital: 'Majuro',
    languages: ['English', 'Marshallese'],
    population: 54880,
    flag: 'https://restcountries.eu/data/mhl.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Martinique',
    capital: 'Fort-de-France',
    languages: ['French'],
    population: 378243,
    flag: 'https://restcountries.eu/data/mtq.svg',
    currency: 'Euro'
  },
  {
    name: 'Mauritania',
    capital: 'Nouakchott',
    languages: ['Arabic'],
    population: 3718678,
    flag: 'https://restcountries.eu/data/mrt.svg',
    currency: 'Mauritanian ouguiya'
  },
  {
    name: 'Mauritius',
    capital: 'Port Louis',
    languages: ['English'],
    population: 1262879,
    flag: 'https://restcountries.eu/data/mus.svg',
    currency: 'Mauritian rupee'
  },
  {
    name: 'Mayotte',
    capital: 'Mamoudzou',
    languages: ['French'],
    population: 226915,
    flag: 'https://restcountries.eu/data/myt.svg',
    currency: 'Euro'
  },
  {
    name: 'Mexico',
    capital: 'Mexico City',
    languages: ['Spanish'],
    population: 122273473,
    flag: 'https://restcountries.eu/data/mex.svg',
    currency: 'Mexican peso'
  },
  {
    name: 'Micronesia (Federated States of)',
    capital: 'Palikir',
    languages: ['English'],
    population: 102800,
    flag: 'https://restcountries.eu/data/fsm.svg',
    currency: '[D]'
  },
  {
    name: 'Moldova (Republic of)',
    capital: 'Chișinău',
    languages: ['Romanian'],
    population: 3553100,
    flag: 'https://restcountries.eu/data/mda.svg',
    currency: 'Moldovan leu'
  },
  {
    name: 'Monaco',
    capital: 'Monaco',
    languages: ['French'],
    population: 38400,
    flag: 'https://restcountries.eu/data/mco.svg',
    currency: 'Euro'
  },
  {
    name: 'Mongolia',
    capital: 'Ulan Bator',
    languages: ['Mongolian'],
    population: 3093100,
    flag: 'https://restcountries.eu/data/mng.svg',
    currency: 'Mongolian tögrög'
  },
  {
    name: 'Montenegro',
    capital: 'Podgorica',
    languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
    population: 621810,
    flag: 'https://restcountries.eu/data/mne.svg',
    currency: 'Euro'
  },
  {
    name: 'Montserrat',
    capital: 'Plymouth',
    languages: ['English'],
    population: 4922,
    flag: 'https://restcountries.eu/data/msr.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Morocco',
    capital: 'Rabat',
    languages: ['Arabic'],
    population: 33337529,
    flag: 'https://restcountries.eu/data/mar.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Mozambique',
    capital: 'Maputo',
    languages: ['Portuguese'],
    population: 26423700,
    flag: 'https://restcountries.eu/data/moz.svg',
    currency: 'Mozambican metical'
  },
  {
    name: 'Myanmar',
    capital: 'Naypyidaw',
    languages: ['Burmese'],
    population: 51419420,
    flag: 'https://restcountries.eu/data/mmr.svg',
    currency: 'Burmese kyat'
  },
  {
    name: 'Namibia',
    capital: 'Windhoek',
    languages: ['English', 'Afrikaans'],
    population: 2324388,
    flag: 'https://restcountries.eu/data/nam.svg',
    currency: 'Namibian dollar'
  },
  {
    name: 'Nauru',
    capital: 'Yaren',
    languages: ['English', 'Nauruan'],
    population: 10084,
    flag: 'https://restcountries.eu/data/nru.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Nepal',
    capital: 'Kathmandu',
    languages: ['Nepali'],
    population: 28431500,
    flag: 'https://restcountries.eu/data/npl.svg',
    currency: 'Nepalese rupee'
  },
  {
    name: 'Netherlands',
    capital: 'Amsterdam',
    languages: ['Dutch'],
    population: 17019800,
    flag: 'https://restcountries.eu/data/nld.svg',
    currency: 'Euro'
  },
  {
    name: 'New Caledonia',
    capital: 'Nouméa',
    languages: ['French'],
    population: 268767,
    flag: 'https://restcountries.eu/data/ncl.svg',
    currency: 'CFP franc'
  },
  {
    name: 'New Zealand',
    capital: 'Wellington',
    languages: ['English', 'Māori'],
    population: 4697854,
    flag: 'https://restcountries.eu/data/nzl.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Nicaragua',
    capital: 'Managua',
    languages: ['Spanish'],
    population: 6262703,
    flag: 'https://restcountries.eu/data/nic.svg',
    currency: 'Nicaraguan córdoba'
  },
  {
    name: 'Niger',
    capital: 'Niamey',
    languages: ['French'],
    population: 20715000,
    flag: 'https://restcountries.eu/data/ner.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Nigeria',
    capital: 'Abuja',
    languages: ['English'],
    population: 186988000,
    flag: 'https://restcountries.eu/data/nga.svg',
    currency: 'Nigerian naira'
  },
  {
    name: 'Niue',
    capital: 'Alofi',
    languages: ['English'],
    population: 1470,
    flag: 'https://restcountries.eu/data/niu.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Norfolk Island',
    capital: 'Kingston',
    languages: ['English'],
    population: 2302,
    flag: 'https://restcountries.eu/data/nfk.svg',
    currency: 'Australian dollar'
  },
  {
    name: "Korea (Democratic People's Republic of)",
    capital: 'Pyongyang',
    languages: ['Korean'],
    population: 25281000,
    flag: 'https://restcountries.eu/data/prk.svg',
    currency: 'North Korean won'
  },
  {
    name: 'Northern Mariana Islands',
    capital: 'Saipan',
    languages: ['English', 'Chamorro'],
    population: 56940,
    flag: 'https://restcountries.eu/data/mnp.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Norway',
    capital: 'Oslo',
    languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
    population: 5223256,
    flag: 'https://restcountries.eu/data/nor.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Oman',
    capital: 'Muscat',
    languages: ['Arabic'],
    population: 4420133,
    flag: 'https://restcountries.eu/data/omn.svg',
    currency: 'Omani rial'
  },
  {
    name: 'Pakistan',
    capital: 'Islamabad',
    languages: ['English', 'Urdu'],
    population: 194125062,
    flag: 'https://restcountries.eu/data/pak.svg',
    currency: 'Pakistani rupee'
  },
  {
    name: 'Palau',
    capital: 'Ngerulmud',
    languages: ['English'],
    population: 17950,
    flag: 'https://restcountries.eu/data/plw.svg',
    currency: '[E]'
  },
  {
    name: 'Palestine, State of',
    capital: 'Ramallah',
    languages: ['Arabic'],
    population: 4682467,
    flag: 'https://restcountries.eu/data/pse.svg',
    currency: 'Israeli new sheqel'
  },
  {
    name: 'Panama',
    capital: 'Panama City',
    languages: ['Spanish'],
    population: 3814672,
    flag: 'https://restcountries.eu/data/pan.svg',
    currency: 'Panamanian balboa'
  },
  {
    name: 'Papua New Guinea',
    capital: 'Port Moresby',
    languages: ['English'],
    population: 8083700,
    flag: 'https://restcountries.eu/data/png.svg',
    currency: 'Papua New Guinean kina'
  },
  {
    name: 'Paraguay',
    capital: 'Asunción',
    languages: ['Spanish', 'Guaraní'],
    population: 6854536,
    flag: 'https://restcountries.eu/data/pry.svg',
    currency: 'Paraguayan guaraní'
  },
  {
    name: 'Peru',
    capital: 'Lima',
    languages: ['Spanish'],
    population: 31488700,
    flag: 'https://restcountries.eu/data/per.svg',
    currency: 'Peruvian sol'
  },
  {
    name: 'Philippines',
    capital: 'Manila',
    languages: ['English'],
    population: 103279800,
    flag: 'https://restcountries.eu/data/phl.svg',
    currency: 'Philippine peso'
  },
  {
    name: 'Pitcairn',
    capital: 'Adamstown',
    languages: ['English'],
    population: 56,
    flag: 'https://restcountries.eu/data/pcn.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Poland',
    capital: 'Warsaw',
    languages: ['Polish'],
    population: 38437239,
    flag: 'https://restcountries.eu/data/pol.svg',
    currency: 'Polish złoty'
  },
  {
    name: 'Portugal',
    capital: 'Lisbon',
    languages: ['Portuguese'],
    population: 10374822,
    flag: 'https://restcountries.eu/data/prt.svg',
    currency: 'Euro'
  },
  {
    name: 'Puerto Rico',
    capital: 'San Juan',
    languages: ['Spanish', 'English'],
    population: 3474182,
    flag: 'https://restcountries.eu/data/pri.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Qatar',
    capital: 'Doha',
    languages: ['Arabic'],
    population: 2587564,
    flag: 'https://restcountries.eu/data/qat.svg',
    currency: 'Qatari riyal'
  },
  {
    name: 'Republic of Kosovo',
    capital: 'Pristina',
    languages: ['Albanian', 'Serbian'],
    population: 1733842,
    flag: 'https://restcountries.eu/data/kos.svg',
    currency: 'Euro'
  },
  {
    name: 'Réunion',
    capital: 'Saint-Denis',
    languages: ['French'],
    population: 840974,
    flag: 'https://restcountries.eu/data/reu.svg',
    currency: 'Euro'
  },
  {
    name: 'Romania',
    capital: 'Bucharest',
    languages: ['Romanian'],
    population: 19861408,
    flag: 'https://restcountries.eu/data/rou.svg',
    currency: 'Romanian leu'
  },
  {
    name: 'Russian Federation',
    capital: 'Moscow',
    languages: ['Russian'],
    population: 146599183,
    flag: 'https://restcountries.eu/data/rus.svg',
    currency: 'Russian ruble'
  },
  {
    name: 'Rwanda',
    capital: 'Kigali',
    languages: ['Kinyarwanda', 'English', 'French'],
    population: 11553188,
    flag: 'https://restcountries.eu/data/rwa.svg',
    currency: 'Rwandan franc'
  },
  {
    name: 'Saint Barthélemy',
    capital: 'Gustavia',
    languages: ['French'],
    population: 9417,
    flag: 'https://restcountries.eu/data/blm.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Helena, Ascension and Tristan da Cunha',
    capital: 'Jamestown',
    languages: ['English'],
    population: 4255,
    flag: 'https://restcountries.eu/data/shn.svg',
    currency: 'Saint Helena pound'
  },
  {
    name: 'Saint Kitts and Nevis',
    capital: 'Basseterre',
    languages: ['English'],
    population: 46204,
    flag: 'https://restcountries.eu/data/kna.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Lucia',
    capital: 'Castries',
    languages: ['English'],
    population: 186000,
    flag: 'https://restcountries.eu/data/lca.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Saint Martin (French part)',
    capital: 'Marigot',
    languages: ['English', 'French', 'Dutch'],
    population: 36979,
    flag: 'https://restcountries.eu/data/maf.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Pierre and Miquelon',
    capital: 'Saint-Pierre',
    languages: ['French'],
    population: 6069,
    flag: 'https://restcountries.eu/data/spm.svg',
    currency: 'Euro'
  },
  {
    name: 'Saint Vincent and the Grenadines',
    capital: 'Kingstown',
    languages: ['English'],
    population: 109991,
    flag: 'https://restcountries.eu/data/vct.svg',
    currency: 'East Caribbean dollar'
  },
  {
    name: 'Samoa',
    capital: 'Apia',
    languages: ['Samoan', 'English'],
    population: 194899,
    flag: 'https://restcountries.eu/data/wsm.svg',
    currency: 'Samoan tālā'
  },
  {
    name: 'San Marino',
    capital: 'City of San Marino',
    languages: ['Italian'],
    population: 33005,
    flag: 'https://restcountries.eu/data/smr.svg',
    currency: 'Euro'
  },
  {
    name: 'Sao Tome and Principe',
    capital: 'São Tomé',
    languages: ['Portuguese'],
    population: 187356,
    flag: 'https://restcountries.eu/data/stp.svg',
    currency: 'São Tomé and Príncipe dobra'
  },
  {
    name: 'Saudi Arabia',
    capital: 'Riyadh',
    languages: ['Arabic'],
    population: 32248200,
    flag: 'https://restcountries.eu/data/sau.svg',
    currency: 'Saudi riyal'
  },
  {
    name: 'Senegal',
    capital: 'Dakar',
    languages: ['French'],
    population: 14799859,
    flag: 'https://restcountries.eu/data/sen.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Serbia',
    capital: 'Belgrade',
    languages: ['Serbian'],
    population: 7076372,
    flag: 'https://restcountries.eu/data/srb.svg',
    currency: 'Serbian dinar'
  },
  {
    name: 'Seychelles',
    capital: 'Victoria',
    languages: ['French', 'English'],
    population: 91400,
    flag: 'https://restcountries.eu/data/syc.svg',
    currency: 'Seychellois rupee'
  },
  {
    name: 'Sierra Leone',
    capital: 'Freetown',
    languages: ['English'],
    population: 7075641,
    flag: 'https://restcountries.eu/data/sle.svg',
    currency: 'Sierra Leonean leone'
  },
  {
    name: 'Singapore',
    capital: 'Singapore',
    languages: ['English', 'Malay', 'Tamil', 'Chinese'],
    population: 5535000,
    flag: 'https://restcountries.eu/data/sgp.svg',
    currency: 'Brunei dollar'
  },
  {
    name: 'Sint Maarten (Dutch part)',
    capital: 'Philipsburg',
    languages: ['Dutch', 'English'],
    population: 38247,
    flag: 'https://restcountries.eu/data/sxm.svg',
    currency: 'Netherlands Antillean guilder'
  },
  {
    name: 'Slovakia',
    capital: 'Bratislava',
    languages: ['Slovak'],
    population: 5426252,
    flag: 'https://restcountries.eu/data/svk.svg',
    currency: 'Euro'
  },
  {
    name: 'Slovenia',
    capital: 'Ljubljana',
    languages: ['Slovene'],
    population: 2064188,
    flag: 'https://restcountries.eu/data/svn.svg',
    currency: 'Euro'
  },
  {
    name: 'Solomon Islands',
    capital: 'Honiara',
    languages: ['English'],
    population: 642000,
    flag: 'https://restcountries.eu/data/slb.svg',
    currency: 'Solomon Islands dollar'
  },
  {
    name: 'Somalia',
    capital: 'Mogadishu',
    languages: ['Somali', 'Arabic'],
    population: 11079000,
    flag: 'https://restcountries.eu/data/som.svg',
    currency: 'Somali shilling'
  },
  {
    name: 'South Africa',
    capital: 'Pretoria',
    languages: [
      'Afrikaans',
      'English',
      'Southern Ndebele',
      'Southern Sotho',
      'Swati',
      'Tswana',
      'Tsonga',
      'Venda',
      'Xhosa',
      'Zulu'
    ],
    population: 55653654,
    flag: 'https://restcountries.eu/data/zaf.svg',
    currency: 'South African rand'
  },
  {
    name: 'South Georgia and the South Sandwich Islands',
    capital: 'King Edward Point',
    languages: ['English'],
    population: 30,
    flag: 'https://restcountries.eu/data/sgs.svg',
    currency: 'British pound'
  },
  {
    name: 'Korea (Republic of)',
    capital: 'Seoul',
    languages: ['Korean'],
    population: 50801405,
    flag: 'https://restcountries.eu/data/kor.svg',
    currency: 'South Korean won'
  },
  {
    name: 'South Sudan',
    capital: 'Juba',
    languages: ['English'],
    population: 12131000,
    flag: 'https://restcountries.eu/data/ssd.svg',
    currency: 'South Sudanese pound'
  },
  {
    name: 'Spain',
    capital: 'Madrid',
    languages: ['Spanish'],
    population: 46438422,
    flag: 'https://restcountries.eu/data/esp.svg',
    currency: 'Euro'
  },
  {
    name: 'Sri Lanka',
    capital: 'Colombo',
    languages: ['Sinhalese', 'Tamil'],
    population: 20966000,
    flag: 'https://restcountries.eu/data/lka.svg',
    currency: 'Sri Lankan rupee'
  },
  {
    name: 'Sudan',
    capital: 'Khartoum',
    languages: ['Arabic', 'English'],
    population: 39598700,
    flag: 'https://restcountries.eu/data/sdn.svg',
    currency: 'Sudanese pound'
  },
  {
    name: 'Suriname',
    capital: 'Paramaribo',
    languages: ['Dutch'],
    population: 541638,
    flag: 'https://restcountries.eu/data/sur.svg',
    currency: 'Surinamese dollar'
  },
  {
    name: 'Svalbard and Jan Mayen',
    capital: 'Longyearbyen',
    languages: ['Norwegian'],
    population: 2562,
    flag: 'https://restcountries.eu/data/sjm.svg',
    currency: 'Norwegian krone'
  },
  {
    name: 'Swaziland',
    capital: 'Lobamba',
    languages: ['English', 'Swati'],
    population: 1132657,
    flag: 'https://restcountries.eu/data/swz.svg',
    currency: 'Swazi lilangeni'
  },
  {
    name: 'Sweden',
    capital: 'Stockholm',
    languages: ['Swedish'],
    population: 9894888,
    flag: 'https://restcountries.eu/data/swe.svg',
    currency: 'Swedish krona'
  },
  {
    name: 'Switzerland',
    capital: 'Bern',
    languages: ['German', 'French', 'Italian'],
    population: 8341600,
    flag: 'https://restcountries.eu/data/che.svg',
    currency: 'Swiss franc'
  },
  {
    name: 'Syrian Arab Republic',
    capital: 'Damascus',
    languages: ['Arabic'],
    population: 18564000,
    flag: 'https://restcountries.eu/data/syr.svg',
    currency: 'Syrian pound'
  },
  {
    name: 'Taiwan',
    capital: 'Taipei',
    languages: ['Chinese'],
    population: 23503349,
    flag: 'https://restcountries.eu/data/twn.svg',
    currency: 'New Taiwan dollar'
  },
  {
    name: 'Tajikistan',
    capital: 'Dushanbe',
    languages: ['Tajik', 'Russian'],
    population: 8593600,
    flag: 'https://restcountries.eu/data/tjk.svg',
    currency: 'Tajikistani somoni'
  },
  {
    name: 'Tanzania, United Republic of',
    capital: 'Dodoma',
    languages: ['Swahili', 'English'],
    population: 55155000,
    flag: 'https://restcountries.eu/data/tza.svg',
    currency: 'Tanzanian shilling'
  },
  {
    name: 'Thailand',
    capital: 'Bangkok',
    languages: ['Thai'],
    population: 65327652,
    flag: 'https://restcountries.eu/data/tha.svg',
    currency: 'Thai baht'
  },
  {
    name: 'Timor-Leste',
    capital: 'Dili',
    languages: ['Portuguese'],
    population: 1167242,
    flag: 'https://restcountries.eu/data/tls.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Togo',
    capital: 'Lomé',
    languages: ['French'],
    population: 7143000,
    flag: 'https://restcountries.eu/data/tgo.svg',
    currency: 'West African CFA franc'
  },
  {
    name: 'Tokelau',
    capital: 'Fakaofo',
    languages: ['English'],
    population: 1411,
    flag: 'https://restcountries.eu/data/tkl.svg',
    currency: 'New Zealand dollar'
  },
  {
    name: 'Tonga',
    capital: "Nuku'alofa",
    languages: ['English', 'Tonga (Tonga Islands)'],
    population: 103252,
    flag: 'https://restcountries.eu/data/ton.svg',
    currency: 'Tongan paʻanga'
  },
  {
    name: 'Trinidad and Tobago',
    capital: 'Port of Spain',
    languages: ['English'],
    population: 1349667,
    flag: 'https://restcountries.eu/data/tto.svg',
    currency: 'Trinidad and Tobago dollar'
  },
  {
    name: 'Tunisia',
    capital: 'Tunis',
    languages: ['Arabic'],
    population: 11154400,
    flag: 'https://restcountries.eu/data/tun.svg',
    currency: 'Tunisian dinar'
  },
  {
    name: 'Turkey',
    capital: 'Ankara',
    languages: ['Turkish'],
    population: 78741053,
    flag: 'https://restcountries.eu/data/tur.svg',
    currency: 'Turkish lira'
  },
  {
    name: 'Turkmenistan',
    capital: 'Ashgabat',
    languages: ['Turkmen', 'Russian'],
    population: 4751120,
    flag: 'https://restcountries.eu/data/tkm.svg',
    currency: 'Turkmenistan manat'
  },
  {
    name: 'Turks and Caicos Islands',
    capital: 'Cockburn Town',
    languages: ['English'],
    population: 31458,
    flag: 'https://restcountries.eu/data/tca.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Tuvalu',
    capital: 'Funafuti',
    languages: ['English'],
    population: 10640,
    flag: 'https://restcountries.eu/data/tuv.svg',
    currency: 'Australian dollar'
  },
  {
    name: 'Uganda',
    capital: 'Kampala',
    languages: ['English', 'Swahili'],
    population: 33860700,
    flag: 'https://restcountries.eu/data/uga.svg',
    currency: 'Ugandan shilling'
  },
  {
    name: 'Ukraine',
    capital: 'Kiev',
    languages: ['Ukrainian'],
    population: 42692393,
    flag: 'https://restcountries.eu/data/ukr.svg',
    currency: 'Ukrainian hryvnia'
  },
  {
    name: 'United Arab Emirates',
    capital: 'Abu Dhabi',
    languages: ['Arabic'],
    population: 9856000,
    flag: 'https://restcountries.eu/data/are.svg',
    currency: 'United Arab Emirates dirham'
  },
  {
    name: 'United Kingdom of Great Britain and Northern Ireland',
    capital: 'London',
    languages: ['English'],
    population: 65110000,
    flag: 'https://restcountries.eu/data/gbr.svg',
    currency: 'British pound'
  },
  {
    name: 'United States of America',
    capital: 'Washington, D.C.',
    languages: ['English'],
    population: 323947000,
    flag: 'https://restcountries.eu/data/usa.svg',
    currency: 'United States dollar'
  },
  {
    name: 'Uruguay',
    capital: 'Montevideo',
    languages: ['Spanish'],
    population: 3480222,
    flag: 'https://restcountries.eu/data/ury.svg',
    currency: 'Uruguayan peso'
  },
  {
    name: 'Uzbekistan',
    capital: 'Tashkent',
    languages: ['Uzbek', 'Russian'],
    population: 31576400,
    flag: 'https://restcountries.eu/data/uzb.svg',
    currency: "Uzbekistani so'm"
  },
  {
    name: 'Vanuatu',
    capital: 'Port Vila',
    languages: ['Bislama', 'English', 'French'],
    population: 277500,
    flag: 'https://restcountries.eu/data/vut.svg',
    currency: 'Vanuatu vatu'
  },
  {
    name: 'Venezuela (Bolivarian Republic of)',
    capital: 'Caracas',
    languages: ['Spanish'],
    population: 31028700,
    flag: 'https://restcountries.eu/data/ven.svg',
    currency: 'Venezuelan bolívar'
  },
  {
    name: 'Viet Nam',
    capital: 'Hanoi',
    languages: ['Vietnamese'],
    population: 92700000,
    flag: 'https://restcountries.eu/data/vnm.svg',
    currency: 'Vietnamese đồng'
  },
  {
    name: 'Wallis and Futuna',
    capital: 'Mata-Utu',
    languages: ['French'],
    population: 11750,
    flag: 'https://restcountries.eu/data/wlf.svg',
    currency: 'CFP franc'
  },
  {
    name: 'Western Sahara',
    capital: 'El Aaiún',
    languages: ['Spanish'],
    population: 510713,
    flag: 'https://restcountries.eu/data/esh.svg',
    currency: 'Moroccan dirham'
  },
  {
    name: 'Yemen',
    capital: "Sana'a",
    languages: ['Arabic'],
    population: 27478000,
    flag: 'https://restcountries.eu/data/yem.svg',
    currency: 'Yemeni rial'
  },
  {
    name: 'Zambia',
    capital: 'Lusaka',
    languages: ['English'],
    population: 15933883,
    flag: 'https://restcountries.eu/data/zmb.svg',
    currency: 'Zambian kwacha'
  },
  {
    name: 'Zimbabwe',
    capital: 'Harare',
    languages: ['English', 'Shona', 'Northern Ndebele'],
    population: 14240168,
    flag: 'https://restcountries.eu/data/zwe.svg',
    currency: 'Botswana pula'
  }
]
// console.log((country);

const user_s = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]


const signUp = (username, email, password) => {
  if (user_s.find(user => user.username === username || user.email === email))
     { return alert('user already exist')} 
  else { user_s.push({
    _id: Math.random().toString(36).substring(2, 8),
    username,
     email, 
     password,
    isLoggedIn: false,
  createdAt: new Date(),
})}}

signUp('jalasem', 'abc@gmail.com', 'pazzword')
console.log(user_s);

const signIn = (login, password) => {
  if (!login) return alert('username or email (login) is required') 
  if (!password) return alert('password is required')

  const userIndex = user_s.findIndex(user => user.username.toLowerCase() === login.toLowerCase() || user.email === login)
  if (userIndex === -1) return alert('User does not exist')

  const use_r = user_s[userIndex]
  if (use_r.password !== password) return alert('Wrong password provided')

  user_s[userIndex].isLoggedIn = true
}

signIn('jalasem', 'pazzword')
console.log(user_s)

const rateProduct = (productid, userid, rate) => {
  const productIndex = products.findIndex(product => product._id === productid)
  const user = user_s.find(user => user._id === userid)

  if (productIndex === -1) return alert('Product not found')
  if (!user) return alert('User not found')
  if (!user.isLoggedIn) return ('You have to log in')
  if (!rate) return alert('rate is required')
  if (typeof rate !== 'number') return alert('rate must be a number!')
  if (rate < 1 || rate > 5) return alert('rate can only be between 1 and 5')

  products[productIndex].ratings.push({userid, rate})
}

rateProduct('hedfcg', 'ghderc', 4)
console.log(products);
// console.log(JSON.stringify(products, null, 2))


const likeProduct = (productId, userId) => {
  const productIndex = products.findIndex(product => product._id === productId)
  const user = user_s.find(user => userId._id === userId)

  if (productIndex === -1) return alert('Product is not found')
  if (!user) return alert('User not found')
  if (!user.isLoggedIn) return alert('You have to log in to rate a product')

  const likedByUser = product.likes.includes(userId)

  if (likedByUser) { products[productIndex].likes.filter(id => id !== userId)
    
  } else {
    products[productIndex].likes.push(userId)
  }
}



