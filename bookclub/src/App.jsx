import React from 'react';
import { useState, useEffect } from 'react';
import BooksContainer from './components/BooksContainer';
import DetailPanel from './components/DetailPanel';
import Header from './components/Header';
import { GlobalStyle } from './components/styles';

const App = () => {
  const [books, setBooks] = useState([])
  const [selectedBook, setSelectedBook] = useState(null)

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-json.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
      } catch(errors) {
        alert(errors)
      }
    }

    fetchData()
  }, [])

  const pickBook = (book) => {
    setSelectedBook(book)
  }

  const closePanel = () => {
    setSelectedBook(null)
  }

  console.log(selectedBook)

  return (
    <>
      <GlobalStyle />
      <Header/>
      <BooksContainer books={books} pickBook={pickBook} isPanelOpen={selectedBook !== null } />
      {selectedBook && <DetailPanel book={selectedBook} closePanel={closePanel}  /> }
    </>
  )
}


export default App;
