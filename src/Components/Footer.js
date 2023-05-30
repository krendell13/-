import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap';
import './Footer.css'
import  logo  from './footer-logo.png';
import  logogk  from './gkpromnado.png';

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-bg">
      <Container>
      <div className="footer-item">
        <div className="footer-left">
          <div className="footer-left-item">
            <Navbar.Brand href="/" >
            <img
                src={logo}
                heifht="95"
                width="150"
                className="d-inline-block align-top footer-logo"
                alt="Logo"
            />
          </Navbar.Brand>
          </div>
          <div className="footer-left-item">
            <h1 className="footer-item-title">Направления</h1>
             <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'first')} href="/courses">
                Промышленная безопасность
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'second')} href="/courses">
                Электробезопасность
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'third')} href="/courses">
                ГО и ЧС
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'fourth')} href="/courses">
                Рабочие профессии
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'fifth')} href="/courses">
                Первая помощь
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'sixth')} href="/courses">
                Охрана труда
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'seventh')} href="/courses">
                Пожарная безопасность
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'eighth')} href="/courses">
                Экологическая безопасность
              </Nav.Link>
              </p>   
          </div>
          <div className="footer-left-item">
            <h1 className="footer-item-title">Документация</h1>
             <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'second')} href="/about">
                Учредители
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'fifth')} href="/about">
                Структура АНО ДПО ЦПК ПАРТНЕР
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'sixth')} href="/about">
                Уставные документы
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'seventh')} href="/about">
                Образовательные стандарты
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'sixteenth')} href="/about">
                Образцы заявок
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'nineteenth')} href="/about">
                Образцы удостоверений
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'eighth')} href="/about">
                Кадровое обеспечение
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" onClick={() => localStorage.setItem('page', 'ninth')} href="/about">
                Руководство
              </Nav.Link>
              </p>                 
          </div>
          <div className="footer-left-item">
            <h1 className="footer-item-title">Доп.Информация</h1>
             <p className="footer-text">
              <Nav.Link className="footer-link" href="#welcome">
                О нас
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" href="#contacts">
                Связаться с нами
              </Nav.Link>
              </p>
              <p className="footer-text">
              <Nav.Link className="footer-link" href="#ourpicked">
                Нас выбирают
              </Nav.Link>
              </p>
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-icon">
            <Nav.Link className="footer-link" href="https://api.whatsapp.com/send/?phone=79261452546">
                <svg width="22" height="22" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00401338 20L1.35601 15.032C0.465151 13.5049 -0.00289063 11.768 1.34322e-05 10C1.34322e-05 4.477 4.47701 0 10 0C15.523 0 20 4.477 20 10C20 15.523 15.523 20 10 20C8.23279 20.0029 6.49667 19.5352 4.97001 18.645L0.00401338 20ZM6.39101 5.308C6.26188 5.31602 6.13569 5.35003 6.02001 5.408C5.91153 5.46943 5.81251 5.54622 5.72601 5.636C5.60601 5.749 5.53801 5.847 5.46501 5.942C5.09542 6.423 4.89662 7.01342 4.90001 7.62C4.90201 8.11 5.03001 8.587 5.23001 9.033C5.63901 9.935 6.31201 10.89 7.20101 11.775C7.41501 11.988 7.62401 12.202 7.84901 12.401C8.9524 13.3725 10.2673 14.073 11.689 14.447L12.258 14.534C12.443 14.544 12.628 14.53 12.814 14.521C13.1053 14.506 13.3896 14.4271 13.647 14.29C13.813 14.202 13.891 14.158 14.03 14.07C14.03 14.07 14.073 14.042 14.155 13.98C14.29 13.88 14.373 13.809 14.485 13.692C14.568 13.606 14.64 13.505 14.695 13.39C14.773 13.227 14.851 12.916 14.883 12.657C14.907 12.459 14.9 12.351 14.897 12.284C14.893 12.177 14.804 12.066 14.707 12.019L14.125 11.758C14.125 11.758 13.255 11.379 12.724 11.137C12.668 11.1126 12.608 11.0987 12.547 11.096C12.4786 11.089 12.4095 11.0967 12.3443 11.1186C12.2791 11.1405 12.2193 11.1761 12.169 11.223V11.221C12.164 11.221 12.097 11.278 11.374 12.154C11.3325 12.2098 11.2754 12.2519 11.2098 12.2751C11.1443 12.2982 11.0733 12.3013 11.006 12.284C10.9409 12.2666 10.877 12.2445 10.815 12.218C10.691 12.166 10.648 12.146 10.563 12.109L10.558 12.107C9.98592 11.8572 9.45624 11.5198 8.98801 11.107C8.86201 10.997 8.74501 10.877 8.62501 10.761C8.23159 10.3842 7.88873 9.95801 7.60501 9.493L7.54601 9.398C7.50364 9.33416 7.46937 9.2653 7.44401 9.193C7.40601 9.046 7.50501 8.928 7.50501 8.928C7.50501 8.928 7.74801 8.662 7.86101 8.518C7.9551 8.39832 8.04289 8.27382 8.12401 8.145C8.24201 7.955 8.27901 7.76 8.21701 7.609C7.93701 6.925 7.64701 6.244 7.34901 5.568C7.29001 5.434 7.11501 5.338 6.95601 5.319C6.90201 5.313 6.84801 5.307 6.79401 5.303C6.65972 5.29633 6.52515 5.29766 6.39101 5.307V5.308Z" fill="white"/>
</svg>

              </Nav.Link>
          </div>
          <div className="footer-icon">
            <Nav.Link className="footer-link" href="https://vk.com/promnado">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0C4.92479 0 0 4.92479 0 11C0 17.0752 4.92479 22 11 22C17.0752 22 22 17.0752 22 11C22 4.92479 17.0752 0 11 0ZM15.2304 12.4105C15.2304 12.4105 16.2032 13.3707 16.4427 13.8165C16.4496 13.8256 16.453 13.8348 16.4553 13.8394C16.5527 14.0032 16.5756 14.1304 16.5275 14.2255C16.4473 14.3836 16.1723 14.4616 16.0783 14.4684H14.3596C14.2404 14.4684 13.9906 14.4375 13.6881 14.229C13.4555 14.0662 13.2264 13.7993 13.0029 13.5392C12.6695 13.1519 12.3807 12.8173 12.0897 12.8173C12.0527 12.8172 12.016 12.823 11.9808 12.8345C11.7608 12.9055 11.479 13.2195 11.479 14.0559C11.479 14.3172 11.2727 14.4673 11.1272 14.4673H10.34C10.0719 14.4673 8.6751 14.3733 7.4376 13.0682C5.92281 11.4698 4.55927 8.26375 4.54781 8.23396C4.46187 8.02656 4.63948 7.91542 4.83312 7.91542H6.56906C6.80052 7.91542 6.87615 8.05635 6.92885 8.18125C6.99073 8.32677 7.2176 8.90542 7.59 9.55625C8.19385 10.6173 8.56396 11.0481 8.86073 11.0481C8.91638 11.0475 8.97103 11.0333 9.02 11.0069C9.40729 10.7915 9.3351 9.41073 9.31792 9.12427C9.31792 9.07042 9.31677 8.50667 9.11854 8.23625C8.97646 8.04031 8.73469 7.96583 8.58802 7.93833C8.64738 7.85642 8.72559 7.79 8.81604 7.74469C9.08187 7.61177 9.56083 7.59229 10.0364 7.59229H10.301C10.8167 7.59917 10.9496 7.6324 11.1364 7.67937C11.5145 7.7699 11.5225 8.01396 11.4893 8.84927C11.479 9.08646 11.4686 9.35458 11.4686 9.67083C11.4686 9.73958 11.4652 9.81292 11.4652 9.89083C11.4537 10.3159 11.44 10.7983 11.7402 10.9966C11.7794 11.0211 11.8246 11.0342 11.8708 11.0344C11.9751 11.0344 12.2891 11.0344 13.1393 9.57573C13.4015 9.10623 13.6293 8.61836 13.821 8.11594C13.8382 8.08614 13.8886 7.99448 13.9482 7.95896C13.9922 7.93654 14.041 7.92514 14.0903 7.92573H16.131C16.3533 7.92573 16.5057 7.95896 16.5344 8.0449C16.5848 8.18125 16.5252 8.59719 15.5936 9.85875L15.1777 10.4076C14.3332 11.5145 14.3332 11.5706 15.2304 12.4105Z" fill="white"/>
</svg>
              </Nav.Link>
          </div>
          <div className="footer-icon">
            <Nav.Link className="footer-link" href="https://t.me/promnado">
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 0C4.92525 0 0 4.92525 0 11C0 17.0748 4.92525 22 11 22C17.0748 22 22 17.0748 22 11C22 4.92525 17.0748 0 11 0ZM16.4028 7.53592L14.597 16.0426C14.4641 16.6457 14.1048 16.7924 13.6033 16.5083L10.8533 14.4824L9.52783 15.7603C9.3995 15.9253 9.20058 16.0307 8.97783 16.0307C8.976 16.0307 8.97508 16.0307 8.97325 16.0307L9.1685 13.2312L14.2652 8.62767C14.4852 8.43242 14.2157 8.3215 13.9233 8.51675L7.62667 12.4822L4.91333 11.6353C4.32667 11.4492 4.31017 11.0486 5.03708 10.7608L15.6393 6.67425C16.1324 6.49458 16.5614 6.79158 16.4019 7.53683L16.4028 7.53592Z" fill="white"/>
</svg>
              </Nav.Link>
          </div>
        </div>
      </div>
      <div className="footer-item-last">
        <div className="footer-item-wrap">
          <img
                src={logogk}
                heifht="95"
                width="90"
                className="footer-sublogo"
                alt="Logogk"
            />
            <div className="footer-item-text">
        © All Rights Reserved. Crafted by Promnado.
        </div>
        </div>
      </div>
      </Container>
      </div>
    )
  }
}
