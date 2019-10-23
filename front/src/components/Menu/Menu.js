import React, {Component} from 'react'
import {Link} from 'react-router'
import './Menu.css'

class Menu extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-light-pink">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mr-auto">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/informacoes" className="nav-link">Informações</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/prevencao" className="nav-link">Prevenção</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/procedimentos" className="nav-link">Avaliações</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/logout" className="nav-link">Sair</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu