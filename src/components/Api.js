import React, { useState, useEffect } from "react";
import api from "../utilities/api";
import { Quote } from '../models'
import { faMapSigns } from "@fortawesome/free-solid-svg-icons";


function Api({ children })
{
  const [books, setBooks] = useState(null)
  const [chapters, setChapters] = useState(null)
  const [characters, setCharacters] = useState(null)
  const [movies, setMovies] = useState(null)
  const [quotes, setQuotes] = useState(null)
  const [childrenWithData, setChildrenWithData] = useState(null)

  useEffect(() => {
    api.getBooks(setBooks)
    api.getChapters(setChapters)
    api.getCharacters(setCharacters)
    api.getMovies(setMovies)
    api.getQuotes(setQuotes)
  }, [])

  useEffect(() => {
    if (allDataSet())
    {
      console.log("All data set!")
      console.log(books)
      console.log(chapters)
      console.log(characters)
      console.log(movies)

      dataQuotesPerCharacter(quotes, characters)
      const data = { books, chapters, characters, movies, quotes }
      React.Children.map(children, child => React.cloneElement(child, { data }))
    }
  }, [books, chapters, characters, movies, quotes])

  const allDataSet = () => {
    return books && chapters && characters && movies && quotes;
  }
  console.log(children)
  return ( 
    <>
      {children}
    </>
  )
}

export default Api

function dataQuotesPerCharacter(quotesData, characters)
{
  console.log("In dataQuotesPerCharacter")
  const idxCharacters = characters.reduce((chars, char) => chars.set(char._id, char), new Map())
  const quotes = quotesData.map(q => new Quote(q))
  let quotesPerCharacter = {}
  for (let quote of quotes)
  {
    let c = idxCharacters.get(quote.character)
    if (!quotesPerCharacter[c.name]) quotesPerCharacter[c.name] = 1
    else quotesPerCharacter[c.name]++
  }
  console.log(quotesPerCharacter)
  return quotesPerCharacter
}