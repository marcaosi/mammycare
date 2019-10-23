import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{
    render(){
        return (
            <footer className="container-fluid">
                <div className="row bg-light-pink justify-content-md-center">
                    <div className="col-xs-12 col-sm-6 credits">
                        <h5>Conteúdo desenvolvido no Mestrado Profissional em Ciências aplicas à Saúde - Univás</h5>
                        <p>
                                Aluna: Iaura Mônica Cunha da Silva Esteves (iauramonica@ig.com.br)<br/>
                                Orientadora: Profa. Dra. Adriana Rodrigues dos Anjos Mendonça<br/>
                                Coorientador: Prof. Dr. Geraldo Magela Salomé<br/>
                                Responsável Técnico: Lúcio Henrique de Oliveira <br/>
                                Ilustrações e fotos: Mª Celestina Bonzanini Grazziotin<br/>
                                Fotos: Vera Vinha<br/>
                                Ilustrações: Felipe Silva Lemes
                        </p>
                    </div>
                    <div className="col-sm-2">
                        <a target="_blank" href="https://www.univas.edu.br/mpcas">
                            <img src={require("../../img/mpcas.png")}/>
                        </a>
                        <a target="_blank" href="http://www.cnpq.br/">
                            <img src={require("../../img/cnpq.png")}/>
                        </a>
                    </div>
                </div>
                <div className="row bg-light-blue">
                    <div className="col text-center copyright">
                        &copy; Copyright. Todos os direitor reservados. 2018.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer