// Exemplo de carta de correcao de CTe

const cartaCorrecaoCTe = require('./src/cte_module/eventos/cartaCorrecao')
const util = require('./src/cte_module/commons/util')

let corpo = new cartaCorrecaoCTe.body(
    "43210907364617000135570000000023201000003309",
    "2",
    util.dhEmiGet(),
    "8",
    {
        "campoAlterado": "xLgr",
        "grupoAlterado": "enderDest",
        "nroItemAlterado": "1",
        "valorAlterado": "ENGENHO - SILO 1"
    }
)

cartaCorrecaoCTe.sendPostRequest(corpo, "J", "CTe/Documentos/Eventos").then(getResponse => { console.log(getResponse) })