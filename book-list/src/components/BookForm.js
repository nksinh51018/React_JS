import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookForm = () => {
    const { dispatch } = useContext(BookContext)
    const [state, setstate] = useState({
        title: '',
        author: ''
    });

    const onChangeForm = (e) => {
        let target = e.target;
        setstate({ ...state, [target.name]: target.value })
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_BOOK',book:{
            title: state.title, 
            author: state.author
        }})
        setstate({
            title: '',
            author: ''
        })
    }

    return (
        <form onSubmit={handleSubmitForm}>
            <input type='text' value={state.title} onChange={onChangeForm} name='title' required />
            <input type='text' value={state.author} onChange={onChangeForm} name='author' required />
            <input type='submit' value='Add book' />
        </form>
    );
}

export default BookForm;