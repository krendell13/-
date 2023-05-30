import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap';
import "./Contacts.css";

export default class Contacts extends Component {
  render() {
    return (
      <Container>
      <div className="contacts-item" id="contacts">
        <div className="contacts-item-left">
          <h1 className="contacts-title">Контакты</h1>
          <p className="contacts-subtitle">Ждём Ваших обращений по телефону, электронной почте или через нашу контактную форму</p>
          <div className="contacts-text-wrap">
            <svg className="contacts-icon" width="18" height="25" viewBox="0 0 18 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 0C4.02429 0 0 4.019 0 8.98819C0 14.3426 5.68286 21.7257 8.02286 24.5378C8.53714 25.1541 9.47571 25.1541 9.99 24.5378C12.3171 21.7257 18 14.3426 18 8.98819C18 4.019 13.9757 0 9 0ZM9 12.1983C8.14752 12.1983 7.32995 11.8601 6.72716 11.258C6.12436 10.656 5.78571 9.83955 5.78571 8.98819C5.78571 8.13682 6.12436 7.32033 6.72716 6.71833C7.32995 6.11632 8.14752 5.77812 9 5.77812C9.85248 5.77812 10.67 6.11632 11.2728 6.71833C11.8756 7.32033 12.2143 8.13682 12.2143 8.98819C12.2143 9.83955 11.8756 10.656 11.2728 11.258C10.67 11.8601 9.85248 12.1983 9 12.1983Z" fill="#585858"/>
</svg>      
            <p className="contacts-description">
              <Nav.Link className="contacts-link" href="https://yandex.ru/maps/-/CCURz6rKsC">
              127204, г. Москва, Долгопрудненское шоссе, д. 3.
              </Nav.Link></p>
          </div>
          <div className="contacts-text-wrap">
            <svg className="contacts-icon" width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.8948 8.62404H20C20 3.70779 15.9232 0 10.5159 0V1.91667C14.7917 1.91667 17.8948 4.73704 17.8948 8.62404Z" fill="#585858"/>
<path d="M10.5265 5.74998C12.7401 5.74998 13.6843 6.6096 13.6843 8.62498H15.7895C15.7895 5.53435 13.9211 3.83331 10.5265 3.83331V5.74998ZM14.1285 10.9662C13.9262 10.7988 13.6605 10.7096 13.3873 10.7172C13.1141 10.7249 12.8548 10.829 12.6643 11.0074L10.1454 13.3659C9.5391 13.2604 8.32017 12.9145 7.06546 11.775C5.81074 10.6317 5.43074 9.5191 5.31811 8.97094L7.9065 6.67668C8.10272 6.50335 8.21716 6.2673 8.22561 6.01851C8.23406 5.76971 8.13584 5.52768 7.95176 5.34364L4.06234 1.44993C3.87818 1.26532 3.62222 1.15333 3.34883 1.13777C3.07544 1.1222 2.80615 1.20427 2.59815 1.36656L0.313977 3.15002C0.131991 3.3163 0.0233697 3.53762 0.00871771 3.77198C-0.00707152 4.01156 -0.30812 9.68681 4.52549 14.0894C8.74227 17.9275 14.0243 18.2083 15.479 18.2083C15.6916 18.2083 15.8222 18.2026 15.8569 18.2006C16.1143 18.1875 16.3572 18.0882 16.539 17.9218L18.4969 15.8412C18.6752 15.652 18.7656 15.4069 18.7487 15.158C18.7318 14.9091 18.609 14.676 18.4063 14.5082L14.1285 10.9662Z" fill="#585858"/>
</svg>
            <p className="contacts-description">
              <Nav.Link className="contacts-link" href="tel:+74994902749">
              + 7(499)49-027-49 
              
              </Nav.Link>
              <Nav.Link className="contacts-link">(время работы с 09:00 до 18:00)</Nav.Link>
              </p>
          </div>
          <div className="contacts-text-wrap">
            <svg className="contacts-icon" width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.9 0 0.00999999 0.9 0.00999999 2L0 14C0 15.1 0.9 16 2 16H18C19.1 16 20 15.1 20 14V2C20 0.9 19.1 0 18 0ZM17.6 4.25L10.53 8.67C10.21 8.87 9.79 8.87 9.47 8.67L2.4 4.25C2.29973 4.19371 2.21192 4.11766 2.14189 4.02645C2.07186 3.93525 2.02106 3.83078 1.99258 3.71937C1.96409 3.60796 1.9585 3.49194 1.97616 3.37831C1.99381 3.26468 2.03434 3.15581 2.09528 3.0583C2.15623 2.96079 2.23632 2.87666 2.33073 2.811C2.42513 2.74533 2.53187 2.69951 2.6445 2.6763C2.75712 2.65309 2.87328 2.65297 2.98595 2.67595C3.09863 2.69893 3.20546 2.74453 3.3 2.81L10 7L16.7 2.81C16.7945 2.74453 16.9014 2.69893 17.014 2.67595C17.1267 2.65297 17.2429 2.65309 17.3555 2.6763C17.4681 2.69951 17.5749 2.74533 17.6693 2.811C17.7637 2.87666 17.8438 2.96079 17.9047 3.0583C17.9657 3.15581 18.0062 3.26468 18.0238 3.37831C18.0415 3.49194 18.0359 3.60796 18.0074 3.71937C17.9789 3.83078 17.9281 3.93525 17.8581 4.02645C17.7881 4.11766 17.7003 4.19371 17.6 4.25Z" fill="#585858"/>
</svg>      
            <div className="contacts-span-wrap">
            <p className="contacts-description">
              <Nav.Link className="contacts-link" href="https://t.me/promnado">
              t.me/promnado
              </Nav.Link>
              </p>
            <p className="contacts-description">
              <Nav.Link className="contacts-link" href="mailto:info@promnado.ru">
              info@promnado.ru
              </Nav.Link>
              </p>
            </div>
          </div>
        </div>
        <div className="contacts-item-right">
          <Nav.Link href="https://yandex.ru/map-widget/v1/-/CCURzFcgsC">
            <img className="contacts-image-big" src={require('../Img/map.jpg')} />
            </Nav.Link>  
        </div>
      </div>
      </Container>
    )
  }
}
