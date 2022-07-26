const planetSelector = document.querySelector('select')
const massInput = document.querySelector('input')
const btn = document.querySelector('button')
const imageContainer = document.querySelector('.image')
const result = document.querySelector('.description')

const planets = [
    {
      name: "mercury",
      value: 3.7,
    },
    {
      name: "venus",
      value: 8.87,
    },
    {
      name: "earth",
      value: 9.8,
    },
    {
      name: "mars",
      value: 3.7,
    },
    {
      name: "jupiter",
      value: 24.8,
    },
    {
      name: "saturn",
      value: 10.7,
    },
    {
      name: "uranus",
      value: 8.7,
    },
    {
      name: "neptune",
      value: 11.0,
    },
    {
      name: "pluto",
      value: 0.6,
    },
    {
      name: "moon",
      value: 1.6,
    },
  ];

  //Using reduce to assign planet name to its value

  const galaxy = planets.reduce( (acc, planet) => {
      acc[planet.name] = planet.value;
        return acc
  },{})

  //accumulating other option to selector using map

planetSelector.innerHTML += planets.map(planet => `
<option value = '${planet.name}'>${planet.name.toUpperCase()}</option>`).join('')

//reassigning pictures using event

planetSelector.addEventListener('change', (e) => {
    const value = e.currentTarget.value

    document.querySelector('img')
    .setAttribute('src', `./images/${value}.png`)
})

btn.addEventListener('click', () => {
 result.classList.remove('hide')

 const planetValue = planetSelector.value;
 const massValue = massInput.value;

 if ( massValue === '') {
     imageContainer.classList.add('hide')
     result.innerHTML = `<p class='error'>Mass is required</p>`
    return
 }

 if (planetValue === 'none') {
    imageContainer.classList.add('hide')
    result.innerHTML = `<p class='error'>Planet is required</p>`
   return
}

    const planetWeight = (galaxy[planetValue] * massValue).toFixed(2)

    imageContainer.classList.remove('hide')

    result.innerHTML = `<p>The weight of the object on <span class="planet">${planetValue.toUpperCase()}</span></p>
    <span class="weight">${planetWeight} N</span>`

})
console.log(planetSelector)