import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { AuthContext } from '../contexts/AuthContext';

const NavBar = () => {

    let { isAuthetication, toggleAuth } = useContext(AuthContext);
    let { isLightTheme, light, dark } = useContext(ThemeContext);
    let theme = isLightTheme ? light : dark

    return (
        <nav style={{ background: theme.bg, color: theme.syntax, }}>
            <h1>Context APP</h1>
            <div onClick={toggleAuth}>{isAuthetication ? 'Logged in' : 'Logged out'}</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default NavBar;