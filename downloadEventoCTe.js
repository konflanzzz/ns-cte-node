// Exemplo Download de Evento de CTe

const downloadEventoCTe = require('./src/cte_module/eventos/downloadEvento')

let corpo = new downloadEventoCTe.body(
    "43210907364617000135570000000023191000003308",
    "2",
    "X",
    "CANC",
    "1"
)

downloadEventoCTe.sendPostRequest(corpo,"CTe/Documentos/Eventos").then(getResponse => { console.log(getResponse) })