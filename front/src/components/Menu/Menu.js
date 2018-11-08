import React, {Component} from 'react'
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
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/informacoes">Informações</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/prevencao">Prevenção</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/procedimentos">Procedimentos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/logout">Sair</a>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default Menu