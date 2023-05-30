import React, {PureComponent, Component} from 'react';
import {Container, Tab, Nav, Row, Col, Button, Accordion} from 'react-bootstrap';
import "./Prices.css";

export default class Prices extends Component {
    render() {
       const page = localStorage.getItem('page');
        return (
          <div className="price-page">

          <div className="price-bg">

            <div className="price-bg__header">
              <a href="/">
              <svg className="price-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="white"/>
</svg>
</a>
            </div>

            <div className="price-bg__body">
              <h1 className="price-title">Стоимость обучения на 2022 год</h1>
            </div> 
          </div>
          
          <div className="price-content">
            <Container>
              <div className="price-study">
              <Nav.Link className="price-study__link" href="https://disk.yandex.ru/i/rwZf6QjKdKS_BA"><img className="price-study__image" src={require('../Img/Price/price-content-image.jpg')}/></Nav.Link>
              </div>

              <h3 className="price-content-subtitle">порядок обучения и аттестации</h3>
                                    <div className="prices-subcontent">
                                    <div className="prices-subcontent-wrap">
                                        <div className="prices-subcontent-item">
                                            <img className="prices-subcontent-image"
                                                 src={require('../Img/About/phone-call.png')}/>
                                            <p className="prices-subcontent-text">Заказать звонок</p>
                                        </div>
                                        <div className="prices-subcontent-item">
                                            <img className="prices-subcontent-image"
                                                 src={require('../Img/About/contract.png')}/>
                                            <p className="prices-subcontent-text">Заполнить заявку</p>
                                        </div>
                                        <div className="prices-subcontent-item">
                                            <img className="prices-subcontent-image"
                                                 src={require('../Img/About/education.png')}/>
                                            <p className="prices-subcontent-text">Пройти обучение и аттестацию</p>
                                        </div>
                                        <div className="prices-subcontent-item">
                                            <img className="prices-subcontent-image"
                                                 src={require('../Img/About/certificate.png')}/>
                                            <p className="prices-subcontent-text">Получить удостоверение
                                                установленного образца</p>
                                        </div>
                                        
                                    </div>
                                    <Button href="/#subscribe" className="prices-button"> Записаться на приём </Button>
                                        </div>
                                        <div className="prices-space"></div>
                                    
            </Container>
          </div>

          
          
          </div>
          

        )
    }
  }