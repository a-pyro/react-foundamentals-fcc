import React, { Component } from 'react';
import Intro from '../intro/Intro';
import MyForm from '../form/MyForm';
import Series from '../series/Series';
import { Container, Jumbotron } from 'react-bootstrap';

export default class Home extends Component {
  state = {
    series: [],
    query: undefined,
    isLoading: true,
  };

  fetchSeries = async (serie = 'cia') => {
    this.setState({ isLoading: true });
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${serie}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ series: data });
    this.setState({ isLoading: false });
  };

  setAppQuery = (banana) => {
    this.setState({ query: banana });
  };

  componentDidMount = () => {
    console.log('mounted');
    this.fetchSeries(this.state.query);
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.query !== this.state.query)
      this.fetchSeries(this.state.query);
  }

  componentWillUnmount() {
    console.log('unmounted');
  }
  render() {
    return (
      <Container fluid className='App pt-2'>
        <Jumbotron className='bg-dark d-flex flex-column align-items-center'>
          <Intro />
          <MyForm setAppQuery={this.setAppQuery} />
        </Jumbotron>
        <Series
          series={this.state.series}
          query={this.state.query}
          isLoading={this.state.isLoading}
        />
      </Container>
    );
  }
}
