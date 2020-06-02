export default class Quote {
  constructor({ _id, character, dialog, movie })
  {
    this.id = _id
    this.character = character
    this.movie = movie
    this.quote = dialog
  }
}