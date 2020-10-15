import React, { createContext,useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [state, setstate] = useState([
        {title: 'aaa',id: 1},
        {title: 'bbb',id: 2},
        {title: 'ccc',id: 3},
    ]);
    return ( 
        <BookContext.Provider value={{state}}>
            {props.children}
        </BookContext.Provider>
     );
}
 
export default BookContextProvider;