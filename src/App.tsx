import React, { useEffect, useState } from 'react';
import Forecast from './components/Forecast';
import Search from './components/DropdownSearch';
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
  // Check the system's preferred color scheme
  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

  // Initialize the theme based on local storage or system preference
  const [theme, setTheme] = useState<string>(
    localStorage.getItem('theme') || (systemPrefersDark ? 'dark' : 'light')
  );

  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast();

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-purple-400 via-sky-400 to-red-400 dark:bg-gray-700 rounded min-h-screen w-full">
      <button
        className="absolute top-4 right-4 p-2 bg-gray-300 dark:bg-gray-700 rounded"
        onClick={toggleTheme}
      >
        Toggle Theme
      </button>
      {forecast ? (
        <Forecast data={forecast} />
      ) : (
        <Search
          term={term}
          options={options}
          onInputChange={onInputChange}
          onOptionSelect={onOptionSelect}
          onSubmit={onSubmit}
        />
      )}
    </main>
  );
};

export default App;
