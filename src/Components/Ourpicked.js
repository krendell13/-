import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import "./Ourpicked.css"; 

export default class Ourpicked extends Component {
  render() {
    return (
      <div className="ourpicked-bg" id="ourpicked">
        <Container>
          <div className="ourpicked-title">Нас выбирают</div>
          <div className="ourpicked-items-top">

            <div className="ourpicked-item-top">
              <img className="ourpicked-image" src={require('../Img/tgu.png')} />
              <div className="ourpicked-item-title">Ректор Томского государственного универститета</div>
              <div className="ourpicked-item-author">Э.В. Галажинский</div>
              <div className="ourpicked-item-text">От лица федерального государственного автономного образовательного учреждения высшего образования «Национальный исследовательский Томский государственный университет» и от себя лично выражаю глубокую признательность и благодарность за высочайший профессиональный уровень, неравнодушный подход к делу и значительный личный вклад в реализацию федерального проекта «Содействие занятости» национального проекта «Демография».
Желаю Вам новых профессиональных успехов и выражаю надежду на долгосрочное продолжение плодотворного сотрудничества.
</div>
            </div>

            <div className="ourpicked-item-top">
              <img className="ourpicked-image" src={require('../Img/pravit.png')} />
              <div className="ourpicked-item-title">Зам. мэра в Правительстве г. Москвы</div>
              <div className="ourpicked-item-author">В.В. Ефимов</div>
              <div className="ourpicked-item-text">Хочу выразить благодарность за участие и личный вклад в вашей работе. Благодаря четкому, быстрому взаимодействию и готовности московского бизнеса вместе с городскими властями решать самые острые проблемы в период пандемии, нам с вами удалось обеспечить нормальное функционирование города в период необходимых ограничений, не допустить серьезных рисков и в самые сжатые сроки вернуться к обычной жизни.
Уверен, что наш конструктивный диалог станет надежным фундаментом для дальнейшей работы, для развития экономики столицы.
</div>
            </div>

          </div>

          <div className="ourpicked-items-bottom">
            <div className="ourpicked-item-bottom">
              <img className="ourpicked-image" src={require('../Img/zazhprav.png')} />
              <div className="ourpicked-item-title">Уполномоченный по защите прав предпринимателей</div>
              <div className="ourpicked-item-author">В.А. Головнёв </div>
              <div className="ourpicked-item-text">Выражаю благодарность за высокий профессионализм, добросовестный труд, большой личный вклад в социально-экономическое развитие городского округа Долгопрудный.</div>
            </div>

            <div className="ourpicked-item-bottom">
              <img className="ourpicked-image" src={require('../Img/tpp.png')} />
              <div className="ourpicked-item-title">Президент торгово-промышленной палаты РФ</div>
              <div className="ourpicked-item-author">И.Е. Куимов</div>
              <div className="ourpicked-item-text">Выражаю благодарность за большой личный вклад в социально-экономическое развитие Московской области и активное участие в развитие предпринимательства.</div>
            </div>
          </div>
        </Container>
      </div>
    )
  }
}
