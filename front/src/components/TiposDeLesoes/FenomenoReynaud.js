import React, { Component } from 'react'
import { Link } from 'react-router'

export class FenomenoReynaud extends Component {
    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Fenômeno de Reynaud no mamilo <small>Características</small></h3>
                                
                                <p>
                                    <strong>Localização/Descrição</strong><br/>
                                    Caracteriza-se por esbranquiçado e doloroso espasmo, que pode atingir os mamilos, tecido areolar e/ou toda a mama. 
                                </p>
                                <p>
                                    <strong>Sinais e sintomas</strong><br/>
                                    Existem relatos de dor do tipo “fisgadas ou queimação” enquanto ocorre a palidez. Podem surgir antes, durante, prevalecendo após as mamadas, provavelmente porque em geral o ar é mais frio do que a boca do bebê. Os espasmos duram segundos ou minutos, mas a dor persiste por cerca de 1 hora. 
                                </p>
                                <p>
                                    <strong>Fator desencadeador(nem sempre identificados)</strong><br/>
                                    Exposição ao frio, compressão anormal do mamilo pelo bebê ou trauma mamilar importante, infecção fúngica, por si só possa levar a este fenômeno. Obs.: Muitas vezes este fenômeno pode ser confundido com a candidíase, devendoavaliado criteriosamente.
                                </p>

                                <h3>Fenômeno de Reynaud no mamilo <small>Condutas Terapêuticas</small></h3>

                                <p>
                                    O manejo consiste em tratar a causa básica, caso seja aparente. Desta forma, se o problema for uma pega muito compressiva, podem ser feitos exercícios orais com os bebês para que haja relaxamento da mandíbula e o bom posicionamento da língua, evitando, assim, compressão excessiva do mamilo contra o palato 
                                </p>

                                <p>
                                    – Encaminhamento ao profissional especializado e capacitado em motricidade oral (geralmente o fonoaudiólogo);
                                </p>

                                <p>
                                    - Se a causa for algum dos tipos de traumas mamários, é preciso estabelecer o tratamento descrito para as lesões mamárias na lactação;
                                </p>

                                <p>
                                    - Se a causa for a exposição ao frio, propiciar um ambiente aquecido e indicar o uso de compressas mornas nos mamilos após as mamadas (ajudam a aliviar a dor)
                                </p>

                                <p>
                                    – SEMPRE REVER CADA CASO ANTES DE INDICAR O USO DE COMPRESSAS;
                                </p>

                                <p>
                                    - Orientar as lactantes para evitar a cafeína e fumo (conferem vasoconstrição);
                                </p>

                                <p>
                                    - Caso os procedimentos acima não apresentem resultados positivos, encaminhar ao médico especialista para uso da terapia medicamentosa.
                                </p>

                                <img src={require('../../img/lesoes/reynaud.png')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}