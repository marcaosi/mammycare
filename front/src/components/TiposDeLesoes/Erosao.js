import React, { Component } from 'react'
import { Link } from 'react-router'

export class Erosao extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Erosão <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Lesão extensa, com desgaste de relevo ou superfície, tipo “ralado ou lixado”
                                </p>
                                <p>
                                    <strong>Localização</strong><br/>
                                    Mamilo
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Atinge a derme.
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    A dor é relativa, pela profundidade da lesão, que poderá ser menor. Ocorre durante todos o período de sucção.
                                </p>
                                <p>
                                    <strong>Presença de sangramento</strong><br/>
                                    Pode ocorrer no momento das mamadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Pega incorreta devido a movimentação do mamilo em atrito a gengiva, língua e palato do bebê. Evolução a partir de qualquer tipo de lesão existente e em qualquer tipo de mamilo.
                                </p>

                                <img src={require('../../img/lesoes/escoriacao_erosa.jpg')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/erosao_fotos.png')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}