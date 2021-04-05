import React from 'react';
import { Form, Button } from 'react-bootstrap';

class MyForm extends React.Component {
  state = {
    title: '',
  };

  componentDidMount() {
    console.log('mounted');
  }

  // componentDidUpdate() {
  //   console.log('update');
  // }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setAppQuerie(this.state.title);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    this.props.setAppQuerie(this.state.title);
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            onChange={this.handleChange}
            value={this.state.title}
            type='text'
            name='title'
            placeholder='Enter Title'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}

export default MyForm;
