// Exemplo de inutilizacao de CTe

const inutilizarCTe = require('./src/cte_module/eventos/inutilizacao')

let corpo = new inutilizarCTe.body(
    "43",
    "2",
    "21",
    "07364617000135",
    "57",
    "0",
    "2333",
    "2333",
    "INUTILIZACAO REALIZADA PARA TESTES DE INTEGRACAO DO EXEMPLO EM NODE JS"
)

inutilizarCTe.sendPostRequest(corpo, "J", "CTe/Eventos").then(getResponse => { console.log(getResponse) })