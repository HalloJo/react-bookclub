import React from 'react';
import { Container, H2, Booklist } from './BooksContainer.styles';
import Book from '../Book';

const BooksContainer = ({books}) => (
    <Container>
        <H2>All books!</H2>
        <Booklist>
            {books.map((book)=> (
                <Book key={book.id} book={book} />
            ))} 
        </Booklist>
    </Container>
)

export default BooksContainer