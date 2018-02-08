import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NaviBar from './HeaderComponent/NavBar';
import Footer from "./FooterComponent/Footer";
import '../css/index.css';
import { FormGroup, InputGroup } from 'reactstrap';
import SideBar from './HeaderComponent/SideBar'
class App extends Component {
    render() {
        return (
            <div className="App">
                <SideBar/>
                <NaviBar/>
                <div className="App-title">My blog</div>

            </div>

        )

    }
}

export default App;