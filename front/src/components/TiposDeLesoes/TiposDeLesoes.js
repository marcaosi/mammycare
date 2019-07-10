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
        return(
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Condutas Terapêuticas</h3>
                                
                                <h4>Geral</h4>
                                <ul className="condutasList">
                                    <li>Para qualquer tipo de Trauma (s) mamilar (es) identificado (s), atuar sobre o fator resultante (causal), normalmente consiste no emprego de técnicas adequadas de amamentação. Analisar se a pega, posicionamen                         to e padrão de sucção estão adequados e realizar avaliação das mamadas. Tal procedimento é necessário para alívio da dor e promoção da cicatrização o mais precocemente possível;  </li>
                                    <li>A higienização das mamas: Não usar produtos que retiram a proteção natural do mamilo, como sabões, álcool ou qualquer produto secante. Limpar as                            mamas somente com água durante a higienização corporal;  </li>
                                    <li>Aplicar o leite materno do final da mamada nos mamilos e deixar secar naturalmente, mantendo sempre a região mamiloareolar seca e arejada;  </li>                           
                                    <li>Retirar bicos artificiais (chupetas, mamadeiras e intermediários de silicone), que podem ser causa da pega incorreta e alterações do padrão de sucção;  </li>                           
                                    <li>Além de avaliar o posicionamento correto, orientar a mãe para a possibilidade de alternar diferentes posições no momento das mamadas, de forma a reduzir a pressão nos pontos dolorosos e áreas lesionadas, como a posição invertida,                           por exemplo.  </li>
                                    <li>Realizar teste de flexibilidade areolar antes de cada mamada (observando se as mamas estão muito cheias e aréolas tensas e endurecidas) - quando necessário, massagear e drenar a região areolar imediatamente antes da mamada;  </li>                          
                                    <li>Considerar a Interrupção temporária da amamentação avaliando o tipo e extensão da lesão e dor intensa. Fazer a extração do leite da mama e oferecer em copinho ou colher o próprio leite da mãe extraído - LHO, até que haja cicatrização.  </li>                           
                                    <li>Iniciar a mamada pela mama menos afetada, orientando também para que a mãe ordenhe um pouco de leite - o necessário para desencadear o reflexo de ejeção- antes de iniciar, evitando que a criança tenha que                            sugar vigorosamente no início da mamada;  </li>
                                    <li>Utilizar “coxim” semelhantes a rodilhas, feitas de tecido de algodão absorvente para proteger os mamilos do contato direto com o sutiã, sem abafar a região, e realizar a troca sempre que necessário;  </li>                           
                                    <li>Orientar sempre que a amamentação é LIVRE DEMANDA, contudo em casos de lesões extensas e muito dolorosas no momento da mamada, pode-se indicar a “suspensão temporá                         ria” - geralmente 24 a 48 horas. Após este período reavaliar a lesão (verificar a possibilidade do retorno naquela mama afetada). No caso de trauma bilateral, evitar a sucção e fazer a extração e oferecer ao bebê o LHOC, em copinhos até haver melhora, levando em conta a correção da causa, geralmente correção das técnicas de amamentação e/ou técnica inadequada de ordenha.  </li>
                                    <li>Referir para um médico especialista em amamentação e conforme prescrição médica, nos casos de lesões dolorosas e extensas, o uso de analgésicos por via oral. </li>
                                </ul>

                                <h4>Em caso de dor e/ou desconforto</h4>
                                <ul className="condutasList">
                                    <li>Perguntar à mãe se sente dor à palpação e/ou Período que envolve as mamadas (antes, durante e depois), a descrição do Tipo/descrição da dor e Intensidade (aspecto subjetivo que varia de mulher para mulher - Algumas mães podem estar com o mesmo tipo de lesão mamária e a queixa da dor variar bastante. Quanto mais superficial for a lesão, maior poderá ser a queixa de dor, em função das terminações nervosas livres se localizarem na ponta dos mamilos, sendo que, nas lesões mais profundas, essas terminações estão “destruídas”. Algumas lesões causam dor em determinados períodos e de variados tipos, sendo importante atentar-se para esse aspecto, inclusive para diagnosticar a presença de Candidíase ou Fenômeno de Reynaud.  </li>
                                    <li>Em relação à dor e/ou desconforto presentes em qualquer tipo de lesão de variável período e durabilidade, é importante para o profissional desenvolver habilidade de comunicação, identificar a real queixa das mães, oferecer apoio, compreensão, respeito mútuo, além de capacitá-la para lidar com a situação É importante reavaliar e corrigir eventuais falhas na técnica de amamentação quanto à posição dupla mãe-bebê, pega e sução adequadas, além de observar as mamadas e identificar possíveis sinais de dificuldades. Identificando o problema, o profissional implementa ações de acordo com o diagnóstico levantado. Assim se o problema for a “pega incorreta”, é preciso corrigi-la. Sugerir variação de posição para diminuir a pressão nas lesões e assim por diante, até que se consiga proporcionar à mãe um maior grau de conforto, empoderamento e satisfação ao amamentar.  </li>
                                    <li>Contudo é importante “ouvir”, apoiar, informar, incentivar e proteger. E para ajudar concretamente a mãe-mulher-nutriz, não basta ao profissional conhecer a fisiologia da produção do leite, é preciso reconhecer que a amamentação é um ato psicossomático complexo e que precisa ser aprendido. </li>
                                </ul>

                                <h4>Equipamentos e tecnologia em amamentação</h4>

                                <ul className="condutasList">
                                    <li>Existem no mercado acessórios específicos para o Aleitamento materno, como: Protetores flexíveis (para tratar trauma mamilar não se tem utilidade, mas podem proteger os mamilos lesionados enquanto a nutriz compreende as técnicas de amamentação adequadamente, podendo proporcionar uma sucção menos intensa do RN. Assim, se a mãe manifestar desejo de parar de amamentar em função da dor e/ou desconforto, esse intermediário poderá ser uma alternativa.  </li>
                                    <li>As conchas poderão ser úteis, por proporcionarem a não fricção da área lesionada com a roupa/sutiã. Entretanto, esse dispositivo favorece a drenagem espontânea de leite, o que torna o tecido mais vulnerável a macerações. Desse modo, a sua recomendação deverá ser avaliada em cada caso, pesando-se os riscos e os benefícios.  </li>
                                    <li>Utilizar, quando economicamente possível, medicamento tópicos (ainda não existem evidências e recomendações seguras) como curativos em gel - placas de hidrocoloide (mamare), lanolina, pomadas e cremes nas mamas e mamilos. Tendo em vista sua utilização, é necessária a remoção prévia às mamadas, podendo levar à remoção do tecido cicatricial que está sendo formado, além de proporcionar a pega inadequada pelo deslizamento da boca do bebê.  </li>
                                    <li>Bombas extratoras de leite: Sejam as mecânicas ou elétricas, avaliar, de igual maneira, a real necessidade em cada situação.  </li>
                                    <li>Evitar o uso da bomba com bulbo de borracha não é recomendada, por estar associada a traumatismos do complexo mamiloareolar (comumente lesão do tipo dilaceração) e a maior contaminação do leite.  </li>
                                    <li>Obs.: Quando utilizados conchas, protetores flexíveis de mamilos, bombas extratoras de leite, deverão ser higienizadas com sabão e água quente entre as mamadas e/ou após uso. Quanto aos protetores absorventes (descartáveis ou reutilizáveis), precisam ser trocados com frequência, evitando assim que os mamilos permaneçam em meio úmido;  </li>
                                    <li>LASERTERAPIA: Alguns estudos preliminares demonstraram que o laser de baixa intensidade, uma ferramenta eficaz na diminuição da dor e aceleração da cicatrização de lesões, citado pela literatura como outra opção para o tratamento dos traumas mamilares na lactação. Contudo, por ser ainda uma novidade no mercado, seu uso deverá ser criterioso e realizado por profissionais capacitados;  </li>
                                    <li>Desta forma os benefícios e malefícios trazidos por estes equipamentos dependerão do fato de se fazer bom ou mau uso deles. Sabe-se que à assistência à gestante, nutriz e recém-nascido, estão a aquisição de conhecimentos e desenvolvimento de habilidades específicas para atender a dupla mãe-bebê na lactação. Assim, considerando que o uso esses produtos auxiliares, eventualmente, possam ser úteis, desde que se avalie a real necessidade dos mesmos em cada situação e em cada nutriz – cada caso é único e singular. Sempre avaliar caso por caso, suas vantagens e desvantagens para àquela situação e em cada lactante. </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    reynaud(){
        return(
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

    candidiase(){
        return(
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

    fissura(){
        return(
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

    erosao(){
        return(
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Erosão <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Lesão extensa, com desgaste de relevo ou superfície, tipo “ralado ou lixado”
                                </p>
                                <p>
                                    <strong>Localização</strong><br/>
                                    Mamilo
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Atinge a derme.
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    A dor é relativa, pela profundidade da lesão, que poderá ser menor. Ocorre durante todos o período de sucção.
                                </p>
                                <p>
                                    <strong>Presença de sangramento</strong><br/>
                                    Pode ocorrer no momento das mamadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Pega incorreta devido a movimentação do mamilo em atrito a gengiva, língua e palato do bebê. Evolução a partir de qualquer tipo de lesão existente e em qualquer tipo de mamilo.
                                </p>

                                <img src={require('../../img/lesoes/escoriacao_erosa.jpg')} alt="Tipo de lesão"/>
                                <img src={require('../../img/lesoes/erosao_fotos.png')} alt="Tipo de lesão"/>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }

    dilaceracao(){
        return(
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
                        <div className="row">
                            <div className="col">
                                <h3>Dilaceração <small>Características</small></h3>
                                
                                <p>
                                    <strong>Solução de Continuidade</strong><br/>
                                    Presente
                                </p>
                                <p>
                                    <strong>Descrição</strong><br/>
                                    Aspecto de mamilo “rasgado” na região mamiloareolar.
                                </p>
                                <p>
                                    <strong>Localização</strong><br/>
                                    Mamilo e aréola
                                </p>
                                <p>
                                    <strong>Tecido acometido</strong><br/>
                                    Epiderme
                                </p>
                                <p>
                                    <strong>Dor</strong><br/>
                                    No início das mamadas e desaparecem após as primeiras sugadas.
                                </p>
                                <p>
                                    <strong>Fator Resultante</strong><br/>
                                    Pode ocorrer quando uma lesão já existente é exposta a “bomba de tirar leite”. Também, posição lingual causa um padrão de sucção alterado – falta de excurcionamento da mandíbula.
                                </p>

                                <img src={require('../../img/lesoes/dilaceracao.jpeg')} alt="Tipo de lesão"/>
                            </div>
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
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/informacoes">Informações > </Link><Link to="/informacoes/tipos_lesoes">Tipos de Lesões</Link><hr/></h2>
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

export default TiposDeLesoes