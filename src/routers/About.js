import React from 'react';
import './About.css';

function About() {
  return (
    <div className='aboutBox'>
      <img
        src='https://t1.daumcdn.net/movie/2ca8b0c23d864ca4b8e94ae8230d8a1b1564966791763'
        alt='벌새 포스터'
      />
      <div className='myScript'>
        "언니, 그건 지난 학기잖아요." - 영화 &lt;벌새&gt;{' '}
      </div>
    </div>
  );
}

export default About;
