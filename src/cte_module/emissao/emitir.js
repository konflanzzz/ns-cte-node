const nsAPI = require('../commons/nsAPI')
const url = "https://cte.ns.eti.br/cte/issue"

class response {
    constructor({ status, motivo, chCTe, nsNRec, erros, erro }) {
        this.status = status;
        this.motivo = motivo;
        this.chCTe = chCTe;
        this.nsNRec = nsNRec;
        this.erros = erros
        this.erro = erro;
    }
}

async function sendPostRequest(conteudo) {
    let responseAPI = new response(await nsAPI.PostRequest(url, conteudo))
    return responseAPI
}

module.exports = { sendPostRequest }