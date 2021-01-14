import React from 'react';
import './Detail.css';

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    //console.log(location.state);
    if (location.state === undefined) {
      history.push('/');
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className='movieRoot'>
          <div className='movieDetails'>
            <div>
              <img src={location.state.poster} alt='영화 포스터' />
            </div>
            <section>
              <div>{location.state.title}</div>
              <div>{location.state.summary}</div>
            </section>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
