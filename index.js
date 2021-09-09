const CTeAPI = require('./src/cte_module/emissao/emitirSincrono')
const CTeJSON = require('./LayoutCTe.json')

var retorno = CTeAPI.emitirNFeSincrono(CTeJSON, "2", "XP", "CTe/Documentos")
retorno.then(() => { console.log(retorno) })