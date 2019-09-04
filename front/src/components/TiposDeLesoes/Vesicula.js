import React, { Component } from 'react'
import { Link } from 'react-router'

export class Vesicula extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Vesícula <small>Características</small></h3>
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Ausente
                                </p>
                                <p>
                                    <strong>Localização</strong><br />
                                    Superficialmente no mamilo
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Arredondadas, íntegras ou rompidas ou em processo de cicatrização ou sendo reabsorvida
                                </p>
                                <p>
                                    <strong>Secreção</strong><br/>
                                    Presente ou não, com conteúdo transparente, claro e aguado. (Não confundir com pré- colostro ou como eliminação do mamilo).
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    Intensa dor na porção terminal do mamilo. Durante a mamada, com piora no final e logo após as mamadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Sução muito forte, tensa e excessiva e/ou sucção não eficiente do RN, além de pega incorreta – o RN pode estar sugando a ponta do mamilo.
                                </p>
                                <img src={require('../../img/lesoes/vesicula.png')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/vesicula_avancada.jpeg')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}