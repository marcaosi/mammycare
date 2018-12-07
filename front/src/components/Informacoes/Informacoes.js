import React, {Component} from 'react'
import {Link} from 'react-router'

class Informacoes extends Component{
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações</Link> <hr/></h2>

                        <div className="row container-cards">
                            <Link to="/informacoes/ilustracoes" className="col card">
                                <i className="fas fa-image"></i>
                                <p>Ilustrações</p>
                            </Link>
                            <Link to="/informacoes/tipos_lesoes" className="col card">
                                <i className="fas fa-exclamation"></i>
                                <p>Tipos de Lesões</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default Informacoes