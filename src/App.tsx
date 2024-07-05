import React from 'react';
import Forecast from './components/Forecast';
import Search from './components/Search';
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
  const { forecast, options, term, onOptionSelect, onSubmit, onInputChange } = useForecast();

  return (
    <main className="flex justify-center items-center bg-gradient-to-br from-purple-400 via-sky-400 to-red-400 min-h-screen w-full">
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
