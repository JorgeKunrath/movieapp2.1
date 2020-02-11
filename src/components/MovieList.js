import React, { PureComponent } from 'react';
import api from '../services/api';
import MovieItem from './MovieItem';
import MovieDetails from './MovieDetails';

export default class MovieList extends PureComponent {
  state = {
    movies: [],
    page: 0,
    totalPages: 1,
    loader: false,
    modalMovie: null
  };

  // recebe a lista de gêneros e atualiza o state
  componentWillReceiveProps(newProps) {
    {
      this.setState({
        movies: [],
        page: 0,
        totalPages: 1,
        loader: false,
        modalMovie: null
      }, () => {
        this.loadMore();
      })
    }
  }

  // Após ter o componente montado executa o loadMore
  componentDidMount() {
    this.loadMore();
  }

  renderMovies() {
    const { movies } = this.state;

    return movies.map(movie => <MovieItem
      key={`movie-${movie.id}`}
      onClick={this.showModal}
      movie={movie}
    />);
  }

  // 1- verifica se a categoria é diferente da atual, se for diferente muda os parâmetros da query
  // 2- define o State como loader true (altera o aspecto do botão e desativa)
  // 3- realiza a busca na API, filtrando por gênero se tiver, e salva os dados
  // 4- altera o State com base no State antigo mais o da nova requisição
  // 5- define loader como false.
  loadMore = () => {
    const {
      page: currentPage
    } = this.state;

    const {
      category
    } = this.props;

    let genre = category ? `genre=${category}&` : '';

    this.setState({ loader: true });
    api.get(`list_movies.json?${genre}page=${currentPage + 1}&sort_by=year&order_by=DESC`).then(({ data: { data } }) => {
      const {
        movie_count,
        limit,
        page_number: page,
        movies,
      } = data;

      this.setState({
        movies: [...this.state.movies, ...movies],
        totalPages: Math.ceil(movie_count / limit),
        page,
        loader: false
      });
    })
  }

  // renderiza texto de carregamento
  renderLoader() {
    return (
      <div className="movieList__end">carregando...</div>
    );
  }

  // botão de carregar mais itens
  // desativa e troca o texto com base no estado do loader
  renderLoadMore() {
    const { loader } = this.state;

    return <button onClick={this.loadMore} disabled={loader}>
      {loader ? 'carregando...' : 'carregar mais'}
    </button>
  }

  showModal = modalMovie => {
    this.setState({ modalMovie })
  }

  closeModal = () => {
    this.setState({ modalMovie: null })
  }

  render() {
    const { movies, totalPages, page, modalMovie } = this.state;
    const hasMovies = movies.length > 0;

    return (
      <>
        <section className="movieList">
          {hasMovies ? this.renderMovies() : this.renderLoader()}

          {page < totalPages && page != 0 && this.renderLoadMore()}

        </section>

        {modalMovie && <MovieDetails movie={modalMovie} onClose={this.closeModal} />}
      </>
    );
  }
}