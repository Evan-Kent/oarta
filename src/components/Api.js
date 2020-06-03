import React, { useState, useEffect } from "react";
import api from "../utilities/api";
import { Quote } from '../models'
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";


function Api({ children })
{
  const [books, setBooks] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [movies, setMovies] = useState(null)
  const [quotes, setQuotes] = useState(null)
  const [childrenWithData, setChildrenWithData] = useState(null)

  useEffect(() => {
    api.getBooks(setBooks)
    api.getCharacters(setCharacters)
    api.getMovies(setMovies)
    api.getQuotes(setQuotes)
  }, [])

  useEffect(() => {
    if (allDataSet())
    {
      console.log("All data set!")
      console.log(books)
      console.log(characters)
      console.log(movies)

      let movieAwards = awardsPerMovie(movies)
      let quotesPerCharacter = dataQuotesPerCharacter(quotes, characters)
      let characterGenderRace = charactersByGenderRace(characters)
      const data = { quotesPerCharacter, movieAwards, characterGenderRace }
      setChildrenWithData(
        React.Children.map(
          children, 
          child => React.cloneElement(child, { data })
      ))
    }
  }, [books, characters, movies, quotes])

  const allDataSet = () => books && characters && movies && quotes
  

  return ( 
    <>
      { childrenWithData ? childrenWithData : <h1>Loading...</h1>}
    </>
  )
}

export default Api

function charactersByGenderRace(characters)
{
  const gender = characters.reduce(
    (gender, char) => 
    {
      if (char?.gender === 'Male') gender.Male++
      else if (char?.gender === 'Female') gender.Female++
      else gender.Other++
      return gender
    }, { Male: 0, Female: 0, Other: 0 })
  const race = characters.reduce(
    (race, char) => 
    {
      if (char.race in race) race[char.race]++
      else race.Other++
      return race
    }, { Ainur: 0, Dwarf: 0, Elf: 0, Hobbit: 0, Human: 0, Orc: 0, Other: 0 })
  console.log({ gender, race })
  return { gender, race }
  //const gender = { Male: 0, Female: 0 }
  // const race
  // for (let character of characters)
  // {

  // }
}

function awardsPerMovie(movies)
{
  return movies.map(
    movie => 
    { 
      return { 
        name: movie.name, 
        nominations: movie.academyAwardNominations, 
        wins: movie.academyAwardWins
      }
    })
}

function dataQuotesPerCharacter(quotesData, characters)
{
  const idxCharacters = characters.reduce(
    (chars, char) => 
      chars.set(char._id, char), 
      new Map())
  const quotes = quotesData.map(q => new Quote(q))
  let quotesPerCharacter = {}
  for (let quote of quotes)
  {
    let c = idxCharacters.get(quote.character)
    if (!quotesPerCharacter[c.name]) quotesPerCharacter[c.name] = 1
    else quotesPerCharacter[c.name]++
  }
  return quotesPerCharacter
}