
const auth = { 'Authorization': `Bearer ${process.env.REACT_APP_LOTR_API_KEY}` }
const url = 'https://the-one-api.herokuapp.com/v1'

function json(response) { return response.json() }

function status(response) 
{
  if (response.status >= 200 && response.status <= 300)
    return Promise.resolve(response)
  else return Promise.reject(new Error(response.statusText))
}

function fetchWrapper(endpoint, resource, headers, _method) {
  return new Promise((resolve, reject) => {
    fetch(endpoint + resource, { method: _method, headers: headers })
      .then(status)
      .then(json)
      .then(
        data => {
          //console.log("Response successful", data)
          resolve(data)
        },
        error => {
          //console.log("Request failed with error: ", error)
          reject(error)
        }
      )
  })
}

async function getMovies(setData) {
  let result = await fetchWrapper(url, '/movie', auth, 'GET') 
  setData(result)
}

export 
{
  getMovies
}