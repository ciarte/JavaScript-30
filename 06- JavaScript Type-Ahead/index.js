const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
var cities =[];

fetch(endpoint)
.then(data => data.json())
.then(data => cities=[...data])

function findMatch(citySearch, cities) {
  return cities.filter(place => {
    const regex =new RegExp (citySearch,'gi');
    return place.city.match(regex) || place.state.match(regex)
  })
}
//funcion para poner comas a los 'mil'
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function displayMatch(){
const match = findMatch(this.value,cities)
const html = match.map( place => {
  const regex = new RegExp(this.value, 'gi');
  const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
  const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
  <li>
  <span class='name'>${cityName}, ${stateName}</span>
  <span class='population'>${numberWithCommas(place.population)}</span>
  </li>
  `;
}).join('');
suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change',displayMatch)
searchInput.addEventListener('keyup',displayMatch)