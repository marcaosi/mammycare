import React, { Component } from 'react'
import { Link } from 'react-router'

export class Dilaceracao extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Dilaceração <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Aspecto de mamilo “rasgado” na região mamiloareolar.
                                </p>
                                <p>
                                    <strong>Localização</strong><br/>
                                    Mamilo e aréola
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Epiderme
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    No início das mamadas e desaparecem após as primeiras sugadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Pode ocorrer quando uma lesão já existente é exposta a “bomba de tirar leite”. Também, posição lingual causa um padrão de sucção alterado – falta de excurcionamento da mandíbula.
                                </p>

                                <img src={require('../../img/lesoes/dilaceracao.jpeg')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}