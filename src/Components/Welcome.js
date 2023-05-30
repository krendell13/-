import React, { Component } from 'react';
import { Container, NavDropdown } from 'react-bootstrap';
import "./Welcome.css"; 

export default class Welcome extends Component {
  render() {
    return (
      <Container>
      <div className="welcome-item" id="welcome">
        <div className="welcome-text">
          <h1 className="welcome-title">добро пожаловать</h1>
          <h1 className="welcome-subtitle">В  АНО ДПО ЦПК ПАРТНЕР!</h1>
          <h2 className="wel-text">мы занимаемся обучением и подготовкой кадров для юридических лиц по всей территории России</h2>
          <div className="welcome-subtexts">
            <div className="welcome-button">
            <NavDropdown.Item className="welcome-navdrop" onClick={() => localStorage.setItem('page', 'second')} href="/about"><h2 className="welcome-btn">Подробнее</h2></NavDropdown.Item>
            <a href="/about">
            <svg className="welcome-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 7.875H13.6913L7.4025 1.58625L9 0L18 9L9 18L7.41375 16.4138L13.6913 10.125H0V7.875Z" fill="#006DF3"/>
</svg>
</a>
</div>
            <div className="welcome-subtext">
            <p className="wel-description">Выбирая АНО ДПО «ЦПК «ПАРТНЕР» в качестве партнера, вы действительно получите знания и умения, которые сможете применять на практике, потому что мы обучаем лучших!</p> 
            </div>

          </div>
        </div>
        <img className="welcome-image" src={require('../Img/welcome-bg.png')} />
      </div>
      </Container>
    )
  }
}
