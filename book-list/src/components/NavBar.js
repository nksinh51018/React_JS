import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const NavBar = () => {

    const { books } = useContext(BookContext)

    return (
        <>
            <h1>Context-Hook</h1>
            <p>You have {books.length} books</p>
        </>
    );
}

export default NavBar;