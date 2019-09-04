import React, { Component } from 'react'
import { Link } from 'react-router'

export class Fissura extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Fissura <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Localização/Descrição</strong><br/>
                                    Superfície do mamilo (lesão em linha reta única ou radiada com lesões múltiplas); Junção mamiloareolar circunda parcial ou totalmente a base do mamilo; Lesão mista (Lesão na base e ponta do mamilo).
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Superficiais ou profundas. Podendo se estender da superfície epidérmica a derma.
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    Dependendo da extensão da lesão: durante toda mamadas/ desaparecem nas primeiras sugadas / durante a sucção que demora para desparecer
                                </p>
                                <p>
                                    <strong>Secreção</strong><br/>
                                    Poderá vir acompanhado de sangramento, geralmente nas fissuras grandes e extensas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Sucção, tensão labial ou lingual, pouco ou nenhum excursionamento, da mandíbula. Pega incorreta.
                                </p>

                                <img src={require('../../img/lesoes/fissura.jpg')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/fissura_protuso.png')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/fissura_fotos.png')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}