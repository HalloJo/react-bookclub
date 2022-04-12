import React from 'react';
import { useState, useEffect } from 'react';
import BooksContainer from './components/BooksContainer';
import Header from './components/Header';
import { GlobalStyle } from './components/styles';

const App = () => {
  const [books, setBooks] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
      } catch(errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Header/>
      <BooksContainer books={books}/>
    </>
  )
}


export default App;
