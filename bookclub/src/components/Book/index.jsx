import React from 'react';
import { Container, Cover, Title, Author } from './Book.styles';

const Book = ({book}) => (
    <Container>
        <Cover src={book.image} alt={`Book cover for ${book.title} by ${book.author}`}/>
        <figcaption>
            <Title>{book.title}</Title>
            <Author>by {book.author}</Author>
        </figcaption>
    </Container>
)

export default Book