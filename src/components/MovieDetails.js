import React, { Component } from 'react';

import { FaFileDownload } from 'react-icons/fa';




export default class MovieDetails extends Component {

  render() {
    const { movie } = this.props;
    return (
      <div className="movieModal" onClick={() => this.props.onClose()}>
        <span className="movieModal__closeButton" onClick={() => this.props.onClose()}></span>
        {/* ta vazando o clique de fechar para o inner :/ */}
        <div className="movieModal__inner">
          <div className="movieModal__cover">
            <img src={movie.medium_cover_image} />
          </div>
          <div className="movieModal__content">
            <h1>{movie.title}</h1>
            <div className="movieModal__meta">
              <span>{movie.year}</span>
              <span>{movie.runtime}min</span>
              <span>{movie.genres.join(', ')}</span>
            </div>
            <div className="movieModal__resume">
              <p>{movie.summary}</p>
            </div>
            <div className="movieModal__links">
              {/* falta corrigir pra um loop descente =>map */}
              <a href={movie.torrents[0].url} target="_blank" className="light">{movie.torrents[0].type}_{movie.torrents[0].quality}_{movie.torrents[0].size} <i><FaFileDownload /></i></a>
              <a href={movie.torrents[1].url} target="_blank" className="light">{movie.torrents[1].type}_{movie.torrents[1].quality}_{movie.torrents[1].size} <i><FaFileDownload /></i></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}