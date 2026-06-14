const gamesDatabase = [
    {
        id: "66456904",
        stage: "Grupo A",
        homeTeam: "México",
        awayTeam: "África do Sul",
        homeCode: "mx",
        awayCode: "za",
        dateTime: "2026-06-11T15:00:00-04:00",
        status: "Finalizado",
        score: "2 x 0",
        watchUrl: "https://exemplo.com/mexico-africa-do-sul"
    },
    {
        id: "66456906",
        stage: "Grupo A",
        homeTeam: "Coreia do Sul",
        awayTeam: "Tchéquia",
        homeCode: "kr",
        awayCode: "cz",
        dateTime: "2026-06-11T22:00:00-04:00",
        status: "Finalizado",
        score: "2 x 1",
        watchUrl: "https://exemplo.com/coreia-do-sul-tchequia"
    },
    {
        id: "66456916",
        stage: "Grupo B",
        homeTeam: "Canadá",
        awayTeam: "Bósnia e Herzegovina",
        homeCode: "ca",
        awayCode: "ba",
        dateTime: "2026-06-12T15:00:00-04:00",
        status: "Finalizado",
        score: "1 x 1",
        watchUrl: "https://exemplo.com/canada-bosnia"
    },
    {
        id: "66456940",
        stage: "Grupo D",
        homeTeam: "Estados Unidos",
        awayTeam: "Paraguai",
        homeCode: "us",
        awayCode: "py",
        dateTime: "2026-06-12T21:00:00-04:00",
        status: "Finalizado",
        score: "4 x 1",
        watchUrl: "https://exemplo.com/eua-paraguai"
    },
    {
        id: "66456918",
        stage: "Grupo B",
        homeTeam: "Catar",
        awayTeam: "Suíça",
        homeCode: "qa",
        awayCode: "ch",
        dateTime: "2026-06-13T15:00:00-04:00",
        status: "Finalizado",
        score: "1 x 1",
        watchUrl: "https://exemplo.com/catar-suica"
    },
    {
        id: "66456928",
        stage: "Grupo C",
        homeTeam: "Brasil",
        awayTeam: "Marrocos",
        homeCode: "br",
        awayCode: "ma",
        dateTime: "2026-06-13T18:00:00-04:00",
        status: "Finalizado",
        score: "1 x 1",
        watchUrl: "https://exemplo.com/brasil-marrocos"
    },
    {
        id: "66456930",
        stage: "Grupo C",
        homeTeam: "Haiti",
        awayTeam: "Escócia",
        homeCode: "ht",
        awayCode: "gb-sct",
        dateTime: "2026-06-13T21:00:00-04:00",
        status: "Finalizado",
        score: "0 x 1",
        watchUrl: "https://exemplo.com/haiti-escocia"
    },
    {
        id: "66456942",
        stage: "Grupo D",
        homeTeam: "Austrália",
        awayTeam: "Turquia",
        homeCode: "au",
        awayCode: "tr",
        dateTime: "2026-06-14T00:00:00-04:00",
        status: "Finalizado",
        score: "2 x 0",
        watchUrl: "https://exemplo.com/australia-turquia"
    },
    {
        id: "66457070",
        stage: "Grupo E",
        homeTeam: "Alemanha",
        awayTeam: "Curaçao",
        homeCode: "de",
        awayCode: "cw",
        dateTime: "2026-06-14T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=byP1peOCkzI"
    },
    {
        id: "66456968",
        stage: "Grupo F",
        homeTeam: "Holanda",
        awayTeam: "Japão",
        homeCode: "nl",
        awayCode: "jp",
        dateTime: "2026-06-14T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=6Ca_GzyVOs0"
    },
    {
        id: "66457072",
        stage: "Grupo E",
        homeTeam: "Costa do Marfim",
        awayTeam: "Equador",
        homeCode: "ci",
        awayCode: "ec",
        dateTime: "2026-06-14T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=IFh8Nuuhgcc"
    },
    {
        id: "66456970",
        stage: "Grupo F",
        homeTeam: "Suécia",
        awayTeam: "Tunísia",
        homeCode: "se",
        awayCode: "tn",
        dateTime: "2026-06-14T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=o2wC007Jp-A"
    },
    {
        id: "66456994",
        stage: "Grupo H",
        homeTeam: "Espanha",
        awayTeam: "Cabo Verde",
        homeCode: "es",
        awayCode: "cv",
        dateTime: "2026-06-15T12:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=EYStZQ5FsVk"
    },
    {
        id: "66456982",
        stage: "Grupo G",
        homeTeam: "Bélgica",
        awayTeam: "Egito",
        homeCode: "be",
        awayCode: "eg",
        dateTime: "2026-06-15T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=aclBHrhLQr4"
    },
    {
        id: "66456996",
        stage: "Grupo H",
        homeTeam: "Arábia Saudita",
        awayTeam: "Uruguai",
        homeCode: "sa",
        awayCode: "uy",
        dateTime: "2026-06-15T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=Mh-iBLsiYDw"
    },
    {
        id: "66456984",
        stage: "Grupo G",
        homeTeam: "Irã",
        awayTeam: "Nova Zelândia",
        homeCode: "ir",
        awayCode: "nz",
        dateTime: "2026-06-15T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://www.youtube.com/watch?v=vrY_cXwm--g"
    },
    {
        id: "66457006",
        stage: "Grupo I",
        homeTeam: "França",
        awayTeam: "Senegal",
        homeCode: "fr",
        awayCode: "sn",
        dateTime: "2026-06-16T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/franca-senegal"
    },
    {
        id: "66457008",
        stage: "Grupo I",
        homeTeam: "Iraque",
        awayTeam: "Noruega",
        homeCode: "iq",
        awayCode: "no",
        dateTime: "2026-06-16T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/iraque-noruega"
    },
    {
        id: "66457018",
        stage: "Grupo J",
        homeTeam: "Argentina",
        awayTeam: "Argélia",
        homeCode: "ar",
        awayCode: "dz",
        dateTime: "2026-06-16T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/argentina-argelia"
    },
    {
        id: "66457020",
        stage: "Grupo J",
        homeTeam: "Áustria",
        awayTeam: "Jordânia",
        homeCode: "at",
        awayCode: "jo",
        dateTime: "2026-06-17T00:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/austria-jordania"
    },
    {
        id: "66457030",
        stage: "Grupo K",
        homeTeam: "Portugal",
        awayTeam: "República Democrática do Congo",
        homeCode: "pt",
        awayCode: "cd",
        dateTime: "2026-06-17T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/portugal-rd-congo"
    },
    {
        id: "66457042",
        stage: "Grupo L",
        homeTeam: "Inglaterra",
        awayTeam: "Croácia",
        homeCode: "gb-eng",
        awayCode: "hr",
        dateTime: "2026-06-17T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/inglaterra-croacia"
    },
    {
        id: "66457044",
        stage: "Grupo L",
        homeTeam: "Gana",
        awayTeam: "Panamá",
        homeCode: "gh",
        awayCode: "pa",
        dateTime: "2026-06-17T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/gana-panama"
    },
    {
        id: "66457032",
        stage: "Grupo K",
        homeTeam: "Uzbequistão",
        awayTeam: "Colômbia",
        homeCode: "uz",
        awayCode: "co",
        dateTime: "2026-06-17T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/uzbequistao-colombia"
    },

    {
        id: "66456910",
        stage: "Grupo A",
        homeTeam: "Tchéquia",
        awayTeam: "África do Sul",
        homeCode: "cz",
        awayCode: "za",
        dateTime: "2026-06-18T12:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/tchequia-africa-do-sul"
    },
    {
        id: "66456922",
        stage: "Grupo B",
        homeTeam: "Suíça",
        awayTeam: "Bósnia e Herzegovina",
        homeCode: "ch",
        awayCode: "ba",
        dateTime: "2026-06-18T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/suica-bosnia"
    },
    {
        id: "66456920",
        stage: "Grupo B",
        homeTeam: "Canadá",
        awayTeam: "Catar",
        homeCode: "ca",
        awayCode: "qa",
        dateTime: "2026-06-18T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/canada-catar"
    },
    {
        id: "66456908",
        stage: "Grupo A",
        homeTeam: "México",
        awayTeam: "Coreia do Sul",
        homeCode: "mx",
        awayCode: "kr",
        dateTime: "2026-06-18T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/mexico-coreia-do-sul"
    },
    {
        id: "66456944",
        stage: "Grupo D",
        homeTeam: "Estados Unidos",
        awayTeam: "Austrália",
        homeCode: "us",
        awayCode: "au",
        dateTime: "2026-06-19T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/eua-australia"
    },
    {
        id: "66456934",
        stage: "Grupo C",
        homeTeam: "Escócia",
        awayTeam: "Marrocos",
        homeCode: "gb-sct",
        awayCode: "ma",
        dateTime: "2026-06-19T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/escocia-marrocos"
    },
    {
        id: "66456932",
        stage: "Grupo C",
        homeTeam: "Brasil",
        awayTeam: "Haiti",
        homeCode: "br",
        awayCode: "ht",
        dateTime: "2026-06-19T20:30:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/brasil-haiti"
    },
    {
        id: "66456946",
        stage: "Grupo D",
        homeTeam: "Turquia",
        awayTeam: "Paraguai",
        homeCode: "tr",
        awayCode: "py",
        dateTime: "2026-06-19T23:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/turquia-paraguai"
    },
    {
        id: "66456972",
        stage: "Grupo F",
        homeTeam: "Holanda",
        awayTeam: "Suécia",
        homeCode: "nl",
        awayCode: "se",
        dateTime: "2026-06-20T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/holanda-suecia"
    },
    {
        id: "66457074",
        stage: "Grupo E",
        homeTeam: "Alemanha",
        awayTeam: "Costa do Marfim",
        homeCode: "de",
        awayCode: "ci",
        dateTime: "2026-06-20T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/alemanha-costa-do-marfim"
    },
    {
        id: "66457076",
        stage: "Grupo E",
        homeTeam: "Equador",
        awayTeam: "Curaçao",
        homeCode: "ec",
        awayCode: "cw",
        dateTime: "2026-06-20T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/equador-curacao"
    },
    {
        id: "66456974",
        stage: "Grupo F",
        homeTeam: "Tunísia",
        awayTeam: "Japão",
        homeCode: "tn",
        awayCode: "jp",
        dateTime: "2026-06-21T00:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/tunisia-japao"
    },

    {
        id: "66456998",
        stage: "Grupo H",
        homeTeam: "Espanha",
        awayTeam: "Arábia Saudita",
        homeCode: "es",
        awayCode: "sa",
        dateTime: "2026-06-21T12:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/espanha-arabia-saudita"
    },
    {
        id: "66456986",
        stage: "Grupo G",
        homeTeam: "Bélgica",
        awayTeam: "Irã",
        homeCode: "be",
        awayCode: "ir",
        dateTime: "2026-06-21T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/belgica-ira"
    },
    {
        id: "66457000",
        stage: "Grupo H",
        homeTeam: "Uruguai",
        awayTeam: "Cabo Verde",
        homeCode: "uy",
        awayCode: "cv",
        dateTime: "2026-06-21T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/uruguai-cabo-verde"
    },
    {
        id: "66456988",
        stage: "Grupo G",
        homeTeam: "Nova Zelândia",
        awayTeam: "Egito",
        homeCode: "nz",
        awayCode: "eg",
        dateTime: "2026-06-21T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/nova-zelandia-egito"
    },
    {
        id: "66457022",
        stage: "Grupo J",
        homeTeam: "Argentina",
        awayTeam: "Áustria",
        homeCode: "ar",
        awayCode: "at",
        dateTime: "2026-06-22T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/argentina-austria"
    },
    {
        id: "66457010",
        stage: "Grupo I",
        homeTeam: "França",
        awayTeam: "Iraque",
        homeCode: "fr",
        awayCode: "iq",
        dateTime: "2026-06-22T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/franca-iraque"
    },
    {
        id: "66457012",
        stage: "Grupo I",
        homeTeam: "Noruega",
        awayTeam: "Senegal",
        homeCode: "no",
        awayCode: "sn",
        dateTime: "2026-06-22T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/noruega-senegal"
    },
    {
        id: "66457024",
        stage: "Grupo J",
        homeTeam: "Jordânia",
        awayTeam: "Argélia",
        homeCode: "jo",
        awayCode: "dz",
        dateTime: "2026-06-22T23:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jordania-argelia"
    },
    {
        id: "66457034",
        stage: "Grupo K",
        homeTeam: "Portugal",
        awayTeam: "Uzbequistão",
        homeCode: "pt",
        awayCode: "uz",
        dateTime: "2026-06-23T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/portugal-uzbequistao"
    },
    {
        id: "66457046",
        stage: "Grupo L",
        homeTeam: "Inglaterra",
        awayTeam: "Gana",
        homeCode: "gb-eng",
        awayCode: "gh",
        dateTime: "2026-06-23T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/inglaterra-gana"
    },
    {
        id: "66457048",
        stage: "Grupo L",
        homeTeam: "Panamá",
        awayTeam: "Croácia",
        homeCode: "pa",
        awayCode: "hr",
        dateTime: "2026-06-23T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/panama-croacia"
    },
    {
        id: "66457036",
        stage: "Grupo K",
        homeTeam: "Colômbia",
        awayTeam: "República Democrática do Congo",
        homeCode: "co",
        awayCode: "cd",
        dateTime: "2026-06-23T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/colombia-rd-congo"
    },

    {
        id: "66456924",
        stage: "Grupo B",
        homeTeam: "Suíça",
        awayTeam: "Canadá",
        homeCode: "ch",
        awayCode: "ca",
        dateTime: "2026-06-24T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/suica-canada"
    },
    {
        id: "66456926",
        stage: "Grupo B",
        homeTeam: "Bósnia e Herzegovina",
        awayTeam: "Catar",
        homeCode: "ba",
        awayCode: "qa",
        dateTime: "2026-06-24T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/bosnia-catar"
    },
    {
        id: "66456936",
        stage: "Grupo C",
        homeTeam: "Escócia",
        awayTeam: "Brasil",
        homeCode: "gb-sct",
        awayCode: "br",
        dateTime: "2026-06-24T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/escocia-brasil"
    },
    {
        id: "66456938",
        stage: "Grupo C",
        homeTeam: "Marrocos",
        awayTeam: "Haiti",
        homeCode: "ma",
        awayCode: "ht",
        dateTime: "2026-06-24T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/marrocos-haiti"
    },
    {
        id: "66456912",
        stage: "Grupo A",
        homeTeam: "Tchéquia",
        awayTeam: "México",
        homeCode: "cz",
        awayCode: "mx",
        dateTime: "2026-06-24T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/tchequia-mexico"
    },
    {
        id: "66456914",
        stage: "Grupo A",
        homeTeam: "África do Sul",
        awayTeam: "Coreia do Sul",
        homeCode: "za",
        awayCode: "kr",
        dateTime: "2026-06-24T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/africa-do-sul-coreia-do-sul"
    },

    {
        id: "66457078",
        stage: "Grupo E",
        homeTeam: "Equador",
        awayTeam: "Alemanha",
        homeCode: "ec",
        awayCode: "de",
        dateTime: "2026-06-25T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/equador-alemanha"
    },
    {
        id: "66457080",
        stage: "Grupo E",
        homeTeam: "Curaçao",
        awayTeam: "Costa do Marfim",
        homeCode: "cw",
        awayCode: "ci",
        dateTime: "2026-06-25T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/curacao-costa-do-marfim"
    },
    {
        id: "66456976",
        stage: "Grupo F",
        homeTeam: "Tunísia",
        awayTeam: "Holanda",
        homeCode: "tn",
        awayCode: "nl",
        dateTime: "2026-06-25T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/tunisia-holanda"
    },
    {
        id: "66456978",
        stage: "Grupo F",
        homeTeam: "Japão",
        awayTeam: "Suécia",
        homeCode: "jp",
        awayCode: "se",
        dateTime: "2026-06-25T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/japao-suecia"
    },
    {
        id: "66456948",
        stage: "Grupo D",
        homeTeam: "Turquia",
        awayTeam: "Estados Unidos",
        homeCode: "tr",
        awayCode: "us",
        dateTime: "2026-06-25T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/turquia-eua"
    },
    {
        id: "66456950",
        stage: "Grupo D",
        homeTeam: "Paraguai",
        awayTeam: "Austrália",
        homeCode: "py",
        awayCode: "au",
        dateTime: "2026-06-25T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/paraguai-australia"
    },

    {
        id: "66457014",
        stage: "Grupo I",
        homeTeam: "Noruega",
        awayTeam: "França",
        homeCode: "no",
        awayCode: "fr",
        dateTime: "2026-06-26T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/noruega-franca"
    },
    {
        id: "66457016",
        stage: "Grupo I",
        homeTeam: "Senegal",
        awayTeam: "Iraque",
        homeCode: "sn",
        awayCode: "iq",
        dateTime: "2026-06-26T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/senegal-iraque"
    },
    {
        id: "66457002",
        stage: "Grupo H",
        homeTeam: "Uruguai",
        awayTeam: "Espanha",
        homeCode: "uy",
        awayCode: "es",
        dateTime: "2026-06-26T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/uruguai-espanha"
    },
    {
        id: "66457004",
        stage: "Grupo H",
        homeTeam: "Cabo Verde",
        awayTeam: "Arábia Saudita",
        homeCode: "cv",
        awayCode: "sa",
        dateTime: "2026-06-26T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/cabo-verde-arabia-saudita"
    },
    {
        id: "66456990",
        stage: "Grupo G",
        homeTeam: "Nova Zelândia",
        awayTeam: "Bélgica",
        homeCode: "nz",
        awayCode: "be",
        dateTime: "2026-06-26T23:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/nova-zelandia-belgica"
    },
    {
        id: "66456992",
        stage: "Grupo G",
        homeTeam: "Egito",
        awayTeam: "Irã",
        homeCode: "eg",
        awayCode: "ir",
        dateTime: "2026-06-26T23:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/egito-ira"
    },

    {
        id: "66457050",
        stage: "Grupo L",
        homeTeam: "Panamá",
        awayTeam: "Inglaterra",
        homeCode: "pa",
        awayCode: "gb-eng",
        dateTime: "2026-06-27T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/panama-inglaterra"
    },
    {
        id: "66457052",
        stage: "Grupo L",
        homeTeam: "Croácia",
        awayTeam: "Gana",
        homeCode: "hr",
        awayCode: "gh",
        dateTime: "2026-06-27T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/croacia-gana"
    },
    {
        id: "66457038",
        stage: "Grupo K",
        homeTeam: "Colômbia",
        awayTeam: "Portugal",
        homeCode: "co",
        awayCode: "pt",
        dateTime: "2026-06-27T19:30:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/colombia-portugal"
    },
    {
        id: "66457040",
        stage: "Grupo K",
        homeTeam: "República Democrática do Congo",
        awayTeam: "Uzbequistão",
        homeCode: "cd",
        awayCode: "uz",
        dateTime: "2026-06-27T19:30:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/rd-congo-uzbequistao"
    },
    {
        id: "66457026",
        stage: "Grupo J",
        homeTeam: "Jordânia",
        awayTeam: "Argentina",
        homeCode: "jo",
        awayCode: "ar",
        dateTime: "2026-06-27T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jordania-argentina"
    },
    {
        id: "66457028",
        stage: "Grupo J",
        homeTeam: "Argélia",
        awayTeam: "Áustria",
        homeCode: "dz",
        awayCode: "at",
        dateTime: "2026-06-27T22:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/argelia-austria"
    },

    {
        id: "53452545",
        stage: "16 avos de final",
        homeTeam: "2º Grupo A",
        awayTeam: "2º Grupo B",
        dateTime: "2026-06-28T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-1"
    },
    {
        id: "53452557",
        stage: "16 avos de final",
        homeTeam: "1º Grupo C",
        awayTeam: "2º Grupo F",
        dateTime: "2026-06-29T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-2"
    },
    {
        id: "53452541",
        stage: "16 avos de final",
        homeTeam: "1º Grupo E",
        awayTeam: "3º Grupo A/B/C/D/F",
        dateTime: "2026-06-29T16:30:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-3"
    },
    {
        id: "53452547",
        stage: "16 avos de final",
        homeTeam: "1º Grupo F",
        awayTeam: "2º Grupo C",
        dateTime: "2026-06-29T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-4"
    },
    {
        id: "53452561",
        stage: "16 avos de final",
        homeTeam: "2º Grupo E",
        awayTeam: "2º Grupo I",
        dateTime: "2026-06-30T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-5"
    },
    {
        id: "53452543",
        stage: "16 avos de final",
        homeTeam: "1º Grupo I",
        awayTeam: "3º Grupo C/D/F/G/H",
        dateTime: "2026-06-30T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-6"
    },
    {
        id: "53452563",
        stage: "16 avos de final",
        homeTeam: "1º Grupo A",
        awayTeam: "3º Grupo C/E/F/H/I",
        dateTime: "2026-06-30T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-7"
    },
    {
        id: "53452565",
        stage: "16 avos de final",
        homeTeam: "1º Grupo L",
        awayTeam: "3º Grupo E/H/I/J/K",
        dateTime: "2026-07-01T12:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-8"
    },
    {
        id: "53452555",
        stage: "16 avos de final",
        homeTeam: "1º Grupo G",
        awayTeam: "3º Grupo A/E/H/I/J",
        dateTime: "2026-07-01T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-9"
    },
    {
        id: "53452553",
        stage: "16 avos de final",
        homeTeam: "1º Grupo D",
        awayTeam: "3º Grupo B/E/F/I/J",
        dateTime: "2026-07-01T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-10"
    },
    {
        id: "53452551",
        stage: "16 avos de final",
        homeTeam: "1º Grupo H",
        awayTeam: "2º Grupo J",
        dateTime: "2026-07-02T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-11"
    },
    {
        id: "53452549",
        stage: "16 avos de final",
        homeTeam: "2º Grupo K",
        awayTeam: "2º Grupo L",
        dateTime: "2026-07-02T19:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-12"
    },
    {
        id: "53452505",
        stage: "16 avos de final",
        homeTeam: "1º Grupo B",
        awayTeam: "3º Grupo E/F/G/I/J",
        dateTime: "2026-07-02T23:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-13"
    },
    {
        id: "53452503",
        stage: "16 avos de final",
        homeTeam: "2º Grupo D",
        awayTeam: "2º Grupo G",
        dateTime: "2026-07-03T14:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-14"
    },
    {
        id: "53452569",
        stage: "16 avos de final",
        homeTeam: "1º Grupo J",
        awayTeam: "2º Grupo H",
        dateTime: "2026-07-03T18:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-15"
    },
    {
        id: "53452507",
        stage: "16 avos de final",
        homeTeam: "1º Grupo K",
        awayTeam: "3º Grupo D/E/I/J/L",
        dateTime: "2026-07-03T21:30:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/jogo-16-avos-16"
    },

    {
        id: "53452511",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 1",
        awayTeam: "Vencedor jogo 4",
        dateTime: "2026-07-04T13:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-1"
    },
    {
        id: "53452509",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 3",
        awayTeam: "Vencedor jogo 6",
        dateTime: "2026-07-04T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-2"
    },
    {
        id: "53452517",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 2",
        awayTeam: "Vencedor jogo 5",
        dateTime: "2026-07-05T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-3"
    },
    {
        id: "53452519",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 7",
        awayTeam: "Vencedor jogo 8",
        dateTime: "2026-07-05T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-4"
    },
    {
        id: "53452513",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 12",
        awayTeam: "Vencedor jogo 11",
        dateTime: "2026-07-06T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-5"
    },
    {
        id: "53452515",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 10",
        awayTeam: "Vencedor jogo 9",
        dateTime: "2026-07-06T20:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-6"
    },
    {
        id: "53452521",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 15",
        awayTeam: "Vencedor jogo 14",
        dateTime: "2026-07-07T12:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-7"
    },
    {
        id: "53452523",
        stage: "Oitavas de final",
        homeTeam: "Vencedor jogo 13",
        awayTeam: "Vencedor jogo 16",
        dateTime: "2026-07-07T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/oitavas-8"
    },

    {
        id: "53452525",
        stage: "Quartas de final",
        homeTeam: "Vencedor oitavas 2",
        awayTeam: "Vencedor oitavas 1",
        dateTime: "2026-07-09T16:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/quartas-1"
    },
    {
        id: "53452527",
        stage: "Quartas de final",
        homeTeam: "Vencedor oitavas 5",
        awayTeam: "Vencedor oitavas 6",
        dateTime: "2026-07-10T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/quartas-2"
    },
    {
        id: "53452529",
        stage: "Quartas de final",
        homeTeam: "Vencedor oitavas 3",
        awayTeam: "Vencedor oitavas 4",
        dateTime: "2026-07-11T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/quartas-3"
    },
    {
        id: "53452531",
        stage: "Quartas de final",
        homeTeam: "Vencedor oitavas 7",
        awayTeam: "Vencedor oitavas 8",
        dateTime: "2026-07-11T21:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/quartas-4"
    },

    {
        id: "53452533",
        stage: "Semifinal",
        homeTeam: "Vencedor quartas 1",
        awayTeam: "Vencedor quartas 2",
        dateTime: "2026-07-14T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/semifinal-1"
    },
    {
        id: "53452535",
        stage: "Semifinal",
        homeTeam: "Vencedor quartas 3",
        awayTeam: "Vencedor quartas 4",
        dateTime: "2026-07-15T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/semifinal-2"
    },
    {
        id: "53452539",
        stage: "Disputa de terceiro lugar",
        homeTeam: "Perdedor semifinal 1",
        awayTeam: "Perdedor semifinal 2",
        dateTime: "2026-07-18T17:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/terceiro-lugar"
    },
    {
        id: "53452537",
        stage: "Final",
        homeTeam: "Vencedor semifinal 1",
        awayTeam: "Vencedor semifinal 2",
        dateTime: "2026-07-19T15:00:00-04:00",
        status: "Agendado",
        watchUrl: "https://exemplo.com/final"
    }
];

const gamesList = document.getElementById("gamesList");
const searchInput = document.getElementById("searchInput");
const stageFilter = document.getElementById("stageFilter");

function formatDate(dateTime) {
    const date = new Date(dateTime);

    const day = new Intl.DateTimeFormat("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
        timeZone: "America/Sao_Paulo"
    }).format(date);

    const time = new Intl.DateTimeFormat("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "America/Sao_Paulo"
    }).format(date);

    return {
        day: day.replace(".", ""),
        time
    };
}

function getFlagMarkup(code, teamName) {
    if (!code) {
        return `<span class="flag-placeholder">TBD</span>`;
    }

    return `
                <img
                    class="flag"
                    src="https://flagcdn.com/w80/${code}.png"
                    alt="Bandeira de ${teamName}"
                />
            `;
}

function isGameUnavailable(game) {
    const now = new Date();
    const gameDate = new Date(game.dateTime);

    return game.status === "Finalizado" || gameDate < now;
}

function createGameCard(game) {
    const formattedDate = formatDate(game.dateTime);
    const statusText = game.score ? `${game.status} · ${game.score}` : game.status;
    const isUnavailable = isGameUnavailable(game);

    const watchButton = isUnavailable
        ? `
            <span class="watch-button watch-button-disabled">
                Jogo indisponível
            </span>
        `
        : `
            <a
                class="watch-button"
                href="${game.watchUrl}"
                target="_blank"
                rel="noopener noreferrer"
            >
                Assistir o jogo
            </a>
        `;

    return `
        <article class="game-card">
            <div class="game-info">
                <h2 class="group">${game.stage}</h2>

                <div class="teams">
                    <div class="team">
                        ${getFlagMarkup(game.homeCode, game.homeTeam)}
                        <span>${game.homeTeam}</span>
                    </div>

                    <div class="team">
                        ${getFlagMarkup(game.awayCode, game.awayTeam)}
                        <span>${game.awayTeam}</span>
                    </div>
                </div>
            </div>

            <div class="game-side">
                <div class="divider"></div>

                <div class="schedule">
                    <p class="date">
                        <span>${formattedDate.day}</span>
                        <span>${formattedDate.time}</span>
                    </p>

                    <p class="status">${statusText}</p>

                    ${watchButton}
                </div>
            </div>
        </article>
    `;
}

function renderGames() {
    const searchValue = searchInput.value.trim().toLowerCase();
    const selectedStage = stageFilter.value;

    const filteredGames = gamesDatabase.filter((game) => {
        const matchSearch =
            game.homeTeam.toLowerCase().includes(searchValue) ||
            game.awayTeam.toLowerCase().includes(searchValue);

        const matchStage = !selectedStage || game.stage === selectedStage;

        return matchSearch && matchStage;
    });

    if (!filteredGames.length) {
        gamesList.innerHTML = `
                    <p class="empty-message">
                        Nenhum jogo encontrado para a busca realizada.
                    </p>
                `;
        return;
    }

    gamesList.innerHTML = filteredGames.map(createGameCard).join("");
}

function populateStageFilter() {
    const stages = [...new Set(gamesDatabase.map((game) => game.stage))];

    stages.forEach((stage) => {
        const option = document.createElement("option");
        option.value = stage;
        option.textContent = stage;
        stageFilter.appendChild(option);
    });
}

searchInput.addEventListener("input", renderGames);
stageFilter.addEventListener("change", renderGames);

populateStageFilter();
renderGames();