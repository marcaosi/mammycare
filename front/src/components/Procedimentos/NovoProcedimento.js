import React, {Component} from 'react'
import {Link} from 'react-router'
import './procedimentos.css'

class NovoProcedimento extends Component{
    state = {
        step: 0
    }

    forms = {
        0: () => {
            return (
                <div>
                    <div className="form-group">
                        <label for="">Nome da mãe</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label for="">Nome do bebê</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label for="">Data de nascimento do bebê</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label for="">Condição de nascimento</label>
                        <select className="form-control">
                            <option value="termo">RN a termo</option>
                            <option value="preamturo">RN prematuro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="">Idade gestacional</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label for="">Idade da mãe</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label>Hábitos</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                            <label className="form-check-label" for="fumo">
                                Fumo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="alcool"/>
                            <label className="form-check-label" for="alcool">
                                Álcool
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="cafe"/>
                            <label className="form-check-label" for="cafe">
                                Café
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="">Medicamentos</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="form-group">
                        <label for="">Drogas que causam dependência</label>
                        <input type="text" className="form-control" id="" />
                    </div>
                </div>
            )
        },
        1: () => {
            return (
                <div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="">Fez pré-natal?</label>
                            <select className="form-control">
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label for="">Tipo de parto?</label>
                            <select className="form-control">
                                <option value="normal">Normal</option>
                                <option value="cesaria">Cesária</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="">Primeira mamada?</label>
                            <select className="form-control">
                                <option value="sala">Na sala de parto</option>
                                <option value="1">Na 1ª hora</option>
                                <option value="2">Na 2ª hora</option>
                                <option value="3">Na 3ª hora</option>
                                <option value="4">Na 4ª hora</option>
                                <option value="5">Na 5ª hora</option>
                                <option value="6">Na 6ª hora</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label for="">Antes de mamar no peito recebeu?</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Leite de vaca
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Leite em pó
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Água
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Chá
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Soro glicosado
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label for="">Outras informações</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Ficou em alojamento conjunto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Já teve experiência em amamentação
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Em experiências anteriores você teve algum tipo de lesão mamilar
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Teve apoio para amamentação após o parto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Pretende amamentar
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="fumo"/>
                                <label className="form-check-label" for="fumo">
                                    Sente-se cansada ou deprimida
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    componentDidMount = () => {
        this.setState({
            form: this.forms[this.state.step]()
        })
    }

    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h4>Dados Gerais</h4>
                        <form onSubmit={this.nextStep}>
                            
                            {this.state.form}
                            <button className="btn btn-mammycare">Avançar</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }

    nextStep = (event) => {
        event.preventDefault()
        const newStep = (this.state.step + 1) % 2
        this.setState({step: newStep, form: this.forms[newStep]()})
    }
}

export default NovoProcedimento