create table user(
    id BIGINT AUTO_INCREMENT NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(32) NOT NULL,
    profession VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);

CREATE TABLE procedimento(
    id BIGINT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    user_fk BIGINT NOT NULL,
    nommae VARCHAR(255),
    nombebe VARCHAR(255),
    dtnascbebe DATE,
    condnasc VARCHAR(255),
    idgest VARCHAR(255),
    idmae VARCHAR(255),
    fumo BOOLEAN,
    alcool BOOLEAN,
    cafe BOOLEAN,
    medicamentos VARCHAR(255),
    drogas VARCHAR(255),
    prenatal VARCHAR(255),
    parto VARCHAR(255),
    primMamada VARCHAR(255),
    leiteVaca BOOLEAN,
    leitePo BOOLEAN,
    agua BOOLEAN,
    cha BOOLEAN,
    soro BOOLEAN,
    alojamentoConjunto BOOLEAN,
    expAmamentacao BOOLEAN,
    lesaoAnterior BOOLEAN,
    apoioPosParto BOOLEAN,
    pretendeAmamentar BOOLEAN,
    cansadaDeprimida BOOLEAN,
    solucaoContinuidade VARCHAR(255),
    localizacao VARCHAR(255),
    descricao VARCHAR(255),
    secrecao VARCHAR(255),
    tecido VARCHAR(255),
    dor VARCHAR(255),
    candidiase BOOLEAN,
    reynaud BOOLEAN
);

ALTER TABLE procedimento ADD CONSTRAINT procedimento_user_fk FOREIGN KEY (user_fk) REFERENCES user(id) ON UPDATE CASCADE ON DELETE CASCADE;

user mammy
pass mammy@care