import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{
    render(){
        return (
            <footer class="container-fluid">
                <div class="row bg-dark-pink justify-content-md-center">
                    <div class="col-xs-12 col-8 credits">
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
                </div>
                <div class="row bg-light-pink">
                    <div class="col text-center copyright">
                        &copy; Copyright. Todos os direitor reservados. 2018.
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer