import React from 'react';
import { useState, useEffect } from 'react';



const App = () => {
  const [books, setBooks] = useState([])
  
  console.log('this message loads everytime time the component renders!')

  useEffect(()=> {
    const fetchData = async () => {
      try {
        const response = await fetch('https://book-club-jason.herokuapp.com/books')
        const books = await response.json()
        setBooks(books)
      } catch(errors) {
        console.log(errors)
      }
    }

    fetchData()
  }, [])

  console.log(`the books array in our state:`, books)

  return (
    <div>Hello bookclub!</div>
  )
}


export default App;
