import React from 'react';
import './App.css';

import { Button, Container, Jumbotron } from 'react-bootstrap';
import Intro from './components/intro/Intro';
import MyForm from './components/form/MyForm';
import Series from './components/series/Series';

class App extends React.Component {
  state = {
    series: [],
    querie: '',
    isLoading: true,
  };

  fetchSeries = async (serie) => {
    this.setState({ isLoading: true });
    const response = await fetch(
      `http://api.tvmaze.com/search/shows?q=${serie}`
    );
    const data = await response.json();
    console.log(data);
    this.setState({ series: data });
    this.setState({ isLoading: false });
  };

  setAppQuerie = (querie) => {
    this.setState({ querie: querie });
  };

  componentDidMount = () => {
    this.fetchSeries(this.state.querie);
  };

  componentDidUpdate(prevProp, prevState) {
    if (prevState.querie !== this.state.querie)
      this.fetchSeries(this.state.querie);
  }

  render() {
    return (
      <Container fluid className='App'>
        <Jumbotron className='bg-dark'>
          <Intro />
          <MyForm setAppQuerie={this.setAppQuerie} />
        </Jumbotron>
        <Series
          series={this.state.series}
          querie={this.state.querie}
          isLoading={this.state.isLoading}
        />
      </Container>
    );
  }
}

export default App;
