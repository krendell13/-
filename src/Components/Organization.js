import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import "./Organization.css"; 

export default class Organization extends Component {
  render() {
    return (
      <div className="organization">
        <Container>
        <h1 className="org-title">Организация, зарекомендовала себя на рынке</h1>
        <div className="org-items-all">

          <div className="org-item">
            <h4 className="org-item-title">Более 300 </h4>
            <hr className="org-item-line"></hr>
            <h5 className="org-item-subtitle">программ обучения</h5>
          </div>

          <div className="org-item">
            <h4 className="org-item-title">Более 1000</h4>
            <hr className="org-item-line"></hr>
            <h5 className="org-item-subtitle">городов - зона покрытия</h5>
          </div>

          <div className="org-item">
            <h4 className="org-item-title">Более 100 000</h4>
            <hr className="org-item-line"></hr>
            <h5 className="org-item-subtitle">выпущено специалистов</h5>
          </div>

          <div className="org-item">
            <h4 className="org-item-title">24/7</h4>
            <hr className="org-item-line"></hr>
            <h5 className="org-item-subtitle">работаем без выходных</h5>
          </div>
        </div>
        </Container>
      </div>
    )
  }
}
