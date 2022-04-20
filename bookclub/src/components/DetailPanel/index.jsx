import React from 'react';
import Book from '../Book';
import { Panel, P, Em } from './DetailPanel.styles';

 const DetailPanel = ({book}) => (
    <Panel>
        <Book book={book} isLarge={true} />
        <P>{book.description}</P>
        <P>
            <em>Published in {book.published}</em>
        </P>
    </Panel>
 )

 export default DetailPanel