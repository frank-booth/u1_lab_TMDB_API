const API_KEY = '53f1bc3b08bae62edf3c2cae46731552'
const DOMAIN = 'https://api.themoviedb.org/3'
const IMAGE_BASE_PATH = 'https://image.tmdb.org/t/p/original'

const button = document.querySelector('button')
const movieInput = document.querySelector('input')
const imageDiv = document.querySelector('div')
const mainList = document.querySelector('#list')

button.addEventListener('click', async () => {
  let movie = movieInput.value
  let response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&api_key=${API_KEY}`
  )
  let movieShown = response.data.results
  renderList(movieShown)
})

const renderList = (list) => {
  const listLength = Object.keys(list).length
  mainList.innerHTML = ''
  for (let i = 0; i < listLength; i++) {
    const thisTitle = list[i].title
    const thisPoster = list[i].poster_path
    const newElement = document.createElement('li')
    newElement.innerHTML = `<img src='${IMAGE_BASE_PATH}/${thisPoster}'/><div class='movie-title'>${thisTitle}</div>`
    mainList.appendChild(newElement)
  }
}
