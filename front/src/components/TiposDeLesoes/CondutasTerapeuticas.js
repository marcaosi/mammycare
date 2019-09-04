import React, { Component } from 'react'
import { Link } from 'react-router'

export class CondutasTerapeuticas extends Component {
    render(){
        return (
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
}