import React, { Component } from 'react';
import {Link} from 'react-router'
import './Prevencao.css'

export default class Prevencao extends Component{

    constructor(){
        super()
        this.state = {
            prevencao: '',
            menu: true
        }

        this.clickPrevencao = this.clickPrevencao.bind(this)
    }

    setCuidadosGerais(){
        this.setState({menu: false, prevencao:'cuidadosGerais'})
    }

    setTecnicas(){
        this.setState({menu: false, prevencao:'tecnicas'})
    }

    setOrientacoes(){
        this.setState({menu: false, prevencao:'orientacoes'})
    }

    setRetiradaLeite(){
        this.setState({menu: false, prevencao:'retiradaLeite'})
    }

    setAcessorios(){
        this.setState({menu: false, prevencao:'acessorios'})
    }

    setAspectos(){
        this.setState({menu: false, prevencao:'aspectos'})
    }

    setContent(){
        if(this.state.prevencao){
            return this[this.state.prevencao]()
        }
    }

    clickPrevencao(event){
        event.preventDefault()
        this.setState({menu:true, prevencao:''})
    }

    render(){
        return (
            <main className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-xs-12 col-md-8">
                        <h2 className="title-page"><Link to="/prevencao" onClick={this.clickPrevencao}>Prevenção</Link><hr/></h2>
                        {
                            this.state.menu ? this.showMenu() : ''
                        }

                        {
                            this.setContent()
                        }
                    </div>
                </div>
            </main>
        )
    }

    showMenu(){
        return (<div>
            <div className="row container-cards">
                <div onClick={this.setCuidadosGerais.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Cuidados Gerais com as Mamas e Mamilos</p>
                </div><br/>
                <div onClick={this.setTecnicas.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Técnicas de Amamentação</p>
                </div>
            </div>

            <div className="row container-cards">
                <div onClick={this.setOrientacoes.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Orientações para o processo de amamentação</p>
                </div><br/>
                <div onClick={this.setRetiradaLeite.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Retirada do leite das mamas</p>
                </div>
            </div>
            
            <div className="row container-cards">
                <div onClick={this.setAcessorios.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Bicos e outros acessórios</p>
                </div><br/>
                <div onClick={this.setAspectos.bind(this)} className="col-xs-12 col-md-6 card">
                    <p>Aspectos subjetivos</p>
                </div>
            </div>
        </div>)
    }

    aspectos(){
        return (
            <div className="conteudo">
                <p>São bases para o sucesso da amamentação:</p>
                <ul className="listBullet">
                    <li>Observar sinais relacionados ao vínculo mãe-bebê;  </li>
                    <li>Atentar para os primeiros sinais de depressão materna e encaminhamento para profissional especializado; oferecer apoio profissional, bem como estimular o apoio da família, amigos e comunidade;  </li>
                    <li>Saber ouvir a mãe-nutriz sobre seus anseios, dúvidas e experiências anteriores faz parte do processo de aprendizado da amamentação, apoiando-a e aumentando sua autoconfiança; observar se a mãe apresenta sinais de esgotamento físico e orientá-la a descansar e/ou fazer algo prazeroso;  </li>
                    <li>Recordar sempre à nutriz que no ato de amamentar, a mãe recebe um dos efeitos da ocitocina, que é o aumento da resistência ao cansaço, sentimento de bem-estar e euforia, isto é, AMAMENTAR ACALMA; </li>
                </ul>
            </div>
        )
    }

    acessorios(){
        return (
            <div className="conteudo">
                <p>Bicos e outros acessórios</p>
                <ul className="listBullet">
                    <li>Orientar para NÃO utilização de bicos (chupetas, mamadeiras, chucas), que podem ser causas de pega incorreta e alterações no padrão de sucção, podendo levar à ocorrência dos traumas mamários;  </li>
                    <li>Avaliar cada caso em relação à utilização de Conchas, absorventes de seios, bicos de silicone (avaliar a real necessidade desses itens). As conchas e os absorventes de seios, quando mantidos úmidos, podem levar a infecções, tais como a cândida, por exemplo, que se desenvolve em meio úmido e quente, o que, por sua vez, pode acarretar o desmame em decorrência da dor ou desconforto da lesão mamilar.  </li>
                    <li>Obs. Existem no mercado itens como intermediário de silicone, conchas de amamentação, absorventes de seio, placas de hidrocoloide (mamare). No entanto, não existem evidências científicas suficientes para indicar o uso desses dispositivos. Nesse sentido, cada caso deve ser criteriosamente avaliado, levando-se em conta os riscos e benefícios de cada uma dessas possibilidades. </li>
                </ul>                
            </div>
        )
    }

    retiradaLeite(){
        return (
            <div className="conteudo">
                <h4>Retirada do Leite</h4>
                <p>EXTRAÇÃO DO LEITE MATERNO</p>
                <ul className="listBullet">
                    <li>Orientar a mãe para extrair, QUANDO:  </li>
                    <li>Leite em excesso (equilíbrio da produção do LM e demanda do recém-nascido);  </li>
                    <li>Mamas túrgidas e cheias, com ou sem dor à palpação, túrgidas e cheias com pontos de ingurgitamento;  </li>
                    <li>Quando mãe e o bebê não podem ficar juntos;  </li>
                    <li>Bebê apresenta dificuldade de sugar;  </li>
                    <li>A mãe deseja doar o excedente de seu leite aos Bancos de Leite (BLH) para ser pasteurizado (LHOP);  </li>
                    <li>Orientar a mãe sobre como guardar o leite humano ordenhado cru (LHOC): Caso não tenha refrigerador: o leite pode ser coletado em vasilha limpa, fervida durante 15 minutos e colocado em local fresco. Esse leite só deve ser usado até seis horas após a coleta. Se tiver refrigerador: o leite pode ser refrigerado com segurança por até 24 horas ou congelado por até 30 dias. Antes de alimentar o bebê com o leite armazenado, deve-se aquecê-lo em banho-maria e oferecer com colher ou copinho exclusivo para o bebê, sempre desprezando o que sobrou. </li>
                </ul><br/>
                <p>COMO FAZER A EXTRAÇÃO - ORDENHAR:</p>
                <ul className="listBullet">
                    <li>Prender e usar tocas nos cabelos; proteger a boca e o nariz com pano ou fralda;  </li>
                    <li>Lavar as mãos e antebraço e secá-los com toalha limpa ou papel;  </li>
                    <li>Escolher um local limpo e tranquilo;  </li>
                    <li>Preparar uma vasilha (de preferência um frasco com tampa plástica) fervida por 20 minutos;  </li>
                    <li>Massagear o peito com a ponta de dois dedos, indo da região mais próxima da aréola até a mais distante do peito, apoiando-o com a outra mão; massagear por tempo maior as áreas mais doloridas; apoiar a ponta dos dedos (polegar e indicador) acima e abaixo da aréola, comprimindo o peito contra o tórax. Comprimir com movimentos rítmicos, como se tentasse aproximar as pontas dos dedos, sem deslizar na pele para não causar traumas mamários;  </li>
                    <li>Desprezar os primeiros jatos e guardar o restante no recipiente. </li>
                </ul>
            </div>
        )
    }

    orientacoes(){
        return (
            <div className="conteudo">
                <p>Orientações para o processo de amamentação</p>
                <ul className="listBullet">
                    <li>Amamentação Livre demanda: Iniciar a amamentação na primeira hora após o nascimento, estimulando a permanência em alojamento conjunto. Um bebê em aleitamento exclusivo costuma mamar de 8 a 12 vezes por dia, e nos primeiros meses é natural que mame com muita assiduidade e sem horários e períodos regulares. O importante é que a criança esgote a mama, de modo a receber tanto o leite do começo quanto o do fim da mamada, por ser mais calórico, promover maior saciedade e ganho de peso adequado. A próxima mamada deve, sucessivamente, começar pela última mama oferecida.  </li>
                    <li>Adoção de técnicas corretas de amamentação; evitar o uso de complementos (água, chás e substitutos do leite humano).  </li>
                    <li>DURANTE E ENTRE AS MAMADAS: Quando as mamas estão cheias e rígidas:  </li>
                    <li>Proceder ao esvaziamento parcial das mamas sempre que a mãe sentir dor à palpação, o que pode ser antes das mamadas ou proceder com a ordenha manual entre as mamadas, deixando a aréola macia e flexível, facilitando uma BOA PEGA. Do contrário (não promoção da flexibilidade mamiloareolar), o bebê pode não retirar a quantidade de leite que necessita, comprometendo o ganho de peso, provocando lesões de mamilos e a mamada pode se tornar dolorosa.  </li>
                    <li>Quando a mãe tem a sensação de mamas vazias. Nos primeiros dias após o parto as mamas podem parecer vazias, passando a impressão errônea à mãe de que ela não está produzindo leite suficientemente. Algum colostro já está pronto quando o bebê nasce, sendo produzindo em quantidade crescente até que ocorra a apojadura, por volta do 2º ao 7º dia, enquanto isso o bebê recebe o colostro (de 5 a 20 ml por mamada, atendendo às suas necessidades), sendo substituído gradativamente pelo leite de transição. O importante é orientar a mãe para colocar o bebê para sugar no seio com maior frequência; massagear as mamas delicadamente e manter estímulo através da expressão mamiloareolar.  </li>
                    <li>TÉMINO DA MAMADA: Não interromper a mamada, porque é importante dar de mamar até o bebê soltar (leite posterior). Caso o bebê não solte a mama, usar a TÉCNICA DO DEDO MÍNIMO: a mãe pode colocar o dedo mínimo na boca do lactente pela comissura labial, evitando que o recém-nascido puxe o mamilo com força para largar o peito (como às vezes é difícil o bebê soltar, uma dica é dizer à mãe que deixe o bebê pegar seu dedo para soltar na mama) – prevenindo as lesões mamárias. </li>
                </ul>
            </div>
        )
    }

    tecnicas(){
        return (
            <div className="conteudo">
                <h5>Técnicas de amamentação</h5><br/>
                <p>Posicionamento da dupla mãe-bebê:</p><br/>

                <ul className="listBullet">
                    <li>Posição deitada: Nesta posição a mãe se coloca de costas e fica apoiada por travesseiros. É adotada geralmente por mães no pós-operatório imediato - POT- ou em outra situação. Pode ficar deitada de lado: Com cabeça e costas apoiadas em travesseiros, o bebê fica de frente e voltado para mãe e sua cabeça apoiada no braço da mãe, em travesseiros ou mesmo na cama elevada. Esta posição ajuda as mães com mamas grandes ou pequenas, pois ao encostar-se na cama, fica mais fácil para o bebê abocanhar a mama. Também pode ser utilizada quando a mãe estiver cansada. Observar se o bebê está com a cabeça ligeiramente elevada, evitando possíveis infecções da orelha média da criança;  </li>
                    <li>Posição sentada com o bebê na posição tradicional: mãe sentada numa cadeira, poltrona ou cama, com as costas apoiadas confortavelmente no encosto, seja em travesseiros ou almofadas, de modo a não ficar curvada para frente e nem para trás. Os pés apoiados de preferência acima do nível do chão. O bebê, também relaxado e confortável, deverá ser colocado diagonalmente em relação ao corpo da mãe - de “abraço”-, bebê de frente, abdome com abdome, acomodando uma mãozinha no seio e a outra tocando o tórax lateral da mãe. Corpo e pescoço alinhados e o último levemente estendido, devendo a boca ficar de frente para o mamilo. A mãe apoia e oferece a mama em forma de “C” e com a outra mão segura o bebê, amparando sua nádega;  </li>
                    <li>Posição sentada com bebê na posição invertida ou “posição de “bola de futebol americano”: Sugerida às mães com mamas grandes, com mamilos malformados ou mulheres submetidas à cesariana e para melhor esvaziamento das mamas em casos de ductos obstruídos, para bebês que tem preferência por só um peito, ou para amamentar gemelares ao mesmo tempo. Nesta posição a mãe fica sentada confortavelmente e o bebê é apoiado por travesseiros, pois ela colocará o corpo da criança na posição inversa, debaixo dos seus braços, com as pernas do bebê voltadas para trás do corpo materno, de forma que o corpo do bebê fique encostado em suas costelas. Cabeça apoiada na mão da mãe com mobilidade para levá-lo ao seio. Essa posição facilita a pega e é ortostática, pois a cabeça do bebê fica posicionada para cima e para frente;  </li>
                    <li>Posição sentada com o bebê na posição de cavaleiro: Esta posição pode ser usada para bebês com refluxo gastresofágico, crianças com fissura labial e/ou palatina. A mãe deve ficar relaxada, sentada ou levemente inclinada para frente. O bebê, sentado no colo, com as perninhas abertas uma de cada lado na coxa da mãe. Com uma mão a mãe sustenta a cabeça, pescoço e tronco do bebê e, com a outra, apoia a mama com a palma de sua mão e com os dedos médio, anular e mínimo, pressionando-a e comprimindo-a para dentro da boca do bebê. O queixo do bebê poderá ser apoiado com o indicador e o polegar, formando um arco na posição de “mão bailarina”. Ao mesmo tempo, a mãe tampona a fenda labial e a gengiva com a porção digital do polegar, deixando as narinas livres para que o bebê possa respirar. Dessa maneira, ele consegue formar o vácuo necessário para amamentar, mas se esse processo o cansar, fazendo com que ele não extraia o leite posterior, a mãe deve realizar a ordenha e ofertar com o auxílio de colher ou copinho  </li>
                    <li>Posição Descontraída (laid-back position): Posição semideitada, levemente reclinada, relaxada, com ombros, cabeça e pescoço bem apoiados. O bebê fica em cima da mãe, na posição longitudinal ou oblíqua.  </li>
                    <li>Obs.: Em todas as posições - Mãe sempre segura o seio em “C” e/ou mão de bailarina - NÃO na forma de “tesoura”.  </li>
                </ul><br/>

                <p>Pega e sucção do bebê:</p><br/>

                <ul className="listBullet">
                    <li>A produção apropriada de leite vai depender predominantemente da sucção do bebê (que estimula a produção de prolactina). No entanto, para a ejeção do leite (necessita da fabricação de ocitocina), sendo esta, naturalmente influenciada pela condição emocional da mãe (autoconfiança)  </li>
                    <li>O bebê deve ser levado até a mama e não ao contrário – estímulo do “reflexo de busca e apreensão”, quando algo tocar nos lábios ou bochechas do bebê ele abre a boca, põe a língua para baixo e para fora, virando a cabeça a procura do que tocou nele. Caso isso não ocorra, deve-se puxar o queixo do recém-nascido para baixo com o polegar ou indicador;  </li>
                    <li>Sinais de uma boa pega e sucção efetiva: a criança deve abocanhar não só o mamilo, mas principalmente toda ou a maior parte da aréola. Boca bem aberta, com lábio inferir retidos para fora – boca tipo“ peixinho”; língua acoplada em torno do seio; bochechas arredondadas; mais aréola acima da boca do bebê; A criança deve parecer tranquila com sucção lenta, profunda e ritmada e com períodos de atividade e pausa; mamada indolor.  </li>
                    <li>Quando o seio toca o palato do bebê, desencadeiam-se o “Reflexo de sucção”- os ductos lactíferos terminais, situados abaixo da aréola, são pressionados pela língua contra o palato, iniciando-se a saída do leite. </li>
                    <li>Obs.: Orientar a mãe a observar sinais de ejeção de leite, como o vazamento da mama contralateral e a presença das contrações uterinas.  </li>
                    <li>- A língua do bebê em torno do seio, forma de concha, a boca do bebê se enche de leite, sendo desencadeado o “Reflexo de deglutição”, que exige coordenação entre a deglutição e respiração – o bebê engole a cada uma a quatro sucções, sendo que este movimento de deglutição pode ser observado ou auscultado.  </li>
                    <li>- Sinais de uma má pega/sucção não efetiva: boca pouco aberta; lábio inferior voltado para dentro; língua do bebê não visível; bochechas tensas ou para dentro (covinhas); mais aréola abaixo da boca do bebê; sucção rápidas; ouve-se ruídos altos ao sugar (estalidos); dor ou ardor ao amamentar.  </li>
                    <li>Obs.: Encaminhar a mãe-nutriz para assistência de profissional ou centro especializado (por ex. bancos de leite, hospitais amigo da criança), quando há padrão anormal de sucção do recém-nascido ou outra condição do RN que merece cuidados especializados. </li>
                </ul>
            </div>
        )
    }

    cuidadosGerais(){
        return (
            <div className="conteudo">
                <h6>Cuidados com as MAMAS período gravídico-puerperal:</h6><br/>
                <p>Cabe aos profissionais de saúde envolvidos no universo materno-infantil, ORIENTAR:</p>

                <ul className="listBullet">
                    <li>Técnicas de amamentação: Pega/sucção e posicionamento adequado da dupla mãe-bebê;  </li>
                    <li>Manter os mamilos secos, expondo-os ao ar livre banho de sol (até as 10 horas da manhã ou após as 16 horas, durante 15 minutos);  </li>
                    <li>Uso de sutiã adequado desde a gestação (neste momento, as mamas já apresentam o primeiro aumento de volume). O sutiã deve ter tamanho apropriado, alças largas, sem aro e ser de tecido de algodão. Uma dica é o uso de tops de algodão nos primeiros dias, uma vez que são mais confortáveis, sustentam e são de tecido leve, permitindo a respiração da pele;  </li>
                    <li>Desestimular o uso de cremes, sabão, sabonete, óleos e pomadas, atos de esticar os mamilos com os dedos, esfregá-los com buchas ou toalhas ásperas (na maioria das vezes essas estratégias não funcionam e podem ser prejudiciais);  </li>
                    <li>Evitar a remoção do colostro durante a gestação, pois pode estimular as contrações uterinas;  </li>
                    <li>A criança mama a aréola e não o bico, de modo que nenhum tipo de MAMILO impede a amamentação, mesmo os semiprotrusos, pseudoinvertidos e invertidos, que podem dificultar a amamentação no início. Com uma BOA PEGA (de toda a aréola) e o apoio de um profissional habilitado, é possível amamentar;  </li>
                    <li>ATENÇÃO maior às mães que possuem implantes de silicone ou realizaram mamoplastia. SEMPRE OBSERVAR CADA CASO, evitando ideias pré-concebidas de que a mãe não pode amamentar. Cada mulher é única e deve ser considerada em sua singularidade.  </li>
                    <li>HIGIENIZAÇÃO DAS MAMAS: Evitar o uso de produtos que retiram a proteção natural do mamilo, como sabão, álcool ou qualquer produto secante. Limpar as mamas somente com água durante a higienização corporal e aplicar o próprio leite materno após as mamadas, deixando secar naturalmente.  </li>
                    <li>VESTIMENTAS: As roupas da mãe e do bebê devem ser adequadas, sem restringir os movimentos. Recomenda-se que as mamas estejam expostas sempre que possível e o bebê vestido de maneira que os braços fiquem livres. </li>
                </ul>
            </div>
        )
    }
}
