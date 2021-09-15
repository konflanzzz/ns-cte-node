// Exemplo de comprovante de entrega de CTe

const compEntregaCTe = require('./src/cte_module/eventos/comprovanteEntrega')
const util = require('./src/cte_module/commons/util')

let corpo = new compEntregaCTe.body(
    "43210907364617000135570000000023521000003302",
    "2", 
    util.dhEmiGet(), 
    "143210000458915",
    util.dhEmiGet(),
    "1", 
    util.dhEmiGet(),
    "17854440000",
    "FULANORE CEBEDOR",
    "-30.855023",
    "-51.807256",
    util.gerarHashCompEntrega("43210907364617000135570000000023521000003302","entrega.jpg"),
    util.dhEmiGet(),
    "43210907364617000135550000000224251004621866"
)

compEntregaCTe.sendPostRequest(corpo,"X","CTe/Eventos").then(getResponse => { console.log(getResponse) })