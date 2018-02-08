import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Media,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

import MyprofilePic from '../../static/myAvatar.png';

var imgStyle = {
    minWidth: "128px",
};
export default class SideBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (

            <Nav vertical id="sidebar">
                <NavItem className="profile">
                    <Media object src={MyprofilePic} alt="Profile" className="profile-img" />
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Another Link</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                </NavItem>
            </Nav>

        );
    }
}