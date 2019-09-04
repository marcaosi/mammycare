import React, { Component } from 'react'
import { Link } from 'react-router'

export class Escoriacao extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Escoriação <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Lesão de aspecto esfoliativo, as vezes em forma de “meia lua”.
                                </p>
                                <p>
                                    <strong>Localização</strong><br/>
                                    Mamilo ou aréola ou mamiloareolar, dependendo da posição do bebê durante a mamada. (Geralmente no MAMILO – podendo ser no quadrante superior externo).
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Epiderme
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    Durante toda a mamada
                                </p>
                                <p>
                                    <strong>Secreção</strong><br/>
                                    Na fase inicial pode apresentar sangramento
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Pega incorreta, língua posteriorizada, tensão em orbicular da boca. Ocorrência em qualquer tipo de mamilo. 
                                </p>

                                <img src={require('../../img/lesoes/escoriacao_inicial.jpeg')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}