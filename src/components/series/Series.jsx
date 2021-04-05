import React from 'react';
import { Alert, Row, Spinner } from 'react-bootstrap';
import SingleMovie from './SingleMovie';

const Series = ({ series, isLoading, querie }) => {
  if (isLoading) {
    return (
      <Row className='justify-content-center'>
        <Spinner animation='grow' variant='info' />
      </Row>
    );
  }

  return series.length === 0 ? (
    <Row className='justify-content-center'>
      <Alert variant='info'>Search Something</Alert>
    </Row>
  ) : series.length === 0 && querie.length > 0 ? (
    <Row className='justify-content-center'>
      <Alert variant='warning'>No matchs for {querie}</Alert>
    </Row>
  ) : (
    <Row>
      {series.map((film) => (
        <SingleMovie key={film.show.id} {...film.show} />
      ))}
    </Row>
  );
};

export default Series;
