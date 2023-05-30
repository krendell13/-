import React, {PureComponent, Component} from 'react';
import {Container, Tab, Nav, Row, Col, Button, Accordion} from 'react-bootstrap';
import "./TimeTable.css";

export default class TimeTable extends Component {
    render() {
       const page = localStorage.getItem('page');
        return (
          <div className="time-page">

          <div className="time-bg">

            <div className="time-bg__header">
              <a href="/">
              <svg className="time-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M24 10.5H5.745L14.13 2.115L12 0L0 12L12 24L14.115 21.885L5.745 13.5H24V10.5Z" fill="white"/>
</svg>
</a>
            </div>

            <div className="time-bg__body">
              <h1 className="time-title">Календарный учебный план на 2022 год</h1>
            </div> 
          </div>
          
          <div className="time-content">
            <Container>
              <div className="time-study">
              <Nav.Link className="time-study__link" href="https://disk.yandex.ru/i/xgz37O1EWniCsA"><img className="time-study__image" src={require('../Img/Time/time-content-image.jpg')}/></Nav.Link>
              </div>

              <h3 className="time-content-subtitle">порядок обучения и аттестации</h3>
                                    <div className="time-subcontent">
                                    <div className="time-subcontent-wrap">
                                        <div className="time-subcontent-item">
                                            <img className="time-subcontent-image"
                                                 src={require('../Img/About/phone-call.png')}/>
                                            <p className="time-subcontent-text">Заказать звонок</p>
                                        </div>
                                        <div className="time-subcontent-item">
                                            <img className="time-subcontent-image"
                                                 src={require('../Img/About/contract.png')}/>
                                            <p className="time-subcontent-text">Заполнить заявку</p>
                                        </div>
                                        <div className="time-subcontent-item">
                                            <img className="time-subcontent-image"
                                                 src={require('../Img/About/education.png')}/>
                                            <p className="time-subcontent-text">Пройти обучение и аттестацию</p>
                                        </div>
                                        <div className="time-subcontent-item">
                                            <img className="time-subcontent-image"
                                                 src={require('../Img/About/certificate.png')}/>
                                            <p className="time-subcontent-text">Получить удостоверение
                                                установленного образца</p>
                                        </div>
                                        
                                    </div>
                                    <Button href="/#subscribe" className="time-button">Записаться на
                                        приём</Button>
                                        </div>
                                        <div className="time-space"></div>
                                    
            </Container>
          </div>

          
          
          </div>
          

        )
    }
  }