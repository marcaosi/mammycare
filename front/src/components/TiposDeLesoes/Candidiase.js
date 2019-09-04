import React, { Component } from 'react'
import { Link } from 'react-router'

export class Candidiase extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Candidíase ou Monilíase Mamária <small>Características</small></h3>
                                
                                <p>
                                    <strong>Localização/Descrição</strong><br/>
                                    Mama - Atingem os mamilos, podendo ser superficiais ou atingir os ductos lactíferos. A pele dos mamilos e aréola ficam finas, brilhantes, com coloração rósea, avermelhada e arroxeada (em peles negras), irritadas e as vezes descamadas. Bebê: Placas esbranquiçadas na cavidade oral ou e erupção na pele do períneo.
                                </p>
                                <p>
                                    <strong>Sinais e sintomas</strong><br/>
                                    Nutriz: mais comum são pruridos, sensação de queimaduras, ardência, dor em “fisgada e agulhada” nos mamilos. No bebê: Aparentes ou não, se visíveis, caracterizam-se por crostas esbranquiçadas na cavidade oral (não removíveis), ou lesões fúngicas nas genitálias. Flatulências, ganho de peso insuficiente devido a dor ao sugar: Paradas sucessivas da sucção ou até recusa.
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    Durante e após as mamadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Mamilos lesionados mantidos úmidos e abafados (absorventes ou conchas). Candidíase vaginal, antibióticos, contraceptivos e esteróides usados pela mãe. Bebê: secreção vaginal da mãe ou da cuidadora, uso de chupetas e bicos contaminados.
                                </p>

                                <h3>Candidíase ou Monilíase Mamária <small>Condutas Terapêuticas</small></h3>

                                <p>
                                    A ocorrência da candidíase por si só torna o ato de amamentar extremamente doloroso, sendo importante seu diagnóstico e tratamento tão logo seja possível, sob o risco de levar ao desmame precoce. SE A CANDIDÍASE DESENVOLVER NO MEIO DO PROCESSO DE QUALQUER TIPO DE LESÃO MAMÁRIA, dificultará ainda mais o processo de cicatrização da mesma.
                                </p>

                                <p>
                                    Uma vez que o fungo cresce em meio úmido, quente e escuro, manter os mamilos secos e arejados e expô-los à luz por alguns minutos, protegidos por coxins do tipo rodilhas (feitos de tecido de algodão absorventes, que evitam que os mamilos entrem em contato com o sutiã). -Reforçar a lavagem das mãos com água e sabão antes e após as mamadas e após troca de fraldas do bebê;
                                </p>

                                <p>
                                    Evitar o uso de absorventes de peito (sabe-se que o fungo cresce em meio úmido e quente); evitar o uso de chupetas, bicos em geral (borracha e silicone), mamadeiras, conchas, por serem importantes fontes de contaminação. Caso não possam ser evitados, os itens devem ser lavados, enxaguados e fervidos por 20 minutos pelo menos 1 vez ao dia;
                                </p>

                                <p>
                                    Tratar mãe e bebê simultaneamente com antifúngicos prescritos pelo médico. Preferencialmente medicamentos do tipo em gel, pois os cremes deixam a região mamilar escorregadia, proporcionando uma pega incorreta e, consequentemente, mais dor
                                </p>

                                <img src={require('../../img/lesoes/cand_mamilo_claro.png')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/cand_mamilo_escuro.png')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}