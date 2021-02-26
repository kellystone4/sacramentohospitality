import React, { Component } from 'react';
import Modal from './modal'

class NavBar extends Component {
    state = {  }
    render() { 
        return ( 
        <div>
        <nav>
            <div class="nav-wrapper linear-gradient(to bottom, rgba(0,0,0,0.6) 0%,rgba(0,0,0,0.6) 100%)">
                <a class="brand-logo">
                </a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">dehaze</i></a>
                <ul class="left hide-on-med-and-down">
                    <div class="navbarTitle">
                        <li>SACRAMENTO HOSPITALITY GROUP</li>
                    </div>
                </ul>
                <ul class="right hide-on-med-and-down">
                    <li>
                        <a href="https://kellystone4.github.io/sacHospitalityGroup/index">H O M E</a></li>
                    <li>
                        <a href="https://kellystone4.github.io/sacHospitalityGroup/aboutUs">A B O U T &nbsp; U S</a></li>
                    <li>
                        <a href="https://kellystone4.github.io/sacHospitalityGroup/pastEvents">P A S T &nbsp; E V E N T S</a></li>
                    <li>
                        <a class="modal-trigger" href="#modal2">C O N T A C T &nbsp; U S</a> </li>
                </ul>
            </div>
        </nav> 
            <ul class="sidenav" id="mobile-demo">
            <li><a href="https://kellystone4.github.io/sacHospitalityGroup/index">H O M E</a></li>
            <li><a href="https://kellystone4.github.io/sacHospitalityGroup/aboutUs">A B O U T &nbsp; U S</a></li>
            <li><a href="https://kellystone4.github.io/sacHospitalityGroup/pastEvents">P A S T &nbsp; E V E N T S</a></li>
            <li><a href="#modal2" class="modal-trigger">C O N T A C T &nbsp; U S</a></li>
    
        </ul>
        </div>
    )}
}
 
export default NavBar;