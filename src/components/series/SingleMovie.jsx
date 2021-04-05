import { Col } from 'react-bootstrap';
// import styled from 'styled-components';

const SingleMovie = ({ image }) => {
  return (
    <Col md={3} className='mb-3'>
      {image ? (
        <img src={image.medium} alt='movie' className='img-fluid' />
      ) : null}
    </Col>
  );
};

export default SingleMovie;

// const StyledImg = styled.img`

// `
