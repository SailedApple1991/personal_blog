import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from "./FooterComponent/Footer";
import '../css/index.css';
import { FormGroup,FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-title">My blog</div>
                <FormGroup>
                    <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="search an artist..."/>
                <InputGroup.Addon>
                    <i class="fas fa-search"/>

                </InputGroup.Addon>
                </InputGroup>
            </FormGroup>
                <div className="Profile">
                    <div>Artist Picture</div>
                    <div>Artist Name</div>
                </div>
                <div className="Gallery">
                    Gallery
                </div>
            </div>

        )

    }
}
export default App;