import React, { Component } from 'react';
import { Container, Nav  } from 'react-bootstrap';
import "./Popular.css";


export default class Popular extends Component {
  render() {
    return (
      <Container>
      <div className="popular-header">
              <h1 className="popular-title">Популярные направления обучения</h1>
              <a href="/courses">
              <svg className="popular-arrow"width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 11.375H19.7763L10.6925 2.29125L13 0L26 13L13 26L10.7088 23.7087L19.7763 14.625H0V11.375Z" fill="#C3C3C3" hover="A0A0A0"/>
</svg>
</a>
        </div>

      <div className="popular-courses">

        <div className="popular-big">

          <div className="popular-big-item">
          <Nav.Link href="https://dpo2022.ru/">
            <img className="popular-image-big" src={require('../Img/sodzan.jpg')} />
            <div className="popular-big-description">
            <h1 className="popular-big-title">dpo2022.ru</h1>
            <h1 className="popular-big-subtitle">Содействие занятости</h1>
            </div>
            </Nav.Link>  
          
          </div>


          <div className="popular-big-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'first')} href="/courses">
            <img className="popular-image-big" src={require('../Img/pb.jpg')} />
            <div className="popular-big-description">
            <h1 className="popular-big-title">Безопасность</h1>
            <h1 className="popular-big-subtitle">Промышленная безопасность</h1>
            </div>
            </Nav.Link>  
          
          </div>
          
          <div className="popular-big-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'second')} href="/courses">
            <img className="popular-image" src={require('../Img/elb.jpg')} />
            <div className="popular-big-description">
            <h1 className="popular-big-title">Безопасность</h1>
            <h1 className="popular-big-subtitle">Электробезопасность</h1>
            </div>
          </Nav.Link>
          </div>
        </div>
        
        <div className="popular-middle">

        <div className="popular-middle-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'third')} href="/courses">
            <img className="popular-image" src={require('../Img/gocho.jpg')} />
            <div className="popular-middle-description">
            <h1 className="popular-middle-title">Безопасность</h1>
            <h1 className="popular-middle-subtitle">Гражданская оборона и защита от ЧС</h1>
            </div>
          </Nav.Link>
        </div>

        <div className="popular-middle-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'fourth')} href="/courses">
            <img className="popular-image" src={require('../Img/rp.jpg')} />
            <div className="popular-middle-description">
            <h1 className="popular-middle-title">Безопасность</h1>
            <h1 className="popular-middle-subtitle">Рабочие профессии</h1>
            </div>
          </Nav.Link>
        </div>

        <div className="popular-middle-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'fifth')} href="/courses">
            <img className ="popular-image" src={require('../Img/first-help.jpg')} />
            <div className="popular-middle-description">
            <h1 className="popular-middle-title">Безопасность</h1>
            <h1 className="popular-middle-subtitle">Первая помощь</h1>
            </div>
          </Nav.Link>
        </div>

        </div>

        <div className="popular-last">
        <div className="popular-last-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'sixth')} href="/courses">
            <img className="popular-image" src={require('../Img/ot.jpg')} />
            <div className="popular-last-description">
            <h1 className="popular-last-title">Безопасность</h1>
            <h1 className="popular-last-subtitle">Охрана труда</h1>
          </div>
          </Nav.Link>
        </div>
        <div className="popular-last-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'seventh')} href="/courses">
            <img className="popular-image" src={require('../Img/pozhbez.jpg')} />
            <div className="popular-last-description">
            <h1 className="popular-last-title">Безопасность</h1>
            <h1 className="popular-last-subtitle">Пожарная безопасность</h1>
          </div>
          </Nav.Link>
        </div>
        <div className="popular-last-item">
          <Nav.Link onClick={() => localStorage.setItem('page', 'eighth')} href="/courses">
            <img className="popular-image" src={require('../Img/ecologbez.jpg')} />
            <div className="popular-last-description">
            <h1 className="popular-last-title">Безопасность</h1>
            <h1 className="popular-last-subtitle">Экологическая безопасность</h1>
          </div>
          </Nav.Link>
        </div>
        </div>
        
      </div>
      </Container>
    )
  }
}
