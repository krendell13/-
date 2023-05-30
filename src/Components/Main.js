import React, {Component} from 'react'
import {Container} from 'react-bootstrap';
import sample from './Video.webm';
import "./Main.css"

export default class Main extends Component {
    render() {
        return (

            <div className="embed-responsive embed-responsive-16by9">
                <video className='videoTag' autoPlay loop muted>
                    <source src={sample} type='video/webm'/>
                </video>
                <div className="main-bg">
                </div>
                <Container>
                    <div className="main-title">
                        <h1 className="video-subtitle">АНО ДПО ЦПК ПАРТНЕР</h1>
                        <h1 className="video-description">ОБУЧАЕМ ЛУЧШИХ!</h1>
                    </div>
                </Container>

            </div>
        )
    }
}

