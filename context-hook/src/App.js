import React from 'react';
import NavBar from './components/NavBar';
import BookList from './components/BookList';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import AuthContextProvider from './contexts/AuthContext';
import BookContextProvider from './contexts/BookContext';


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <NavBar></NavBar>
          <BookContextProvider>
            <BookList />
          </BookContextProvider>
          <ThemeToggle />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
