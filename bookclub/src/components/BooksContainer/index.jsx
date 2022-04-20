import React from 'react';
import { Container, H2, Booklist } from './BooksContainer.styles';
import Book from '../Book';

const BooksContainer = ({books, pickBook}) => (
    <Container>
        <H2>All books!</H2>
        <Booklist>
            {books.map((book)=> (
                <Book key={book.id} book={book} pickBook={pickBook} />
            ))} 
        </Booklist>
    </Container>
)

export default BooksContainer