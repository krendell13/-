import React, {PureComponent, Component} from 'react';
import {Container, Tab, Nav, Row, Col, Button, Accordion} from 'react-bootstrap';
import "./Aboutpage.css"

export default class AboutPage extends PureComponent {
  render() {
    const page = localStorage.getItem('page');
    return (
        <div className="about-bg">
          <Tab.Container defaultActiveKey={page}>
            <Row>
              <Col sm={3} className="about-left">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item className="about-main-item">
                    <a href="/">
                      <svg className="about-arrow-back" width="15" height="15" viewBox="0 0 15 15"
                           fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 6.5625H3.59062L8.83125 1.32187L7.5 0L0 7.5L7.5 15L8.82187 13.6781L3.59062 8.4375H15V6.5625Z"
                            fill="white"/>
                      </svg>
                    </a>
                    <Nav.Link className="about-title">Об учебном центре</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="about-first">
                    <Nav.Link className="about-link charters" eventKey="first" id="date">Дата
                      создания</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link charters" eventKey="second">Учредители</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="third">Место осуществления
                      образовательной деятельности</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="fourth">Официальный адрес
                      сайта</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="fifth">Структура АНО ДПО ЦПК
                      ПАРТНЕР</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="sixth">Документы АНО ДПО ЦПК
                      Партнер</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="seventh">Образовательные
                      стандарты</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="eighth">Кадровое обеспечение
                      образовательного центра</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="ninth">Руководство</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="tenth">Материально-техническое
                      обеспечение и особенность процесса</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="eleventh">Стипендии и иные средства
                      материальной поддержки</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="twelfth">Платные образовательные
                      услуги</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="thirteenth">Финансово-хозяйственная
                      дейтельность</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="fourteenth">Вакантные места для приема
                      (перевода)</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="fifteenth">Программы повышения
                      квалификации</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="sixteenth">Образцы заявок</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="seventeenth">Предписания</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="eighteenth">Статьи</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="nineteenth">Образцы
                      удостоверений</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="twentieth">Доступная среда</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="about-link" eventKey="twentyone">Международное
                      сотрудничество</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>

              
              <Col sm={9}>
                <Tab.Content className="tab-content-first">
                  <Tab.Pane eventKey="first">
                    <h1 className="content-title">дата создания АНО ДПО «ЦПК «Партнер»</h1>
                    <Nav.Link className="course-tab-link"
                              href="https://disk.yandex.ru/i/cdQfkreDPxvbuA"><img
                        className="content-first-image"
                        src={require('../Img/About/Date_born.jpg')}/></Nav.Link>

                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <h1 className="content-title">учредители АНО ДПО «ЦПК «Партнер»</h1>
                    <div className="content-second-wrap">
                      <div className="content-second-left">
                        <p className="second-description">Учредителями Автономной некоммерческой
                          организации дополнительного профессионального образования «Центра
                          повышения квалификации «ПАРТНЕР» являются:</p>
                        <h1 className="second-title">ЧЕРНОУЦЯН АННА НИКОЛАЕВНА</h1>
                        <span className="second-text">
                              <p>•	Основательница Группы компаний «ПРОМНАДО» </p> 
                              <p>•	Выпускница МГТУ им. Н.Э. Баумана </p>
                              <p>•	Действующий эксперт аудитор в системе менеджмента качества, системе менеджмента безопасности пищевой продукции, основанной на принципах ХАССП, системе экологического менеджмента и системе охраны труда и безопасности здоровья человека </p>
                              <p>•	Спикер и участник конференций в сфере охраны труда и пожарной безопасности </p>
                              <p>•	ТОП 100 Лучших женщин России в номинации Business Woman по версии глянцевых изданий </p>
                            </span>
                        <div className="second-network-wrap">
                          <div className="second-network-item">
                            <Nav.Link href="https://vk.com/promnado"><img
                                className="second-network"
                                src={require('../Img/About/inst.png')}/>
                              <a className="second-link"
                                 href="https://instagram.com/anneto4o4e4ka">@anneto4o4e4ka</a>
                            </Nav.Link>
                          </div>
                          <div className="second-network-item">
                            <Nav.Link href="https://vk.com/promnado"><img
                                className="second-network"
                                src={require('../Img/About/email.png')}/>
                              <a className="second-link"
                                 href="mailto:info@promnado.ru">info@promnado.ru</a>
                            </Nav.Link>
                          </div>
                        </div>

                      </div>
                      <div className="content-second-right">
                        <img className="content-second-image"
                             src={require('../Img/About/uchreditely.png')}/>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <h1 className="content-title">Место осуществления образовательной деятельности</h1>
                    <div className="content-third-wrap">
                      <Nav.Link className="course-tab-link"
                                href="https://yandex.ru/map-widget/v1/-/CCURzFcgsC"><img
                          className="content-third-image"
                          src={require('../Img/About/placework.jpg')}/> </Nav.Link>

                      <span className="third-text">
                            АНО ДПО «ЦПК «ПАРТНЕР» осуществляет образовательную деятельность по адресу:
г. Москва, Долгопрудненское шоссе, д.3 
                          </span>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourth">
                    <h1 className="content-title">Официальный адрес сайта АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="content-fourth-wrap">
                      <h2 className="fourth-title">www.cpkpartner.ru</h2>
                      <div className="fourth-social-wrap">
                        <h3 className="fourth-subtitle">мы в социальных сетях:</h3>
                        <div className="fourth-networks">
                          <Nav.Link href="https://vk.com/promnado"><img className="fourth-network"
                                                                        src={require('../Img/About/VK.png')}/>
                          </Nav.Link>
                          <Nav.Link href="https://api.whatsapp.com/send/?phone=79261452546"><img
                              className="fourth-network"
                              src={require('../Img/About/whatsup.png')}/> </Nav.Link>
                          <Nav.Link href="https://t.me/promnado"><img className="fourth-network"
                                                                      src={require('../Img/About/telegram.png')}/></Nav.Link>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifth">
                    <h1 className="content-title">Структура АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="content-first-item">
                      <Nav.Link className="course-tab-link"
                                href="https://disk.yandex.ru/i/eJgkT10SRrqX1w"><img
                          className="content-first-image"
                          src={require('../Img/About/strukture.jpg')}/></Nav.Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixth">
                    <h1 className="content-title">Документы АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="six-item-wrap">
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/0c-I7h3ylFlcEg">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/0c-I7h3ylFlcEg">Договор об оказании
                          платных услуг</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/wABvW-XNg-Ax-g">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/wABvW-XNg-Ax-g">Выписка из реестра
                          Лицензий по АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/TFqo3kNJOU2rMw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/TFqo3kNJOU2rMw">Образовательная
                          лицензия АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/MBQ2I5hDveDGFg">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/MBQ2I5hDveDGFg">Положение о
                          премировании в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/hn9LAufHFjeuDg">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/hn9LAufHFjeuDg">Положение о
                          требованиях к содержанию рабочих программ в АНО ДПО ЦПК
                          ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/rCWNJe1h_CFqaA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/rCWNJe1h_CFqaA">Положение об
                          информационной открытости в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/yRKzf8Ll0F7jLQ">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/yRKzf8Ll0F7jLQ">Санитарно-эпидемиологическое
                          заключение АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/MAH6PP3hnqu5KA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/MAH6PP3hnqu5KA">План
                          фин-хозяйственной деятельности АНО ДПО ЦПК ПАРТНЕР на 2020
                          год</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/H99VKNdO22d9aA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/H99VKNdO22d9aA">Положение
                          внутреннего распорядке для обучающихся в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/QTKoaYDS_XvBpg">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/QTKoaYDS_XvBpg">Положение о сайте
                          АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/LjBfhEDik2SItw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/LjBfhEDik2SItw">Положение о формах
                          обучения АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/UhoHDRLB-hZnLw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/UhoHDRLB-hZnLw">Положение об оплате
                          труда в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/_-HUlgjN9OHvJw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/_-HUlgjN9OHvJw">Положение о
                          библиотеке в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/GVVY4yIwkK-68A">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/GVVY4yIwkK-68A">Положение о
                          документообороте в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/Jy4PWr_E3CemWQ">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/Jy4PWr_E3CemWQ">Положение о
                          методической работе в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/2R42B9phFQw8ZQ"></Nav.Link>
                        <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/2R42B9phFQw8ZQ">Положение о текущем
                          контроле знаний в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/nrj5hnL7N2adRw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/nrj5hnL7N2adRw">Положение об
                          архивной деятельности в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/HlliceEMhOlpNQ">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/HlliceEMhOlpNQ">Положение об
                          организации образовательной деятельности по ДОП. Проф.
                          Программам</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/6JqVzyZbMJiD5g">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/6JqVzyZbMJiD5g">Положение о
                          методическом совете АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/_c8L4GNv74uvyg">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/_c8L4GNv74uvyg">Положение о
                          педагогическом совете АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">Положение о порядке
                          оказания платных услуг в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/qnV63HBHeVDzTA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/qnV63HBHeVDzTA">Положение о
                          тестовом контроле знаний в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/gsyapIOfMWt5yw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/gsyapIOfMWt5yw">Положение об
                          аттестации педагогических работников в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/ql4jM2_o43KDLw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/ql4jM2_o43KDLw">Положение об охране
                          труда в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/onNDaWePwTg3qA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/onNDaWePwTg3qA">Положение об учете
                          и хранении готовых документов в АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/4_0nnsmYf8j9uQ">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/4_0nnsmYf8j9uQ">Положение по
                          разработке,порядку выдачи и учету документов о квалификации</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/cvgXv3yVblj7qw">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/cvgXv3yVblj7qw">Правила внутреннего
                          трудового распорядка АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/N50B-3Vz8l9OBQ">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/N50B-3Vz8l9OBQ">Руководство по
                          качеству АНО ДПО ЦПК ПАРТНЕР</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/tcqBW_iw6pv06w">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/tcqBW_iw6pv06w">Свидетельство о
                          постановке на учет в налоговом органе (ИНН)</Nav.Link>
                      </div>
                      <div className="six-item">
                        <Nav.Link href="https://disk.yandex.ru/i/TMI-QAPzWnN9qA">
                          <img className="six-image" src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="six-link"
                                  href="https://disk.yandex.ru/i/TMI-QAPzWnN9qA">Устав АНО ДПО ЦПК
                          ПАРТНЕР</Nav.Link>
                      </div>

                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventh">
                    <h1 className="content-title">образовательные стандарты</h1>
                    <div className="seventh-items-wrap">

                      <div className="seventh-item">
                        <img className="seventh-image" src={require('../Img/About/Minnauki.png')}/>
                        <span className="seventh-text">
                              Министерство науки и высшего образования российской федерации
                            </span>
                      </div>

                      <div className="seventh-item">
                        <img className="seventh-image" src={require('../Img/About/mintrud.png')}/>
                        <span className="seventh-text">
                              министерство труда и социальной защиты Российской федерации
                            </span>
                      </div>

                      <div className="seventh-item">
                        <img className="seventh-image"
                             src={require('../Img/About/rostehnadzor.png')}/>
                        <span className="seventh-text">
                              <h2 className="seventh-item-title">Ростехнадзор</h2>
                              <p className="seventh-item-subtitle">Федеральная служба по экологическому, технологическому и атомному надзору</p> 
                            </span>
                      </div>

                      <div className="seventh-item">
                        <img className="seventh-image" src={require('../Img/About/mchs.png')}/>
                        <span className="seventh-text">
                              <h2 className="seventh-item-title">МЧС</h2>
                              <p className="seventh-item-subtitle">России</p> 
                            </span>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighth">
                    <h1 className="content-title">кадровое обеспечение образовательного центра АНО ДПО
                      «ЦПК «ПАРТНЕР»</h1>
                    <div className="eighth-item-wrap">

                      <div className="eighth-item">
                        <img className="eighth-item-image"
                             src={require('../Img/About/Andrei.jpg')}/>
                        <div className="eighth-item-about">
                          <p className="eighth-about-name">Кривицкий Андрей Александрович</p>
                          <p className="eighth-about-tel">+7(499)49-027-49</p>
                          <p className="eighth-about-mail">info@promnado.ru</p>
                          <p className="eighth-about-text">Высшее образование, окончил Московский
                            институт радиоэлектроники и автоматики (МИРЭА), получил
                            дополнительное профессиональное образование по курсу «Пожарная
                            безопасность», является экспертом в области пожарной
                            безопасности.</p>
                          <p className="eighth-about-skill">Преподавательский стаж – более 5
                            лет</p>
                        </div>
                      </div>

                      <div className="eighth-item">
                        <img className="eighth-item-image" src={require('../Img/About/Lada.jpg')}/>
                        <div className="eighth-item-about">
                          <p className="eighth-about-name">Кидирова Лада Ратмировна</p>
                          <p className="eighth-about-tel">+7(499)49-027-49</p>
                          <p className="eighth-about-mail">info@promnado.ru</p>
                          <p className="eighth-about-text">Высшее образование, окончила
                            Дагестанский Государственный Технический Университет, получила
                            дополнительное профессиональное образование по курсам «Техносферная
                            безопасность» и «Промышленная безопасность», является экспертом в
                            области промышленной безопасности.</p>
                          <p className="eighth-about-skill">Преподавательский стаж – более 5
                            лет</p>
                        </div>
                      </div>

                      <div className="eighth-item">
                        <img className="eighth-item-image" src={require('../Img/About/Artem.jpg')}/>
                        <div className="eighth-item-about">
                          <p className="eighth-about-name">Соловьев Артем Иванович</p>
                          <p className="eighth-about-tel">+7(499)49-027-49</p>
                          <p className="eighth-about-mail">info@promnado.ru</p>
                          <p className="eighth-about-text">Высшее образование, окончил Российский Государственный Социальный Университет, является Инструктором Российского Красного Креста с правом обучения населения по программе «Первая помощь», является сертифицированным экспертом на право выполнения работ по специальной оценки условий труда.</p>
                          <p className="eighth-about-skill">Преподавательский стаж – более 12 лет
                            лет</p>
                        </div>
                      </div>

                      <p className="eighth-last">
                        * Состав преподавателей назначается на основании приказа и журнала обучения
                        по АНО ДПО «ЦПК «ПАРТНЕР» по каждой группе. В журнале обучения фиксируется
                        преподавательский состав с разбивкой по датам и темам обучения.
                      </p>

                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="ninth">
                    <h1 className="content-title">Руководство АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="ninth-item-wrap">
                      <div className="ninth-item">
                        <img className="ninth-item-image"
                             src={require('../Img/About/director.jpg')}/>
                        <div className="ninth-item-about">
                          <p className="ninth-about-post">Директор</p>
                          <p className="ninth-about-name">Черноуцян Анна Николаевна</p>
                          <p className="ninth-about-tel">+7(499)49-027-49</p>
                          <p className="ninth-about-mail">info@promnado.ru</p>
                        </div>
                      </div>

                      <div className="ninth-item">
                        <img className="ninth-item-image"
                             src={require('../Img/About/rukuchotd.jpg')}/>
                        <div className="ninth-item-about">
                          <p className="ninth-about-post">Руководитель учебного отдела</p>
                          <p className="ninth-about-name">Виндсор Екатерина Владимировна</p>
                          <p className="ninth-about-tel">+7(499)49-027-49</p>
                          <p className="ninth-about-mail">info@promnado.ru</p>
                        </div>
                      </div>

                      <div className="ninth-item">
                        <img className="ninth-item-image"
                             src={require('../Img/About/buhgalter.jpg')}/>
                        <div className="ninth-item-about">
                          <p className="ninth-about-post">Бухгалтер</p>
                          <p className="ninth-about-name">Райкова Мария Валерьевна</p>
                          <p className="ninth-about-tel">+7(499)49-027-49</p>
                          <p className="ninth-about-mail">info@promnado.ru</p>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="tenth">
                    <h1 className="content-title">Материально-техническое обеспечение и оснащенность
                      образовательного процесса в АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="content-tenth-item">
                      <Nav.Link href="https://disk.yandex.ru/i/jm7mm-CiXKmKhg">
                        <img className="content-tenth-image" src={require('../Img/About/mto.jpg')}/>
                      </Nav.Link>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eleventh">
                    <h1 className="content-title">Стипендии и иные средства материальной поддержки</h1>
                    <div className="eleventh-items-wrap">
                      <div className="eleventh-item">
                        <p className="eleventh-text">Устав Автономной некоммерческой организации
                          дополнительного профессионального образования «Центра повышения
                          квалификации «ПАРТНЕР» не предусматривает назначение стипендии своим
                          слушателям и обеспечение их общежитием.</p>
                        <p className="eleventh-text">Согласно ст. 36 (ч.2) Федерального закона - 273
                          «Об образовании в Российской Федерации» возможно назначение стипендии
                          юридическими и физическими лицами, направившими слушателей на
                          обучение.</p>
                      </div>
                      <div className="content-eleventh-item">
                        <img className="content-eleventh-image"
                             src={require('../Img/About/FZ.png')}/>
                      </div>
                    </div>

                  </Tab.Pane>
                  <Tab.Pane eventKey="twelfth">
                    <h1 className="content-title">платные образовательные услуги</h1>
                    <Nav.Link href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">
                      <img className="content-twelfth-image"
                           src={require('../Img/About/service.jpg')}/>
                    </Nav.Link>
                    <Nav.Link className="content-twelfth-link"
                              href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">Скачать Положение о порядке
                      оказания платных услуг</Nav.Link>
                  </Tab.Pane>
                  <Tab.Pane eventKey="thirteenth">
                    <h1 className="content-title">Финансово-хозяйственная дейтельность</h1>
                    <div className="thirteenth-item-wrap">
                      <div className="thirteenth-left">
                        <p className="thirteenth-text">АНО ДПО «ЦПК «ПАРТНЕР» является
                          негосударственной образовательной организацией, поэтому не имеет
                          бюджетного финансирования.</p>
                        <p className="thirteenth-text">В связи с этим вся финансовая деятельность
                          нашего учебного центра основывается на доходах, получаемых от оказания
                          образовательных услуг.</p>
                        <p className="thirteenth-text">Полученные средства расходуются на
                          обеспечение и развитие образовательного процесса, развития используемых
                          технологий и совершенствование методик преподавания.</p>
                      </div>
                      <div className="thirteenth-right">
                        <Nav.Link href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">
                          <img className="content-thirteenth-image"
                               src={require('../Img/About/finhozpolozh.jpg')}/>
                        </Nav.Link>
                        <Nav.Link className="content-thirteenth-link"
                                  href="https://disk.yandex.ru/i/l47B6nj8RKBT-Q">Скачать Положение о
                          порядке оказания платных услуг</Nav.Link>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fourteenth">
                    <h1 className="content-title">Вакантные места для приема (перевода)</h1>
                    <div className="fourteenth-item-wrap">
                      <div className="fourteenth-left">
                        <p className="fourteenth-text">Здесь вы можете найти вакансии, которые
                          требуются АНО ДПО «ЦПК «ПАРТНЕР» для улучшения работы нашего
                          коллектива.</p>
                        <p className="fourteenth-text"></p>
                        <p className="fourteenth-text">В настоящее время все вакансии закрыты.</p>
                      </div>
                      <div className="fourteenth-right">
                        <img className="content-fourteenth-image"
                             src={require('../Img/About/cpklogobig.png')}/>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="fifteenth">
                    <h1 className="content-title">Программы повышения квалификации</h1>
                    <Accordion className="fifteenth-accordion">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>Промышленная безопасность (ПБ)</Accordion.Header>
                        <Accordion.Body>
                          Проводим подготовку специалистов в соответствии с требованиями 116-ФЗ от
                          21.07.1997г. «О промышленной безопасности опасных производственных
                          объектов» и Постановления Правительства РФ от 25.10.2019 г. № 1365 (ред.
                          от 06.08.2020 г.) «О подготовке и об аттестации в области промышленной
                          безопасности, по вопросам безопасности гидротехнических сооружений,
                          безопасности в сфере электроэнергетики»
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="1">
                        <Accordion.Header>Электробезопасность</Accordion.Header>
                        <Accordion.Body>
                          Курсы по энергетической безопасности подготовлены в соответствии с
                          Постановлением Правительства РФ от 25.10.2019 г. № 1365 (ред. от
                          06.08.2020 г.) «О подготовке и об аттестации в области промышленной
                          безопасности, по вопросам безопасности гидротехнических сооружений,
                          безопасности в сфере электроэнергетики», с учетом требований 116-ФЗ «О
                          промышленной безопасности опасных производственных объектов»
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="2">
                        <Accordion.Header>Охрана труда</Accordion.Header>
                        <Accordion.Body>
                          Проводим подготовку кадров по охране труда в вашей организации на
                          основании ст.219 Трудового Кодекса Российской Федерации. АНО ДПО «ЦПК
                          «ПАРТНЕР» внесен в реестр аккредитованных организаций Министерства труда
                          России по обучению работодателей и работников вопросам охраны труда
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="3">
                        <Accordion.Header>Профессиональная переподготовка кадров</Accordion.Header>
                        <Accordion.Body>
                          Помогаем получить дополнительное профессиональное образование и
                          переобучиться в АНО ДПО «ЦПК «ПАРТНЕР» по выбранной вами программе в
                          соответствии с требованиями п.1 ст.26 273-ФЗ от 26.12.2012 г. (в ред. от
                          25.07.2022 г.) «Об образовании в Российской Федерации». По окончанию
                          обучения получает диплом о профессиональной переподготовке кадров.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="4">
                        <Accordion.Header>Пожарная безопасность</Accordion.Header>
                        <Accordion.Body>
                          Курсы по пожарной безопасности разработаны в соответствии с требованиями
                          Приказа МЧС России от 18.11.2021 № 806 «Об определении Порядка, видов,
                          сроков обучения лиц, осуществляющих трудовую или служебную деятельность
                          в организациях, по программам противопожарного инструктажа, требований к
                          содержанию указанных программ и категорий лиц, проходящих обучение по
                          дополнительным профессиональным программам в области пожарной
                          безопасности»
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="5">
                        <Accordion.Header>Экологическая безопасность</Accordion.Header>
                        <Accordion.Body>
                          Обучение по экологической безопасности проводится в соответствии с
                          требованиями 7-ФЗ от 10.01.2022 г. «Об охране окружающей среды», в
                          котором сказано, что руководители организаций и специалисты,
                          ответственные за принятие решений при осуществлении хозяйственной и иной
                          деятельности, которая оказывает или может оказать негативное воздействие
                          на окружающую среду, должны иметь подготовку в области охраны окружающей
                          среды и экологической безопасности
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="6">
                        <Accordion.Header>Гражданская оборона и защита от чрезвычайных
                          ситуаций</Accordion.Header>
                        <Accordion.Body>
                          Проводим подготовку кадров по ГО и ЧС в соответствии с требованиями
                          Постановления Правительства № 841 «Об утверждении положения об
                          организации обучения населения в области гражданской обороны» (в
                          редакции от 19.04.2017 г.), которая обязательно для руководителей и
                          работников организаций, муниципальных предприятий и учреждений, рабочих
                          и служащих, уполномоченных на решение задач в области гражданской
                          обороны.
                        </Accordion.Body>
                      </Accordion.Item>
                      <Accordion.Item eventKey="7">
                        <Accordion.Header>Рабочие профессии</Accordion.Header>
                        <Accordion.Body>
                          Проводим как первичную подготовку кадров, так и повышаем квалификацию по
                          рабочим специальностям в соответствии с ОКПДТР и ЕТКС. Наши программы
                          обучения соответствуют требованиям профессиональных стандартов,
                          вступивших в силу 1 июля 2016 года (закон от 02.05.2015 №122-ФЗ)
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                    <h3 className="content-subtitle">порядок обучения и аттестации</h3>
                    <div className="fifteenth-subcontent-wrap">
                      <div className="fifteenth-subcontent-item">
                        <img className="fifteenth-subcontent-image"
                             src={require('../Img/About/phone-call.png')}/>
                        <p className="fifteenth-subcontent-text">Заказать звонок</p>
                      </div>
                      <div className="fifteenth-subcontent-item">
                        <img className="fifteenth-subcontent-image"
                             src={require('../Img/About/contract.png')}/>
                        <p className="fifteenth-subcontent-text">Заполнить заявку</p>
                      </div>
                      <div className="fifteenth-subcontent-item">
                        <img className="fifteenth-subcontent-image"
                             src={require('../Img/About/education.png')}/>
                        <p className="fifteenth-subcontent-text">Пройти обучение и аттестацию</p>
                      </div>
                      <div className="fifteenth-subcontent-item">
                        <img className="fifteenth-subcontent-image"
                             src={require('../Img/About/certificate.png')}/>
                        <p className="fifteenth-subcontent-text">Получить удостоверение
                          установленного образца</p>
                      </div>
                    </div>
                    <Button href="tel:+74994902749" className="fifteenth-button" href="/#subscribe">Записаться
                      на приём</Button>
                  </Tab.Pane>
                  <Tab.Pane eventKey="sixteenth">
                    <h1 className="content-title">Образцы заявок в АНО ДПО «ЦПК «ПАРТНЕР»</h1>
                    <div className="sixteenth-item-wrap">
                      <div className="sixteenth-item">
                        <Nav.Link href="https://disk.yandex.ru/i/hl6sSWpG16b5Aw">
                          <img className="sixteenth-image"
                               src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="sixteenth-link"
                                  href="https://disk.yandex.ru/i/hl6sSWpG16b5Aw">заявка на повышение
                          квалификации</Nav.Link>
                      </div>
                      <div className="sixteenth-item">
                        <Nav.Link href="https://disk.yandex.ru/i/iL9uOP3-YxkR7Q">
                          <img className="sixteenth-image"
                               src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="sixteenth-link"
                                  href="https://disk.yandex.ru/i/iL9uOP3-YxkR7Q">Заявка по пожарной
                          безопасности</Nav.Link>
                      </div>
                      <div className="sixteenth-item">
                        <Nav.Link href="https://disk.yandex.ru/i/l63LWR9F2_oxvA">
                          <img className="sixteenth-image"
                               src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="sixteenth-link"
                                  href="https://disk.yandex.ru/i/l63LWR9F2_oxvA">Заявка на
                          аттестацию по рабочим профессиям</Nav.Link>
                      </div>
                      <div className="sixteenth-item">
                        <Nav.Link href="https://disk.yandex.ru/i/ZpIX4WMYjWR9rw">
                          <img className="sixteenth-image"
                               src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="sixteenth-link"
                                  href="https://disk.yandex.ru/i/ZpIX4WMYjWR9rw">Заявка на
                          профессиональную переподготовку кадров</Nav.Link>
                      </div>
                      <div className="sixteenth-item">
                        <Nav.Link href="https://disk.yandex.ru/i/xb69zMU6Sd2hWw">
                          <img className="sixteenth-image"
                               src={require('../Img/About/pdf 1.png')}/>
                        </Nav.Link>
                        <Nav.Link className="sixteenth-link"
                                  href="https://disk.yandex.ru/i/xb69zMU6Sd2hWw">Заявка по охране
                          труда</Nav.Link>
                      </div>
                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="seventeenth">
                    <h1 className="content-title">Предписания</h1>
                    <p className="seventeenth-text">В настоящее время в АНО ДПО «ЦПК «ПАРТНЕР»
                      плановых/внеплановых проверок надзорными органами не проводилось.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="eighteenth">
                    <h1 className="content-title">Статьи</h1>
                    <p className="eighteenth-text">АНО ДПО «ЦПК «ПАРТНЕР» ведет активную
                      просветительскую деятельность в социальных сетях</p>
                    <div className="fourth-networks">
                      <Nav.Link href="https://vk.com/promnado"><img className="fourth-network"
                                                                    src={require('../Img/About/VK.png')}/>
                      </Nav.Link>
                      <Nav.Link href="https://api.whatsapp.com/send/?phone=79261452546"><img
                          className="fourth-network" src={require('../Img/About/whatsup.png')}/>
                      </Nav.Link>
                      <Nav.Link href="https://t.me/promnado"><img className="fourth-network"
                                                                  src={require('../Img/About/telegram.png')}/></Nav.Link>
                    </div>

                  </Tab.Pane>
                  <Tab.Pane eventKey="nineteenth">
                    <h1 className="content-title">Образцы удостоверений</h1>
                    <div className="nineteenth-item-wrap">
                      <div className="nineteenth-item">
                        <img className="nineteenth-image"
                             src={require('../Img/About/udostoverenie.png')}/>
                        <p className="nineteenth-text">Удостоверение по охране труда</p>
                      </div>

                      <div className="nineteenth-item">
                        <img className="nineteenth-image"
                             src={require('../Img/About/bigudostoverenie.png')}/>
                        <p className="nineteenth-text">Удостоверение о повышении квалификации</p>
                      </div>

                    </div>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentieth">
                    <h1 className="content-title">Доступная среда</h1>
                    <p className="twentieth-text">Так как наши слушатели, в основном, работают на
                      опасных производственных объектах, то согласно 116-ФЗ «Об опасных
                      производственных объектах», к работе на таких объектах допускаются только
                      сотрудники, которые уже прошли медицинское обследование, и не имеют медицинских
                      противопоказаний к данным видам работ.</p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="twentyone">
                    <h1 className="content-title">Международное сотрудничество</h1>
                    <p className="twentyone-text">Автономная некоммерческая организация дополнительного
                      профессионального образования «Центр повышения квалификации «ПАРТНЕР» работает
                      на территории Российской Федерации.Поэтому представительств и филиалов не
                      имеет.</p>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>

          </Tab.Container>

        </div>
    )
  }
}
