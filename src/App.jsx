import { useState } from 'react';
import Home from './pages/Home';
import './App.css';
import Starfield from './components/Starfield';

const App = () => {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('portfolio-theme', nextTheme);
    setTheme(nextTheme);
  };

  return (
    <div className="portfolio-app" data-theme={theme}>
      <Starfield />
      <Home theme={theme} toggleTheme={toggleTheme} />
    </div>
  );
}

export default App;
