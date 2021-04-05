import React from 'react';
import { Alert, Row, Spinner } from 'react-bootstrap';
import SingleMovie from './SingleMovie';

const Series = ({ series, isLoading, query }) => {
  if (isLoading) {
    return (
      <Row className='justify-content-center'>
        <Spinner animation='grow' variant='info' />
      </Row>
    );
  } else {
    return (
      <Row>
        {series.map((film) => (
          <SingleMovie key={film.show.id} {...film.show} />
        ))}
      </Row>
    );
  }
};

export default Series;
