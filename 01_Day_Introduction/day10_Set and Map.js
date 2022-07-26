const a = [4, 5, 8, 9]

const b = [3, 4, 5, 7]

const c = [...a,...b]

const A = new Set (a)

const B = new Set (b)

// const C = new Set (c)

// const C = a.filter( item => B.has(item) )

console.log(c)

const counTries = ['Finland', 'Sweden', 'Norway', 'Usa', 'Russia']
 
let emptySet = new Set()

// for (let i = 0; i < 11; i++) {
//     emptySet.add(i)
// }


// console.log(emptySet)
// console.log(emptySet.delete(9))
// console.log(emptySet)

// emptySet.clear()
// console.log(emptySet)


// const newset = new Set (counTries)
// console.log(newset)

// let map = new Map(
//     counTries.map(item => [item, item.length])
// )
// counTries.map(item => map.set(item, item.length))
// console.log(map)

// const countryLang = countries_data.map(item => item.languages).flat().sort().slice(0,10)
// const countryLangMap = new Set (countryLang)

const mostspokenLang = (arr, count) => {

    let countryLang = arr.map(item => item.languages).flat().reduce( ( acc, value) => {
        { acc[value] ? acc[value] +=1 : acc[value] = 1};
        return acc   
      }, {});
      
    let newValue = Object.entries(countryLang).sort( (a,b) => b[1] > a[1] ? 1 : -1 ).slice(0, count)

    const countryLangMap = new Set ()
    countryLangMap.add(newValue)
    return countryLangMap
}

console.log(mostspokenLang(countries_data , 3))




