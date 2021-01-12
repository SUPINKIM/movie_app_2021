import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

function Movie({ id, title, year, rating, summary, poster, genres }) {
  function handleClick(e) {
    alert('더 많은 내용을 보시려면 로그인을 해주세요. :)');
  }
  return (
    <div className='movies_movie'>
      <div className='movieTitle'>{title} </div>
      <div className='movieYear'>{year}</div>
      <div className='movieRating'>rating : {rating}</div>
      <img className='moviePoster' src={poster} alt={title} />
      <div className='summary'>
        <div className='movieSummary'>{summary}</div>
        <div className='summaryBnt' onClick={handleClick}>
          ▼
        </div>
      </div>
      <div className='movieGenres'>
        <ul>
          {genres.map((genre, index) => (
            <li key={index} className='MovieGenres_genre'>
              #{genre}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
