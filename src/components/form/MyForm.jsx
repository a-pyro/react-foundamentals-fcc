import React from 'react';
import { Form, Button } from 'react-bootstrap';

class MyForm extends React.Component {
  state = {
    title: '',
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.setAppQuery(this.state.title);
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Form className='w-50' onSubmit={this.handleSubmit}>
        <Form.Group controlId='formBasicEmail'>
          <Form.Control
            className='text-center'
            onChange={this.handleChange}
            value={this.state.title}
            type='text'
            name='title'
            placeholder='Enter a Title'
          />
        </Form.Group>
      </Form>
    );
  }
}

export default MyForm;
