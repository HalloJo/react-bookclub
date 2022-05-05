import React, {useRef, useEffect, useState}  from 'react';
import {debounce} from 'lodash-es'
import { Container, H2, Booklist } from './BooksContainer.styles';
import Book from '../Book';

const BooksContainer = ({books, pickBook, isPanelOpen, title}) => {

    const [scroll, setScroll] = useState(0)

    useEffect(()=> {
        const handleScroll = debounce(()=> {
            setScroll(window.scrollY)
        }, 100)

        if(!isPanelOpen){
            window.addEventListener('scroll', handleScroll)
        }

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [isPanelOpen])
            
    return (
    <Container $isPanelOpen={isPanelOpen}>
        <H2>{title}</H2>
        <Booklist>
            {books.map((book)=> (
                <Book key={book.id} book={book} pickBook={pickBook} />
            ))} 
        </Booklist>
    </Container>
    )
}
    


export default BooksContainer