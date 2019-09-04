import React, {Component} from 'react'
import {Link} from 'react-router'
import './TiposDeLesoes.css'
import {CondutasTerapeuticas} from './CondutasTerapeuticas';
import {FenomenoReynaud} from './FenomenoReynaud';
import { Candidiase } from './Candidiase';
import { Fissura } from './Fissura';
import { Erosao } from './Erosao';
import { Dilaceracao } from './Dilaceracao';
import { Escoriacao } from './Escoriacao';
import { Vesicula } from './Vesicula';

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
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>

                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/vesicula" className="col-xs-12 col-sm-6 card">
                                <p>Vesícula</p>
                            </Link><br/>
                            <Link to="/informacoes/tipos_lesoes/escoriacao" className="col-xs-12 col-sm-6 card">
                                <p>Escoriação</p>
                            </Link>
                        </div>
                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/dilaceracao" className="col-xs-12 col-sm-6 card">
                                <p>Dilaceração</p>
                            </Link><br/>
                            <Link to="/informacoes/tipos_lesoes/erosao" className="col-xs-12 col-sm-6 card">
                                <p>Erosão</p>
                            </Link>
                        </div>
                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/fissura" className="col card">
                                <p>Fissura</p>
                            </Link>
                        </div>

                        <div className="row container-cards">
                            <Link to="/informacoes/tipos_lesoes/candidiase" className="col-xs-12 col-sm-6 card">
                                <p>Candidíase ou Monilíase Mamária</p>
                            </Link><br/>
                            <Link to="/informacoes/tipos_lesoes/reynaud" className="col-xs-12 col-sm-6 card">
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

    condutas_terapeuticas(){
        return <CondutasTerapeuticas/>
    }

    reynaud(){
        return <FenomenoReynaud/>
    }

    candidiase(){
        return <Candidiase/>
    }

    fissura(){
        return <Fissura />
    }

    erosao(){
        return <Erosao/>
    }

    dilaceracao(){
        return <Dilaceracao />
    }

    escoriacao(){
        return <Escoriacao />
    }
    
    vesicula(){
        return <Vesicula />
    }
}   

export default TiposDeLesoes