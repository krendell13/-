import React, {Component} from 'react';
import {Container, Tab, Nav, Row, Col, Button, Accordion} from 'react-bootstrap';
import "./Coursespage.css"

export default class CoursesPage extends Component {
    render() {
        const page = localStorage.getItem('page');
        return (
            <div className="about-bg">
                
                <Tab.Container id="left-tabs-example" defaultActiveKey={page}>
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
                                    <Nav.Link className="about-title">Направления обучения</Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="about-first">
                                    <Nav.Link className="about-link" eventKey="first">Промышленная
                                        безопасность</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="second">Электробезопасность</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="third">Гражданская оборона и защита от
                                        ЧС</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="fourth">Рабочие профессии</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="fifth">Первая помощь</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="sixth">Охрана труда</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="seventh">Пожарная безопасность</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className="about-link" eventKey="eighth">Экологическая
                                        безопасность</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="first">
                                    <Nav.Link href="/">
                                        <img className="course-image-big" src={require('../Img/Courses/prom-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">Промышленная безопасность</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение для
                                            дальнейшей аттестации по промышленной безопасности в Ростехнадзоре согласно
                                            требованиям Постановления Правительства РФ от 25.10.2019 N 1365 (ред. от
                                            06.08.2020) «О подготовке и об аттестации в области промышленной
                                            безопасности, по вопросам безопасности гидротехнических сооружений,
                                            безопасности в сфере электроэнергетики», с учетом требований Федерального
                                            закона «О промышленной безопасности опасных производственных объектов» от
                                            21.07.1997г. № 116-ФЗ.</p>
                                        <p className="course-text">ВАЖНО!</p>
                                        <p className="course-text">С 2019 года самоподготовка для прохождения аттестации
                                            по промышленной безопасности в территориальном органе Ростехнадзора
                                            отменена!</p>
                                        <p className="course-text">Теперь, что пройти аттестацию и получить протокол
                                            проверки знаний в ТАК необходимо пройти обучение в Учебном центре.</p>
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение
                                            по промышленной безопасности в любой удобной для вас форме (очно,
                                            очно-заочно и дистанционно) по следующим программам:</p>
                                    </div>
                                    <Accordion className="course-accordion">
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Какая категория сотрудников должна проходить обучение и
                                                аттестацию в Ростехнадзоре по промышленной
                                                безопасности?</Accordion.Header>
                                            <Accordion.Body>
                                                В соответствии с требованиями Постановления Правительства РФ от
                                                25.10.2019 N 1365 (ред. от 06.08.2020) «О подготовке и об аттестации в
                                                области промышленной безопасности, по вопросам безопасности
                                                гидротехнических сооружений, безопасности в сфере электроэнергетики»
                                                повышение квалификации, в том числе и на базе АНО ДПО «ЦПК «ПАРТНЕР»,
                                                должны проходить работники, в том числе руководители организаций,
                                                осуществляющие профессиональную деятельность, связанную с
                                                проектированием, строительством, эксплуатацией, реконструкцией,
                                                капитальным ремонтом, техническим перевооружением, консервацией и
                                                ликвидацией опасного производственного объекта, а также изготовлением,
                                                монтажом, наладкой, обслуживанием и ремонтом технических устройств,
                                                применяемых на опасном производственном объекте.
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>Каким образом проходит аттестация в
                                                Ростехнадзоре?</Accordion.Header>
                                            <Accordion.Body>
                                                Перед тем как подготовиться Специалисты должны проходить обязательный
                                                экзаменационный тест в Едином портале тестирования Ростехнадзора
                                                (сокращенно ЕПТ) либо создавать внутренние аттестационные комиссии в
                                                рамках своего предприятия. При подаче пакета заявительных документов на
                                                аттестацию необходимо предоставить:

                                                • Заявление на аттестацию на каждого аттестуемого
                                                • Копии документов о квалификации сотрудников по дополнительному
                                                профессиональному образованию в области промышленной безопасности,
                                                соответствующие заявленной области аттестации, полученных в течении 5
                                                лет
                                                • Согласие на обработку персональных данных
                                                • Квитанция об оплате государственной пошлины в размере 1 300 рублей за
                                                каждого аттестуемого

                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header>Зачем нужно проходить тестирование в
                                                ЕПТ?</Accordion.Header>
                                            <Accordion.Body>
                                                Экзаменационное компьютерное тестирование в системе ЕПТ назначается и
                                                проводится в течение 30 дней с момента подачи документов территориальное
                                                отделение Ростехнадзора.

                                                В ходе компьютерного тестирования аттестуемому предлагается ответить на
                                                20 вопросов отобранных из общей базы вопросов в соответствии с
                                                заявленной областью аттестации методом случайной выборки. Время
                                                прохождения тестирования составляет 20 минут. Для того, что аттестация
                                                считалась пройденной, необходимо правильно ответить на 80% вопросов, а
                                                это – не менее 18 правильных ответов.

                                                Выписка из протокола с результатом аттестации направляется на
                                                электронную почту аттестуемого, не позднее чем через 10 дней со дня
                                                оформления протокола. По итогу успешной сдачи экзамена данные о
                                                специалисте вносятся в электронный реестр аттестованных лиц.

                                                Первичная аттестация работников в области промышленной безопасности
                                                проводится не позднее одного месяца с момент принятия сотрудника на
                                                работу.

                                                Периодическую аттестацию сотрудники должны проходить 1 раз в 5 лет.

                                                Внеочередная проверка знаний обязательна в случае аварии на объекте,
                                                произошедшей в результате нарушений требований промышленной безопасности
                                                и в случае, если в отношении работников выявлены нарушения обязательных
                                                требований, определенные в актах, содержащих результаты проведения
                                                технического расследования причин аварии на опасном производственном
                                                объекте, гидротехническом сооружении, расследования причин аварии в
                                                электроэнергетике.

                                            </Accordion.Body>

                                        </Accordion.Item>
                                    </Accordion>
                                    <h2 className="course-subtitle"></h2>
                                    <Accordion className="course-accordion">
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header>А. Общие требования промышленной
                                                безопасности </Accordion.Header>
                                            <Accordion.Body>
                                                1. Основы промышленной безопасности (А.1)
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/nrn9SkHs3IUB4w">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header>Б.1. Требования промышленной безопасности в химической,
                                                нефтехимической и нефтеперерабатывающей
                                                промышленности</Accordion.Header>
                                            <Accordion.Body>
                                                <p>2. Эксплуатация химически опасных производственных объектов
                                                    (Б.1.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Ek-Wx7ipQBOhog">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Эксплуатация опасных производственных объектов
                                                    нефтегазоперерабатывающих и нефтехимических производств (Б1.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/APBUXo0V9s9yEg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 4. Эксплуатация опасных производственных объектов сжиженного
                                                    природного газа (Б.1.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/yTZfEXAnUWNg4Q">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 5. Эксплуатация хлорных объектов (Б.1.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/kjJd2grU5oNWFg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>6. Эксплуатация производств минеральных удобрений (Б.1.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/h5dYC1WekghLAg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>7. Эксплуатация аммиачных холодильных установок (Б.1.6)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/b4pEQs32zz7xYA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>8. Эксплуатация опасных производственных объектов складов нефти и
                                                    нефтепродуктов (Б.1.7)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/TGCCMmWIExlMzg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>9. Проектирование химически опасных производственных объектов
                                                    (Б1.8)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/8-qb4B7sZ4RKag">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>10. Строительство, реконструкция, техническое перевооружение,
                                                    капитальный ремонт, консервация и ликвидация химически опасных
                                                    производственных объектов (Б1.9)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/xWaj_Ffc0cS_QA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>11. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение, капитальный ремонт, консервация и ликвидация опасных
                                                    производственных объектов нефтегазоперерабатывающих и
                                                    нефтехимических производств (Б1.10)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/UfRsUXpd4po47Q">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>12. Безопасное ведение газоопасных, огневых и ремонтных работ
                                                    (Б1.11)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/rqw_Olg2xxSuxA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>13. Эксплуатация компрессорных установок с поршневыми компрессорами,
                                                    работающими на взрывоопасных и вредных газах (Б.1.12)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/soj5ed8Cri-N4A">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>14. Эксплуатация стационарных компрессорных установок,
                                                    воздухопроводов и газопроводов (Б1.13)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/o8ViwncZYMuQaQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>15. Производство водорода методом электролиза воды (Б1.14)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/dSBs-FAx8wYAjw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>16. Эксплуатация опасных производственных объектов, на которых
                                                    осуществляются технологические процессы нитрования (Б1.15)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/lPK-_vKfp83KKA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>17. Эксплуатация объектов маслоэкстракционных производств и
                                                    производств гидрогенизации жиров (Б1.16)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/5i-0YquU8hvajQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>18. Производство и потребление продуктов разделения воздуха
                                                    (Б.1.17)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/edcbdJvxcZPj-A">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>19. Эксплуатация опасных производственных объектов производства шин,
                                                    резинотехнических и латексных изделий (Б1.18)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Toj6oo681Ho2NQ">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="5">
                                            <Accordion.Header>Б.2. Требования промышленной безопасности в нефтяной и
                                                газовой промышленности</Accordion.Header>
                                            <Accordion.Body>
                                                <p>1. Эксплуатация объектов нефтяной и газовой промышленности (Б2.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/t9ElcRCJcDfzVA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Ремонт нефтяных и газовых скважин (Б2.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/VcaZRB-xaS_DDQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Проектирование объектов нефтегазодобычи (Б2.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/r6bNCLtJHGeQVg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>4. Бурение нефтяных и газовых скважин (Б2.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/sjWgWZyxTn_EBw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>5. Нефтепромысловые трубопроводы для транспорта нефти и газа
                                                    (Б.2.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Bbf86VHHiPlg5w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>6. Разведка и разработка морских месторождений углеводородного сырья
                                                    (Б.2.6)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/NQVZsNARLZBFQA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>7. Магистральные нефтепроводы и нефтепродуктопроводы (Б 2.7)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/WWm5fz2c1OCHhw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>8. Магистральные газопроводы (Б 2.8)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/arGkKfx3894QDA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>9. Магистральные трубопроводы для транспортировки жидкого аммиака
                                                    (Б2.9.)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/SD6wTSXvH_tO5A">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>10. Подземные хранилища газа (Б 2.10)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/GvVA1_rutGre7A">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="6">
                                            <Accordion.Header>Б.3. Требования промышленной безопасности в
                                                металлургической промышленности</Accordion.Header>
                                            <Accordion.Body>
                                                <p>30. Литейное производство черных и цветных металлов (Б 3.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/BDRBcu7B9-akiQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>31. Медно-никелевое производство (Б 3.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/nGMj5_KYR-4AVg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>32. Коксохимическое производство (Б 3.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/syc1JFa6jgajOA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>33. Производство первичного алюминия (Б 3.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/HP_ECvmpWylhuQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>34. Производство редких, благородных и других цветных металлов (Б
                                                    3.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/RQtKFmkk6G5KtQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>35. Доменное и сталеплавильное производство (Б 3.6)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/wUZ-5Xl03MsfvA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>36. Производство ферросплавов (Б 3.7)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Hx8KpzI20qhCUQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>37. Производство с полным металлургическим циклом (Б 3.8)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/a5aRPf5BuVoZKA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>38. Проектирование, строительство, реконструкция, капитальный ремонт
                                                    объектов металлургической промышленности (Б 3.9)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/HdDRUQuIOV1zrg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>39. Энергетические службы металлургических предприятий (Б 3.10)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/paZ1AzKs3whwgA">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="7">
                                            <Accordion.Header>Б.4. Требования промышленной безопасности в горнорудной
                                                промышленности</Accordion.Header>
                                            <Accordion.Body>
                                                <p>40. Обогащение полезных ископаемых (Б 4.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/hz0SqDrnVVpDyA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>41. Строительство, реконструкция, капитальный ремонт подземных
                                                    сооружений (Б 4.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/QgJNUkCS_3neQw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>42. Разработка месторождений полезных ископаемых открытым способом (Б
                                                    4.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/q1MYCXEX1Aqeaw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>43. Разработка месторождений полезных ископаемых подземным способом
                                                    (Б 4.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Pe3qf_11M_B3og">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>44. Проектирование опасных производственных объектов горной
                                                    промышленности (Б 4.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Z-8nscNqbudEOg">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="8">
                                            <Accordion.Header>Б.5. Требования промышленной безопасности в угольной
                                                промышленности</Accordion.Header>
                                            <Accordion.Body>
                                                <p>45. Разработка угольных месторождений открытым способом (Б 5.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/_50P9PjNdhPggw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>46. Обогащение и брикетирование углей (сланцев) (Б 5.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/ldfu-WXv_xV5gg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>47. Разработка угольных месторождений подземным способом (Б 5.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/8FEgLkkMyaczcw">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="9">
                                            <Accordion.Header>Б.6. Требования по маркшейдерскому обеспечению безопасного
                                                ведения горных работ</Accordion.Header>
                                            <Accordion.Body>
                                                <p>48. Маркшейдерское обеспечение безопасного ведения горных работ при
                                                    осуществлении работ, связанных с пользованием недрами и их
                                                    проектированием (Б.6.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/qZBavdGUz5RebQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>49. Маркшейдерское обеспечение безопасного ведения горных работ при
                                                    осуществлении пользования недрами в целях, не связанных с добычей
                                                    полезных ископаемых, а также строительства и эксплуатации
                                                    гидротехнических сооружений (Б.6.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/pNSD8IScRWcPug">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>50. Маркшейдерское обеспечение безопасного ведения горных работ при
                                                    осуществлении разработки месторождений полезных ископаемых подземным
                                                    способом (Б.6.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/13hHHwr6svq0tQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>51. Маркшейдерское обеспечение безопасного ведения горных работ при
                                                    осуществлении разработки месторождений полезных ископаемых открытым
                                                    способом (Б.6.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/45NpXCrz4C2cew">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>52. Маркшейдерское обеспечение безопасного ведения горных работ при
                                                    осуществлении разработки месторождений углеводородного сырья и
                                                    гидроминеральных ресурсов (Б.6.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/fat09rBNpXJGnQ">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="10">
                                            <Accordion.Header>Б.7. Требования промышленной безопасности на объектах
                                                газораспределения и газопотребления</Accordion.Header>
                                            <Accordion.Body>
                                                <p>53. Эксплуатация сетей газораспределения и газопотребления (Б
                                                    7.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/rLQ6NAe8Jms6KQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>54. Эксплуатация объектов, использующих сжиженные углеводородные газы
                                                    (Б.7.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/3pr9AmbmUNTcmA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>55. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение и капитальный ремонт сетей газораспределения и
                                                    газопотребления (Б 7.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/fLVIBXXnpVj-pg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>56. Эксплуатация авто газозаправочных станций газомоторного топлива
                                                    (Б 7.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/YfNa-LjBMVHBlQ">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="11">
                                            <Accordion.Header>Б.8. Требования промышленной безопасности к оборудованию,
                                                работающему под давлением</Accordion.Header>
                                            <Accordion.Body>
                                                <p>57. Эксплуатация опасных производственных объектов, на которых
                                                    используются котлы (паровые, водогрейные, электрические, а также с
                                                    органическими и неорганическими теплоносителями) (Б.8.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/gYuYHs9kymNzsA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>58. Эксплуатация опасных производственных объектов, на которых
                                                    используются трубопроводы пара и горячей воды (Б 8.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/5tL4PfN1Bnan7A">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>59. Эксплуатация опасных производственных объектов, на которых
                                                    используются сосуды, работающие под избыточным давлением (Б.8.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/kwcIE9qxxz2DVA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>60. Эксплуатация опасных производственных объектов, на которых
                                                    используются медицинские и водолазные барокамеры (Б 8.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/C_cGSSpvwsdZBg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>61. Наполнение, техническое освидетельствование и ремонт баллонов для
                                                    хранения и транспортирования сжатых, сжиженных и растворенных под
                                                    давлением газов, применяемых на опасных производственных объектах (Б
                                                    8.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Ry9f18ztLRM3Tg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>62. Проектирование, строительство, реконструкция, капитальный ремонт
                                                    и техническое перевооружение опасных производственных объектов,
                                                    изготовление, монтаж (демонтаж), наладка, обслуживание и ремонт
                                                    (реконструкция) оборудования, работающего под избыточным давлением,
                                                    применяемого на опасных производственных объектах (Б 8.6)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/_RoekEZZ78QVYQ">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="12">
                                            <Accordion.Header>Б.9. Требования промышленной безопасности к подъемным
                                                сооружениям</Accordion.Header>
                                            <Accordion.Body>
                                                <p>63. Эксплуатация и капитальный ремонт опасных производственных
                                                    объектов, на которых используются эскалаторы в метрополитенах,
                                                    эксплуатация (в том числе обслуживание и ремонт) эскалаторов в
                                                    метрополитенах (Б 9.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/883xblPr7czEqA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>64. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение, консервация и ликвидация опасных производственных
                                                    объектов, на которых используются эскалаторы в метрополитенах, а
                                                    также изготовление, монтаж и наладка эскалаторов (Б9.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/dPQvjQ6Rb5A-FQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>65. Эксплуатация опасных производственных объектов, на которых
                                                    используются подъемные сооружения, предназначенные для подъема и
                                                    перемещения грузов (Б 9.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/XLG16zsazSBWTQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>66. Эксплуатация опасных производственных объектов, на которых
                                                    используются подъемные сооружения, предназначенные для подъема и
                                                    транспортировки людей (Б 9.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/uoF9kyJ2GH0iWw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>67. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение, капитальный ремонт, консервация, ликвидация опасных
                                                    производственных объектов, на которых используются подъемные
                                                    сооружения (Б 9.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/YdyXtyMcuxc61w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>68. Монтаж, наладка, обслуживание, ремонт, реконструкция или
                                                    модернизация подъемных сооружений, применяемых на опасных
                                                    производственных объектах (Б 9.6)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/40dBgfXmJyt47w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>69. Эксплуатация и капитальный ремонт опасных производственных
                                                    объектов, на которых используются пассажирские канатные дороги и
                                                    (или) фуникулеры, эксплуатация (в том числе обслуживание и ремонт)
                                                    пассажирских канатных дорог и (или) фуникулеров (Б 9.7)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/5be-rT7DuMKSiw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>70. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение, консервация и ликвидация опасных производственных
                                                    объектов, на которых используются пассажирские канатные дороги и
                                                    (или) фуникулеры, а также изготовление, монтаж и наладка
                                                    пассажирских канатных дорог и (или) фуникулеров (Б 9.8)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/qrJJ_vnn6AHhBA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>71. Эксплуатация и капитальный ремонт опасных производственных
                                                    объектов, на которых используются грузовые подвесные канатные
                                                    дороги, эксплуатация (в том числе обслуживание и ремонт) грузовых
                                                    подвесных канатных дорог (Б 9.9)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/QJi-wvQY-hMSYQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>72. Проектирование, строительство, реконструкция, техническое
                                                    перевооружение, консервация и ликвидация опасных производственных
                                                    объектов, на которых используются грузовые подвесные канатные
                                                    дороги, а также изготовление, монтаж и наладка грузовых подвесных
                                                    канатных дорог (Б 9.10)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/-P1izYqA5dwTbA">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="13">
                                            <Accordion.Header>Б.10. Требования промышленной безопасности при
                                                транспортировании опасных веществ</Accordion.Header>
                                            <Accordion.Body>
                                                <p>73. Транспортирование опасных веществ железнодорожным транспортом (Б
                                                    10.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/mtM7BHQq5YSO1w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>74. Транспортирование опасных веществ автомобильным транспортом
                                                    (Б9.10.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/EJqHm8TyHo4tew">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="14">
                                            <Accordion.Header>Б.11. Требования промышленной безопасности на объектах
                                                хранения и переработки растительного сырья</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 75. Строительство, эксплуатация, реконструкция, капитальный ремонт,
                                                    техническое перевооружение, консервация и ликвидация объектов
                                                    хранения и переработки растительного сырья (Б 11.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Mdmm_uQoSmh9Tw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>76. Разработка проектной, конструкторской и иной документации для
                                                    опасных объектов хранения и переработки растительного сырья (Б
                                                    11.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/gRVFhynCkW8Htg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>77. Изготовление, монтаж, наладка, ремонт, техническое
                                                    освидетельствование, реконструкция и эксплуатация технических
                                                    устройств (машин и оборудования), применяемых на объектах хранения и
                                                    переработки растительного сырья (Б 11.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/f6JGlAnsMpW70Q">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="15">
                                            <Accordion.Header>Б.12. Требования промышленной безопасности, относящихся к
                                                взрывным работам</Accordion.Header>
                                            <Accordion.Body>
                                                <p>78. Взрывные работы в подземных выработках и на поверхности рудников
                                                    (объектах горнорудной и нерудной промышленности), угольных и
                                                    сланцевых шахт, опасных (не опасных) по газу или пыли, и специальные
                                                    взрывные работы (Б 12.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Hap4gNkFeWuM5w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>79. Взрывные работы на открытых горных разработках и специальные
                                                    взрывные работы (Б 12.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/kMSfB4vTnRC0TA">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="16">
                                            <Accordion.Header>В. Требования безопасности гидротехнических
                                                сооружений</Accordion.Header>
                                            <Accordion.Body>
                                                <p>80. Гидротехнические сооружения объектов промышленности (В.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/7SUCAqbftkTN0w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>81. Гидротехнические сооружения объектов энергетики (В.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/NQrBK9-nRM09DA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>82. Гидротехнические сооружения объектов водохозяйственного комплекса
                                                    (В.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/7y1yEa0yXKHOUA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>83. Экспертиза деклараций безопасности гидротехнических сооружений
                                                    (В.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/6u6lUBGiiBKOUg">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="17">
                                            <Accordion.Header>Г.1. Требования к порядку работы в электроустановках
                                                потребителей</Accordion.Header>
                                            <Accordion.Body>
                                                <p>84. Эксплуатация электроустановок (Г 1.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/fC2HZSu2IzXI3A">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="18">
                                            <Accordion.Header>Г.2. Требования к эксплуатации электрических станций и
                                                сетей</Accordion.Header>
                                            <Accordion.Body>
                                                <p>85. Эксплуатация тепловых электрических станций (Г2.1)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/CF1mafrbRy_kgg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>86. Эксплуатация электрических сетей (Г 2.2)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/USUCIYlY1aRhOQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>87. Эксплуатация гидроэлектростанций (Г 2.3)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/lB64NvJJHgik_w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>88. Эксплуатация объектов возобновляемых источников энергии (Г
                                                    2.4)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/YGDei-AcbVeYqA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 89. Организация оперативно-диспетчерского управления в
                                                    электроэнергетике (Г 2.5)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/nMRWjzB6Qjsrbw">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Вы легко можете пройти обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР».Для этого вам достаточно заполнить заявку на обучение и связаться
                                            с нами</p>
                                        <p className="course-text">Мы предоставим весь необходимый учебный материал,
                                            доступ на портал тестирования и поможем в подготовке и оформлении пакета
                                            документов для прохождения дальнейшей аттестации в Ростехнадзоре.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="second">
                                    <Nav.Link href="/">
                                        <img className="course-image-big"
                                             src={require('../Img/Courses/elektrobez-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">"Электробезопасность"</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по
                                            энергетической безопасности с последующим получением удостоверения
                                            установленного образца в соответствии с требованиями Постановления
                                            Правительства РФ от 25.10.2019 N 1365 (ред. от 06.08.2020) «О подготовке и
                                            об аттестации в области промышленной безопасности, по вопросам безопасности
                                            гидротехнических сооружений, безопасности в сфере электроэнергетики», с
                                            учетом требований Федерального закона «О промышленной безопасности опасных
                                            производственных объектов» от 21.07.1997г. № 116-ФЗ.</p>
                                        <p className="course-text">Центр повышения квалификации «ПАРТНЕР» проводит
                                            обучение электротехнического (электротехнологического) персонала на II, III,
                                            и IV группы по электробезопасности до 1000 В, а также на II, III, IV и V
                                            группы по электробезопасности до и выше 1000 В.
                                            Аттестация проходит по нормативно-правовым актам в Ростехнадзоре.</p>
                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                электробезопасности в любой удобной для вас форме (очно, очно-заочно и
                                                дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p>1. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до 1000 В и II группой по
                                                    электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/dS7Z6t5jP2q0ew">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до 1000 В и III группой
                                                    по электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/t-fUn1L83eDFQg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до 1000 В и IV группой по
                                                    электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/uNtIU88aUBytFQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>4. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до и выше 1000 В и IV
                                                    группой по электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/ct6dfVtxyecsJw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>5. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до и выше 1000 В и III
                                                    группой по электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/EV_aZtu_LHAePA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>6. Электробезопасность. Требования нормативных документов в объеме,
                                                    необходимом для работы в электроустановках до и выше 1000 В и V
                                                    группой по электробезопасности</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/vAZOz9eiKEuBBw">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 72 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение о повышении квалификации
                                            установленного образца.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="third">
                                    <Nav.Link href="/">
                                        <img className="course-image-big" src={require('../Img/Courses/gochs-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">"Гражданская оборона и защита от
                                                ЧС"</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение с
                                            последующим получением удостоверения повышения квалификации в соответствии с
                                            требованиями Постановления Правительства № 841 «Об утверждении положения об
                                            организации обучения населения в области гражданской обороны» (в редакции от
                                            19.04.2017 г.) подготовка в сфере гражданской обороны и чрезвычайных
                                            ситуаций является обязательной и проводится, в том числе, в организациях,
                                            осуществляющих образовательную деятельность по дополнительным
                                            профессиональным программам в области гражданской обороны.</p>
                                        <p className="course-text">Обучение по гражданской обороне и защите населения от
                                            чрезвычайных ситуаций предназначено для руководителей и работников
                                            организаций, муниципальных предприятий и учреждений, рабочих и служащих,
                                            уполномоченных на решение задач в области гражданской обороны. На обучение
                                            по ГО и ЧС принимаются люди с высшим или средним профобразованием.</p>
                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                ГО и ЧС в любой удобной для вас форме (очно, очно-заочно и дистанционно)
                                                по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 1. Обучение руководителей организаций, уполномоченных на решение
                                                    задач в области ГО и ЧС</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Nz2xMbY8lKdYbA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Специалист (работник) организации, уполномоченный на решение задач
                                                    в области ГО и ЧС</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/CNBoHmMDTCQOMg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Обучение руководителей организаций по гражданской обороне и
                                                    ликвидации чрезвычайных ситуаций, неуполномоченных на решение задач
                                                    в области ГО и ЧС</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/zZBnvDUNGoeglA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>4. Обучение должностных лиц и специалистов организаций и учреждений,
                                                    уполномоченных на решение задач в области ГО и ЧС</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/L2NNWjDvqRxmbw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>5. Обучение должностных лиц и работников гражданской обороны и единой
                                                    государственной системы предупреждения и ликвидации чрезвычайных
                                                    ситуаций</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/L6SJPDeijPcC7Q">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 16 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение установленного образца.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="fourth">
                                    <Nav.Link href="/">
                                        <img className="course-image-big"
                                             src={require('../Img/Courses/work-proff-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">Рабочие профессии</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по рабочим
                                            специальностям в соответствии с ОКПДТР и ЕТКС с последующим получением
                                            удостоверения установленного образца или свидетельства и выписки из
                                            протокола проверки знаний. Наши программы обучения соответствуют требованиям
                                            профессиональных стандартов, вступивших в силу 1 июля 2016 года (закон от
                                            02.05.2015 №122-ФЗ).</p>
                                        <p className="course-text">Обучение по рабочим профессиям является
                                            востребованным для любого промышленного предприятия, среднего и малого
                                            бизнеса. Постепенный рост предприятий требует повышения соответствующих
                                            разрядов, а также требований, предъявляемых к профессиональным знаниям и
                                            навыкам рабочих. </p>
                                        <p className="course-text">Центр повышения квалификации «ПАРТНЕР» внесен в
                                            реестр аккредитованных организаций Министерства труда и социальной защиты
                                            РФ, оказывающих услуги по обучению в области охраны труда. Все сведения об
                                            обучающихся нашего учебного центра заносятся в единый Федеральный реестр об
                                            образовании.</p>
                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                рабочим профессиям в любой удобной для вас форме (очно, очно-заочно и
                                                дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 1. Электрогазосварщик</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/zvhtTI68lsr-cQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Машинист подъемника</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/2BvIJe5cbeZHcQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Стропальщик</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/UMmPu_RQVOkmGQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>4. Рабочий люльки</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/iscT-chsJXCwPg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>5. Персонал, обслуживающий сосуды, работающие под давлением</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/y_5yNTkYRslt3w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>6. Промышленный альпинист</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/T8YPAAgPIm5oZg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>7. Электромонтер по ремонту и обслуживанию электрооборудования</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/61iCXNXidwvcsQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>8. Лаборант спектрального анализа</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/WuNTwTK3twq_Og">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>9. Оператор котельной</p>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 160 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение установленного образца.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="fifth">
                                    <Nav.Link href="/">
                                        <img className="course-image-big"
                                             src={require('../Img/Courses/first-help-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Первая помощь</h1>
                                            <h1 className="course-big-subtitle">"Оказание первой помощи"</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по оказанию
                                            первой доврачебной помощи пострадавшему с последующим получением
                                            удостоверения установленного образца в соответствии с требованиями Трудового
                                            Кодекса Российской Федерации.</p>
                                        <p className="course-text">Обучение по оказанию первой помощи является
                                            обязательным для любого юридического лица, осуществляющем свою деятельность
                                            на территории Российской Федерации, так как полученные знания позволяют не
                                            только уменьшить количество несчастных случаев в трудовых коллективах, но и
                                            сократят профессиональные заболевания, а также уменьшат статьи расходов по
                                            страховым выплатам.</p>
                                        <p className="course-text">Центр повышения квалификации «ПАРТНЕР» внесен в
                                            реестр аккредитованных организаций Министерства труда и социальной защиты
                                            РФ, оказывающих услуги по обучению в области охраны труда.</p>

                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                оказанию первой помощи в любой удобной для вас форме (очно, очно-заочно
                                                и дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 1. Инструктор по оказанию первой помощи</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/UbNdSYNt4DoueQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Оказание первой помощи </p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/4FLnhZVoEx3TqA">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 8 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение установленного образца и выписку
                                            из протокола проверки знаний.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="sixth">
                                    <Nav.Link href="/">
                                        <img className="course-image-big" src={require('../Img/Courses/ot-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">Охрана труда</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по охране
                                            труда с последующим получением удостоверения установленного образца в
                                            соответствии с требованиями Трудового Кодекса Российской Федерации.</p>
                                        <p className="course-text">ВАЖНО!</p>
                                        <p className="course-text">Обучение по охране труда должны проходить абсолютно
                                            ВСЕ юридические лица, осуществляющие свою деятельность на территории
                                            Российской Федерации.</p>
                                        <p className="course-text">В каждой организации должен быть ответственный по
                                            охране труда!</p>
                                        <p className="course-text">С 1 сентября 2022 года поменялся формат обучения по
                                            охране труда.Теперь работодатели обязаны учить сотрудников применять СИЗ
                                            !</p>
                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                охране труда в любой удобной для вас форме (очно, очно-заочно и
                                                дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 1. Профессиональная переподготовка кадров «Охрана труда» (520
                                                    час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/UtTjKoNEN2uJSA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Обучение безопасным методам и приемам выполнения работ при
                                                    воздействии вредных и (или) опасных производственных факторов,
                                                    источников опасности, идентифицированных в рамках специальной оценки
                                                    условий труда и оценки профессиональных рисков (16 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/yn8R1Y6wnqFFIw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Обучение безопасным методам и приемам выполнения работ повышенной
                                                    опасности, к которым предъявляются дополнительные требования в
                                                    соответствии с нормативными правовыми актами, содержащими
                                                    государственные нормативные требования охраны труда (16 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Vy14xUPOBVs5jw">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 4. Обучение по общим вопросам охраны труда и функционирования
                                                    системы управления охраной труда (16 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/n_zgU-jpwqxE7w">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 5. Охрана труда для руководителей и специалистов служб охраны труда
                                                    (40 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/xCCNURTR6l-HPg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 6. Охрана труда для руководителей организаций, их заместителей,
                                                    главных специалистов (40 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/UbqvcZkUCnyryQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 7. Охрана труда для руководителей структурных подразделений (40
                                                    час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/BnZBzQK6tQN7sg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 8. Охрана труда для специалистов подразделений и работники рабочих
                                                    профессий (40 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/wotXW7TjwN6Jeg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p> 9. Охрана труда с использованием средств индивидуальной защиты (40
                                                    час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/JQdg-Eyw5Jy-uw">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 16 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение установленного образца и выписку
                                            из протокола проверки знаний, удостоверение о повышении квалификации или
                                            диплом о профессиональной переподготовке кадров в соответствии с выбранным
                                            обучением.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="seventh">
                                    <Nav.Link href="/">
                                        <img className="course-image-big"
                                             src={require('../Img/Courses/pozhbez-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">Пожарная безопасность</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по пожарной
                                            безопасности с последующим получением удостоверения установленного образца в
                                            соответствии с требованиями Приказа МЧС РФ от 18.11.2021 № 806 «Об
                                            определении Порядка, видов, сроков обучения лиц, осуществляющих трудовую или
                                            служебную деятельность в организациях, по программам противопожарного
                                            инструктажа, требований к содержанию указанных программ и категорий лиц,
                                            проходящих обучение по дополнительным профессиональным программам в области
                                            пожарной безопасности».</p>

                                        <p className="course-text">Напоминаем, что в соответствии с Кодексом об
                                            административных правонарушениях (Статья 20.4) нарушение требований пожарной
                                            безопасности может повлечь наложение административного штрафа:</p>
                                        <p className="course-text">на должностных лиц — от 6000 до 15000 рублей;</p>
                                        <p className="course-text">на юридических лиц — от 150 000 до 200 000 рублей</p>
                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                пожарной безопасности в любой удобной для вас форме (очно, очно-заочно и
                                                дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p> 1. Пожарная безопасность (72 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/jpwTvEWFIKAPiA">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Пожарная безопасность (256 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/vDH_yUlwdDydHQ">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>3. Пожарная безопасность (520 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/n9l1gSCAByeIiw">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 72 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение о повышении квалификации или
                                            диплом о профессиональной переподготовке кадров в зависимости от выбранного
                                            направления обучения.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>


                            <Tab.Content className="course-content-main">
                                <Tab.Pane eventKey="eighth">
                                    <Nav.Link href="/">
                                        <img className="course-image-big"
                                             src={require('../Img/Courses/ecolog-bez-bg.jpg')}/>
                                        <div className="course-big-description">
                                            <h1 className="course-big-title">Безопасность</h1>
                                            <h1 className="course-big-subtitle">Экологическая безопасность</h1>
                                        </div>
                                    </Nav.Link>
                                    <div className="course-text-wrap">
                                        <p className="course-text">АНО ДПО «ЦПК «ПАРТНЕР» проводит обучение по
                                            экологической безопасности с последующим получением удостоверения
                                            установленного образца в соответствии с требованиями ст. 73 Федерального
                                            закона от 10.01.2002 г. № 7-ФЗ «Об охране окружающей среды», а также в
                                            соответствии со ст. 15 Федерального закона от 24.06.1998 г. № 89-ФЗ «Об
                                            отходах производства и потребления»</p>

                                        <p className="course-text">Обучение по экологической безопасности рекомендовано
                                            проходить всем сотрудникам, которые являются ответственными за решения,
                                            которые потенциально могут причинить вред окружающей среде. Такие лица могут
                                            иметь дело непосредственно с опасными отходами 1-4 классов, разрабатывать и
                                            проводить мероприятия по экологическому контролю или работать в
                                            общехозяйственных системах управления.</p>

                                    </div>

                                    <h2 className="course-subtitle"></h2>
                                    <Accordion defaultActiveKey={['1']} className="course-accordion">
                                        <Accordion.Item eventKey="1">
                                            <Accordion.Header>АНО ДПО «ЦПК «ПАРТНЕР» предлагает вам пройти обучение по
                                                экологической безопасности в любой удобной для вас форме (очно,
                                                очно-заочно и дистанционно) по следующим программам:</Accordion.Header>
                                            <Accordion.Body>
                                                <p>1. Экологическая безопасность (72 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/Tp2Or63wiFKdLg">Смотреть
                                                    учебный план</Nav.Link>
                                                <p>2. Экологическая безопасность при обращении с отходами I-IV класса
                                                    опасности (112 час)</p>
                                                <Nav.Link className="course-tab-link"
                                                          href="https://disk.yandex.ru/i/zab9lAvzcKrRsg">Смотреть
                                                    учебный план</Nav.Link>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                    <div className="course-text-wrap">
                                        <p className="course-text">Срок обучения: от 72 часов</p>
                                        <p className="course-text">Слушатели, успешно прошедшие обучение в АНО ДПО «ЦПК
                                            «ПАРТНЕР», по итогу получают удостоверение о повышении квалификации
                                            установленного образца.</p>
                                    </div>
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
                                    <Button href="/#subscribe" className="fifteenth-button">Записаться на
                                        приём</Button>
                                </Tab.Pane>
                            </Tab.Content>

                        </Col>
                    </Row>

                </Tab.Container>

            </div>
        )
    }
}
