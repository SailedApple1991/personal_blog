import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NaviBar from './HeaderComponent/NavBar';
import Footer from "./FooterComponent/Footer";
import '../css/index.css';
import { FormGroup,FormControl, InputGroup, Button } from 'reactstrap';
class App extends Component {
    render() {
        return (
            <div className="App">
                <NaviBar/>
                <div className="App-title">My blog</div>
                <div className="Search-box">
                <form>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="search an artist..."/>
                        <div className="input-group-append" id="basic-addon2">
                            <Button>
                                <i className="fas fa-search"></i>
                            </Button></div>
                    </InputGroup>
            </FormGroup>

                </form>
                </div>
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