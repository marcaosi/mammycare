import React, {Component} from 'react'
import {Link} from 'react-router'
import './Ilustracoes.css'

class Ilustracoes extends Component{
    constructor(){
        super()

        this.images = {
            tipos_mamilos : [{name:'tipos_mamilo', type: 'png'}],
            higienizacao_mamas : [{name:'higienizacao_mamas', type: 'jpg'}],
            posicoes_amamentar : [{name:'posicao_amamentar', type: 'jpg'},{name:'posicao_amamentar2', type: 'jpg'},{name:'posicao_amamentar3', type: 'jpg'},{name:'posicao_amamentar4', type: 'jpg'},{name:'posicao_amamentar5', type: 'jpg'},{name:'posicao_amamentar6', type: 'jpg'}],
            pega_correta : [{name:'pega_correta', type: 'jpg'},{name:'pega_correta2', type: 'jpg'},{name:'pega_correta3', type: 'jpg'}],
            formas_segurar_mamas : [{name:'formas_adequadas', type: 'jpg'}],
            terminar_mamada : [{name:'final_da_mamada', type: 'jpg'}],
            extracao_manual : [{name:'ordenha_manual', type: 'jpg'},{name:'ordenha_manual2', type: 'jpg'}],
            formar_armazenamento : [{name:'formas_armazenar', type: 'jpg'}],
            caixas_termicas : [{name:'caixas_termicas', type: 'jpg'}],
            artificios_nao_recomendados : [{name:'artificios_nao_recomendados', type: 'jpg'}],
            equipamentos_amamentacao : [{name:'equipamentos_amamentacao', type: 'jpg'},{name:'equipamentos_amamentacao2', type: 'jpg'}],
            desenhos_diversos : [{name:'desenhos_diversos', type: 'jpg'},{name:'desenhos_diversos2', type: 'jpg'},{name:'desenhos_diversos3', type: 'jpg'}],
            oferta_copinhos : [{name:'copinho', type: 'jpg'}],
            estimulo_manual : [{name:'estimulo_manual', type: 'png'}],
            mamas : [{name:'mamas', type: 'png'}]
        }
    }
    render(){
        console.log(this.props.params.id)
        if(this.props.params.id === null || this.props.params.id === '' || this.props.params.id === undefined){
            return (
                <main className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-xs-12 col-md-8">
                            <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/ilustracoes">Ilustrações</Link><hr/></h2>


                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/tipos_mamilos" className="col-xs-12 col-sm-6 card">
                                    <p>Tipos de mamilos</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/higienizacao_mamas" className="col-xs-12 col-sm-6 card">
                                    <p>Higienização das mamas</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/posicoes_amamentar" className="col-xs-12 col-sm-6 card">
                                    <p>Posições de amamentar</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/pega_correta" className="col-xs-12 col-sm-6 card">
                                    <p>Pega correta e incorreta</p>
                                </Link>
                                <br></br>
                            </div>
                            
                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/formas_segurar_mamas" className="col-xs-12 col-sm-6 card">
                                    <p>Formas adequadas e inadequadas para segurar as mamas</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/terminar_mamada" className="col-xs-12 col-sm-6 card">
                                    <p>Como terminar uma mamada</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/extracao_manual" className="col-xs-12 col-sm-6 card">
                                    <p>Extração manual do leite materno</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/formar_armazenamento" className="col-xs-12 col-sm-6 card">
                                    <p>Formas corretas de armazenar o leite materno</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/caixas_termicas" className="col-xs-12 col-sm-6 card">
                                    <p>Caixas térmicas para doação e/ou solicitação de leite materno</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/artificios_nao_recomendados" className="col-xs-12 col-sm-6 card">
                                    <p>Artifícios não recomendados</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/equipamentos_amamentacao" className="col-xs-12 col-sm-6 card">
                                    <p>Equipamentos e tecnologias de amamentação</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/desenhos_diversos" className="col-xs-12 col-sm-6 card">
                                    <p>Desenhos diversos</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/oferta_copinhos" className="col-xs-12 col-sm-6 card">
                                    <p>Oferta de leite materno em copinhos</p>
                                </Link>
                                <br></br>
                                <Link to="/informacoes/ilustracoes/estimulo_manual" className="col-xs-12 col-sm-6 card">
                                    <p>Estímulo manual e com bomba ordenharia em mamilo invertido</p>
                                </Link>
                                <br></br>
                            </div>

                            <div className="row container-cards">
                                <Link to="/informacoes/ilustracoes/mamas" className="col card">
                                    <p>Mamas</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }else{
            return (
                <main className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-xs-12 col-md-8">
                            <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/ilustracoes"> &nbsp;Ilustrações</Link><hr/></h2>
                            {
                                this.images[this.props.params.id].map(element => {
                                    return <img src={require('../../img/ilustracoes/'+element.name+'.'+element.type)} alt={element.name}/>
                                })
                            }
                        </div>
                    </div>
                </main>
            )
        }
    }
}

export default Ilustracoes