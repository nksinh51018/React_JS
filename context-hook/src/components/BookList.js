import React, {  useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { BookContext } from '../contexts/BookContext';


const BookList = () => {
    let { isLightTheme, light, dark } = useContext(ThemeContext);
    let theme = isLightTheme ? light : dark
    let context = useContext(BookContext)
    return (<div className="book-list" style={{ background: theme.bg, color: theme.syntax, }}>
        <ul>
            {
                context.state.map((book,index)=>{
                    return (
                        <li key={index} style={{ background: theme.ui }}>{book.title}</li>
                    )
                })
            }
        </ul>
    </div>);
}

export default BookList;