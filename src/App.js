import React from 'react';

const movieList = [
  {
    id: 1,
    name: '벌새',
    img:
      'https://t1.daumcdn.net/movie/2ca8b0c23d864ca4b8e94ae8230d8a1b1564966791763',
  },
  {
    id: 2,
    name: '고스트 버스터즈(2016)',
    img:
      'https://upload.wikimedia.org/wikipedia/ko/5/58/%EA%B3%A0%EC%8A%A4%ED%8A%B8%EB%B2%84%EC%8A%A4%ED%84%B0%EC%A6%88_%282016%EB%85%84_%EC%98%81%ED%99%94%29_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg',
  },
];

function Movie(props) {
  return (
    <div>
      <h3>This is my favorite movie, {props.fav}! </h3>
      <img src={props.image} width='200px' height='300px' alt={props.fav} />
    </div>
  );
}

function App() {
  return (
    <div>
      {movieList.map((current) => (
        <Movie fav={current.name} image={current.img} key={current.id} />
      ))}
    </div>
  );
}

export default App;
