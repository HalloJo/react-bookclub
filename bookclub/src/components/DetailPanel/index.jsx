import React from 'react';
import Book from '../Book';
import { Panel, P, Em, Close, CloseWrapper, BG } from './DetailPanel.styles';

 const DetailPanel = ({book, closePanel}) => (
    <>
    <BG onClick={closePanel} />
    <Panel>
        <CloseWrapper>
            <Close onClick={closePanel} />
        </CloseWrapper>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
            <Em>Published in {book.published}</Em>
        </P>
    </Panel>
    </>
 )

 export default DetailPanel