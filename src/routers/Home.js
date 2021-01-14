import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

//class component
class Home extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );
    this.setState({ movies, isLoading: false });
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div className='moviesBox'>
        {isLoading ? (
          <div className='loading'>Loading...</div>
        ) : (
          <div className='movies'>
            {movies.map((element) => {
              return (
                <Movie
                  id={element.id}
                  title={element.title}
                  year={element.year}
                  rating={element.rating}
                  summary={element.summary}
                  poster={element.medium_cover_image}
                  key={element.id}
                  genres={element.genres}
                />
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default Home;
