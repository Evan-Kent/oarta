import api from '../utilities/api'
import React, { useEffect, useState } from 'react'

function Book()
{
  const [books, setBooks] = useState(null)
  const [bookChapters, setBookChapters] = useState(null)

  useEffect(() => {
    api.getBooks(setBooks)
  }, [])

  useEffect(() => {
    
  }, [books])
}