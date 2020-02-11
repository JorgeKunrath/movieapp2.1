import React from 'react';

const list = [
  "Action",
  "Adult",
  "Adventure",
  "Animation",
  "Biography",
  "Comedy",
  "Crime",
  "Documentary",
  "Drama",
  "Family",
  "Fantasy",
  "Film Noir",
  "Game-Show",
  "History",
  "Horror",
  "Musical",
  "Music",
  "Mystery",
  "News",
  "Reality-TV",
  "Romance",
  "Sci-Fi",
  "Short",
  "Sport",
  "Talk-Show",
  "Thriller",
  "War",
  "Western"
];

export default function CategoryList({ onClick }) {
  return (
    <section className="category">
      <ul>
        {list.map(cat => (
          // preciso adicionar .active ao li selecionado
          <li className="light" key={`category-${cat}`} onClick={() => onClick(cat.toLocaleLowerCase())}>{cat}</li>
        ))}
      </ul>
    </section>
  );
}