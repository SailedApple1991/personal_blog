import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NaviBar from './HeaderComponent/NavBar';
import Footer from "./FooterComponent/Footer";
import '../css/index.css';
import { Container, Row, Col } from 'reactstrap';
import SideBar from './HeaderComponent/SideBar';
import Skills from './ContentComponent/Skills';
class App extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                <Row>
                    <Col><NaviBar/></Col>
                </Row>

                    <Row className="sidebar-content">
                    <Col xs="3" sm="3"><SideBar/></Col>
                    <Col xs="12" sm={{ size: '8', offset: -4 }} ><HomePage/></Col>
                    </Row>
                    <Row>
                        <Col xs="3" sm="3"></Col>
                        <Col xs="12" sm={{ size: '8', offset: -4 }} ><Skills/></Col>
                    </Row>

                </Container>

                </div>


        )

    }
}

export default App;