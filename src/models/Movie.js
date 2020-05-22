export default class Movie 
{
  // constructor(
  //   _id,
  //   _academyAwardNominations,
  //   _academyAwardWins,
  //   _boxOfficeRevenueInMillions,
  //   _budgetInMillions,
  //   _name,
  //   _runtimeInMinutes
  // )
  // {
  //   this.id = _id
  //   this.academyAwardNominations = _academyAwardNominations
  //   this.academyAwardWins = _academyAwardWins
  //   this.boxOfficeRevenueInMillions = _boxOfficeRevenueInMillions
  //   this.budgetInMillions = _budgetInMillions
  //   this.name = _name
  //   this.runtimeInMinutes = _runtimeInMinutes
  // }

  constructor(doc)
  {
    this.id = doc._id
    this.academyAwardNominations = doc.academyAwardNominations
    this.academyAwardWins = doc.academyAwardWins
    this.boxOfficeRevenueInMillions = doc.boxOfficeRevenueInMillions
    this.budgetInMillions = doc.budgetInMillions
    this.name = doc.name
    this.runtimeInMinutes = doc.runtimeInMinutes
  }
}