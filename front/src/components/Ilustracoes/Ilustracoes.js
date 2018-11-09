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
                        <div className="col-8">
                            <h2 className="title-page"><Link to="/informacoes">Informações ></Link><Link to="/informacoes/ilustracoes">Ilustrações</Link><hr/></h2>


                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/tipos_mamilos">Tipos de mamilos</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/higienizacao_mamas">Higienização das mamas</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/posicoes_amamentar">Posições de amamentar</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/pega_correta">Pega correta e incorreta</Link></p>
                                </div>
                            </div>
                            
                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/formas_segurar_mamas">Formas adequadas e inadequadas para segurar as mamas</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/terminar_mamada">Como terminar uma mamada</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/extracao_manual">Extração manual do leite materno</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/formar_armazenamento">Formas corretas de armazenar o leite materno</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/caixas_termicas">Caixas térmicas para doação e/ou solicitação de leite materno</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/artificios_nao_recomendados">Artifícios não recomendados</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/equipamentos_amamentacao">Equipamentos e tecnologias de amamentação</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/desenhos_diversos">Desenhos diversos</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/oferta_copinhos">Oferta de leite materno em copinhos</Link></p>
                                </div>
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/estimulo_manual">Estímulo manual e com bomba ordenharia em mamilo invertido</Link></p>
                                </div>
                            </div>

                            <div className="row container-cards">
                                <div className="col card">
                                    <p><Link to="/informacoes/ilustracoes/mamas">Mamas</Link></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            )
        }else{
            return (
                <main className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-8">
                            <h2 className="title-page"><Link to="/informacoes">Informações ></Link><Link to="/informacoes/ilustracoes">Ilustrações</Link><hr/></h2>
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