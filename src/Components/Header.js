import React, {Component} from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap';
import logo from './Logo192.png';
import "./Header.css"

export default () => {
  return <Navbar collapseOnSelect expand="md">
    <Container>
      <Navbar.Brand href="/">
        <img
            src={logo}
            height="49"
            width="75"
            className="d-inline-block align-top nav-logo"
            alt="Logo"
        />
      </Navbar.Brand>


      <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
      <Navbar.Collapse style={{flexGrow: 0}} id="responsive-navbar-nav" menuVariant={"blue"}>
        <Nav className="mr-auto navbar-menu">
          {/* О центре */}
          <NavDropdown
              id="nav-dropdown-dark-example drop"
              title="О центре"
          >
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'first')} href="/about">Дата создания</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'second')} href="/about">Учредители</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'third')} href="/about">Место осуществления образовательной деятельности</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fourth')} href="/about">Официальный адрес сайта</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fifth')} href="/about">Структура АНО ДПО ЦПК ПАРТНЕР</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixth')} href="/about">Договор об оказании платных образовательных услугах</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixth')} href="/about">Лицензии, разрешения, свидетельства</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixth')} href="/about">Локальные нормативный акты</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixth')} href="/about">Уставные документы</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'seventh')} href="/about">Образовательные стандарты</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'eighth')} href="/about">Кадровое обеспечение образовательного центра</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'ninth')} href="/about">Руководство</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'tenth')} href="/about">Материально-техническое обеспечение и особенность
              процесса</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'eleventh')} href="/about">Стипендии и иные средства материальной поддержки</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'twelfth')} href="/about">Платные образовательные услуги</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'thirteenth')} href="/about">Финансово-хозяйственная деятельность</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fourteenth')} href="/about">Вакантные места для приема (перевода)</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fifteenth')} href="/about">Программы повышения квалификации</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixteenth')} href="/about">Образцы заявок</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'seventeenth')} href="/about">Предписания</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'eighteenth')} href="/about">Статьи</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'nineteenth')} href="/about">Образцы удостоверений</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'twentieth')} href="/about">Доступная среда</NavDropdown.Item>
            <NavDropdown.Item onClick={() => localStorage.setItem('page', 'twentyone')} href="/about">Международное сотрудничество</NavDropdown.Item>
          </NavDropdown>
          <Nav>

            {/* Курсы */}
            <NavDropdown
                id="nav-dropdown-dark-example drop"
                title="Курсы"
                menuVariant="white"
            >
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'first')} href="/courses">Промышленная безопасность</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'second')} href="/courses">Электробезопасность</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'third')} href="/courses">ГО и ЧС</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fourth')} href="/courses">Рабочие профессии</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'fifth')} href="/courses">Первая помощь</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'sixth')} href="/courses">Охрана труда</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'seventh')} href="/courses">Пожарная безопасность</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'eighth')} href="/courses">Экологическая безопасность</NavDropdown.Item>
              <NavDropdown.Divider/>
              <NavDropdown.Item href="/courses">
                Другие направления
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavDropdown
                id="nav-dropdown-dark-example drop"
                title="График и стоимость"
                menuVariant="white"
            >
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'first')} href="/time">Календарный учебный план на 2022 год</NavDropdown.Item>
              <NavDropdown.Item onClick={() => localStorage.setItem('page', 'first')} href="/prices">Стоимость обучения на 2022 год</NavDropdown.Item>
              </NavDropdown>
              
          <Nav.Link href="http://promnado.online/">Учебный портал</Nav.Link>
          <Nav.Link className="last-nav" href="#contacts"> Контакты </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>

  </Navbar>
}