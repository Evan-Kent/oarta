function json(response) { return response.json() }

function status(response) 
{
  if (response.status >= 200 && response.status <= 300)
    return Promise.resolve(response)
  else return Promise.reject(new Error(response.statusText))
}

function get(resource) {
  const auth = { 'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}` }
  const url = 'https://the-one-api.herokuapp.com/v1'
  return new Promise((resolve, reject) => {
    fetch(url + resource, { method: 'GET', headers: auth })
      .then(status)
      .then(json)
      .then(
        data => resolve(data),
        error => reject(error)
      )
  })
}

async function getBooks(setBooks) {
  setBooks(await get('/book'))
}

async function getBook(id)
{
  return await get(`/book/${id}`)
}

async function getBookChapters(bookId)
{
  return await get(`/book/${bookId}/chapter`)
}

async function getChapters(setChapters) {
  setChapter(await get(`/chapter`))
}

async function getChapter(id)
{
  return await get(`/chapter/${id}`)
}

async function getCharacters(setCharacters) {
  setCharacters(await get(`/character`))
}

async function getCharacter(id)
{
  return await get(`/character/${id}`)
}

async function getCharacterQuotes(characterId)
{
  return await get(`/character/${characterId}/quote`)
}

async function getMovies(setMovies) {
  setMovies(await get('/movie'))
}

async function getMovie(id)
{
  return await get(`/movie/${id}`)
}

async function getMovieQuotes(movieId)
{
  return await get(`/movie/${movieId}/quote`)
}

async function getQuotes(setQuotes) {
  setQuotes(await get('/quote'))
}

async function getQuote(id)
{
  return await get(`/quote/${id}`)
}

let api =
{
  getBooks,
  getBook,
  getBookChapters,
  getChapters,
  getChapter,
  getCharacters,
  getCharacter,
  getCharacterQuotes,
  getMovie,
  getMovies,
  getMovieQuotes,
  getQuotes,
  getQuote
}

export default api;