import React, { Component } from 'react'
import logo from '../../logo.png'
import './Header.css'
import Menu from '../Menu/Menu';

class Header extends Component{
    render(){
        return (
            <header className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-4 content-logo">
                        <img className="img-logo-header" src={logo} alt="MammyCare"/>
                    </div>
                </div>

                <div className="row bg-light-pink">
                    <div className="col">
                        <Menu />
                    </div>
                </div>
            </header>
        )
    }
}

export default Header