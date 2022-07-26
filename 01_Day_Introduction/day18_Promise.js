const countriesAPI = 'https://restcountries.eu/rest/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


// fetch(countriesAPI)
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// const fetchCountriesData = async (file) => {

//     try{
//         const response = await fetch(file)
//         const data = await response.json(file)
//         return data.map(item => ({Country : item.name, Capitals: item.capital, Languages: item.languages, Population: item.population, Areas: item.area}));
//     } catch (err) {
//         return err
//     }

// }

// const getCountriesData = fetchCountriesData(countriesAPI);

// console.log(getCountriesData)


// const fetchCatData = async (file) => {

//     try{
//         const response = await fetch(file)
//         const data = await response.json(file)
//         return data.map(item => ({name : item.name}) );
//     } catch (err) {
//         return err
//     }

// }


// const getCatData = fetchCatData(catsAPI);

// console.log(getCatData)

// const AverageWeight = async () => {

//     try {

//         const fetchdata = await fetch( catsAPI );
//         const cats = await fetchdata.json();
        
//         // const catNames = cats.map( cat => cat.name)
//         // console.log(catNames)

//         const Catweight = cats.map( item => 

//             { const weightRange = item.weight.metric;
//              const [low, high] = weightRange.replaceAll(' ', '').split('-');
                
//              return (Number(low) + Number(high)) / 2
                
//         })
//         .reduce( (total, avg) => total + avg, 0) / cats.length;
//         console.log(Catweight);
//     } catch (error) {
//         console.log(error)
//     }
// }

// AverageWeight()

// const largestCountries = async() => {

//     try {
        
//         const fetchCountry = await fetch(countriesAPI);
//         const Country = await fetchCountry.json(countriesAPI)

//         const tenLargestCountries = Country.sort( (a, b) => b.population - a.population )
//         .map( item => ( {country: item.name, population: item.population}))
//         .slice(0, 10)

//         console.log(tenLargestCountries)

//     } catch (error) {
//         console.log(error)
//     }

// }

// largestCountries()