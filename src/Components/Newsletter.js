import React, { Component } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "./Newsletter.css"; 

export default class Newsletter extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      message: ''
    }
  }

    sendEmailHandler(e){
      e.preventDefault();
      const {name, phone, email} = this.state;
      fetch('/send.php', {
        method: 'POST',
        body: JSON.stringify({
          name, phone, email
        }),
        headers: {
	        'Content-Type': 'application/json'
	      },
      })
      .then(responce => responce.json())
      .then(data => {
        console.log(data);
        this.setState({
          ...this.state,
          error: false,
          status: data.status
        });
      })
      .catch((e) => {
        this.setState({
          ...this.state,
          error: true,
          status: e.message
        });
      });
    }

    setValue(field, value){
      const newState = {
        ...this.state
      };
      newState[field] = value;
      this.setState(newState);
    }

  render() {
    const {error, status} = this.state;
    return (
      <div className="newsletter-item">
        <Modal show={status === 'ok'}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>Ваше сообщение отправлено</Modal.Body>
        <Modal.Footer>
          <Button className="subscribe-modal-button"variant="secondary" onClick={() => this.setState({...this.state, status: ''})}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
        <Container>
        <h1 className="newsletter-title">Если возникли сложности с выбором программы обучения, наши специалисты готовы помочь в любое время</h1>
        <Form className="newsletter-form-wrap" onSubmit={this.sendEmailHandler.bind(this)}>
          <Form.Group className="newsletter-form-input" controlId="formBasicName">
            <Form.Control type="name" placeholder="Имя" required  onChange={e => this.setValue('name', e.target.value)} 
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="newsletter-form-input" controlId="formBasicPhone">
            <Form.Control type="phone" placeholder="Номер телефона" required onChange={e => this.setValue('phone', e.target.value)} required/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="newsletter-form-input" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required onChange={e => this.setValue('email', e.target.value)}/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button className="form-btn" type="submit">Отправить</Button>
      </Form>
      </Container>
      </div>
      
    )
  }
}
