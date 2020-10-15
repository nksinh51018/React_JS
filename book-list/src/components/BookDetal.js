import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetal = ({book}) => {
    const {dispatch} = useContext(BookContext)
    return ( 
        <li onClick={()=>dispatch({type:'REMOVE_BOOK',id:book.id})}>
            <div>
                {book.title}
            </div>
            <div>
                {book.author}
            </div>
        </li>
     );
}
 
export default BookDetal;