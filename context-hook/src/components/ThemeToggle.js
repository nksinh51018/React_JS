import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    return ( 
        <button onClick={() => context.toggleTheme()}>Toggle the theme</button>
     );
}


export default ThemeToggle;