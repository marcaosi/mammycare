import React, {Component} from 'react'
import {Link} from 'react-router'
import './TiposDeLesoes.css'

class TiposDeLesoes extends Component{
    render(){
        console.log(this.props.params.id)
        if(this.props.params.id === null || this.props.params.id === '' || this.props.params.id === undefined){
            return this['main']()
        }else{
            return this[this.props.params.id]()
        }
    }

    main(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações ></Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>

                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/vesicula" className="col card">
                                <p>Vesícula</p>
                            </Link>
                            <Link to="/informacoes/tipos_lesoes/escoriacao" className="col card">
                                <p>Escoriação</p>
                            </Link>
                        </div>
                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/dilaceracao" className="col card">
                                <p>Dilaceração</p>
                            </Link>
                            <Link to="/informacoes/tipos_lesoes/erosao" className="col card">
                                <p>Erosão</p>
                            </Link>
                        </div>
                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/fissura" className="col card">
                                <p>Fissura</p>
                            </Link>
                        </div>

                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/candidiase" className="col card">
                                <p>Candidíase ou Monilíase Mamária</p>
                            </Link>
                            <Link to="/informacoes/tipos_lesoes/reynaud" className="col card">
                                <p>Fenômeno de Reynaud no mamilo</p>
                            </Link>
                        </div>

                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/condutas_terapeuticas" className="col card">
                                <p>Condutas Terapêuticas</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    escoriacao(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações ></Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
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
    
    vesicula(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações ></Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
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

export default TiposDeLesoes