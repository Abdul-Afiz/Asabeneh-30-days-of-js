// const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 2, 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' }
]

// forEach is an high order function which iterates through an array, it receives: item, element, or an array itself.
// map is an high order function which modifies an array then return an array, it receives: item, element, or an array itself.
// filter is an high order function which filters an array item that meets a given condition then return an array, it receives: item, element, or an array itself.
// reduce is an high order function which returns a single element, it receives: accumulator, currentvalue, and an iniatialization.

// const callback = (no) => {
//   return no ** 3
// }

// console.log(callback(20));

// let count = countries.forEach(element => {
//  console.log(count) }); 
// });
// names.forEach(element => {
// console.log(element);
// });
// numbers.forEach(element => {
//     console.log(element);
// });

// let countryWithArray = countries.map(country => country.toUpperCase())
// console.log(countryWithArray);

// let countryLength = countries.map(country => country.length)
// console.log(countryLength);

// let squareNum = numbers.map(num => num ** 2)
// console.log(squareNum)

// name_to_uppercase = names.map(name => name.toUpperCase())
// console.log(name_to_uppercase)

// productsArr = products.map(product => product)
// console.log(productsArr)

// const countries_with_land = countries.filter(country => country.toLowerCase().includes('land')); console.log(countries_with_land)

// const countryWithSixChar = countries.filter(country => country.length === 6);console.log(countryWithSixChar)

// const factor = (no) => (no === 1) ? 1 : no * factor(no - 1)
// console.log(factor(4));

// const country_with_six_and_more = countries.filter
// (country => country.length >= 6 ); console.log(country_with_six_and_more)

// const country_start_with_e = countries.filter(country => country.startsWith('E')); console.log(country_start_with_e)

// const priceWithValue = products.filter(item => typeof item.price === 'number');
// console.log((priceWithValue));


// const getStringLists = (arr) => {
//  const print = arr.filter(ar => typeof ar === 'string')
//  return print
// }; console.log(getStringLists());


//No17
// console.log(numbers.reduce((a,b) => a + b, 0))

// const reduceConst = countries.reduce((a,b) => (a + ', ' + b))
// console.log(`${reduceConst} are north European countries`)

//SOME is a high order function which checks if part of an array item meets a certain condition then returns true.

//EVERY is a high order function which checks if all element in an array meets a certain condition then returns true.

// const someNamesLength = names.some(name => name.length > 7);
// console.log(someNamesLength)

// console.log(countries.every(country => country.includes('land')))

//FIND is a higher order function which returns the first item that meets the condition started in an array.

//FINDINDEX is a higher order function which returns the index item that meets the condition started in an array.

// console.log(countries.find(country => country.length === 6));
// console.log(countries.findIndex(country => country.length === 6));

// console.log(countries.findIndex(country => country.includes('Norway')))

// console.log(countries.findIndex(country => country.includes('Russia')))

// const total_price = products.filter(product => typeof product.price == 'number').reduce( (a,b) => a + b.price, 0);
// console.log(total_price)

//Level 2b
// console.log(products.reduce( (a, b) => {if (typeof b.price === 'number') { a += b.price} return a },0))


/* 

sort( (a,b) => {
  if (a > b) return 1
  if(b > a) return -1
  return 0
})
 Sort for alphabetical orderlet iniArr = []
// let countryFirst = countries.forEach( item => 
//   {
//     let firstchar = item[0]
//     iniArr[firstchar] ?  iniArr[firstchar] += 1 : iniArr[firstchar] = 1 
//   }
    
// )

// let savedValue = Object.entries(iniArr).map(item => {
//   return {
//     [item[1]]:item[0]
//   }})

//   console.log(savedValue)

// let mostUseValue = Object.entries(iniArr).sort( (a, b) => b[1]-a[1] ) [0]

// console.log(mostUseValue)

*/



// let categorizeCountry = countries.reduce( ( a , b ) => { 
//   if (b.toLowerCase().includes('ia')) { 
//     a.ia.push(b)};

//   if (b.toLowerCase().includes('stan')) {
//        a.stan.push(b)};

//   if (b.toLowerCase().includes('land')) {
//        a.land.push(b)};

//   if (b.toLowerCase().includes('island')) {
//       a.island.push(b)};

//   return a}, 
//   { ia : [], stan : [], land : [], island : [] } )

// console.log(categorizeCountry)
// const no_of_country_count = (arr) => {
//   let initialArr = []
//   arr.forEach( item => {
//     let firstChar = item[0]
//     if (initialArr[firstChar]) {
//       initialArr[firstChar] += 1
//     } else {
//       initialArr[firstChar] = 1
//     }
//   })
//   return initialArr;
// }

// console.log(no_of_country_count(countries))

// console.log(
//   countries.reduce((acc, cur) => {
//     if (cur.toLowerCase().includes('ia')) {
//       acc.ia.push(cur)
//     };
//     if (cur.toLowerCase().includes('stan')) {
//       acc.stan.push(cur)
//     };
//     if (cur.toLowerCase().includes('land')) {
//       acc.land.push(cur)
//     };
//     if (cur.toLowerCase().includes('island')) {
//       acc.island.push(cur)
//     };

//     return acc
//   },
//   {
//     ia: [],
//     stan: [],
//     land: [],
//     island: []
//   })
// )

// console.log(
// countries.reduce((acc, country) => { 
// country.toLowerCase().includes('ia') ? acc.ia.push(country) :
// country.toLowerCase().includes('island') ? acc.island.push(country) : 
// country.toLowerCase().includes('stan') ? acc.stan.push(country) : 
// country.toLowerCase().includes('land') ? acc.land.push(country) : 0  
// ;return acc }, 
// {land: [], island: [], stan: [], ia: []})

// )


// Getting first countryinitial and no of time used

// let iniArr = []
// let countryFirst = countries.forEach( item => 
//   {
//     let firstchar = item[0]
//    {iniArr[firstchar] ?  iniArr[firstchar] += 1 : iniArr[firstchar] = 1 } 
//   }
    
//   )

//   console.log(iniArr)


// const getFirstTenCountries= (arr) => {
//    return arr.map( ar => ar).slice(0, 10)
// }

// const getFirstTenCountries = (arr) => {
//   return arr.filter( (a,r) => r < 10 )
//   }



// const getFirstTen = countries.reduce( (acc, cur) => { { if (cur[11]) {
//   acc.tenCountry.push(cur)
// } };  return acc}, 
// {tenCountry : []})

// console.log(getFirstTen)



// const getLastTenCountries = (arr) => {
//    return arr.reverse().filter( (a, b) => b ).slice( 0, 10)
// }
// console.log(getLastTenCountries(countries));


// console.log(countries.sort((a,b) => b > a ? 1 : -1 ).slice(0, 10))

//Your output should look like this

// const languages = [
// {country: 'English',count:91},
// {country: 'French',count:45},
// {country: 'Arabic',count:25},
// {country: 'Spanish',count:24},
// {country:'Russian',count:9},
// {country:'Portuguese', count:9},
// {country:'Dutch',count:8},
// {country:'German',count:7},
// {country:'Chinese',count:5},
// {country:'Swahili',count:4}
// ]

// const mostSpokenLanguages = (arr) => {}

//Getting first countryinitial and no of time used

// let iniArr = []
// let countryFirst = countries.forEach( item => 
//   {
//     let firstchar = item[0]
//     iniArr[firstchar] ?  iniArr[firstchar] += 1 : iniArr[firstchar] = 1 
//   }
    
// )

// let savedValue = Object.entries(iniArr).map(item => {
//   return {
//     [item[1]]:item[0]
//   }})

//   console.log(savedValue)

// let mostUseValue = Object.entries(iniArr).sort( (a, b) => b[1]-a[1] ) [0]

// console.log(mostUseValue)

  // const mostSpokenLanguages= (countries, resultCount) => {
    
  //   let countryLang = countries.map( country => country.languages).flat()
    
  //   let lang = countryLang.reduce( ( acc, value) => {
  //     { acc[value] ? acc[value] +=1 : acc[value] = 1};
  //     return acc   
  //   }, {})
    
  //   let sortlang = Object.entries(lang).sort( (a,b) => b[1] > a[1] ? 1 : -1 )
    
  //   return sortlang.map(item => ({language: item[0], count: item[1]})).slice(0,resultCount)
  // }
  
  //  console.log(mostSpokenLanguages(countries_data,10))
  
  // console.log(countries_data.sort( 
  //   ( a, b ) =>  a.name > b.name ? 1 : -1

  // ) )


  // console.log(countries_data.sort( 
  //   ( a, b ) =>  a.capital > b.capital ? 1 : -1

  // ) )

  // console.log(countries_data.sort( 
  //   ( a, b ) =>  a.population > b.population ? 1 : -1

  // ) )

  
  // function Mostpopulatedcountry(arr, count) {

  //   return arr
  //     .sort((a, b) => b.population - a.population)
  //     .slice(0, count)
  //     .map(country => ({ country: country.name, population: country.population }))
    
    // let sortedPopulation = arr
    //   .map(item => [item.name, item.population])
    //   .sort( (a, b) => b[1] - a[1])

    // let populationCount = sortedPopulation.map(item => ( {country: item[0], population: item[1]} ) ).slice(0, count)
  
    // return populationCount

  // }

  // console.log( Mostpopulatedcountry(countries_data, 10) )

  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]

   let statistics = {
    
    ages,
    
    sorted: function () {
      return this.ages.sort((a,b) => a - b)
    },

    count: function() {
      return this.ages.length
      //the length
    },

    sum: function() {
      return this.ages.reduce( (acc, cur) => acc + cur, 0 ) 
    },

    mean: function () {
      return Math.round(this.sum() / this.count())
    },

    min: function () {
      return this.sorted()[0]
    },

    max: function () {
      return this.sorted().reverse()[0]
    },

    range: function () {
      return this.max() - this.min()
    },

    median: function () {
      
        return this.count() % 2

        ? this.sorted()[ (this.count() - 1) / 2]

        : ( this.sorted()[ (this.count() / 2) - 1] + this.sorted()[ this.count / 2] )

        / 2
    },

    mode: function () {
      let ageMode = this.ages.reduce( (acc,cur) => {
        {acc[cur] ? acc[cur] += 1 : acc[cur] = 1
      } return acc}, {})

    ageMode = Object.entries(ageMode).sort( (a,b) => b[1] - a[1] )

    ageMode = ageMode.map( item => ({mode: item[0], count: item[1]}) )[0]

      return ageMode

    },

    variance : function () {
       
    return this.ages.map( item => (item - this.mean()) ** 2 )

    .reduce( (acc, cur) => acc + cur, 0) / this.count()

    },

   std : function () {

     return (this.variance() ** 0.5).toFixed(1)
   },

  
    freqDist: function () {
      
      let ageMode = this.ages.reduce( (acc,cur) => {
        {acc[cur] ? acc[cur] += 1 : acc[cur] = 1
      } return acc}, {})

    ageMode = Object.entries(ageMode)

    ageMode = ageMode.map( item =>  [ (item[1] / this.count() * 100),  item[0]] ).sort( (a,b) => b[0] - a[0] )
  
      return ageMode  

    },

    describe: function () {

      return `
      count: ${this.count()}\n 
      Sum: ${this.sum()}\n 
      Min: ${this.min()}\n 
      Max: ${this.max()}\n 
      Range: ${this.range()}\n 
      Mean: ${this.mean()}\n 
      Median: ${this.median()}\n 
      Mode: ${this.mode()}\n 
      Variance: ${this.variance()}\n 
      Standard Deviation: ${this.std()}\n
      Frequency Distribution: ${this.freqDist() }  
      `
    }

   }

   console.log(statistics.freqDist())

  




  //  console.log(count)
  //  console.log(sum)
  // console.log(max)
  // console.log(range)
  // console.log(mean)
  

// const stringData = '0123456789abcdef'

// let hexa = ''

// for (let i = 0; i < 6; i++) {
//   let index = Math.floor( Math.random() * stringData.length )
//   hexa += stringData[index]
// }

// console.log(hexa)

