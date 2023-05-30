import React, { Component } from 'react'
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import "./Subscribe.css";

export default class Subscribe extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: false,
      message: ''
    }
  }

    sendEmailHandler(e){
      e.preventDefault();
      const {name, phone, email, message} = this.state;
      fetch('/send.php', {
        method: 'POST',
        body: JSON.stringify({
          name, phone, email, message
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
      <div className="subscribe-item">
        <Container>
        <Modal show={status === 'ok'}>
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body>Ваше сообщение отправлено</Modal.Body>
        <Modal.Footer>
          <Button className="subscribe-modal-button" variant="secondary" onClick={() => this.setState({...this.state, status: ''})}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
        <div className="subscribe-space">
          <div className="subscribe-left">
            <img className="subscribe-image" src={require('../Img/vindsor.png')} />
          </div>
          <div className="subscribe-right">
            <h1 className="subscribe-right-title">Заполните заявку мы ответим!</h1>
            <Form className="subscribe-right-wrap" onSubmit={this.sendEmailHandler.bind(this)}>
          <Form.Group controlId="formBasicName" >
            <Form.Control type="name" placeholder="ФИО" required
                          onChange={e => this.setValue('name', e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Email" required
                          onChange={e => this.setValue('email', e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPhone">
            <Form.Control type="phone" placeholder="Телефон" required
                          onChange={e => this.setValue('phone', e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <InputGroup>
        <Form.Control className="message-muted" as="textarea" aria-label="With textarea" 
                      placeholder="Сообщение" onChange={e => this.setValue('message', e.target.value)}
        />
      </InputGroup>
          <Button className="subscribe-right-btn" type="submit" id="subscribe">Отправить</Button>
      </Form>
          </div>
        </div>
        </Container>
      </div>
    )
  }
}
