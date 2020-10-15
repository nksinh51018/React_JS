import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';
import BookDetal from './BookDetal'

const BookList = () => {
    const {books} = useContext(BookContext)
    return books.length > 0 ? ( 
        <div>
            <ul>
                {books.map((book,index)=>{
                    return (
                        <BookDetal book={book} key={index} />
                    )
                })}
            </ul>
        </div>
     ) : (
        <div>No books</div>
     );
}
 
export default BookList;