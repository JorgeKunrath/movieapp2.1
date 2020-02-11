import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MovieItem extends Component {
  static propTypes = {
    movie: PropTypes.shape({
      title: PropTypes.string.isRequired,
      medium_cover_image: PropTypes.string.isRequired,
    }),
    src: PropTypes.string,
  };

  render() {
    const { movie, onClick } = this.props;

    return (
      <article className="movieList__cover light" onClick={() => onClick(movie)}>
        <img src={movie.medium_cover_image} alt={movie.title} />
      </article>
    );
  }
}

