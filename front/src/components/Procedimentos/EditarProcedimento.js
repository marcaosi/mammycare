import React, {Component} from 'react'
import {browserHistory} from 'react-router'
import Swal from 'sweetalert2'
import './procedimentos.css'
import utils from '../../utils'

class EditarProcedimento extends Component{

    constructor(props){
        super(props)
        this.state = {
            step: 0,
            dados: {
                nommae:'',
                nombebe: '',
                dtnascbebe: '',
                condnasc: '',
                idgest: '',
                idmae: '',
                fumo: true,
                alcool: false,
                cafe: false,
                medicamentos: '',
                drogas: '',
                prenatal: '',
                parto: '',
                primMamada: '',
                leiteVaca: false,
                leitePo: false,
                agua: false,
                cha: false,
                soro: false,
                alojamentoConjunto: false,
                expAmamentacao: false,
                lesaoAnterior: false,
                apoioPosParto: false,
                pretendeAmamentar: false,
                cansadaDeprimida: false,
                solucaoContinuidade: '',
                localizacao: '',
                descricao: '',
                secrecao: '',
                tecido: '',
                dor: '',
                candidiase: false,
                reynaud: false
            }
        }
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount = async () => {
        const id = this.props.params.id
        const jwt = localStorage.getItem("jwt").split(".")
        const user = atob(jwt[1])
        const res = await fetch(`${utils.api}procedimento.php?id=${id}&user=${user}`)
        const dados = await res.json()
        this.setState({dados:dados.data[0]})
    }

    handleChange(event){
        const field = event.target.name
        const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        let dados = this.state.dados
        dados[field] = value
        this.setState({dados})
    }

    titles = {
        0: "Dados gerais",
        1: "Gravidez, nascimento, primeiros alimentos e experiência em amamentação",
        2: "Avaliação",
        3: "Diagnóstico"
    }

    forms = {
        0: () => {
            return (
                <div>
                    <div className="form-group">
                        <label htmlFor="">Nome da mãe</label>
                        <input type="text" className="form-control" name="nommae" value={this.state.dados.nommae || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Nome do bebê</label>
                        <input type="text" className="form-control" name="nombebe" value={this.state.dados.nombebe || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Data de nascimento do bebê</label>
                        <input type="text" className="form-control" name="dtnascbebe" value={this.state.dados.dtnascbebe || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Condição de nascimento</label>
                        <select className="form-control" name="condnasc" value={this.state.dados.condnasc || ''} onChange={this.handleChange}>
                            <option value="" defaultValue disabled>Selecione uma opção...</option>
                            <option value="termo">RN a termo</option>
                            <option value="prematuro">RN prematuro</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Idade gestacional</label>
                        <input type="text" className="form-control" name="idgest" value={this.state.dados.idgest || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Idade da mãe</label>
                        <input type="text" className="form-control" name="idmae" value={this.state.dados.idmae || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Hábitos</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="fumo" name="fumo" checked={this.state.dados.fumo || false} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="fumo">
                                Fumo
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="alcool" name="alcool" checked={this.state.dados.alcool || false} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="alcool">
                                Álcool
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="cafe" name="cafe" checked={this.state.dados.cafe || false} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="cafe">
                                Café
                            </label>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Medicamentos</label>
                        <input type="text" className="form-control" name="medicamentos" value={this.state.dados.medicamentos || ''} onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Drogas que causam dependência</label>
                        <input type="text" className="form-control" name="drogas" value={this.state.dados.drogas || ''} onChange={this.handleChange} />
                    </div>
                </div>
            )
        },
        1: () => {
            return (
                <div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="">Fez pré-natal?</label>
                            <select className="form-control" name="prenatal" value={this.state.dados.prenatal} onChange={this.handleChange}>
                                <option value="Sim">Sim</option>
                                <option value="Não">Não</option>
                            </select>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="">Tipo de parto?</label>
                            <select className="form-control" name="parto" value={this.state.dados.parto} onChange={this.handleChange}>
                                <option value="normal">Normal</option>
                                <option value="cesaria">Cesária</option>
                            </select>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col-6">
                            <label htmlFor="">Primeira mamada?</label>
                            <select className="form-control" name="primMamada" value={this.state.dados.primMamada} onChange={this.handleChange}>
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
                            <label htmlFor="">Antes de mamar no peito recebeu?</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="leiteVaca" name="leiteVaca" checked={this.state.dados.leiteVaca} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="leiteVaca">
                                    Leite de vaca
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="leitePo" name="leitePo" value={this.state.dados.leitePo} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="leitePo">
                                    Leite em pó
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="Agua"name="agua" value={this.state.dados.agua} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="Agua">
                                    Água
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="cha" name="cha" value={this.state.dados.cha} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="cha">
                                    Chá
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="soro" name="soro" value={this.state.dados.soro} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="soro">
                                    Soro glicosado
                                </label>
                            </div>
                        </div>
                        <div className="form-group col-6">
                            <label htmlFor="">Outras informações</label>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="alojamentoConjunto" name="alojamentoConjunto" value={this.state.dados.alojamentoConjunto} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="alojamentoConjunto">
                                    Ficou em alojamento conjunto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="expAmamentacao" name="expAmamentacao" value={this.state.dados.expAmamentacao} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="expAmamentacao">
                                    Já teve experiência em amamentação
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="lesaoAnterior" name="lesaoAnterior" value={this.state.dados.lesaoAnterior} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="lesaoAnterior">
                                    Em experiências anteriores você teve algum tipo de lesão mamilar
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="apoioPosParto" name="apoioPosParto" value={this.state.dados.apoioPosParto} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="apoioPosParto">
                                    Teve apoio para amamentação após o parto
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="pretendeAmamentar" name="pretendeAmamentar" value={this.state.dados.pretendeAmamentar} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="pretendeAmamentar">
                                    Pretende amamentar
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="cansadaDeprimida" name="cansadaDeprimida" value={this.state.dados.cansadaDeprimida} onChange={this.handleChange}/>
                                <label className="form-check-label" htmlFor="cansadaDeprimida">
                                    Sente-se cansada ou deprimida
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            )
        },
        2: () => {
            return (
                <div>
                    <div className="form-group">
                        <label htmlFor="">Solução de continuidade</label>
                        <select className="form-control" name="solucaoContinuidade" value={this.state.dados.solucaoContinuidade} onChange={this.handleChange}>
                            <option value="ausente">Ausente</option>
                            <option value="presente">Presente</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Localização</label>
                        <select className="form-control" name="localizacao" value={this.state.dados.localizacao} onChange={this.handleChange}>
                            <option value="baseponta">Base e ponta do mamilo</option>
                            <option value="mamilo">Mamilo</option>
                            <option value="areola">Aréola</option>
                            <option value="mamiloareola">Mamilo e aréola</option>
                            <option value="mamiloareolar">Junção mamiloareolar</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Descrição</label>
                        <select className="form-control" name="descricao" value={this.state.dados.descricao} onChange={this.handleChange}>
                            <option value="bolha">Arredondada tipo “bolha”- inteiras ou rompida ou sendo reabsorvidas</option>
                            <option value="esfolado">Aspecto “esfolado” ou com epiderme levantada deixando parte da derme descoberta </option>
                            <option value="dilacerado">Dilacerado/rasgado</option>
                            <option value="ralado">Desgaste de relevo ou superfície tipo “ralado” ou “lixado”</option>
                            <option value="linear">Linear – linha reta única ou radiada com lesões mistas</option>
                            <option value="circundante">Circundante parcial ou totalmente a base do mamilo</option>
                            <option value="mista">Mista: Lesão na base e na ponta do mamilo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Presença de secreção</label>
                        <select className="form-control" name="secrecao" value={this.state.dados.secrecao} onChange={this.handleChange}>
                            <option value="sem">Sem presença</option>
                            <option value="transparente">Tipo transparente, aguado, sem pus</option>
                            <option value="sanguinolenta">Sanguinolenta</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Tecido acometido</label>
                        <select className="form-control" name="tecido" value={this.state.dados.tecido} onChange={this.handleChange}>
                            <option value="epiderme">Epiderme</option>
                            <option value="derme">Derme</option>
                            <option value="epidermeEDerme">Epiderme e derme</option>
                            <option value="superficial">Superficialmente no mamilo</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Dor (período)</label>
                        <select className="form-control" name="dor" value={this.state.dados.dor} onChange={this.handleChange}>
                            <option value="semDor">Sem dor</option>
                            <option value="duranteComPiora">Durante, com piora no final e logo após a mamada</option>
                            <option value="durante">Durante toda a mamada</option>
                            <option value="inicioESome">Início das mamadas e desaparecem após as primeiras sugadas</option>
                            <option value="intensaDurante">Dor "intensa" durante toda a mamada</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Outros problemas correntes que dificultam a amamentação</label>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="candidiase" name="candidiase" value={this.state.dados.candidiase} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="candidiase">
                                Candidíase ou Monilíase Mamária
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="reynaud" name="reynaud" value={this.state.dados.reynaud} onChange={this.handleChange}/>
                            <label className="form-check-label" htmlFor="reynaud">
                                Fenômeno de Reynaud
                            </label>
                        </div>
                    </div>
                </div>
            )
        },
        3: () => {
            return (
                <div>
                    
                </div>
            )
        }
    }

    render(){
        
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-8">
                        <h4>{this.titles[this.state.step]}</h4>
                        <form onSubmit={this.nextStep}>
                            {this.forms[this.state.step]()}
                            <button className="btn btn-mammycare">Avançar</button>
                        </form>
                    </div>
                </div>
            </main>
        )
    }

    nextStep = (event) => {
        event.preventDefault()
        const jwt = localStorage.getItem("jwt").split(".")
        const user = JSON.parse(atob(jwt[1]))
        let data = {
            ...this.state.dados,
        }

        data.user_fk = data.user.id == null ? user.id : data.user.id
        if(this.state.step === 3){
            if(data.dtnascbebe === ''){
                const date = new Date()
                data.dtnascbebe = date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()
            }
            fetch(`${utils.api}procedimento.php`, {
                method: 'put',
                body: JSON.stringify({
                    data, user
                })
            }).then(res => {
                if(res.ok)
                    return res.json()
                else
                    return false
            }).then(dados => {
                if(dados === false){
                    Swal.fire({
                        title: 'Erro!',
                        text: 'Impossível salvar, tente novamente.',
                        type: 'error',
                        confirmButtonText: 'Ok'
                    })
                }else{
                    Swal.fire({
                        title: 'Sucesso!',
                        text: 'Registro alterado com sucesso',
                        type: 'success',
                        confirmButtonText: 'Ok'
                    }).then(log => {
                        browserHistory.push('/procedimentos')
                    })
                }
            })
        }else{
            const newStep = (this.state.step + 1) % 4
            this.setState({step: newStep, form: this.forms[newStep]()})
        }
    }
}

export default EditarProcedimento