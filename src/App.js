import React, { useState } from 'react';
import CategoryList from './components/CategoryList';
import MovieList from './components/MovieList';

function App() {
  const [category, setCategory] = useState(null);

  const changeCategoryTo = name => setCategory(name);

  return (
    <div className="wrapper flex">
      <CategoryList onClick={changeCategoryTo} />
      <MovieList category={category} />
    </div>
  );
}

export default App;
