import React, { useEffect, useState } from 'react'
import btndark from '../../assets/img/btn-dark.png';
import btnlight from '../../assets/img/btn-light.png';

const DarkMode = () => {

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') || 'light'
  );

  useEffect(() => {
    const element = document.documentElement;

    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="relative w-12 h-12">

      {/* Dark icon */}
      <img
        src={btndark}
        alt="dark mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer absolute right-0 z-10 transition-all duration-300
          ${theme === 'dark' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `}
      />

      {/* Light icon */}
      <img
        src={btnlight}
        alt="light mode"
        onClick={toggleTheme}
        className={`w-12 cursor-pointer transition-all duration-300
          ${theme === 'light' ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
        `}
      />

    </div>
  );
};

export default DarkMode;
