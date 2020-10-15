import React, { createContext, useReducer,useEffect } from 'react';
import { bookReducer } from '../reducers/BookReducer';

export const BookContext = createContext();


const BookContextProvider = (props) => {

    const [books, dispatch] = useReducer(bookReducer, [], ()=>{
        let localData = localStorage.getItem('BOOKS');
        return localData ? JSON.parse(localData) : []
    })

    useEffect(() => {
        localStorage.setItem('BOOKS',JSON.stringify(books))
    },[books]);

    return (
        <BookContext.Provider value={{ books,dispatch}}>
            {props.children}
        </BookContext.Provider>
    );
}

export default BookContextProvider;