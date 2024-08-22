import React, { createContext, useState } from 'react';

// Membuat ThemeContext
export const ThemeContext = createContext();

// Membuat ThemeProvider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // State untuk tema, default 'light'

  // Fungsi untuk toggle tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};


<!-- app -->
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext); // Mengakses tema dan fungsi toggle

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        transition: 'all 0.3s ease',
      }}
    >
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  );
};

export default App;