
let lotr = 'https://the-one-api.herokuapp.com/v1'

function json(response) {
  if (response.headers.has("X-Ratelimit-Remaining"))
    console.log(
      "unsplash X-Ratelimit-Remaining: ",
      response.headers.get("X-Ratelimit-Remaining")
    )
  return response.json()
}

function status(response) {
  if (response.status >= 200 && response.status <= 300) {
    return Promise.resolve(response)
  } else {
    return Promise.reject(new Error(response.statusText))
  }
}

export function fetchWrapper(endpoint, headers) {
  return new Promise((resolve, reject) => {
    fetch(lotr + endpoint, { method: 'GET', headers: headers })
      .then(status)
      .then(json)
      .then(
        data => {
          console.log("Response successful", data)
          resolve(data)
        },
        error => {
          console.log("Request failed with error: ", error)
          reject(error)
        }
      )
  })
}