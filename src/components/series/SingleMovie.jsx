import { useState, useEffect } from 'react';
import { Col } from 'react-bootstrap';
import { Link, withRouter } from 'react-router-dom';
// import styled from 'styled-components';

const SingleMovie = ({
  image,
  externals: { imdb, thetvdb, tvrage },
  history,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(history);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };
  // useEffect(() => {
  //   console.log('mounting');
  //   window.addEventListener('resize', handleResize);
  // });
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    // console.log('update:', windowWidth);
    return () => {
      // console.log('unmounting, bye');
      window.removeEventListener('resize', handleResize);
    };
  });
  if (!image) {
    return null;
  }

  //
  return (
    <Col xs={12} sm={4} md={3} className='mb-3'>
      <img
        onClick={() => history.push(`/details/${imdb}`)}
        src={windowWidth <= 576 ? image.original : image.medium}
        alt='movie'
        className='w-100'
      />
    </Col>
  );
};

export default withRouter(SingleMovie);
// const StyledImg = styled.img`

// `
